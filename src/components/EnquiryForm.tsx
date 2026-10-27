import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';

interface EnquiryFormProps {
  initialService?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function EnquiryForm({ initialService = '', onSuccess, className = '' }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || 'Health Insurance');
  const [selectedPhoneRecipient, setSelectedPhoneRecipient] = useState(BUSINESS_CONFIG.phones.primary);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedLink, setSubmittedLink] = useState<string | null>(null);

  const servicesList = [
    'Health Insurance',
    'Life Insurance',
    'Mutual Funds & SIP',
    'Real Estate Assistance',
    'Rental & Office Property',
    'General Consultation',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Please provide your mobile number.';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!selectedService) {
      errs.service = 'Please select a service.';
    }

    if (!consent) {
      errs.consent = 'Please confirm that you agree to be contacted via WhatsApp/Phone.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate prefilled WhatsApp URL with user inputs
    const whatsappUrl = getWhatsAppUrl(selectedPhoneRecipient, selectedService, {
      name: name.trim(),
      message: message.trim() || undefined,
    });

    setSubmittedLink(whatsappUrl);
    if (onSuccess) onSuccess();

    // Automatically trigger opening in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setMessage('');
    setConsent(false);
    setSubmittedLink(null);
    setErrors({});
  };

  return (
    <div className={`bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card ${className}`}>
      {submittedLink ? (
        <div className="text-center py-6 space-y-5 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-brand-navy">
              Message Prepared!
            </h3>
            <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
              Your enquiry has been formatted and opened in WhatsApp. If the WhatsApp window did not open automatically, click the button below to start your conversation with Sanjay Goswami.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-left text-xs text-slate-600 space-y-1 max-w-md mx-auto">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Service:</strong> {selectedService}</p>
            <p><strong>Recipient Number:</strong> {selectedPhoneRecipient === BUSINESS_CONFIG.phones.primary ? BUSINESS_CONFIG.phones.formattedPrimary : BUSINESS_CONFIG.phones.formattedAlternative}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={submittedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-6 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 fill-white mr-2" />
              Open WhatsApp Now
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="btn-outline text-sm py-3 px-6 w-full sm:w-auto"
            >
              Submit Another Enquiry
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            Note: This form connects directly via WhatsApp and does not store personal data on any server database.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
              Connect with Sanjay Goswami
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted mt-1">
              Share your requirement below to generate a direct WhatsApp enquiry.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="enquiry-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="enquiry-name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none transition ${
                errors.name
                  ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                  : 'border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-blue-light'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="enquiry-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              WhatsApp / Mobile Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3.5 text-sm text-slate-400 font-medium">
                +91
              </span>
              <input
                id="enquiry-phone"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: '' });
                }}
                placeholder="98765 43210"
                className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm focus:outline-none transition ${
                  errors.phone
                    ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-blue-light'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="enquiry-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Service of Interest <span className="text-rose-500">*</span>
            </label>
            <select
              id="enquiry-service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-blue-light transition"
            >
              {servicesList.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          {/* Recipient Number Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Contact Line
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setSelectedPhoneRecipient(BUSINESS_CONFIG.phones.primary)}
                className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition ${
                  selectedPhoneRecipient === BUSINESS_CONFIG.phones.primary
                    ? 'border-brand-navy bg-brand-blue-light text-brand-navy font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <div>
                  <div className="text-[10px] text-slate-500">Primary</div>
                  <div>{BUSINESS_CONFIG.phones.formattedPrimary}</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPhoneRecipient(BUSINESS_CONFIG.phones.alternative)}
                className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition ${
                  selectedPhoneRecipient === BUSINESS_CONFIG.phones.alternative
                    ? 'border-brand-navy bg-brand-blue-light text-brand-navy font-semibold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <div>
                  <div className="text-[10px] text-slate-500">Alternative</div>
                  <div>{BUSINESS_CONFIG.phones.formattedAlternative}</div>
                </div>
              </button>
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label htmlFor="enquiry-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Optional Note / Question
            </label>
            <textarea
              id="enquiry-message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell Sanjay ji about your requirement, family size, preferred property locality, or budget..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-blue-light transition resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (errors.consent) setErrors({ ...errors, consent: '' });
                }}
                className="mt-1 w-4 h-4 rounded text-brand-navy focus:ring-brand-gold border-slate-300"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I agree to share these details so Sanjay Goswami may contact me via WhatsApp or phone call to discuss options.
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.consent}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-whatsapp w-full py-3.5 text-sm gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Generate & Send WhatsApp Enquiry</span>
          </button>

          <p className="text-[11px] text-center text-slate-400">
            Clicking will launch WhatsApp directly with your prefilled message.
          </p>
        </form>
      )}
    </div>
  );
}
