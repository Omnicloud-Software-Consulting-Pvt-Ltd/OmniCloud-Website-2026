'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Menu, X, ChevronDown, Zap, Globe, Layers, Cpu, Cloud, Calculator, Receipt, ShoppingCart, RefreshCw, BarChart, Server, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data ---
const navData = {
  services: [
    { title: "Consulting & Advisory", href: "/services/consulting", icon: BarChart },
    { title: "Implementation", href: "/services/implementation", icon: Layers },
    { title: "Managed Services", href: "/services/managed-services", icon: Server },
    { title: "Change Management", href: "/services/change-management", icon: Users },
  ],
  products: [
    { title: "Salesforce Cloud", href: "/products/salesforce-cloud", icon: Cloud },
    { title: "CPQ", href: "/products/cpq", icon: Calculator },
    { title: "Billing", href: "/products/billing", icon: Receipt },
    { title: "Consumer Goods", href: "/products/consumer-goods", icon: ShoppingCart },
    { title: "Revenue Lifecycle", href: "/products/revenue-lifecycle", icon: RefreshCw },
  ]
};

// --- Components ---

const NavItem = ({ children, href, active, onHover, onLeave }: { children: React.ReactNode, href?: string, active?: boolean, onHover?: () => void, onLeave?: () => void }) => {
  return (
    <div 
      className="relative px-4 py-2 cursor-pointer group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {active && (
        <motion.div
          layoutId="nav-pill"
          className="absolute inset-0 bg-white/10 rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {href ? (
        <Link href={href} className="relative z-10 text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {children}
        </Link>
      ) : (
        <span className="relative z-10 text-sm font-medium text-slate-300 group-hover:text-white transition-colors flex items-center gap-1">
          {children} <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />
        </span>
      )}
    </div>
  );
};

const Dropdown = ({ type }: { type: 'services' | 'products' }) => {
  const items = navData[type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 5, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-4 w-72 bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl z-50 p-2"
    >
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-black text-brand-cyan transition-colors">
              <item.icon className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">{item.title}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default function Navbar() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
          className="relative w-full max-w-5xl bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          onMouseLeave={() => setHoveredTab(null)}
        >
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mr-8 group relative z-20">
             <div className="relative">
                <div className="absolute inset-0 bg-brand-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image src="/assets/logo-ondark.png" alt="OmniCloud" width={175} height={50} className="h-10 w-auto object-contain relative z-10" />
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 relative z-20">
            <NavItem 
              href="/" 
              active={hoveredTab === 'home'} 
              onHover={() => { setHoveredTab('home'); setActiveTab(null); }}
            >
              Home
            </NavItem>
            
            <NavItem 
              href="/about" 
              active={hoveredTab === 'about'} 
              onHover={() => { setHoveredTab('about'); setActiveTab(null); }}
            >
              About
            </NavItem>

            <NavItem 
              href="/team" 
              active={hoveredTab === 'team'} 
              onHover={() => { setHoveredTab('team'); setActiveTab(null); }}
            >
              Team
            </NavItem>

            {/* Services with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => { setHoveredTab('services'); setActiveTab('services'); }}
              onMouseLeave={() => setActiveTab(null)}
            >
              <NavItem active={hoveredTab === 'services'}>Services</NavItem>
              <AnimatePresence>
                {activeTab === 'services' && <Dropdown type="services" />}
              </AnimatePresence>
            </div>

            {/* Products with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => { setHoveredTab('products'); setActiveTab('products'); }}
              onMouseLeave={() => setActiveTab(null)}
            >
              <NavItem active={hoveredTab === 'products'}>Products</NavItem>
              <AnimatePresence>
                {activeTab === 'products' && <Dropdown type="products" />}
              </AnimatePresence>
            </div>

            <NavItem
              href="/success-stories"
              active={hoveredTab === 'stories'}
              onHover={() => { setHoveredTab('stories'); setActiveTab(null); }}
            >
              Stories
            </NavItem>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-20">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 bg-brand-cyan text-black px-5 py-2 rounded-full font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,181,226,0.3)]"
            >
              <Zap className="w-4 h-4 fill-black" /> Let's Talk
            </Link>
            
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-28 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Team', href: '/team' },
                { label: 'Services', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Success Stories', href: '/success-stories' },
                { label: 'Contact', href: '/contact' },
              ].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-3xl font-bold text-white hover:text-brand-cyan transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
