'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, Globe } from 'lucide-react';
import Fireflies from '../../components/Fireflies';

const content = [
  {
    title: "Our Mission",
    description: "To achieve simplicity through innovative thinking. We believe enterprise software shouldn't be a labyrinth. We strip away the complexity of Revenue Cloud to reveal the power underneath.",
    icon: Target,
    color: "bg-red-500",
    text_color: "text-white"
  },
  {
    title: "Our Vision",
    description: "To be the catalyst for the next generation of revenue operations. We see a future where Salesforce isn't just a CRM, but the autonomous engine driving your business growth.",
    icon: Lightbulb,
    color: "bg-yellow-500",
    text_color: "text-white"
  },
  {
    title: "Global Scale",
    description: "Boutique attention, enterprise reach. With hubs in Toronto and Hyderabad, we deliver a 24/7 follow-the-sun model that keeps your projects moving while the world sleeps.",
    icon: Globe,
    color: "bg-blue-500",
    text_color: "text-white"
  },
  {
    title: "Impact First",
    description: "We don't measure success in hours billed. We measure it in deal velocity increased, quote errors reduced, and revenue recognized. Your outcomes are our only KPI.",
    icon: TrendingUp,
    color: "bg-green-500",
    text_color: "text-white"
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Add physics-based smoothing to the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-slate-950 font-sans">
      {/* Hero */}
      <section className="relative h-[70vh] flex flex-col justify-center items-center text-center px-6 border-b border-slate-900 overflow-hidden">
        <Fireflies className="z-0" />
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-space text-6xl md:text-9xl font-black text-white tracking-tighter mb-8"
        >
          WE ARE <span className="text-brand-cyan">OMNICLOUD.</span>
        </motion.h1>
        <p className="relative z-10 text-xl text-slate-400 max-w-2xl font-light">
          Architects of the RevOps Revolution. We Simplify the Complex.
        </p>
      </section>

      {/* Sticky Scroll Section */}
      <div ref={containerRef} className="relative flex flex-col md:flex-row bg-slate-950">
        
        {/* Left Side: Sticky Visuals */}
        <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center bg-slate-900/20 overflow-hidden border-r border-slate-800">
           {/* Background Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,181,226,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,181,226,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
           
           {content.map((item, index) => {
             // Calculate step based on (N-1) intervals because 0 is start and 1 is end
             const step = 1 / (content.length - 1);
             const target = index * step;
             
             // Define ranges centered around the target scroll position
             let inputRange = [target - step * 0.5, target, target + step * 0.5];
             let opacityRange = [0, 1, 0];
             let scaleRange = [0.8, 1, 0.8];
             let rotateRange = [-10, 0, 10];

             // Special case: First item (visible from start)
             if (index === 0) {
                inputRange = [0, 0, step * 0.5];
                opacityRange = [1, 1, 0];
                scaleRange = [1, 1, 0.8];
                rotateRange = [0, 0, 10];
             }
             // Special case: Last item (visible until end)
             else if (index === content.length - 1) {
                inputRange = [1 - step * 0.5, 1, 1];
                opacityRange = [0, 1, 1];
                scaleRange = [0.8, 1, 1];
                rotateRange = [-10, 0, 0];
             }

             // Use the smooth progress value
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const opacity = useTransform(smoothProgress, inputRange, opacityRange);
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const scale = useTransform(smoothProgress, inputRange, scaleRange);
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const rotate = useTransform(smoothProgress, inputRange, rotateRange);

             const Icon = item.icon;

             return (
               <motion.div 
                 key={index}
                 style={{ opacity, scale, rotate }}
                 className="absolute flex flex-col items-center justify-center p-12 text-center"
               >
                  <div className={`w-40 h-40 rounded-[2rem] ${item.color} bg-opacity-10 flex items-center justify-center mb-8 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-xl relative group`}>
                     <div className={`absolute inset-0 ${item.color} opacity-20 blur-2xl rounded-[2rem]`} />
                     <Icon className="w-20 h-20 text-white relative z-10" />
                  </div>
               </motion.div>
             );
           })}
        </div>

        {/* Right Side: Scrollable Text */}
        <div className="w-full md:w-1/2">
           {content.map((item, index) => (
             <div key={index} className="h-screen flex flex-col justify-center px-8 md:px-20 border-l border-slate-900 bg-slate-950/50 backdrop-blur-sm">
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5 }}
               >
                 <div className="md:hidden mb-6">
                    <item.icon className={`w-12 h-12 ${item.text_color}`} />
                 </div>
                 <h3 className="font-space text-4xl md:text-5xl font-bold text-white mb-8">{item.title}</h3>
                 <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light max-w-xl">
                   {item.description}
                 </p>
               </motion.div>
             </div>
           ))}
        </div>

      </div>

      {/* Team/Values Grid */}
      <section className="py-32 container mx-auto px-6">
        <h2 className="font-space text-4xl md:text-6xl font-bold text-white mb-16 text-center">Why We Win.</h2>
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { num: "01", title: "Boutique Focus", desc: "We don't do everything. We do Revenue Cloud perfectly." },
             { num: "02", title: "Senior Talent", desc: "No juniors learning on your dime. Only certified experts." },
             { num: "03", title: "Agile Delivery", desc: "We ship features in weeks, not months." }
           ].map((card, i) => (
             <div key={i} className="group p-8 border border-slate-800 rounded-3xl hover:bg-brand-cyan transition-all duration-500 cursor-none">
                <div className="text-6xl font-black text-slate-800 mb-6 group-hover:text-black transition-colors">{card.num}</div>
                <h3 className="font-space text-2xl font-bold text-white mb-4 group-hover:text-black transition-colors">{card.title}</h3>
                <p className="text-slate-400 group-hover:text-black/80 transition-colors">{card.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}