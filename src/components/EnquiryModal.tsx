import React from 'react';
import { X } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export default function EnquiryModal({ isOpen, onClose, serviceTitle }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-slate-100 z-50">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 z-10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-1">
            <EnquiryForm 
              initialService={serviceTitle} 
              onSuccess={() => {}}
              className="border-0 shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
