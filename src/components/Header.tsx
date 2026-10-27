import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Menu, 
  ChevronDown, 
  HeartPulse, 
  Shield, 
  TrendingUp, 
  Home, 
  Building2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getWhatsAppUrl } from '../config/business';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceItems = [
    {
      name: 'Health Insurance',
      desc: 'Hospitalisation & family floater plans',
      path: '/services/health-insurance',
      icon: HeartPulse,
    },
    {
      name: 'Life Insurance',
      desc: 'Pure term protection & income security',
      path: '/services/life-insurance',
      icon: Shield,
    },
    {
      name: 'Mutual Funds & SIP',
      desc: 'Equity, debt, hybrid & retirement funds',
      path: '/services/mutual-funds',
      icon: TrendingUp,
    },
    {
      name: 'Real Estate Assistance',
      desc: 'Buying, selling & property investment',
      path: '/services/real-estate',
      icon: Home,
    },
    {
      name: 'Rental & Office Property',
      desc: 'Residential rentals & commercial spaces',
      path: '/services/rental-property',
      icon: Building2,
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo & Descriptor */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-navy flex items-center justify-center text-brand-gold font-heading font-extrabold text-xl shadow-md group-hover:bg-brand-navy-light transition-colors">
              SG
            </div>
            <div>
              <div className="font-heading font-bold text-lg sm:text-xl text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors">
                {BUSINESS_CONFIG.name}
              </div>
              <div className="text-xs text-brand-muted font-medium flex items-center gap-1.5">
                <span>{BUSINESS_CONFIG.title}</span>
                <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">Prayagraj</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? 'text-brand-blue font-semibold bg-brand-blue-light/50' : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? 'text-brand-blue font-semibold bg-brand-blue-light/50' : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-1.5 transition ${
                  location.pathname.startsWith('/services')
                    ? 'text-brand-blue font-semibold bg-brand-blue-light/50'
                    : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-brand-blue' : 'text-slate-400'
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
                      Advisory Verticals
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-xs text-brand-blue font-medium hover:underline flex items-center gap-1"
                    >
                      <span>Overview</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                        >
                          <div className="p-2 rounded-lg bg-brand-blue-light text-brand-blue group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-brand-navy group-hover:text-brand-blue">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? 'text-brand-blue font-semibold bg-brand-blue-light/50' : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                }`
              }
            >
              Resources & FAQs
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition ${
                  isActive ? 'text-brand-blue font-semibold bg-brand-blue-light/50' : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition"
              title="Call Sanjay Goswami"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-blue">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-xs xl:text-sm">{BUSINESS_CONFIG.phones.formattedPrimary}</span>
            </a>

            <Link
              to="/contact"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Contact Now
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#25D366] text-white shadow-sm hover:bg-[#20ba59] transition"
              aria-label="WhatsApp Sanjay Goswami"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-gold transition"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
