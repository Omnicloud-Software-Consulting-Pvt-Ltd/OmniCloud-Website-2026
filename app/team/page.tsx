'use client';

import { motion } from 'framer-motion';
import { User, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

type Member = {
  name?: string;
  role?: string;
  image?: string; // e.g. "/assets/team/charan.jpg"
  imageClass?: string; // optional per-photo tweaks, e.g. "scale-110 object-top"
  linkedin?: string;
  twitter?: string;
};

// Executive leadership — fill in as we go.
const Leadership: Member[] = [
  {
    name: 'Sushi Mulugu',
    role: 'Founder',
    linkedin: 'https://www.linkedin.com/in/smulugu/',
    image: '/assets/team/Sushi.png',
    imageClass: 'scale-110',
  },
  {
    name: 'Jayant Guduru',
    role: 'Country Head - India',
    linkedin: 'https://www.linkedin.com/in/jayantguduru/',
    image: '/assets/team/Jayant.jpg',
  },
  {
    name: 'Jennifer David',
    role: 'Delivery Lead',
    linkedin: 'https://www.linkedin.com/in/jenniferdavid237/',
    image: '/assets/team/Jenni.jpg',
  },
  {
    name: 'Karthik N',
    role: 'Senior Project Manager',
    linkedin: 'https://www.linkedin.com/in/karthik-nagalingam-008a3ba2/',
    image: '/assets/team/Karthik.jpg',
  },
  {
    name: 'Sanjay Bhatt',
    role: 'Controller',
    linkedin: 'https://www.linkedin.com/in/sanjay-bhatt-94882613/',
    image: '/assets/team/Sanjay.jpg',
  },
];

// Delivery team — first entry tagged; rest are placeholders for now.
const Team: Member[] = [
  {
    name: 'Kabi Gadal',
    role: 'Senior Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/kabi-gadal-394957215/',
    image: '/assets/team/Kabi.jpg',
  },
  {
    name: 'Charan Sai Penugoti',
    role: 'Consultant / Team Lead',
    linkedin: 'https://www.linkedin.com/in/charan-sai-penugoti-11835221a/',
    image: '/assets/team/Charan.png',
  },
  {
    name: 'Bhargavi Seelamanthula',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/bhargavi-seelamanthula-916904250/',
    image: '/assets/team/BhargaviS.jpg',
  },
  {
    name: 'Prakashraj Kodimunja',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/prakashraj-kodimunja-045787229/',
    image: '/assets/team/Prakash.jpg',
  },
  {
    name: 'Rathod Godavari',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/rathod-godavari-593a1324b/',
    image: '/assets/team/Godavari.jpg',
  },
  {
    name: 'Poojitha Nune',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/poojitha-nune-850b72269/',
    image: '/assets/team/Poojitha.png',
  },
  {
    name: 'Rahul Pallerlamudi',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/rahul-pallerlamudi-057565257/',
    image: '/assets/team/Rahul.png',
  },
  {
    name: 'Harsh Agarwal',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/harsh-agarwal-683995233/',
    image: '/assets/team/Harsh.jpg',
  },
  {
    name: 'Manoj Kumar Rangu',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/manoj-kumar-rangu-855a14234/',
    image: '/assets/team/Manoj.jpg',
  },
  {
    name: 'Pooja Muduganti',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/pooja-reddy-652070254/',
    image: '/assets/team/Pooja.png',
  },
  {
    name: 'Vaishnavi Kolan',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-kolan/',
    image: '/assets/team/Vaishnavi.png',
  },
  {
    name: 'Jatavath Priya',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/jatavath-priya-161a0026b/',
    image: '/assets/team/Priya.jpg',
  },
  {
    name: 'Anusha Kondala',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/anusha-kondala/',
    // image: TODO — add photo later
  },
  ...Array.from({ length: 7 }).map(() => ({} as Member)),
];

// Social links temporarily disabled to discourage poaching.
// Profile data is kept below — set this to true to re-enable the icons/links.
const SHOW_SOCIAL_LINKS = false;

const Card = ({ isLeader = false, index, member = {} }: { isLeader?: boolean, index: number, member?: Member }) => {
  const name = member.name ?? (isLeader ? "Executive Leader" : "Team Member");
  const role = member.role ?? (isLeader ? "Designation" : "Role Title");
  const hasLinks = Boolean(member.linkedin || member.twitter);

  return (
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
         {member.image ? (
           <Image src={member.image} alt={name} fill sizes={isLeader ? '160px' : '96px'} className={`object-cover ${member.imageClass ?? ''}`} />
         ) : (
           <User className={`${isLeader ? 'w-16 h-16' : 'w-10 h-10'} text-slate-600 group-hover:text-brand-cyan transition-colors duration-300`} />
         )}
         <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Name + Role */}
      <div className="space-y-3 w-full flex flex-col items-center">
        <div className="font-space font-bold text-white group-hover:text-brand-cyan transition-colors duration-300 text-lg">
           {name}
        </div>

        <div className="text-sm text-slate-500 uppercase tracking-wider font-medium">
           {role}
        </div>
      </div>

      {/* Socials — temporarily disabled (anti-poaching). Set SHOW_SOCIAL_LINKS = true to re-enable. */}
      {SHOW_SOCIAL_LINKS && (
      <div className="mt-6 flex gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
        {hasLinks ? (
          <>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
                className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:border-brand-cyan hover:bg-brand-cyan hover:text-black text-slate-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on X`}
                className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:border-brand-cyan hover:bg-brand-cyan hover:text-black text-slate-400 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
          </>
        ) : (
          <>
            <div className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:border-brand-cyan hover:bg-brand-cyan hover:text-black text-slate-400 transition-all cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </div>
            <div className="p-2 rounded-full bg-slate-800 border border-slate-700 hover:border-brand-cyan hover:bg-brand-cyan hover:text-black text-slate-400 transition-all cursor-pointer">
              <Twitter className="w-4 h-4" />
            </div>
          </>
        )}
      </div>
      )}
    </div>
  </motion.div>
  );
};

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
            {Leadership.map((l, i) => <Card key={i} index={i} isLeader member={l} />)}
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
            {Team.map((t, i) => <Card key={i} index={i} member={t} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
