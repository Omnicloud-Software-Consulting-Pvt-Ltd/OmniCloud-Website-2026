'use client';

import { motion } from 'framer-motion';
import { User, Linkedin, Twitter, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Fireflies from '../../components/Fireflies';

type Member = {
  name?: string;
  role?: string;
  image?: string; // e.g. "/assets/team/charan.jpg"
  imageClass?: string; // optional per-photo tweaks, e.g. "scale-110 object-top"
  bio?: string; // shown as a hover/focus overlay on the card
  linkedin?: string;
  twitter?: string;
};

// Executive leadership.
const ExecutiveLeadership: Member[] = [
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
];

// Delivery leadership.
const DeliveryLeadership: Member[] = [
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
  {},
];

// Leadership is shown as ONE flat section for now.
// Flip to true to split into Executive vs Delivery leadership (planned ~6 months out).
const SPLIT_LEADERSHIP = false;
const Leadership: Member[] = [...ExecutiveLeadership, ...DeliveryLeadership].filter((m) => m.name);

// Delivery team — first entry tagged; rest are placeholders for now.
const Team: Member[] = [
  {
    name: 'Kabi Gadal',
    role: 'Senior Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/kabi-gadal-394957215/',
    image: '/assets/team/Kabi.jpg',
    bio: 'Calm, composed, and deeply collaborative, Kabi brings the same rhythm and focus to his work that he brings to his music. With a laser-focused mindset and a grounded, family-oriented spirit, he is someone who listens, supports, and contributes with purpose. Whether working with the team or creating music, Kabi embodies balance, creativity, and quiet excellence.',
  },
  {
    name: 'Charan Sai Penugoti',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/charan-sai-penugoti-11835221a/',
    image: '/assets/team/Charan.png',
    bio: 'Disciplined, driven, and wise beyond his years, Charan brings urgency, curiosity, and follow-through to every challenge. A deep learner and true finisher, he dives into technical tasks with focus and a passion for solutioning. Highly disciplined and organized, he approaches work with the same dedication he brings to fitness and calisthenics. Grounded by family and driven by excellence, Charan turns ideas into outcomes.',
  },
  {
    name: 'Bhargavi Seelamanthula',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/bhargavi-seelamanthula-916904250/',
    image: '/assets/team/BhargaviS.jpg',
    bio: 'Our little master with a leader’s mindset, Bhargavi is intelligent, committed, and mature beyond her years. With a strong work ethic and a seasoned perspective, she brings clarity, confidence, and presence of mind to every situation. A natural leader, she handles uncertainty with calm determination and thinks ahead with purpose. Bhargavi’s dedication, confidence, and ability to rise to any challenge make her a powerful force within the team.',
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
    image: '/assets/team/Anusha.jpg',
  },
  {
    name: 'Rasagna Reddipalli',
    role: 'Salesforce Developer',
    linkedin: 'https://www.linkedin.com/in/r-rasagna/',
    image: '/assets/team/Rasagna.jpg',
  },
];

type Mascot = {
  name?: string;
  tagline?: string;
  description?: string;
  image?: string; // e.g. "/assets/team/mascots/omnion.png"
};

// Our Mascots — fill in as we go.
const MASCOTS: Mascot[] = [
  {
    name: 'Omnion',
    tagline: 'Spark of innovation and face of OmniCloud.',
    description: 'More than a mascot, Omnion embodies the values that guide us: purposeful innovation, client success, trust, collaboration, and excellence. With a curious mind and a Gen AI spirit, Omnion represents our commitment to helping teams solve challenges, embrace smarter technology, and achieve meaningful outcomes together.',
    image: '/assets/team/mascots/Omnion.png',
  },
];

// LinkedIn links are shown for Executive Leadership only (anti-poaching for the wider delivery team).
// Master toggle: set to false to hide social links for everyone.
const SHOW_SOCIAL_LINKS = true;

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
    tabIndex={member.bio ? 0 : undefined}
    className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-brand-cyan/50 focus:outline-none focus:border-brand-cyan/50 transition-all duration-300 flex flex-col items-center ${member.bio ? 'cursor-pointer' : ''} ${isLeader ? 'min-h-[400px]' : 'min-h-[320px]'}`}
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

      {/* Socials — Executive Leadership only (delivery team hidden for anti-poaching). */}
      {SHOW_SOCIAL_LINKS && isLeader && (
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

    {/* Hover/focus reveal: bio */}
    {member.bio && (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-5 bg-slate-950/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 overflow-y-auto">
        <div className="font-space text-base font-bold text-brand-cyan mb-2">{name}</div>
        <p className={`text-slate-300 leading-relaxed text-justify ${isLeader ? 'text-sm' : 'text-xs'}`}>{member.bio}</p>
      </div>
    )}
  </motion.div>
  );
};

const MascotCard = ({ index, mascot = {} }: { index: number, mascot?: Mascot }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    viewport={{ once: true }}
    tabIndex={0}
    className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-6 hover:border-brand-cyan/50 transition-all duration-300 flex flex-col items-center text-center min-h-[400px] w-full sm:w-72 cursor-pointer focus:outline-none focus:border-brand-cyan/50"
  >
    {/* Default face: image + name + tagline */}
    <div className="relative z-10 flex flex-col h-full items-center justify-center w-full">
      <div className="w-44 h-44 mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 group-hover:border-brand-cyan/30 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
        {mascot.image ? (
          <Image src={mascot.image} alt={mascot.name ?? 'Mascot'} fill sizes="176px" className="object-contain p-2" />
        ) : (
          <Sparkles className="w-14 h-14 text-slate-600 group-hover:text-brand-cyan transition-colors duration-300" />
        )}
      </div>
      <div className="font-space text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors duration-300">
        {mascot.name ?? 'Mascot Name'}
      </div>
      {mascot.tagline && (
        <div className="text-sm text-slate-400 mt-2 max-w-xs leading-relaxed">{mascot.tagline}</div>
      )}
      {mascot.description && (
        <div className="mt-4 text-[11px] font-bold text-brand-cyan/70 uppercase tracking-widest">Hover to learn more</div>
      )}
    </div>

    {/* Hover/focus reveal: full description */}
    {mascot.description && (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 bg-slate-950/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
        <h4 className="font-space text-xl font-bold text-brand-cyan mb-3">{mascot.name}</h4>
        <p className="text-slate-300 text-sm leading-relaxed text-justify">{mascot.description}</p>
      </div>
    )}
  </motion.div>
);

export default function TeamPage() {
  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950" />
        <Fireflies className="z-0" />
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
        {SPLIT_LEADERSHIP ? (
        <>
        {/* Executive Leadership Section */}
        <div className="mb-24">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {ExecutiveLeadership.map((l, i) => <Card key={i} index={i} isLeader member={l} />)}
          </div>
        </div>

        {/* Delivery Leadership Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
             <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent flex-grow" />
             <h2 className="font-space text-lg font-bold text-brand-cyan tracking-[0.2em] uppercase glow-text">Delivery Leadership</h2>
             <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent flex-grow" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {DeliveryLeadership.map((l, i) => <Card key={i} index={i} isLeader member={l} />)}
          </div>
        </div>
        </>
        ) : (
        /* Flat leadership (current) */
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
             <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent flex-grow" />
             <h2 className="font-space text-lg font-bold text-brand-cyan tracking-[0.2em] uppercase glow-text">Our Leadership</h2>
             <div className="h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent flex-grow" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Leadership.map((l, i) => <Card key={i} index={i} isLeader member={l} />)}
          </div>
        </div>
        )}

        {/* Team Section */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
             <div className="h-px bg-slate-800 flex-grow" />
             <h2 className="font-space text-sm font-bold text-slate-500 tracking-[0.2em] uppercase">Our Delivery Team</h2>
             <div className="h-px bg-slate-800 flex-grow" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {Team.map((t, i) => (
              <div key={i} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                <Card index={i} member={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Mascots Section */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
             <div className="h-px bg-slate-800 flex-grow" />
             <h2 className="font-space text-sm font-bold text-slate-500 tracking-[0.2em] uppercase">Our Mascots</h2>
             <div className="h-px bg-slate-800 flex-grow" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {MASCOTS.map((m, i) => <MascotCard key={i} index={i} mascot={m} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
