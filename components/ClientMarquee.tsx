'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  '/clients/1.png',
  '/clients/2.png',
  '/clients/3.png',
  '/clients/4.png',
  '/clients/5.png',
  '/clients/6.png',
  '/clients/8.png',
  '/clients/9.png',
  '/clients/10.png',
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
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {/* Duplicate the list 4 times to ensure smooth infinite scroll on wide screens */}
          {[...clients, ...clients, ...clients, ...clients].map((logo, index) => (
            <div key={index} className="relative w-48 h-20 shrink-0 mx-4">
              <Image
                src={logo}
                alt="Client Logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
