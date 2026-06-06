'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Tech-partner logos — drop files in public/partners/ and list them here.
// Use white/transparent PNGs so they read on the dark background.
// `scale` trims the chunkier logos so they visually match DocuSign / RightRev.
const partners: { src: string; className?: string }[] = [
  { src: '/partners/Salesforce.svg', className: 'scale-[0.8]' },
  { src: '/partners/Avalara.png', className: 'scale-[0.8]' },
  { src: '/partners/DocuSign.png' },
  { src: '/partners/RightRev.png' },
  { src: '/partners/Claude.png', className: 'scale-[0.8]' },
];

export default function PartnerMarquee() {
  if (partners.length === 0) return null;

  return (
    <section className="py-10 bg-slate-950 border-y border-slate-900 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
          Our Technology Partners
        </p>
      </div>

      <div className="flex w-full">
        <motion.div
          className="flex gap-16 items-center shrink-0 pr-16"
          animate={{ x: '-50%' }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'fit-content' }}
        >
          {[...partners, ...partners, ...partners, ...partners].map((logo, index) => (
            <div key={index} className="relative w-48 h-20 shrink-0 mx-4">
              <Image src={logo.src} alt="Technology Partner" fill className={`object-contain ${logo.className ?? ''}`} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
