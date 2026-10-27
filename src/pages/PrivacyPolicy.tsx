import { Lock, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy (Draft for Review)"
        description="Privacy policy draft for Sanjay Goswami's insurance, investment, and real estate website in Prayagraj."
        canonicalPath="/privacy-policy"
      />

      <section className="bg-brand-bg-alt py-12 lg:py-16 border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Draft Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last Updated: Draft for Owner Review
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-custom max-w-4xl mx-auto prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
          
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
            <p className="font-semibold mb-1 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Draft Status Notice</span>
            </p>
            <p>
              This draft privacy policy outlines general data handling procedures. It is provided for review by {BUSINESS_CONFIG.name} prior to official legal finalization. No claim of independent legal certification is made.
            </p>
          </div>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            1. Information Collected Through This Website
          </h2>
          <p>
            When you interact with the interactive consultation form or contact pathways on this website, we collect only the minimal personal details necessary to answer your request:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your full name</li>
            <li>Your mobile or WhatsApp phone number</li>
            <li>Your indicated service of interest (e.g. Health Insurance, Term Life, Mutual Funds, Real Estate)</li>
            <li>Any optional notes or questions you choose to include in your message</li>
          </ul>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            2. Purpose of Collecting Your Information
          </h2>
          <p>
            Any information submitted by you is utilized solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact you via telephone call or WhatsApp to discuss the specific service you enquired about</li>
            <li>Clarify your stated financial or property requirements</li>
            <li>Provide relevant policy brochures or informational material requested by you</li>
          </ul>
          <p>
            We do not sell, rent, or trade your contact information to third-party telemarketers or external advertising networks.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            3. Third-Party Messaging (WhatsApp)
          </h2>
          <p>
            When you choose to click "Open WhatsApp Now" or any WhatsApp chat button, our website formats your entered information into a standard URL query string that launches the WhatsApp platform (operated by Meta Platforms, Inc.). Your interaction on WhatsApp is subject to WhatsApp's own Terms of Service and Privacy Policy.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            4. Client-Side Processing Notice
          </h2>
          <p>
            This website does not transmit or store your personal information on a remote database backend. Form actions operate entirely within your browser to generate prefilled communications.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            5. Your Rights: Correction and Deletion
          </h2>
          <p>
            If you have contacted {BUSINESS_CONFIG.name} and wish to request that your phone number or contact record be deleted from past correspondence, you may simply send an SMS or WhatsApp message stating your request to {BUSINESS_CONFIG.phones.formattedPrimary}, and your record will be promptly removed from manual contact logs.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            6. Contact for Privacy Inquiries
          </h2>
          <p>
            For any clarifications regarding this draft policy, please contact:
            <br />
            <strong>{BUSINESS_CONFIG.name}</strong>
            <br />
            {BUSINESS_CONFIG.location.full}
            <br />
            Phone: {BUSINESS_CONFIG.phones.formattedPrimary} / {BUSINESS_CONFIG.phones.formattedAlternative}
          </p>
        </div>
      </section>
    </>
  );
}
