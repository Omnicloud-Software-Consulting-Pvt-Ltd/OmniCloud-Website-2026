import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#010512] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
                <Image src="/assets/logo-ondark.png" alt="OmniCloud" width={180} height={60} className="h-16 w-auto object-contain" />
            </div>
            <p className="text-slate-400 max-w-sm mb-6 text-justify">
              OmniCloud Consulting Inc. is a boutique Salesforce consulting partner built for the agentic era. We help high-growth enterprises reimagine their revenue operations &mdash; deploying intelligent agents across their CRM landscape cutting across sales, service, quote-to-cash lifecycle, and bringing precision to CPQ, Billing, and revenue strategy through Agentic Revenue Cloud. This is RevOps, reinvented.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="/about" className="hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="/success-stories" className="hover:text-brand-cyan transition-colors">Success Stories</a></li>
              <li><a href="/contact" className="hover:text-brand-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Find us</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <Image src="/assets/icon-canada.svg" alt="" width={18} height={18} className="opacity-90 shrink-0" />
                Toronto, Canada
              </li>
              <li className="flex items-center gap-2">
                <Image src="/assets/icon-hyderabad.svg" alt="" width={18} height={18} className="opacity-90 shrink-0" />
                Hyderabad, India
              </li>
              <li>
                <a href="mailto:sales@omnicloudconsulting.com" className="flex items-center gap-2 hover:text-brand-cyan transition-colors">
                  <Mail className="w-[18px] h-[18px] text-brand-cyan shrink-0" />
                  sales@omnicloudconsulting.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/omnicloud-software-consulting" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-cyan transition-colors">
                  <Linkedin className="w-[18px] h-[18px] text-brand-cyan shrink-0" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
          <div>
            © {new Date().getFullYear()} OmniCloud Consulting Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 transition-all">
             <Image src="/assets/salesforce-partner-wide.png" alt="Salesforce Partner" width={250} height={120} className="h-14 w-auto object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
