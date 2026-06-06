'use client';

import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Fireflies from '../../components/Fireflies';

// Salesforce Web-to-Lead (production org)
const SF_ENDPOINT = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D2v000002FkjP';
const SF_OID = '00D2v000002FkjP';
const RECAPTCHA_SITE_KEY = '6LfPZQ8tAAAAADE_jCVZBGVxBM3qDXk1U_x26o84';
const CAPTCHA_SETTINGS = '{"keyname":"OmniCloud_Website","fallback":"true","orgId":"00D2v000002FkjP","ts":""}';

const inputBase =
  'w-full bg-slate-950 border rounded-lg p-3 text-white focus:outline-none transition-colors';

// Free/personal email domains we don't accept (work email only).
const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'ymail.com', 'outlook.com',
  'hotmail.com', 'live.com', 'msn.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com',
  'proton.me', 'protonmail.com', 'gmx.com', 'mail.com', 'yandex.com', 'zoho.com', 'rediffmail.com',
]);

const NAME_RE = /^[A-Za-z][A-Za-z .'-]*$/;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const PHONE_RE = /^[0-9 ()+-]{7,}$/;

type FormValues = {
  first_name: string; last_name: string; email: string; company: string;
  mobile: string; city: string; state: string; description: string;
};
const EMPTY: FormValues = {
  first_name: '', last_name: '', email: '', company: '', mobile: '', city: '', state: '', description: '',
};

function fieldError(name: keyof FormValues, raw: string): string {
  const v = raw.trim();
  switch (name) {
    case 'first_name':
    case 'last_name':
      if (!v) return 'Required.';
      return NAME_RE.test(v) ? '' : 'Letters only.';
    case 'email': {
      if (!v) return 'Required.';
      if (!EMAIL_RE.test(v)) return 'Enter a valid email address.';
      const domain = v.split('@')[1]?.toLowerCase() ?? '';
      if (FREE_EMAIL_DOMAINS.has(domain)) return 'Please use your work email.';
      return '';
    }
    case 'company':
      return v ? '' : 'Required.';
    case 'mobile':
      if (!v) return '';
      return PHONE_RE.test(v) ? '' : 'Enter a valid phone number.';
    case 'city':
    case 'state':
      if (!v) return '';
      return NAME_RE.test(v) ? '' : 'Letters only.';
    default:
      return '';
  }
}

type RenderOpts = {
  sitekey: string;
  callback?: () => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
};
type Grecaptcha = {
  render: (el: HTMLElement, opts: RenderOpts) => number;
  getResponse: (widgetId?: number) => string;
};
const getGrecaptcha = (): Grecaptcha | undefined =>
  (window as unknown as { grecaptcha?: Grecaptcha }).grecaptcha;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [captchaOk, setCaptchaOk] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const captchaSettingsRef = useRef<HTMLInputElement>(null);
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const keys = Object.keys(EMPTY) as (keyof FormValues)[];
  const errors = keys.reduce((acc, k) => {
    const e = fieldError(k, values[k]);
    if (e) acc[k] = e;
    return acc;
  }, {} as Partial<Record<keyof FormValues, string>>);
  const isValid = Object.keys(errors).length === 0;
  const canSubmit = isValid && captchaOk;

  useEffect(() => {
    let cancelled = false;

    // Render reCAPTCHA explicitly (auto-render doesn't fire on client-side nav).
    const renderCaptcha = () => {
      if (cancelled) return;
      const g = getGrecaptcha();
      if (g && g.render && captchaContainerRef.current && widgetIdRef.current === null) {
        try {
          widgetIdRef.current = g.render(captchaContainerRef.current, {
            sitekey: RECAPTCHA_SITE_KEY,
            callback: () => setCaptchaOk(true),
            'expired-callback': () => setCaptchaOk(false),
            'error-callback': () => setCaptchaOk(false),
          });
        } catch {
          /* not ready yet / already rendered */
        }
      }
      if (widgetIdRef.current === null) {
        window.setTimeout(renderCaptcha, 300);
      }
    };
    renderCaptcha();

    // Keep the captcha timestamp fresh until a response exists (per Salesforce's snippet).
    const tick = () => {
      const el = captchaSettingsRef.current;
      if (!el) return; // form not mounted (e.g. success view shown)
      const g = getGrecaptcha();
      const id = widgetIdRef.current;
      let resp = '';
      try {
        resp = g && id !== null ? g.getResponse(id) : '';
      } catch {
        return; // widget element no longer in the DOM
      }
      if (!resp || resp.trim() === '') {
        try {
          const elems = JSON.parse(el.value);
          elems.ts = JSON.stringify(new Date().getTime());
          el.value = JSON.stringify(elems);
        } catch {
          /* ignore */
        }
      }
    };
    const intervalId = window.setInterval(tick, 500);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) {
      setTouched(keys.reduce((acc, k) => ({ ...acc, [k]: true }), {}));
      return;
    }
    // Valid + captcha solved: POST into the hidden iframe, then show success.
    formRef.current?.submit();
    setSubmitted(true);
  };

  const showErr = (name: keyof FormValues) => touched[name] && errors[name];
  const cls = (name: keyof FormValues) =>
    `${inputBase} ${showErr(name) ? 'border-red-500 focus:border-red-500' : 'border-slate-800 focus:border-brand-cyan'}`;
  const Err = ({ name }: { name: keyof FormValues }) =>
    showErr(name) ? <p className="mt-1 text-xs text-red-400">{errors[name]}</p> : null;

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      {/* Hidden target: keeps the Web-to-Lead POST off-screen so the page never navigates away. */}
      <iframe name="sf_wtl" title="Salesforce Web-to-Lead" className="hidden" />

      {/* Header */}
      <div className="relative overflow-hidden bg-slate-900 py-20 border-b border-slate-800">
        <Fireflies className="z-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to start your transformation? Reach out to us today.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="space-y-8">
               <div className="flex items-start gap-6">
                  <div className="bg-brand-cyan/10 p-4 rounded-full">
                     <Mail className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                     <div className="text-lg font-bold text-white mb-1">Email</div>
                     <a href="mailto:sales@omnicloudconsulting.com" className="text-slate-400 hover:text-brand-cyan transition-colors">
                        sales@omnicloudconsulting.com
                     </a>
                  </div>
               </div>

               <div className="flex items-start gap-6">
                  <div className="bg-brand-cyan/10 p-4 rounded-full">
                     <MapPin className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                     <div className="text-lg font-bold text-white mb-1">Our Offices</div>
                     <ul className="space-y-2 text-slate-400">
                        <li className="flex items-center gap-2">
                           <Image src="/assets/icon-canada.svg" alt="" width={18} height={18} className="opacity-90 shrink-0" />
                           Toronto, Canada
                        </li>
                        <li className="flex items-center gap-2">
                           <Image src="/assets/icon-hyderabad.svg" alt="" width={18} height={18} className="opacity-90 shrink-0" />
                           Hyderabad, India
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>

          {/* Web-to-Lead Form */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-brand-cyan mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Thank you!</h3>
                <p className="text-slate-400 mb-8 max-w-sm">
                  Your message has been received. Our team will reach out to you shortly.
                </p>
                <button
                  onClick={() => { window.location.href = '/contact'; }}
                  className="text-brand-cyan font-bold hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                <form ref={formRef} action={SF_ENDPOINT} method="POST" target="sf_wtl" onSubmit={handleSubmit} noValidate className="space-y-4">
                  <input type="hidden" name="captcha_settings" ref={captchaSettingsRef} defaultValue={CAPTCHA_SETTINGS} />
                  <input type="hidden" name="oid" value={SF_OID} readOnly />
                  <input type="hidden" name="lead_source" value="Website" readOnly />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
                      <input id="first_name" name="first_name" type="text" maxLength={40} autoComplete="given-name" value={values.first_name} onChange={onChange} onBlur={onBlur} className={cls('first_name')} placeholder="First name" />
                      <Err name="first_name" />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
                      <input id="last_name" name="last_name" type="text" maxLength={80} autoComplete="family-name" value={values.last_name} onChange={onChange} onBlur={onBlur} className={cls('last_name')} placeholder="Last name" />
                      <Err name="last_name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Work Email</label>
                      <input id="email" name="email" type="email" maxLength={80} autoComplete="email" value={values.email} onChange={onChange} onBlur={onBlur} className={cls('email')} placeholder="you@company.com" />
                      <Err name="email" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-400 mb-2">Company</label>
                      <input id="company" name="company" type="text" maxLength={40} autoComplete="organization" value={values.company} onChange={onChange} onBlur={onBlur} className={cls('company')} placeholder="Company name" />
                      <Err name="company" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-slate-400 mb-2">Tell us about your project <span className="text-slate-600">(optional)</span></label>
                    <textarea id="description" name="description" rows={3} value={values.description} onChange={onChange} onBlur={onBlur} className={`${inputBase} border-slate-800 focus:border-brand-cyan`} placeholder="Let's begin the transformation!" />
                  </div>

                  <div ref={captchaContainerRef} className="min-h-[78px]"></div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,181,226,0.35)] transition-all hover:shadow-[0_0_34px_rgba(0,181,226,0.65)] hover:scale-[1.02] disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" /> Talk to an Expert
                  </button>
                  {!canSubmit && (
                    <p className="text-xs text-slate-500 text-center">Complete the required fields and reCAPTCHA to continue.</p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
