import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import SEOHead from '../components/SEOHead';

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Use (Draft for Review)"
        description="Terms of use draft for Sanjay Goswami's insurance, investment, and real estate website in Prayagraj."
        canonicalPath="/terms"
      />

      <section className="bg-brand-bg-alt py-12 lg:py-16 border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Draft Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Terms of Use
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
              <span>Review Notice</span>
            </p>
            <p>
              These Terms of Use govern visitor access to this informational portal. They are drafted for owner review prior to official deployment.
            </p>
          </div>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            1. General Informational Nature of Content
          </h2>
          <p>
            All content, explanations, FAQs, and guides presented on this website are provided solely for general educational and informational awareness. None of the materials constitute an unconditional binding offer, loan commitment, guaranteed insurance policy issuance, or specific financial recommendation.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            2. Primacy of Official Provider Contracts
          </h2>
          <p>
            Any insurance policy, mutual fund investment scheme, or real estate lease/sale agreement you enter into is strictly governed by the official contract, prospectus, scheme information document (SID), or title deed issued by the respective third-party insurer, Asset Management Company (AMC), or property owner. The summary explanations on this website do not modify, supersede, or replace official contractual clauses.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            3. Accuracy and Updates to Information
          </h2>
          <p>
            While every reasonable effort is made to maintain factual accuracy regarding insurance terms, tax provisions, and local property contexts, financial regulations and scheme parameters evolve. Visitors must independently confirm current terms, premium rates, waiting periods, and scheme risks prior to executing financial transactions.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            4. Limitation of Liability
          </h2>
          <p>
            {BUSINESS_CONFIG.name} shall not be liable for any direct, indirect, incidental, or consequential losses resulting from decisions taken solely on the basis of general website summaries without prior personalized consultation and review of statutory documentation.
          </p>

          <h2 className="text-xl font-heading font-bold text-brand-navy mt-6">
            5. Jurisdiction
          </h2>
          <p>
            Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Prayagraj, Uttar Pradesh, India.
          </p>
        </div>
      </section>
    </>
  );
}
