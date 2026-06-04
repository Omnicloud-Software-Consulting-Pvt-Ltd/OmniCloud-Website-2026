'use client';

import { Layers,  Headphones,  RefreshCw, BarChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Consulting & Advisory",
      icon: BarChart,
      href: "/services/consulting",
      desc: "Unlock the full potential of your Salesforce investment with our strategic advisory services.",
      features: ["Business Process Optimization", "Salesforce Strategy Roadmap", "Health Checks & Audits", "Solution Architecture"]
    },
    {
      title: "Implementation Services",
      icon: Layers,
      href: "/services/implementation",
      desc: "Expert deployment of Salesforce clouds tailored to your unique business requirements.",
      features: ["Sales & Service Cloud", "Revenue Cloud (CPQ & Billing)", "Experience Cloud", "Consumer Goods Cloud"]
    },
    {
      title: "Managed IT Services",
      icon: Headphones,
      href: "/services/managed-services",
      desc: "Continuous support and evolution of your Salesforce instance to keep pace with business change.",
      features: ["24/7 Global Support", "System Administration", "Enhancements & Bug Fixes", "Release Management"]
    },
    {
      title: "Change Management",
      icon: RefreshCw,
      href: "/services/change-management",
      desc: "Ensure high adoption rates and smooth transitions with our people-first change strategies.",
      features: ["User Training", "Adoption Workshops", "Stakeholder Communication", "Documentation"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20 border-b border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            From strategic consulting to technical implementation and ongoing support, we cover the entire Salesforce lifecycle.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {services.map((service, i) => (
            <Link key={i} href={service.href} className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl hover:border-brand-cyan transition-all group flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                 <div className="bg-brand-cyan/10 p-3 rounded-lg group-hover:bg-brand-cyan/20 transition-colors">
                   <service.icon className="w-8 h-8 text-brand-cyan" />
                 </div>
                 <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {service.features.map((feat, j) => (
                  <li key={j} className="text-sm text-slate-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> {feat}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-slate-800 flex items-center text-brand-cyan font-bold gap-2 group-hover:gap-3 transition-all">
                Explore Service <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
