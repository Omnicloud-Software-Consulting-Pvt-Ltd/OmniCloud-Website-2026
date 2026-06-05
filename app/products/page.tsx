'use client';

import { Cloud, Calculator, Receipt, ShoppingCart, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Fireflies from '../../components/Fireflies';

export default function ProductsPage() {
  const products = [
    { name: "Salesforce Cloud", href: "/products/salesforce-cloud", icon: Cloud, desc: "Sales, Service, and Experience Cloud Implementation." },
    { name: "Salesforce CPQ", href: "/products/cpq", icon: Calculator, desc: "Configure, Price, Quote automation for complex sales." },
    { name: "Salesforce Billing", href: "/products/billing", icon: Receipt, desc: "Automated billing, invoicing, and revenue recognition." },
    { name: "Consumer Goods Cloud", href: "/products/consumer-goods", icon: ShoppingCart, desc: "Retail execution and trade promotion management." },
    { name: "Revenue Lifecycle", href: "/products/revenue-lifecycle", icon: RefreshCw, desc: "End-to-end revenue management and forecasting." }
  ];

  return (
    <div className="bg-slate-950 min-h-screen pb-20 pt-20">
      <section className="relative overflow-hidden mb-16">
        <Fireflies className="z-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our suite of specialized Salesforce solutions designed to accelerate your business growth.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((prod, i) => (
            <Link key={i} href={prod.href} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-brand-cyan transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-cyan group-hover:text-black transition-colors">
                <prod.icon className="w-8 h-8 text-brand-cyan group-hover:text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{prod.name}</h3>
              <p className="text-slate-400 mb-6">{prod.desc}</p>
              <div className="mt-auto text-brand-cyan font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
