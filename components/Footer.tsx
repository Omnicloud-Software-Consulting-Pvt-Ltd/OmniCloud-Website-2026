import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
                <Image src="/assets/logo-ondark.png" alt="OmniCloud" width={180} height={60} className="h-16 w-auto object-contain" />
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              OmniCloud Software Consulting Private Limited is a boutique Salesforce.com consulting firm specializing in Revenue Cloud projects.
            </p>
            <div className="flex gap-4 opacity-70">
               {/* Social placeholders if needed */}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="/about" className="hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="/success-stories" className="hover:text-brand-cyan transition-colors">Success Stories</a></li>
              <li><a href="/contact" className="hover:text-brand-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>Hyderabad, Telangana, India</li>
              <li>Toronto, Canada</li>
              <li><a href="mailto:sales@omnicloudconsulting.com" className="hover:text-brand-cyan">sales@omnicloudconsulting.com</a></li>
              <li>+1 647 701 6992</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
          <div>
            © {new Date().getFullYear()} OmniCloud Software Consulting. All rights reserved.
          </div>
          <div className="flex items-center gap-6 transition-all">
             <Image src="/assets/salesforce-partner-wide.png" alt="Salesforce Partner" width={250} height={120} className="h-10 w-auto object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
