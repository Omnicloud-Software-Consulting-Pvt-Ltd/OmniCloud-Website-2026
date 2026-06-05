'use client';

import { Check, Cpu, Layers, Shield, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Fireflies from '../../components/Fireflies';

export default function SuccessStories() {
  const stories = [
    { 
      title: "Industrial Equipment Leasing", 
      icon: Cpu,
      href: "/success-stories/industrial-leasing",
      requirements: "Needed a unified lead-to-asset process for high-value machinery. Key needs included support for Lease/Sale/Rental models, automated approvals based on lease % thresholds, and real-time inventory sync with Microsoft Business Central.",
      solution: "Implemented Revenue Cloud as the central platform. Modeled inventory as Salesforce products with bi-directional Business Central sync. Designed a single pricing procedure to handle interest rates, asset age, and discounts. Automated asset creation upon quote finalization.",
      highlights: ["True Lead-to-Asset Automation", "Single Pricing Engine for Leases", "Smart Lease-Based Approvals", "Bi-Directional Inventory Sync"]
    },
    { 
      title: "Retail Interior Solutions", 
      icon: Layers,
      href: "/success-stories/retail-interiors",
      requirements: "Required a unified platform for end-to-end quote-to-order processing of raw & semi-built materials. Needed flexible, property-driven pricing and seamless bi-directional integration with NetSuite for finance synchronization.",
      solution: "Deployed Revenue Cloud with custom pricing logic to calculate prices dynamically based on material properties. Integrated Salesforce with NetSuite to auto-create Quotes/Orders and sync record IDs back for full traceability. Integrated Outlook for sales communication.",
      highlights: ["Property-Driven Dynamic Pricing", "Bi-Directional NetSuite Integration", "End-to-End Quote-to-Order", "Zero Manual Data Entry"]
    },
    {
      title: "Payroll Management",
      icon: Shield,
      href: "/success-stories/payroll-management",
      requirements: "Required a robust end-to-end Revenue Cloud system for complex payroll products. Key needs included custom pricing by charge type/frequency, dynamic form management based on product selection, and secure digital signatures.",
      solution: "Implemented Revenue Cloud with a structured catalog for better UX. Built a custom pricing engine for frequency-based charges. Developed an intelligent LWC Form Manager to dynamically display required forms and integrated DocuSign for secure digital signing.",
      highlights: ["LWC Dynamic Form Manager", "Frequency-Based Custom Pricing", "DocuSign Integration", "Catalog-Based UX"]
    },
    {
      title: "Workforce & Machinery Rental",
      icon: Clock,
      href: "/success-stories/workforce-rental",
      requirements: "Needed a consumption-driven leasing model for skilled resources & machinery. Critical to quote granted hours/days, track actual usage from a 3rd party system, and automate billing for standard vs. overconsumption.",
      solution: "Implemented Revenue Cloud Consumption Management. Developed custom grant logic for overconsumption pricing. Ingested usage data directly to Assets and built a custom API-driven engine for weekly automated invoice generation.",
      highlights: ["Usage-Based Consumption Model", "Overconsumption Pricing Logic", "Weekly Automated Invoicing", "Asset-Level Billing"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-slate-900 py-20 border-b border-slate-800">
        <Fireflies className="z-0" />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Success Stories</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            See how we've helped diverse industries solve complex revenue challenges.
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {stories.map((item, i) => (
            <Link key={i} href={item.href} className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-cyan transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h4 className="text-2xl font-bold text-white">{item.title}</h4>
              </div>

              <div className="space-y-6 grow">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Client Requirements</div>
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{item.requirements}</p>
                </div>
                
                <div>
                  <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">Solution Provided</div>
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{item.solution}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 mt-4">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Unique Highlights</div>
                  <ul className="grid grid-cols-1 gap-2 mb-6">
                    {item.highlights.slice(0, 2).map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-brand-cyan font-bold gap-2 group-hover:gap-3 transition-all">
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
