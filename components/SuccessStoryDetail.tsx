'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Trophy, Target, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SuccessStoryDetailProps {
  title: string;
  clientIntro: string;
  requirements: string[];
  solution: string;
  highlights: string[];
  icon?: any;
}

export default function SuccessStoryDetail({ title, clientIntro, requirements, solution, highlights, icon: Icon }: SuccessStoryDetailProps) {
  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-cyan/10 via-slate-950 to-slate-950" />
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-bold mb-6">
              <Trophy className="w-4 h-4 fill-brand-cyan" /> Success Story
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              {clientIntro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl"
          >
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
               <Target className="w-6 h-6 text-brand-cyan" /> Key Challenges
             </h3>
             <ul className="space-y-4">
               {requirements.map((req, i) => (
                 <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                   <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                   {req}
                 </li>
               ))}
             </ul>
          </motion.div>
        </div>
      </section>

      {/* Solution & Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Main Solution Content */}
            <div className="md:col-span-8">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
                <div className="prose prose-invert prose-lg text-slate-400 leading-relaxed">
                  {solution.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Why it worked</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {highlights.map((highlight, i) => (
                    <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-brand-cyan/50 transition-colors group">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-cyan/10 p-2 rounded-lg group-hover:bg-brand-cyan/20 transition-colors mt-1">
                          <Check className="w-5 h-5 text-brand-cyan" />
                        </div>
                        <div>
                           <h4 className="font-bold text-white mb-2">{highlight.split(':')[0]}</h4>
                           <p className="text-sm text-slate-400">{highlight.split(':')[1] || highlight}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="md:col-span-4 space-y-8">
               <div className="bg-brand-cyan p-8 rounded-3xl text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-black mb-4">Face similar challenges?</h3>
                    <p className="text-black/80 mb-8 font-medium">
                      Let's implement a custom solution for your business.
                    </p>
                    <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-slate-900 transition-colors w-full justify-center">
                      Get in Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
               </div>

               <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">More Stories</h3>
                <ul className="space-y-4">
                  {[ 
                    { name: "Industrial Leasing", href: "/success-stories/industrial-leasing" },
                    { name: "Retail Interiors", href: "/success-stories/retail-interiors" },
                    { name: "Payroll Management", href: "/success-stories/payroll-management" },
                    { name: "Workforce Rental", href: "/success-stories/workforce-rental" }
                  ].map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className={`flex items-center justify-between text-sm group ${title.includes(link.name) ? 'text-brand-cyan font-bold' : 'text-slate-400 hover:text-white'}`}
                      >
                        {link.name}
                        {title.includes(link.name) && <ChevronRight className="w-4 h-4" />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
