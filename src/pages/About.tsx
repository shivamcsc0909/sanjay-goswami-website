import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  HeartHandshake, 
  Target, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getWhatsAppUrl } from '../config/business';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';

export default function About() {
  const coreValues = [
    {
      icon: HeartHandshake,
      title: 'Approachable & Personal',
      desc: 'Financial decisions can be stressful. My priority is providing a welcoming environment where you can ask any question without feeling pressured.',
    },
    {
      icon: Target,
      title: 'Requirement-Led Discussions',
      desc: 'There are no one-size-fits-all solutions. We look at your family dependencies, monthly budget, and personal timelines before discussing any policy or plan.',
    },
    {
      icon: ShieldCheck,
      title: 'Honest Disclosures & Fine Print',
      desc: 'Transparent guidance means discussing what is NOT covered just as clearly as what is covered—including waiting periods, deductibles, and market fluctuation.',
    },
    {
      icon: FileCheck,
      title: 'Direct Local Accountability',
      desc: 'Based in Allapur, Prayagraj, I am directly accessible to clients across the city for consultations, follow-ups, and service queries.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Sanjay Goswami"
        description="Learn about Sanjay Goswami, Insurance & Investment Advisor in Prayagraj (Allapur), UP. Direct, client-centric guidance for insurance, mutual funds, and property."
        canonicalPath="/about"
      />

      {/* Hero / Intro Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Advisor Image Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-gold/20 via-brand-blue/15 to-transparent rounded-3xl transform -rotate-1 blur-md -z-10" />

                <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-elevated border border-slate-100">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src="/sanjay_goswami_image.png"
                      alt="Sanjay Goswami - Insurance & Investment Advisor"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="p-4 bg-brand-navy rounded-xl mt-3 text-white text-center">
                    <h3 className="font-heading font-bold text-lg text-white">
                      {BUSINESS_CONFIG.name}
                    </h3>
                    <p className="text-xs text-brand-gold font-medium mt-0.5">
                      {BUSINESS_CONFIG.title}
                    </p>
                    <p className="text-[11px] text-slate-300 mt-1 flex items-center justify-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-gold" />
                      <span>{BUSINESS_CONFIG.location.full}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Personal Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold uppercase tracking-wider">
                <span>About Your Advisor</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
                "Hello, I'm Sanjay Goswami."
              </h1>

              <div className="prose prose-slate max-w-none text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
                <p className="font-medium text-brand-navy">
                  I help people explore insurance, investment-related services, and property opportunities based on their stated requirements. You can contact me directly to discuss the service you are interested in and understand the options available.
                </p>

                <p>
                  Navigating financial products can often feel overwhelming with complex terminology, endless policy brochures, and conflicting opinions. My role is to simplify the conversation: to listen to your goals, explain the fundamentals in plain everyday language, and assist you in selecting paths that align with your family's financial security.
                </p>

                <p>
                  Whether you are planning a safety net for medical emergencies, seeking term life protection for your dependents, exploring systematic investment in mutual funds, or looking for property opportunities in Prayagraj, I provide straightforward, transparent guidance.
                </p>
              </div>

              {/* Direct Connect Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Consultation with Sanjay Goswami')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm py-3.5 px-6 shadow"
                >
                  <MessageSquare className="w-4 h-4 fill-white mr-2" />
                  <span>Connect on WhatsApp</span>
                </a>

                <a
                  href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
                  className="btn-primary text-sm py-3.5 px-6"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Call {BUSINESS_CONFIG.phones.formattedPrimary}</span>
                </a>
              </div>

              {/* Draft Review Badge */}
              <div className="pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 italic">
                  * Note: Content and details on this profile represent proposed business copy subject to owner verification and applicable regulatory disclosures.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Advisory Principles & Methodology */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Advisory Principles
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The foundational values guiding every client consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl bg-brand-bg-alt border border-slate-200/80 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-navy shadow-sm flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-navy mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Scope Summary */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-card">
            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">
              Scope of Advisory & Assistance
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Sanjay Goswami's business focuses on three key areas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-brand-blue-light/40 border border-blue-100">
                <h4 className="font-heading font-bold text-brand-navy text-base mb-2">
                  1. Insurance Services
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Explaining health insurance and life term insurance policies, understanding hospital networks, waiting periods, and exclusions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <h4 className="font-heading font-bold text-brand-navy text-base mb-2">
                  2. Investment-Related Services
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Explaining mutual fund categories (Equity, Debt, Hybrid, ELSS, Retirement) and setting up disciplined SIP investment schedules.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100">
                <h4 className="font-heading font-bold text-brand-navy text-base mb-2">
                  3. Real Estate Assistance
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Local property coordination in Prayagraj for buyers, sellers, residential tenants, and commercial office seekers.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <span className="text-xs text-slate-500">
                Ready to review your personal requirements?
              </span>
              <Link to="/contact" className="btn-primary text-sm py-2.5 px-6">
                <span>Contact Sanjay Goswami</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers notice */}
      <section className="py-8 bg-white border-t border-slate-100">
        <div className="container-custom">
          <RiskNotice type="general" />
        </div>
      </section>
    </>
  );
}
