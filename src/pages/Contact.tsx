import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin 
} from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getWhatsAppUrl } from '../config/business';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';
import EnquiryForm from '../components/EnquiryForm';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Sanjay Goswami | Insurance & Investment Advisor"
        description="Direct contact details for Sanjay Goswami in Prayagraj (Allapur), UP. Call 7668986660 / 9453622977 or connect on WhatsApp for insurance and property guidance."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Direct Client Access</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Connect Directly with Sanjay Goswami
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about health coverage, term insurance, mutual fund SIPs, or property in Prayagraj? Connect via direct call or WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info Cards & Map Representation (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-navy mb-2">
                  Contact Information
                </h2>
                <p className="text-sm text-slate-600">
                  Choose your preferred contact number or initiate a conversation on WhatsApp.
                </p>
              </div>

              {/* Phone Cards */}
              <div className="space-y-4">
                {/* Primary Card */}
                <div className="p-6 rounded-2xl bg-brand-bg-alt border border-slate-200/90 hover:border-slate-300 transition space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-gold-dark uppercase tracking-wider bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      Primary Contact Line
                    </span>
                    <Phone className="w-4 h-4 text-brand-navy" />
                  </div>
                  <div className="text-xl font-heading font-bold text-brand-navy">
                    {BUSINESS_CONFIG.phones.formattedPrimary}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
                      className="btn-primary text-xs py-2 px-4"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'General Enquiry')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp text-xs py-2 px-4"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white mr-1.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Alternative Card */}
                <div className="p-6 rounded-2xl bg-brand-bg-alt border border-slate-200/90 hover:border-slate-300 transition space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      Alternative Line
                    </span>
                    <Phone className="w-4 h-4 text-brand-navy" />
                  </div>
                  <div className="text-xl font-heading font-bold text-brand-navy">
                    {BUSINESS_CONFIG.phones.formattedAlternative}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={getTelUrl(BUSINESS_CONFIG.phones.alternative)}
                      className="btn-outline text-xs py-2 px-4 bg-white"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      <span>Call</span>
                    </a>
                    <a
                      href={getWhatsAppUrl(BUSINESS_CONFIG.phones.alternative, 'General Enquiry')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp text-xs py-2 px-4"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white mr-1.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-brand-navy">
                      Local Advisory Presence
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      {BUSINESS_CONFIG.location.full}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Available for scheduled meetings and telephone consultations across Prayagraj.
                    </p>
                  </div>
                </div>

                {/* Pictorial stylized map frame */}
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 p-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold text-brand-navy mb-1">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Serving Allapur & Greater Prayagraj</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Uttar Pradesh, India (Pin Code: 211006)
                  </p>
                </div>
              </div>

              {/* Verification Draft Note */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <p>
                  <strong>Owner Verification Note:</strong> The supplied contact numbers (7668986660 & 9453622977) and location details are presented as a working business draft. The owner may verify and update details prior to publication.
                </p>
              </div>

            </div>

            {/* Right Column: Interactive WhatsApp Generator Form (7 cols) */}
            <div className="lg:col-span-7">
              <EnquiryForm initialService="General Consultation" />
            </div>

          </div>
        </div>
      </section>

      {/* Disclaimers Notice */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <RiskNotice type="general" />
        </div>
      </section>
    </>
  );
}
