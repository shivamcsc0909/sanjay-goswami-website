import { AlertTriangle, ShieldAlert, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import SEOHead from '../components/SEOHead';

export default function Disclaimer() {
  return (
    <>
      <SEOHead
        title="Regulatory Disclaimers | Insurance, Mutual Funds & Property"
        description="Comprehensive statutory disclaimers for insurance solicitation, mutual funds market risks, and real estate coordination by Sanjay Goswami in Prayagraj."
        canonicalPath="/disclaimer"
      />

      <section className="bg-brand-bg-alt py-12 lg:py-16 border-b border-slate-200">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-200">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Statutory Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Legal & Regulatory Disclaimers
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Mandatory disclosures across insurance, mutual fund investments, and real estate services.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="container-custom max-w-4xl mx-auto space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* 1. Mutual Funds Disclaimer */}
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/90 space-y-3">
            <div className="flex items-center gap-2 text-amber-950 font-heading font-bold text-lg">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>1. Mutual Fund Investments & Market Risk</span>
            </div>
            <p className="text-amber-950 font-medium">
              "Mutual Fund investments are subject to market risks, read all scheme related documents carefully."
            </p>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              Mutual funds do not offer guaranteed returns or capital protection. NAVs (Net Asset Values) may rise or fall based on the factors and forces affecting securities markets, including interest rates, economic trends, and geopolitical conditions. Past performance of any scheme or fund manager is strictly historical and does not guarantee or indicate future returns.
            </p>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              A Systematic Investment Plan (SIP) is merely a disciplined method of periodic investing and does not insulate the investor from market volatility or guarantee a positive financial outcome.
            </p>
          </div>

          {/* 2. Insurance Disclaimer */}
          <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/60 border border-blue-200/90 space-y-3">
            <div className="flex items-center gap-2 text-brand-navy font-heading font-bold text-lg">
              <ShieldAlert className="w-5 h-5 text-brand-blue" />
              <span>2. Insurance Solicitation Notice</span>
            </div>
            <p className="text-brand-navy font-medium">
              "Insurance is the subject matter of solicitation."
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              All insurance products (Health and Life) are underwritten by respective authorized insurance companies. Sanjay Goswami facilitates discussion and provides information on policy terms and features based on client-stated requirements.
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              No claim approval, hospital cashless admission guarantee, or underwriting acceptance is promised or guaranteed by Sanjay Goswami. Claim settlement is solely at the discretion and subject to the terms, conditions, waiting periods, sub-limits, and exclusions outlined in the policy contract issued by the insurer.
            </p>
          </div>

          {/* 3. Real Estate Disclaimer */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
            <div className="flex items-center gap-2 text-brand-navy font-heading font-bold text-lg">
              <FileText className="w-5 h-5 text-brand-navy" />
              <span>3. Real Estate & Rental Coordination</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Real estate services offered by Sanjay Goswami in Prayagraj are limited to local coordination, requirement matching, and consultation. Sanjay Goswami does not guarantee property availability, future price appreciation, or rental yields.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All prospective buyers and tenants are explicitly advised to conduct independent physical inspection, boundary demarcation, PDA zoning verification, and thorough legal scrutiny of title deeds with independent legal counsel before exchanging monetary deposits or executing sale/lease deeds.
            </p>
          </div>

          {/* 4. Tax Treatment Disclaimer */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h3 className="text-base font-heading font-bold text-brand-navy">
              4. Tax Laws & Implications
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Any tax benefits mentioned regarding ELSS schemes (Section 80C) or health insurance premiums (Section 80D) are subject to applicable provisions of the Indian Income Tax Act, 1961, prevailing rules under the relevant tax regime (Old vs New), and the individual tax status of the taxpayer. Consult a qualified Chartered Accountant for personal tax advice.
            </p>
          </div>

          {/* 5. Non-Establishment of Fiduciary Relationship */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h3 className="text-base font-heading font-bold text-brand-navy">
              5. Nature of Engagement
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Merely visiting this website, reading content, or submitting an initial enquiry form does not establish an agency, advisory, or fiduciary relationship between you and {BUSINESS_CONFIG.name}. An advisory or service engagement is established solely upon direct communication, mutually agreed scope, and relevant paperwork.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
