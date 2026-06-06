'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Logos marked *_Ignore in public/clients are intentionally excluded.
// `className` trims any logo that renders oversized vs the rest.
const clients: { src: string; className?: string }[] = [
  { src: '/clients/JDPower.png' },
  { src: '/clients/Nexeo.png', className: 'scale-[0.6]' },
  { src: '/clients/Simplus.webp' },
  { src: '/clients/virtusa.png' },
  { src: '/clients/ISUZU.png' },
  { src: '/clients/KGO.png', className: 'scale-[0.6]' },
];

export default function ClientMarquee() {
  return (
    <section className="py-10 bg-slate-950 border-y border-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="flex w-full">
        <motion.div
          className="flex gap-16 items-center shrink-0 pr-16"
          animate={{ x: "-50%" }}
          transition={{
            duration: 36,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate the list 4 times to ensure smooth infinite scroll on wide screens */}
          {[...clients, ...clients, ...clients, ...clients].map((logo, index) => (
            <div key={index} className="relative w-48 h-20 shrink-0 mx-4">
              <Image
                src={logo.src}
                alt="Client Logo"
                fill
                className={`object-contain ${logo.className ?? ''}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
