import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  ShieldAlert, 
  ArrowUpRight, 
  MessageSquare,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getWhatsAppUrl } from '../config/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="container-custom">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Profile Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold text-brand-navy font-heading font-extrabold text-xl flex items-center justify-center shadow-md">
                SG
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-lg leading-tight">
                  {BUSINESS_CONFIG.name}
                </h3>
                <p className="text-xs text-brand-gold font-medium">
                  {BUSINESS_CONFIG.title}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-2">
              Assisting individuals and families in Prayagraj to navigate health insurance, life protection, mutual fund concepts, and local property requirements with transparency and direct communication.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-brand-gold-light">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
              <span>{BUSINESS_CONFIG.tagline}</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition">
                  About Sanjay
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white transition">
                  Resources & FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider">
              Services Offered
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/health-insurance" className="text-slate-400 hover:text-brand-gold transition flex items-center justify-between group">
                  <span>Health Insurance</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link to="/services/life-insurance" className="text-slate-400 hover:text-brand-gold transition flex items-center justify-between group">
                  <span>Life Insurance</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link to="/services/mutual-funds" className="text-slate-400 hover:text-brand-gold transition flex items-center justify-between group">
                  <span>Mutual Funds & SIP</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link to="/services/real-estate" className="text-slate-400 hover:text-brand-gold transition flex items-center justify-between group">
                  <span>Real Estate Assistance</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
              <li>
                <Link to="/services/rental-property" className="text-slate-400 hover:text-brand-gold transition flex items-center justify-between group">
                  <span>Rental & Office Property</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider">
              Connect Directly
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {BUSINESS_CONFIG.location.full}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Contact Numbers</p>
                  <p className="text-xs text-slate-400">
                    Primary: <a href={getTelUrl(BUSINESS_CONFIG.phones.primary)} className="text-brand-gold hover:underline">{BUSINESS_CONFIG.phones.formattedPrimary}</a>
                  </p>
                  <p className="text-xs text-slate-400">
                    Alternative: <a href={getTelUrl(BUSINESS_CONFIG.phones.alternative)} className="text-brand-gold hover:underline">{BUSINESS_CONFIG.phones.formattedAlternative}</a>
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Quick Button */}
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba59] transition shadow"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer Snippet in Footer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400/90 leading-relaxed">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Statutory Notice:</strong> Mutual fund investments are subject to market risks; read all scheme-related documents carefully before investing. Past performance is no guarantee of future returns. Insurance is a subject matter of solicitation; benefits and coverage terms are governed solely by policy wordings issued by respective insurers. Real estate assistance is limited to coordination and advisory; independent legal and title verification is strongly advised.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Use
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
