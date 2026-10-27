import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  HeartPulse, 
  ShieldCheck, 
  TrendingUp, 
  Home, 
  Building2,
  CheckCircle
} from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_CONFIG } from '../config/business';

interface ServiceCardProps {
  id: string;
  title: string;
  shortDesc: string;
  path: string;
  category: 'insurance' | 'investment' | 'real-estate';
  highlights?: string[];
  onEnquireClick?: (serviceTitle: string) => void;
}

export default function ServiceCard({
  title,
  shortDesc,
  path,
  category,
  highlights = [],
  onEnquireClick,
}: ServiceCardProps) {
  const getIcon = () => {
    switch (category) {
      case 'insurance':
        return title.toLowerCase().includes('health') ? HeartPulse : ShieldCheck;
      case 'investment':
        return TrendingUp;
      case 'real-estate':
        return title.toLowerCase().includes('rental') ? Building2 : Home;
      default:
        return TrendingUp;
    }
  };

  const Icon = getIcon();

  const getCategoryBadge = () => {
    switch (category) {
      case 'insurance':
        return { label: 'Protection', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'investment':
        return { label: 'Wealth', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'real-estate':
        return { label: 'Property', bg: 'bg-amber-50 text-amber-800 border-amber-200' };
    }
  };

  const badge = getCategoryBadge();

  return (
    <div className="card-standard p-6 sm:p-8 flex flex-col justify-between group">
      <div>
        {/* Top Icon & Badge Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-blue-light text-brand-blue flex items-center justify-center group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300 shadow-sm">
            <Icon className="w-7 h-7" />
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${badge.bg}`}>
            {badge.label}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-3">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {shortDesc}
        </p>

        {/* Key Highlights list if provided */}
        {highlights.length > 0 && (
          <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action Buttons Row */}
      <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          to={path}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-blue transition group/link"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {onEnquireClick ? (
          <button
            type="button"
            onClick={() => onEnquireClick(title)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#25D366] hover:text-white text-slate-700 text-xs font-semibold transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        ) : (
          <a
            href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#25D366] hover:text-white text-slate-700 text-xs font-semibold transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </a>
        )}
      </div>
    </div>
  );
}
