'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Check, ArrowRight, BarChart3, Clock, Zap, Shield, Users, Globe, Layers, Cpu, FileText, Database } from 'lucide-react';
import Image from 'next/image';

// --- COMPONENTS ---

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  );
};

const Card = ({ title, children, icon: Icon, features }: { title: string, children: React.ReactNode, icon?: any, features?: string[] }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-700 p-8 md:p-10 rounded-2xl backdrop-blur-sm hover:border-brand-cyan transition-colors duration-300 group flex flex-col h-full relative">
      <div className="flex items-center gap-4 mb-6">
        {Icon && <Icon className="w-12 h-12 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />}
        <h3 className="text-3xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-slate-300 text-base leading-7 mb-8 text-left">
        {children}
      </p>
      
      {features && (
        <div className="mt-auto pt-6 border-t border-slate-800">
          <ul className="space-y-3">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400 group/item">
                <div className="bg-brand-cyan/10 p-1 rounded mt-0.5 shrink-0 group-hover/item:bg-brand-cyan/20 transition-colors">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const LeadToQuoteCard = ({ title, children, icon: Icon, features }: { title: string, children: React.ReactNode, icon?: any, features?: string[] }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-700 p-8 md:p-10 rounded-2xl backdrop-blur-sm hover:border-brand-cyan transition-colors duration-300 group flex flex-col h-full relative">
      <div className="flex items-center gap-4 mb-6">
        {Icon && <Icon className="w-9 h-9 shrink-0 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />}
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-slate-300 text-base leading-7 mb-8 text-left">
        {children}
      </p>
      
      {features && (
        <div className="mt-auto pt-6 border-t border-slate-800">
          <ul className="space-y-3">
            {features.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400 group/item">
                <div className="bg-brand-cyan/10 p-1 rounded mt-0.5 shrink-0 group-hover/item:bg-brand-cyan/20 transition-colors">
                  <Check className="w-3.5 h-3.5 text-brand-cyan" />
                </div>
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Stat = ({ value, label, subtext }: { value: string, label: string, subtext: string }) => {
  return (
    <div className="text-center p-6 border border-slate-800 rounded-lg bg-slate-900/30">
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue mb-2"
      >
        {value}
      </motion.div>
      <div className="text-xl font-bold text-white mb-1">{label}</div>
      <div className="text-sm text-slate-400">{subtext}</div>
    </div>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    <section className="h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/bg-hero.jpg" 
          alt="Background" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-darker/80 to-brand-darker" />
      </div>

      <div className="z-10 text-center max-w-5xl px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8 gap-8 items-center flex-wrap"
        >
          <Image src="/assets/logo.png" alt="OmniCloud" width={220} height={80} className="h-16 w-auto object-contain" />
          <div className="h-10 w-[1px] bg-slate-700 mx-2 hidden md:block" />
          <Image src="/assets/salesforce-partner.png" alt="Salesforce Partner" width={200} height={80} className="h-16 w-auto object-contain" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black tracking-tight mb-6"
        >
          TRANSFORM YOUR <br />
          <span className="text-gradient">REVENUE OPERATIONS</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Your Strategic Partner for Quote-to-Cash Transformation.
          <br />
          Unified Platform. AI-Powered Automation. Enterprise Scale.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#contact" className="bg-brand-blue hover:bg-brand-cyan text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,181,226,0.5)] hover:shadow-[0_0_40px_rgba(0,181,226,0.7)] inline-flex items-center gap-2">
            Start Your Transformation <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="text-xs uppercase tracking-widest mb-2">Scroll</div>
        <div className="w-[1px] h-12 bg-slate-700 mx-auto" />
      </motion.div>
    </section>
  );
};

const Overview = () => {
  return (
    <Section className="bg-slate-950">
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">OVERVIEW</h2>
        <h3 className="text-4xl md:text-5xl font-bold">
          Accelerate Your Revenue Growth
        </h3>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          OmniCloud helps enterprises streamline their entire quote-to-cash process with Salesforce Revenue Cloud Advanced (RCA).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <Card title="Unified Platform" icon={Globe}>
            Break down silos between sales, finance, and operations with a single, integrated platform built on Salesforce.
          </Card>
          <Card title="AI-Powered Automation" icon={Cpu}>
            Leverage intelligent automation and predictive insights to optimize pricing, accelerate approvals, and reduce manual effort.
          </Card>
          <Card title="Revenue Operations Enablement" icon={BarChart3}>
            Designed to empower RevOps with full visibility, governance, and control over the entire quote-to-revenue lifecycle.
          </Card>
        </div>
      </div>
    </Section>
  );
};

const IndustrySolutions = () => {
  return (
    <Section className="bg-slate-950">
      <div className="max-w-[1600px] w-full px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">SUCCESS STORIES</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Solving Revenue Challenges for Our Clients</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {[
            { 
              title: "Industrial Equipment Leasing", 
              icon: Cpu,
              requirements: "Needed a unified lead-to-asset process for high-value machinery. Key needs included support for Lease/Sale/Rental models, automated approvals based on lease % thresholds, and real-time inventory sync with Microsoft Business Central.",
              solution: "Implemented Revenue Cloud as the central platform. Modeled inventory as Salesforce products with bi-directional Business Central sync. Designed a single pricing procedure to handle interest rates, asset age, and discounts. Automated asset creation upon quote finalization.",
              highlights: ["True Lead-to-Asset Automation", "Single Pricing Engine for Leases", "Smart Lease-Based Approvals", "Bi-Directional Inventory Sync"]
            },
            { 
              title: "Retail Interior Solutions", 
              icon: Layers,
              requirements: "Required a unified platform for end-to-end quote-to-order processing of raw & semi-built materials. Needed flexible, property-driven pricing and seamless bi-directional integration with NetSuite for finance synchronization.",
              solution: "Deployed Revenue Cloud with custom pricing logic to calculate prices dynamically based on material properties. Integrated Salesforce with NetSuite to auto-create Quotes/Orders and sync record IDs back for full traceability. Integrated Outlook for sales communication.",
              highlights: ["Property-Driven Dynamic Pricing", "Bi-Directional NetSuite Integration", "End-to-End Quote-to-Order", "Zero Manual Data Entry"]
            },
            {
              title: "Payroll Management",
              icon: Shield,
              requirements: "Required a robust end-to-end Revenue Cloud system for complex payroll products. Key needs included custom pricing by charge type/frequency, dynamic form management based on product selection, and secure digital signatures.",
              solution: "Implemented Revenue Cloud with a structured catalog for better UX. Built a custom pricing engine for frequency-based charges. Developed an intelligent LWC Form Manager to dynamically display required forms and integrated DocuSign for secure digital signing.",
              highlights: ["LWC Dynamic Form Manager", "Frequency-Based Custom Pricing", "DocuSign Integration", "Catalog-Based UX"]
            },
            {
              title: "Workforce & Machinery Rental",
              icon: Clock,
              requirements: "Needed a consumption-driven leasing model for skilled resources & machinery. Critical to quote granted hours/days, track actual usage from a 3rd party system, and automate billing for standard vs. overconsumption.",
              solution: "Implemented Revenue Cloud Consumption Management. Developed custom grant logic for overconsumption pricing. Ingested usage data directly to Assets and built a custom API-driven engine for weekly automated invoice generation.",
              highlights: ["Usage-Based Consumption Model", "Overconsumption Pricing Logic", "Weekly Automated Invoicing", "Asset-Level Billing"]
            }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-700 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-cyan transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-brand-cyan" />
                </div>
                <h4 className="text-2xl font-bold text-white">{item.title}</h4>
              </div>

              <div className="space-y-6 grow">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Client Requirements</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.requirements}</p>
                </div>
                
                <div>
                  <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">Solution Provided</div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.solution}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 mt-4">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Unique Highlights</div>
                  <ul className="grid grid-cols-1 gap-2">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Transformation = () => {
  return (
    <Section className="bg-brand-darker">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,181,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,181,226,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-[1600px] w-full px-6 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">MIGRATION PLAYBOOK</h2>
          <h3 className="text-4xl md:text-5xl font-bold">CPQ to RCA Data Flow</h3>
        </div>
        
        <div className="max-w-5xl mx-auto">
           {/* Flow Diagram */}
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 w-full md:w-1/3 shadow-xl">
                 <div className="text-slate-500 text-xs font-bold mb-3 uppercase tracking-widest">Legacy Source</div>
                 <div className="text-2xl font-bold text-white mb-2">Salesforce CPQ</div>
                 <div className="flex flex-wrap gap-2 mt-4">
                    {['Products', 'Price Rules', 'Quotes'].map(t => (
                      <span key={t} className="text-xs bg-slate-900 text-slate-400 px-2 py-1 rounded border border-slate-700">{t}</span>
                    ))}
                 </div>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                 <div className="w-full h-1 bg-slate-800 w-32 hidden md:block relative">
                    <div className="absolute inset-0 bg-brand-cyan/50 animate-pulse"></div>
                 </div>
                 <ArrowRight className="w-8 h-8 text-brand-cyan rotate-90 md:rotate-0" />
              </div>

              <div className="bg-slate-800 p-8 rounded-2xl border border-brand-cyan/30 w-full md:w-1/3 shadow-[0_0_30px_rgba(0,181,226,0.1)] relative overflow-hidden">
                 <div className="absolute inset-0 bg-brand-cyan/5"></div>
                 <div className="text-brand-cyan text-xs font-bold mb-3 uppercase tracking-widest">Target State</div>
                 <div className="text-2xl font-bold text-white mb-2">Revenue Cloud</div>
                 <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                    {['Unified Catalog', 'Usage Pricing', 'Billing'].map(t => (
                      <span key={t} className="text-xs bg-slate-900 text-brand-cyan px-2 py-1 rounded border border-brand-cyan/20">{t}</span>
                    ))}
                 </div>
              </div>
           </div>

           {/* 3-Step Process */}
           <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { step: "01", title: "Map & Assess", desc: "Analyze legacy data structures and map dependencies." },
                { step: "02", title: "Transform", desc: "Automated schema conversion and data cleansing." },
                { step: "03", title: "Validate", desc: "Integrity checks and regression testing." }
              ].map((s, i) => (
                <div key={i} className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 flex items-start gap-4 text-left">
                   <div className="text-2xl font-black text-slate-700">{s.step}</div>
                   <div>
                      <div className="font-bold text-white mb-1">{s.title}</div>
                      <div className="text-xs text-slate-400">{s.desc}</div>
                   </div>
                </div>
              ))}
           </div>
           
           {/* ERP Integration Bar */}
           <div className="pt-12 border-t border-slate-800/50">
              <h4 className="text-slate-500 text-xs font-bold mb-8 uppercase tracking-widest">Seamless ERP Integration</h4>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                 <div className="flex items-center gap-2 text-xl font-bold text-white"><Globe className="w-5 h-5" /> NetSuite</div>
                 <div className="flex items-center gap-2 text-xl font-bold text-white"><Database className="w-5 h-5" /> SAP</div>
                 <div className="flex items-center gap-2 text-xl font-bold text-white"><Layers className="w-5 h-5" /> Oracle</div>
                 <div className="flex items-center gap-2 text-xl font-bold text-white"><Cpu className="w-5 h-5" /> Workday</div>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

const LeadToQuote = () => {
  return (
    <Section className="bg-brand-darker">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">LEAD-TO-QUOTE</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Accelerate the path from Opportunity to Proposal</h3>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Streamline the initial phase of your revenue cycle with powerful configuration and pricing tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          <LeadToQuoteCard title="Product Configuration" icon={Layers} features={["Guided Selling", "Visual Product Builder", "Exclusion Rules", "Nested Bundles"]}>
            Ensure 100% accurate quotes. Guide reps to the right products with visual selectors and automated compatibility rules.
          </LeadToQuoteCard>
          <LeadToQuoteCard title="Intelligent Pricing" icon={BarChart3} features={["Automated Price Rules", "Margin Protection", "Multi-Dimensional (MDQ)", "Usage-Based Logic"]}>
            Maximize deal value. Apply complex discounts, uplifts, and attribute-based pricing automatically without spreadsheet errors.
          </LeadToQuoteCard>
          <LeadToQuoteCard title="Proposal Generation" icon={FileText} features={["Dynamic PDF Generation", "Branded Templates", "E-Signature Integration", "Version Control"]}>
             Create professional proposals in seconds. Generate dynamic documents that look great and include built-in e-signature.
          </LeadToQuoteCard>
          <LeadToQuoteCard title="Governance & Approvals" icon={Shield} features={["Advanced Approval Chains", "Smart Routing", "Delegation", "Parallel Reviews"]}>
            Speed up deal cycles. Route approvals dynamically based on margins, terms, or products to the right stakeholders instantly.
          </LeadToQuoteCard>
        </div>
      </div>
    </Section>
  );
};

const Capabilities = () => {
  const capabilities = [
    { 
      icon: Layers, 
      title: "Product & Catalog", 
      desc: "Manage your entire product portfolio with a centralized catalog. Leverage dynamic metadata-driven attributes and constraint-based configuration logic to handle even the most complex nested bundles without custom code.",
      features: ["Visual Builder for Business", "Nested Bundles Support", "Real-time Validation", "Dynamic Attributes"]
    },
    { 
      icon: FileText, 
      title: "Quoting & Pricing", 
      desc: "Generate accurate quotes instantly with the advanced Transaction Line Editor. Support complex pricing models including tiered, volume-based, and attribute-based pricing natively out-of-the-box.",
      features: ["Transaction Line Editor", "Usage-Based Pricing", "Multi-Dimensional Models", "Complex Proration Logic"]
    },
    { 
      icon: Clock, 
      title: "Order & Subscription", 
      desc: "Automate the entire order lifecycle from signature to fulfillment. Seamlessly handle mid-term amendments, renewals, and cancellations with the Dynamic Revenue Orchestrator (DRO).",
      features: ["Dynamic Revenue Orchestrator", "Automated Renewals", "Asset Lifecycle Management", "Amendments & Swaps"]
    },
    { 
      icon: Shield, 
      title: "Contract Lifecycle", 
      desc: "Accelerate deal closure with end-to-end contract management. Streamline authoring, negotiation, and versioning with built-in AI-powered redlining capabilities.",
      features: ["Clause Libraries", "Redlining & Versioning", "AI Contract Assistance", "eSignature Integration"]
    },
    { 
      icon: Users, 
      title: "Approvals & Flows", 
      desc: "Eliminate bottlenecks with native advanced approvals. Design complex sequential, parallel, and conditional workflows using standard Flow Orchestration logic.",
      features: ["Parallel Approval Chains", "Smart Flow Orchestration", "Conditional Routing Rules", "Email & Slack Approvals"]
    },
    { 
      icon: Zap, 
      title: "AI & Agent-Assisted", 
      desc: "Empower your sales team with the next generation of AI. Use the Quoting Agent for natural language interactions and Agentforce for intelligent upsell recommendations.",
      features: ["Natural Language Quoting", "Predictive Upsell Insights", "Automated Compliance", "Agentforce Integration"]
    },
    { 
      icon: BarChart3, 
      title: "Revenue & Billing", 
      desc: "Unify billing and revenue recognition on a single platform. Handle complex multi-period invoicing, consumption-based billing, and ensure full compliance with ASC 606 standards.",
      features: ["ASC 606 Compliance", "Multi-Period Invoicing", "Usage-Based Billing", "Automated Rev Rec"]
    },
    { 
      icon: Database, 
      title: "Analytics & Visiblity", 
      desc: "Gain real-time visibility into your revenue health. Track deal velocity, renewal rates, and customer asset lifecycle with pre-built dashboards designed for Revenue Operations.",
      features: ["Deal Velocity Tracking", "Customer Asset 360", "Revenue by Channel", "Renewal Forecasting"]
    },
  ];

  return (
    <Section className="bg-slate-950">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">CAPABILITY FRAMEWORK</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Lead-to-Cash Capabilities</h3>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A comprehensive framework covering the entire revenue lifecycle on the Salesforce platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {capabilities.map((cap, i) => (
            <Card key={i} title={cap.title} icon={cap.icon} features={cap.features}>
              {cap.desc}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Comparison = () => {
  return (
    <Section className="bg-slate-950">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">COMPETITIVE ADVANTAGE</h2>
          <h3 className="text-4xl md:text-5xl font-bold">RCA vs Traditional CPQ</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-brand-cyan text-black font-black text-xl rounded-full w-12 h-12 flex items-center justify-center border-4 border-brand-dark shadow-[0_0_20px_rgba(0,181,226,0.5)]">
            VS
          </div>

          {/* RCA Side */}
          <div className="bg-slate-900/50 border-2 border-brand-cyan/50 p-8 rounded-2xl relative overflow-hidden group hover:border-brand-cyan transition-all duration-300">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand-cyan" />
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl group-hover:bg-brand-cyan/20 transition-all" />
             
             <h4 className="text-2xl font-bold mb-6 text-brand-cyan flex items-center gap-2">
               Revenue Cloud Advanced
               <span className="text-xs bg-brand-cyan/20 text-brand-cyan px-2 py-1 rounded-full border border-brand-cyan/30">Next Gen</span>
             </h4>
             <ul className="space-y-4">
                {[
                  "Unified Data Model: Single source of truth across lifecycle",
                  "Advanced Pricing: Tiered & usage-based models native",
                  "Native Automation: Built-in approvals & renewals logic",
                  "Seamless Integration: Native ERP & finance connectivity",
                  "Omni-Channel: Direct, partner & self-service built-in"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-200">
                    <Check className="w-5 h-5 text-brand-cyan shrink-0" /> {item}
                  </li>
                ))}
             </ul>
          </div>

          {/* Traditional CPQ Side */}
          <div className="bg-slate-900/20 border border-slate-800 p-8 rounded-2xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             <h4 className="text-2xl font-bold mb-6 text-slate-400">Traditional CPQ</h4>
             <ul className="space-y-4">
                {[
                  "Fragmented Data: Separate logic silos for pricing/billing",
                  "Custom Logic: Complex coding required for advanced usage",
                  "Manual Processes: Limited automation, heavy maintenance",
                  "Complex Integration: Middleware & manual mapping required",
                  "Limited Channels: Partial support, not built for self-service"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-500">
                    <div className="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center shrink-0 text-xs">✕</div> {item}
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

const RevenueCloudBilling = () => {
  return (
    <Section className="bg-brand-darker">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest mb-2">BILLING ENGINE</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Revenue Cloud Billing</h3>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Automate the entire cash lifecycle with a billing engine built for complex revenue models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Row 1 */}
           <Card title="Invoice Management" icon={FileText} features={["Consolidated Invoicing", "Credit Memos", "Debit Notes", "Negative Line Conversion"]}>
             Handle diverse billing scenarios including milestones, recurring subscriptions, and one-time fees. Automatically unify multiple orders into a single customer-friendly invoice.
           </Card>
           
           <Card title="Revenue Recognition" icon={BarChart3} features={["ASC 606 / IFRS 15", "Revenue Schedules", "Event-Based Rev Rec", "Accounting Subledgers"]}>
             Automate compliance with accounting standards. Trigger revenue recognition based on delivery, invoicing, or time, removing the risk of manual spreadsheet errors.
           </Card>

           <Card title="Complex Billing Models" icon={Layers} features={["Usage/Consumption", "Evergreen Subscriptions", "Proration Logic", "Milestone Billing"]}>
             Launch consumption-based pricing models effortlessly. Systematically handle mid-cycle amendments, upgrades, and cancellations with precise proration.
           </Card>

           {/* Row 2 (Centered 2 cards) */}
           <div className="md:col-span-3 grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
             <Card title="Payments & Collections" icon={Shield} features={["Payment Gateways", "Dunning Management", "Refund Processing", "Payment Allocation"]}>
               Streamline cash collection. Automate payment runs, manage dunning processes for failed payments, and allocate cash to specific invoice lines.
             </Card>

             <Card title="ERP & Tax Integration" icon={Database} features={["Real-time Tax Calc", "GL Alignment", "API Connectors", "Audit Trails"]}>
               Connect seamlessly with AvaTax, Vertex, and your ERP. Ensure every invoice line has the correct tax rate and General Ledger code before it hits finance.
             </Card>
           </div>
        </div>
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <footer id="contact" className="py-20 bg-black relative border-t border-slate-900 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">
          Ready to Transform Your <br/> Revenue Operations?
        </h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Partner with OmniCloud to unlock the full potential of Salesforce RCA. 
          Let&apos;s discuss how our expertise can accelerate your quote-to-cash transformation.
        </p>
        
        <div className="flex justify-center mb-16">
           <a href="mailto:sales@omnicloudconsulting.com" className="bg-brand-cyan hover:bg-white hover:text-black text-black font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(0,181,226,0.3)] hover:shadow-[0_0_30px_rgba(0,181,226,0.6)]">
             sales@omnicloudconsulting.com
           </a>
        </div>

        <div className="flex justify-center items-center gap-8 opacity-50 mb-8">
          <Image src="/assets/logo.png" alt="OmniCloud" width={150} height={50} className="h-8 w-auto grayscale" />
          <div className="h-8 w-[1px] bg-slate-800"></div>
          <Image src="/assets/salesforce-partner.png" alt="Salesforce Partner" width={100} height={50} className="h-8 w-auto grayscale" />
        </div>

        <div className="text-slate-600 text-sm">
          © {new Date().getFullYear()} OmniCloud Software Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const Navigation = ({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (id: string) => void }) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'transformation', label: 'Transformation' },
    { id: 'industry-solutions', label: 'Success Stories' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'lead-to-quote', label: 'L2Q' },
    { id: 'billing', label: 'RCB' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={() => setActiveSection(section.id)}
          className="group flex items-center justify-end gap-4"
        >
          <span className={`text-xs font-mono uppercase tracking-widest transition-all duration-300 opacity-0 group-hover:opacity-100 ${activeSection === section.id ? 'opacity-100 text-brand-cyan' : 'text-slate-500'}`}>
            {section.label}
          </span>
          <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeSection === section.id ? 'bg-brand-cyan border-brand-cyan scale-125 shadow-[0_0_10px_#00b5e2]' : 'border-slate-700 bg-transparent group-hover:border-slate-500'}`} />
        </a>
      ))}
    </div>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <main className="min-h-screen bg-brand-darker text-slate-200 selection:bg-brand-cyan selection:text-black">
      {/* Global Tech Background */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 181, 226, 0.15) 0%, transparent 70%), linear-gradient(#00b5e2 1px, transparent 1px), linear-gradient(90deg, #00b5e2 1px, transparent 1px)', 
             backgroundSize: '100% 100%, 50px 50px, 50px 50px' 
           }} 
      />
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div id="hero" className="scroll-mt-0" onMouseEnter={() => setActiveSection('hero')}>
        <Hero />
      </div>
      <div id="overview" className="scroll-mt-24" onMouseEnter={() => setActiveSection('overview')}>
        <Overview />
      </div>
      <div id="capabilities" className="scroll-mt-12" onMouseEnter={() => setActiveSection('capabilities')}>
        <Capabilities />
      </div>
      <div id="transformation" className="scroll-mt-24" onMouseEnter={() => setActiveSection('transformation')}>
        <Transformation />
      </div>
      <div id="industry-solutions" className="scroll-mt-24" onMouseEnter={() => setActiveSection('industry-solutions')}>
        <IndustrySolutions />
      </div>
      <div id="comparison" className="scroll-mt-24" onMouseEnter={() => setActiveSection('comparison')}>
        <Comparison />
      </div>
      <div id="lead-to-quote" className="scroll-mt-12" onMouseEnter={() => setActiveSection('lead-to-quote')}>
        <LeadToQuote />
      </div>
      <div id="billing" className="scroll-mt-24" onMouseEnter={() => setActiveSection('billing')}>
        <RevenueCloudBilling />
      </div>
      <div id="contact" className="scroll-mt-24" onMouseEnter={() => setActiveSection('contact')}>
        <Contact />
      </div>
    </main>
  );
}
