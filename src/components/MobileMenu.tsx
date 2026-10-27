import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Phone, MessageSquare, ChevronRight, Shield, HeartPulse, TrendingUp, Home, Building2 } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getWhatsAppUrl } from '../config/business';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const serviceLinks = [
    { name: 'Health Insurance', path: '/services/health-insurance', icon: HeartPulse },
    { name: 'Life Insurance', path: '/services/life-insurance', icon: Shield },
    { name: 'Mutual Funds & SIP', path: '/services/mutual-funds', icon: TrendingUp },
    { name: 'Real Estate Assistance', path: '/services/real-estate', icon: Home },
    { name: 'Rental & Office Property', path: '/services/rental-property', icon: Building2 },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col z-50 overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="font-heading font-bold text-lg text-brand-navy">
              {BUSINESS_CONFIG.name}
            </div>
            <div className="text-xs text-brand-muted font-medium">
              {BUSINESS_CONFIG.title}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-brand-navy hover:bg-slate-200/60 rounded-xl transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 flex-1 space-y-1">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition ${
                isActive ? 'bg-brand-navy text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span>Home</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>

          <NavLink
            to="/about"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition ${
                isActive ? 'bg-brand-navy text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span>About Sanjay</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>

          <div className="pt-2 pb-1">
            <div className="px-4 text-xs font-semibold text-brand-muted uppercase tracking-wider">
              Advisory Services
            </div>
          </div>

          <NavLink
            to="/services"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-2.5 rounded-xl font-medium text-sm transition ${
                isActive ? 'bg-brand-blue-light text-brand-blue font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span>All Services Hub</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>

          {serviceLinks.map((service) => {
            const Icon = service.icon;
            return (
              <NavLink
                key={service.path}
                to={service.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition ${
                    isActive ? 'bg-brand-blue-light text-brand-blue font-semibold' : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                <Icon className="w-4 h-4 text-brand-gold-dark" />
                <span className="flex-1">{service.name}</span>
              </NavLink>
            );
          })}

          <div className="pt-2 pb-1">
            <div className="px-4 text-xs font-semibold text-brand-muted uppercase tracking-wider">
              Knowledge & Contact
            </div>
          </div>

          <NavLink
            to="/resources"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition ${
                isActive ? 'bg-brand-navy text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span>Resources & FAQs</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>

          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition ${
                isActive ? 'bg-brand-navy text-white font-semibold' : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            <span>Contact & Enquiries</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </NavLink>
        </nav>

        {/* Contact actions at bottom of drawer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
          <a
            href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand-navy text-white rounded-xl font-semibold text-sm shadow hover:bg-brand-navy-light transition"
          >
            <Phone className="w-4 h-4 text-brand-gold" />
            <span>Call: {BUSINESS_CONFIG.phones.formattedPrimary}</span>
          </a>
          <a
            href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] text-white rounded-xl font-semibold text-sm shadow hover:bg-[#20ba59] transition"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
          <p className="text-[11px] text-center text-slate-500 pt-1">
            Prayagraj (Allapur), UP
          </p>
        </div>
      </div>
    </div>
  );
}
