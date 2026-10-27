import { 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare, 
  Phone 
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, getTelUrl } from '../config/business';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';
import EnquiryForm from '../components/EnquiryForm';

export default function LifeInsurance() {

  const termVsEndowment = [
    {
      feature: 'Primary Objective',
      term: 'Pure family income protection against untimely demise',
      traditional: 'Mix of small life cover and low-yield savings',
    },
    {
      feature: 'Sum Assured for ₹1,000/mo',
      term: 'Substantial cover (e.g. ₹50 Lakhs to ₹1 Crore depending on age)',
      traditional: 'Much smaller cover (e.g. ₹2 to ₹5 Lakhs)',
    },
    {
      feature: 'Maturity Benefit',
      term: 'No maturity payout (unless Return of Premium plan chosen)',
      traditional: 'Small lump-sum bonus paid at term completion',
    },
    {
      feature: 'Best Suited For',
      term: 'Every primary earner with financial dependents or loans',
      traditional: 'Individuals wanting conservative disciplined saving',
    },
  ];

  return (
    <>
      <SEOHead
        title="Life Insurance Advisory in Prayagraj"
        description="Discuss pure term protection, family financial safety nets, and income replacement options with Sanjay Goswami in Prayagraj."
        canonicalPath="/services/life-insurance"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wider border border-blue-200">
              <ShieldCheck className="w-4 h-4" />
              <span>Family Income Protection</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Life Insurance Advisory
            </h1>

            <p className="text-base sm:text-xl text-brand-blue font-medium">
              Protect Your Loved Ones' Financial Future Against Life's Uncertainties
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              If your family relies on your monthly income, adequate term life insurance is the most fundamental financial foundation. Understand coverage options, rider benefits, and transparent terms with Sanjay Goswami in Prayagraj.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Life Insurance Options')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3.5 px-6 shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white mr-2" />
                <span>Discuss Life Insurance Options</span>
              </a>
              <a
                href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
                className="btn-primary text-sm py-3.5 px-6"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call {BUSINESS_CONFIG.phones.formattedPrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Educational Content (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-4">
                  The True Purpose of Life Insurance
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Life insurance is not a lottery or an aggressive wealth-generating tool; its primary objective is risk management. It acts as an economic shield ensuring that if the breadwinner passes away unexpectedly, the family can continue their children's education, afford daily living expenses, and repay pending loans without financial distress.
                </p>
              </div>

              {/* Comparison Table: Term Insurance vs Traditional Endowment */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                  Term Insurance vs. Traditional Plans
                </h3>
                <p className="text-sm text-slate-600">
                  Many individuals buy small endowment policies thinking they are protecting their family, only to find the coverage is insufficient to cover even one year of living costs.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100/80 text-brand-navy uppercase font-semibold text-[11px] tracking-wider">
                      <tr>
                        <th className="p-3.5 sm:p-4">Key Aspect</th>
                        <th className="p-3.5 sm:p-4 bg-blue-50/80 text-brand-blue">Pure Term Insurance</th>
                        <th className="p-3.5 sm:p-4">Traditional Endowment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {termVsEndowment.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50">
                          <td className="p-3.5 sm:p-4 font-semibold text-brand-navy">{row.feature}</td>
                          <td className="p-3.5 sm:p-4 bg-blue-50/30 font-medium text-slate-800">{row.term}</td>
                          <td className="p-3.5 sm:p-4 text-slate-600">{row.traditional}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Discussion Points & Pre-requisites */}
              <div className="p-6 sm:p-8 rounded-2xl bg-brand-bg-alt border border-slate-200/80 space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-brand-navy">
                  What We Review During Your Consultation
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Human Life Value (HLV) Calculation:</strong> Determining the optimal coverage amount (typically 10 to 15 times your annual income) plus liabilities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Tenure Matching:</strong> Choosing coverage that protects until retirement or until children become financially independent.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Truthful Disclosure:</strong> The supreme importance of declaring existing medical history and habits (such as smoking) to avoid claim rejection later.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Useful Riders:</strong> Evaluating Critical Illness, Accidental Death, and Waiver of Premium add-ons.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Enquiry Form (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <EnquiryForm initialService="Life Insurance" />
            </div>

          </div>
        </div>
      </section>

      {/* Regulatory Notice Banner */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <RiskNotice type="insurance" />
        </div>
      </section>
    </>
  );
}
