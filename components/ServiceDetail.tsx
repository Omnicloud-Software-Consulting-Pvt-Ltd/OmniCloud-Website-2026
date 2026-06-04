'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Box, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  icon?: any;
  color?: string;
}

export default function ServiceDetail({ title, description, features, icon: Icon }: ServiceDetailProps) {
  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Abstract Background */}
        <div className="absolute inset-0">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,181,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,181,226,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-brand-cyan" /> Our Service
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="bg-brand-cyan text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(0,181,226,0.4)]">
                Get Started
              </Link>
            </div>
          </motion.div>

          {/* Visual/Icon Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
             <div className="relative w-96 h-96 bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 shadow-2xl flex items-center justify-center group hover:border-brand-cyan/50 transition-all duration-500">
                <div className="absolute inset-0 bg-brand-cyan/5 rounded-3xl group-hover:bg-brand-cyan/10 transition-colors" />
                {Icon ? <Icon className="w-40 h-40 text-brand-cyan drop-shadow-[0_0_30px_rgba(0,181,226,0.5)]" /> : <Box className="w-40 h-40 text-brand-cyan" />}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">CAPABILITIES</h2>
            <h3 className="text-4xl font-bold text-white">Key Features</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:border-brand-cyan transition-all group">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan text-brand-cyan group-hover:text-black transition-colors">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.split(':')[0]}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.split(':')[1] || feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 border-t border-slate-900 bg-slate-950">
         <div className="container mx-auto px-6 flex flex-wrap justify-center gap-4">
            {[
              { name: "Consulting & Advisory", href: "/services/consulting" },
              { name: "Implementation", href: "/services/implementation" },
              { name: "Managed IT Services", href: "/services/managed-services" },
              { name: "Change Management", href: "/services/change-management" }
            ].map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`px-6 py-3 rounded-full text-sm font-bold border transition-all ${title.includes(link.name) ? 'bg-white text-black border-white' : 'border-slate-800 text-slate-400 hover:border-brand-cyan hover:text-brand-cyan'}`}
              >
                {link.name}
              </Link>
            ))}
         </div>
      </section>
    </div>
  );
}
