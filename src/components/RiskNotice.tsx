import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

interface RiskNoticeProps {
  type?: 'mutual-fund' | 'insurance' | 'real-estate' | 'general';
  customText?: string;
  className?: string;
}

export default function RiskNotice({ type = 'general', customText, className = '' }: RiskNoticeProps) {
  let defaultText = '';
  let title = 'Important Notice';

  switch (type) {
    case 'mutual-fund':
      title = 'Regulatory Risk Disclosure';
      defaultText = 'Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns. Mutual fund schemes do not offer guaranteed returns or capital protection.';
      break;
    case 'insurance':
      title = 'Insurance Disclaimer';
      defaultText = 'Insurance is the subject matter of solicitation. Policy terms, waiting periods, sub-limits, and exclusions are determined solely by the issuing insurance company. Please read policy prospectuses carefully before making a purchase decision.';
      break;
    case 'real-estate':
      title = 'Property Advisory Notice';
      defaultText = 'Real estate assistance is offered as local coordination and advisory support. Buyers and tenants are strongly advised to carry out independent title deed checks, zoning verifications, and legal consultations before executing financial transactions.';
      break;
    default:
      title = 'Notice & Draft Status';
      defaultText = 'Information provided on this website is for general educational and informational purposes. Contact details and business services are presented as a working draft for owner verification before final publication.';
      break;
  }

  return (
    <div className={`rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 text-sm text-amber-900 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 text-amber-600 mt-0.5">
          {type === 'mutual-fund' ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-amber-950 mb-1">{title}</p>
          <p className="text-amber-800/90 leading-relaxed text-xs sm:text-sm">
            {customText || defaultText}
          </p>
        </div>
      </div>
    </div>
  );
}
