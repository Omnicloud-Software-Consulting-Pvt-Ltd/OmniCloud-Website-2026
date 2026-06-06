'use client';

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, Globe, Cpu, Users, Layers, Zap, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ClientMarquee from '../components/ClientMarquee';
import PartnerMarquee from '../components/PartnerMarquee';
import Fireflies from '../components/Fireflies';
import { MouseEvent, useEffect, useRef } from 'react';

// --- COMPONENTS ---

function HeroHighlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // On load, center the glow in the hero; it then follows the cursor on move.
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const { width, height } = el.getBoundingClientRect();
      mouseX.set(width / 2);
      mouseY.set(height / 2);
    }
  }, [mouseX, mouseY]);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={ref}
      className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-slate-950 group"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
      <Fireflies />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -inset-px rounded-xl"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
}

const BentoCard = ({ title, desc, icon: Icon, className = "", delay = 0 }: { title: string, desc: string, icon: any, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 hover:border-brand-cyan/50 transition-colors ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-black transition-all duration-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-space text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="flex flex-col gap-0 bg-slate-950 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <HeroHighlight>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 flex items-center gap-6 transition-all duration-500">
                <Image src="/assets/logo-ondark.png" alt="OmniCloud" width={240} height={80} className="h-16 w-auto object-contain" />
                <div className="h-8 w-[1px] bg-slate-700" />
                <Image src="/assets/salesforce-partner-wide.png" alt="Salesforce Partner" width={300} height={145} className="h-[4.75rem] w-auto object-contain" />
            </div>

            <h1 className="max-w-5xl font-space text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              Revenue Ops <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-teal-500 to-sky-300 animate-gradient">
                Reimagined.
              </span>
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-12 font-light">
              We architect the future of Revenue. A boutique Salesforce partner for high-growth enterprises demanding precision in RevOps Strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/services" className="group relative px-8 py-4 bg-brand-cyan text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">Explore Services <ArrowRight className="w-4 h-4" /></span>
              </Link>
              <Link href="/contact" className="group px-8 py-4 border border-slate-700 text-white font-bold rounded-full hover:border-brand-cyan hover:text-brand-cyan transition-all">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </div>
      </HeroHighlight>

      {/* 3. BENTO GRID SERVICES */}
      <section className="py-32 relative">
        <Fireflies className="z-0" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-space text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Beyond Consulting.
            </motion.h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We don't just implement software; we engineer the engines that power your revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Large Card */}
            <BentoCard 
              title="Revenue Cloud Architecture" 
              desc="Mastery over Salesforce CPQ & Billing. We handle the complex logic that others can't." 
              icon={Zap} 
              className="md:col-span-2 md:row-span-2 bg-gradient-to-b from-slate-900 to-slate-900/50"
            />
            
            {/* Side Cards */}
            <BentoCard 
              title="Global Delivery" 
              desc="24/7 execution with offices in Canada & India."
              icon={Globe} 
              delay={0.1}
            />
            <BentoCard 
              title="Implementation" 
              desc="End-to-end deployment of Sales, Service & Experience Cloud." 
              icon={Layers} 
              delay={0.2}
            />

            {/* Bottom Row */}
            <BentoCard 
              title="Managed Services" 
              desc="Proactive evolution of your Salesforce instance." 
              icon={Cpu} 
              delay={0.3}
            />
            <BentoCard 
              title="Advisory" 
              desc="Strategic roadmaps aligned with business goals." 
              icon={Users} 
              className="md:col-span-2"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLL CLIENTS (Moved here) */}
      <div className="relative z-10 bg-slate-950 pb-20 pt-10 overflow-hidden">
         <Fireflies className="z-0" />
         <div className="relative z-10">
            <ClientMarquee />
         </div>
      </div>

      {/* TECH PARTNERS */}
      <PartnerMarquee />

      {/* 4. PARALLAX CTA */}
      <section className="relative py-40 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-brand-cyan/5">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        <Fireflies className="z-0" />

        <motion.div style={{ y }} className="container mx-auto px-6 text-center relative z-10">
           <h2 className="font-space text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
             READY TO <span className="text-brand-cyan">SCALE?</span>
           </h2>
           <Link href="/contact" className="inline-flex items-center gap-3 text-2xl font-bold text-white border-b-2 border-brand-cyan pb-1 hover:text-brand-cyan transition-colors group">
             Start Your Project <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
           </Link>
        </motion.div>
      </section>

    </div>
  );
}