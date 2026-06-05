'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import Fireflies from '../../components/Fireflies';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:sales@omnicloudconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-slate-900 py-20 border-b border-slate-800">
        <Fireflies className="z-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to start your transformation? Reach out to us today.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="space-y-8">
               <div className="flex items-start gap-6">
                  <div className="bg-brand-cyan/10 p-4 rounded-full">
                     <Mail className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                     <div className="text-lg font-bold text-white mb-1">Email</div>
                     <a href="mailto:sales@omnicloudconsulting.com" className="text-slate-400 hover:text-brand-cyan transition-colors">
                        sales@omnicloudconsulting.com
                     </a>
                  </div>
               </div>
               
               <div className="flex items-start gap-6">
                  <div className="bg-brand-cyan/10 p-4 rounded-full">
                     <Phone className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                     <div className="text-lg font-bold text-white mb-1">Phone</div>
                     <p className="text-slate-400">+1 647 701 6992</p>
                  </div>
               </div>

               <div className="flex items-start gap-6">
                  <div className="bg-brand-cyan/10 p-4 rounded-full">
                     <MapPin className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                     <div className="text-lg font-bold text-white mb-1">Hyderabad Office</div>
                     <p className="text-slate-400 max-w-xs">
                       #1-11-251/11, RKP Mansion, 1st Floor, Begumpet Hyderabad, Telangana 500016, India.
                     </p>
                  </div>
               </div>
            </div>
          </div>

          {/* Simple Form Placeholder */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
               <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" 
                    placeholder="Your Name" 
                    required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" 
                    placeholder="your@email.com" 
                    required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" 
                    placeholder="How can we help you?" 
                    required
                  />
               </div>
               <button type="submit" className="w-full bg-brand-cyan hover:bg-white text-black font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
