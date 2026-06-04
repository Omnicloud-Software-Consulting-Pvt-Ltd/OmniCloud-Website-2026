'use client';

import { motion } from 'framer-motion';
import { User, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Leadership = Array.from({ length: 5 }).map((_, i) => ({ id: i }));
const Team = Array.from({ length: 20 }).map((_, i) => ({ id: i }));

const Card = ({ isLeader = false, index }: { isLeader?: boolean, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-brand-cyan/50 transition-all duration-300 flex flex-col items-center ${isLeader ? 'min-h-[400px]' : 'min-h-[320px]'}`}
  >
    {/* Hover Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 flex flex-col h-full items-center justify-center text-center w-full">
      {/* Avatar Placeholder */}
      <div className={`${isLeader ? 'w-40 h-40' : 'w-24 h-24'} rounded-full bg-gradient-to-br from-slate-800 to-slate-900 mb-8 flex items-center justify-center border border-slate-700 group-hover:border-brand-cyan/30 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
         <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
         <User className={`${isLeader ? 'w-16 h-16' : 'w-10 h-10'} text-slate-600 group-hover:text-brand-cyan transition-colors duration-300`} />
      </div>

      {/* Text Placeholders */}
      <div className="space-y-3 w-full flex flex-col items-center">
        {/* Name Placeholder */}
        <div className="font-space font-bold text-white group-hover:text-brand-cyan transition-colors duration-300 text-lg">
           {isLeader ? "Executive Leader" : "Team Member"}
        </div>
        
        {/* Role Placeholder */}
        <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">
           {isLeader ? "Designation" : "Role Title"}
        </div>
      </div>

      {/* Hover Socials */}
      <div className="mt-6 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
        <div className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:border-brand-cyan hover:bg-brand-cyan hover:text-black text-slate-400 transition-all cursor-pointer">
          <Linkedin className="w-4 h-4" />
        </div>
        <div className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:border-brand-cyan hover:bg-brand-cyan hover:text-black text-slate-400 transition-all cursor-pointer">
          <Twitter className="w-4 h-4" />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function TeamPage() {
  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-bold mb-6">
               Global Expertise
            </div>
            <h1 className="font-space text-5xl md:text-8xl font-black text-white tracking-tighter mb-6">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-600">ARCHITECTS.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Meet the visionary leadership and certified experts driving your revenue transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        {/* Leadership Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
             <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent flex-grow" />
             <h2 className="font-space text-lg font-bold text-brand-cyan tracking-[0.2em] uppercase glow-text">Executive Leadership</h2>
             <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent flex-grow" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Leadership.map((l, i) => <Card key={i} index={i} isLeader />)}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
             <div className="h-px bg-slate-800 flex-grow" />
             <h2 className="font-space text-sm font-bold text-slate-500 tracking-[0.2em] uppercase">The Delivery Team</h2>
             <div className="h-px bg-slate-800 flex-grow" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Team.map((t, i) => <Card key={i} index={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
