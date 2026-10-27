import { 
  HeartPulse, 
  ShieldCheck, 
  CreditCard, 
  Stethoscope, 
  Activity, 
  AlertCircle, 
  MessageSquare, 
  Phone, 
  Clock, 
  FileText 
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, getTelUrl } from '../config/business';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';
import EnquiryForm from '../components/EnquiryForm';

export default function HealthInsurance() {

  const coverageDetails = [
    {
      title: 'In-Patient Hospitalisation',
      desc: 'Room rent, nursing fees, ICU charges, surgeon fees, operation theater costs, and doctor consultations for treatments requiring >24 hours stay.',
      icon: Activity,
    },
    {
      title: 'Pre & Post Hospitalisation',
      desc: 'Diagnostic scans, lab tests, specialist consults, and medication costs incurred before hospital admission (e.g. 30–60 days) and after discharge (e.g. 60–90 days).',
      icon: Stethoscope,
    },
    {
      title: 'Daycare Procedures',
      desc: 'Advanced medical treatments like cataract surgery, chemotherapy, radiotherapy, or dialysis that no longer require 24 hours in hospital due to medical advances.',
      icon: Clock,
    },
    {
      title: 'Cashless Network Facility',
      desc: 'Treatment at affiliated private hospitals in Prayagraj and across the country without paying upfront hospital admission bills, subject to insurer approval.',
      icon: CreditCard,
    },
    {
      title: 'Ambulance & Emergency Charges',
      desc: 'Road ambulance transportation costs to the nearest qualified medical facility in emergency situations.',
      icon: HeartPulse,
    },
    {
      title: 'Restoration & Refill Benefits',
      desc: 'Recharge or restoration of the sum insured if the entire coverage is exhausted by previous hospitalisations during the same policy year.',
      icon: ShieldCheck,
    },
  ];

  const finePrintItems = [
    {
      title: 'Initial 30-Day Waiting Period',
      desc: 'Most retail health policies have an initial 30-day waiting period from inception where non-accidental illnesses are not covered.',
    },
    {
      title: 'Pre-Existing Disease (PED) Waiting Periods',
      desc: 'Conditions such as diabetes, hypertension, or thyroid disorders diagnosed prior to policy purchase require a continuous coverage waiting period (typically 2 to 4 years) before claims are eligible.',
    },
    {
      title: 'Specific Ailment Waiting Periods',
      desc: 'Ailments like hernia, kidney stones, joint replacements, and cataracts typically have a mandatory 2-year waiting window before coverage applies.',
    },
    {
      title: 'Room Rent & ICU Sub-Limits',
      desc: 'Certain budget policies cap daily room rent (e.g., 1% of Sum Insured). Choosing a higher room category can trigger proportionate deductions on total hospital bills. Understanding this fine print is crucial.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Health Insurance Advisory in Prayagraj"
        description="Understand health coverage, family floater plans, pre-existing disease waiting periods, and cashless hospitals with Sanjay Goswami in Prayagraj."
        canonicalPath="/services/health-insurance"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
              <HeartPulse className="w-4 h-4" />
              <span>Medical Security</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Health Insurance Advisory
            </h1>

            <p className="text-base sm:text-xl text-brand-blue font-medium">
              Protect Your Family's Savings from Escalating Medical Costs
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Medical emergencies come without warning. Understand policy structures, waiting periods, room-rent limits, and cashless hospital networks with Sanjay Goswami in Prayagraj.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Health Insurance')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3.5 px-6 shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white mr-2" />
                <span>Enquire on WhatsApp</span>
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

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-4">
                  What Does Health Insurance Cover?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  A comprehensive health insurance policy is designed to absorb the heavy financial shocks of planned surgeries or emergency hospital admissions. Here is what modern policies typically encompass:
                </p>
              </div>

              {/* 6 Grid items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {coverageDetails.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-base text-brand-navy mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Fine Print Breakdown */}
              <div className="pt-4 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>The Fine Print: What You Must Understand Before Buying</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                  Why Exclusions & Waiting Periods Matter
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Too often, policyholders face claim deductions because they were not told about initial waiting periods or room rent caps. During an enquiry with Sanjay Goswami, these critical parameters are explained upfront:
                </p>

                <div className="space-y-3 pt-2">
                  {finePrintItems.map((fp, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-sm">
                      <h4 className="font-heading font-bold text-sm text-brand-navy mb-1">
                        {fp.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {fp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policy Illustration vs Actual Policy Terms */}
              <div className="p-6 rounded-2xl bg-brand-blue-light/50 border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-brand-navy font-heading font-bold text-base">
                  <FileText className="w-5 h-5 text-brand-blue" />
                  <span>Policy Illustration vs. Actual Policy Wordings</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A marketing brochure or sales illustration provides an overview of potential benefits. However, actual claim settlements are strictly governed by the formal policy wordings filed by the insurance company with the regulator. Sanjay Goswami assists you in reviewing these specific policy clauses before you commit.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive WhatsApp Enquiry Form (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <EnquiryForm initialService="Health Insurance" />
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
