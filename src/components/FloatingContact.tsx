import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getWhatsAppUrl } from '../config/business';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 print:hidden">
      {/* Expanded quick actions menu */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-elevated border border-slate-200 p-3 mb-1 w-64 space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="px-2 pt-1 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-brand-navy">Quick Consultation</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
              Available
            </span>
          </div>

          <a
            href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 transition text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-sm">
              <MessageSquare className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div>WhatsApp Sanjay ji</div>
              <div className="text-[10px] text-slate-400 font-normal">{BUSINESS_CONFIG.phones.formattedPrimary}</div>
            </div>
          </a>

          <a
            href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
            className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-brand-blue transition text-xs font-semibold"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-navy text-brand-gold flex items-center justify-center shadow-sm">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div>Direct Phone Call</div>
              <div className="text-[10px] text-slate-400 font-normal">{BUSINESS_CONFIG.phones.formattedPrimary}</div>
            </div>
          </a>
        </div>
      )}

      {/* Main floating action toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated hover:bg-[#20ba59] flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all duration-300 hover:scale-105 active:scale-95 group relative"
        aria-label="Toggle contact options"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform duration-200" />
        ) : (
          <>
            <MessageSquare className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-gold rounded-full border-2 border-white" />
          </>
        )}
      </button>
    </div>
  );
}
