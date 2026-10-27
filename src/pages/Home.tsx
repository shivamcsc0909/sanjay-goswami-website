import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  UserCheck,
  FileSearch,
  Handshake
} from 'lucide-react';
import { BUSINESS_CONFIG, getTelUrl, getWhatsAppUrl } from '../config/business';
import { FAQS_DATA } from '../data/servicesData';
import StorySlider from '../components/StorySlider';
import ServiceCard from '../components/ServiceCard';
import EnquiryModal from '../components/EnquiryModal';
import RiskNotice from '../components/RiskNotice';
import SEOHead from '../components/SEOHead';

export default function Home() {
  const [modalService, setModalService] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const previewFaqs = FAQS_DATA.slice(0, 5);

  const whyChoosePoints = [
    {
      icon: UserCheck,
      title: 'Direct Personal Communication',
      desc: 'Speak directly with Sanjay Goswami—no automated call centers or junior representatives. You get direct, accountable attention.',
    },
    {
      icon: FileSearch,
      title: 'Unbiased Requirement Assessment',
      desc: 'Discussions center strictly on your family budget and goals, rather than pushing pre-packaged products.',
    },
    {
      icon: ShieldCheck,
      title: 'Clear Fine-Print Explanations',
      desc: 'Understand policy exclusions, waiting periods, room rent limits, and market volatility in simple Hindi or English.',
    },
    {
      icon: Handshake,
      title: 'Honest Advisory Process',
      desc: 'Transparent guidance where available options and limitations are presented upfront without unrealistic promises.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose a Service',
      desc: 'Identify whether you need health protection, life cover, mutual funds / SIP, or property assistance in Prayagraj.',
      icon: CheckCircle2,
    },
    {
      number: '02',
      title: 'Share Your Requirement',
      desc: 'Send a quick WhatsApp message or call to share basic details like family age group, savings horizon, or property type.',
      icon: MessageSquare,
    },
    {
      number: '03',
      title: 'Discuss Available Options',
      desc: 'Review suitable policy options or property alternatives transparently before taking any decision.',
      icon: Sparkles,
    },
  ];

  return (
    <>
      <SEOHead
        title="Plan Today. Secure Tomorrow."
        description="Explore health insurance, life cover, mutual fund-related guidance, and real estate assistance with Sanjay Goswami in Prayagraj (Allapur), UP."
        canonicalPath="/"
      />

      {/* =========================================================================
          1. HERO SECTION (With genuine profile image, large heading, balanced layout)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-bg-alt via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline & Action Triggers (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light border border-blue-200/60 text-brand-blue text-xs font-semibold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span>Insurance • Investments • Real Estate</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
                Plan Today. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy">
                  Secure Tomorrow.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Explore insurance, mutual fund-related services, and property assistance with <strong className="text-brand-navy">Sanjay Goswami</strong> in Prayagraj. Understand your options in plain language and connect directly to discuss your requirements.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Initial Consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full sm:w-auto text-base py-4 px-7 shadow-lg hover:shadow-xl"
                >
                  <MessageSquare className="w-5 h-5 fill-white mr-2" />
                  <span>Talk to Sanjay</span>
                </a>

                <Link
                  to="/services"
                  className="btn-outline w-full sm:w-auto text-base py-4 px-7 border-slate-300 hover:border-brand-navy"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Direct Advisor Access</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Allapur, Prayagraj</span>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-brand-gold-dark flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">Clear Disclosures</span>
                </div>
              </div>

            </div>

            {/* Right Column: Profile Image Presentation (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full">
                
                {/* Visual decorative accents */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-navy/10 via-brand-gold/15 to-transparent rounded-3xl transform rotate-2 blur-lg -z-10" />

                {/* Main Image Frame */}
                <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-elevated border border-slate-100">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src="/sanjay_goswami_image.png"
                      alt="Sanjay Goswami - Insurance and Investment Advisor in Prayagraj"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                    
                    {/* Advisor Name Overlay Badge */}
                    <div className="absolute bottom-3 inset-x-3 bg-brand-navy/90 backdrop-blur-md text-white p-3.5 rounded-xl border border-white/10 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-heading font-bold text-base text-white">
                            {BUSINESS_CONFIG.name}
                          </div>
                          <div className="text-xs text-brand-gold font-medium">
                            {BUSINESS_CONFIG.title}
                          </div>
                        </div>
                        <a
                          href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
                          className="w-9 h-9 rounded-lg bg-brand-gold text-brand-navy flex items-center justify-center hover:bg-white transition"
                          title="Call Sanjay Goswami"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Experience / Local Credential Pill */}
                <div className="absolute -bottom-4 -left-4 sm:left-2 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200/90 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 font-medium">Serving Locally</div>
                    <div className="text-xs font-bold text-brand-navy">Prayagraj & Allapur</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE STORYTELLING SLIDER (Milestones & Journey Presentation)
         ========================================================================= */}
      <StorySlider />

      {/* =========================================================================
          3. SERVICES OVERVIEW (5 Visually Distinct Cards with Icons & Pictorials)
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
              <span>Comprehensive Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Advisory Solutions Designed Around You
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Clear, practical assistance across insurance, disciplined mutual funds, and local Prayagraj real estate.
            </p>
          </div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              id="health-insurance"
              title="Health Insurance"
              shortDesc="Explore health coverage options, hospitalisation benefits, and understand policy terms before purchasing."
              path="/services/health-insurance"
              category="insurance"
              highlights={[
                'Cashless hospital network access',
                'Pre & post hospitalisation coverage',
                'Family floater & individual options'
              ]}
              onEnquireClick={(title) => setModalService(title)}
            />

            <ServiceCard
              id="life-insurance"
              title="Life Insurance"
              shortDesc="Discuss term protection needs, income replacement, and policy options to protect your dependents."
              path="/services/life-insurance"
              category="insurance"
              highlights={[
                'Pure risk term insurance options',
                'Income replacement for nominees',
                'Clear evaluation of policy exclusions'
              ]}
              onEnquireClick={(title) => setModalService(title)}
            />

            <ServiceCard
              id="mutual-funds"
              title="Mutual Funds & SIP"
              shortDesc="Learn about equity, debt, hybrid, retirement funds, and disciplined Systematic Investment Plans (SIP)."
              path="/services/mutual-funds"
              category="investment"
              highlights={[
                'SIP investment method explained',
                'Equity, Debt, and Hybrid categories',
                'ELSS tax-saving funds (3-year lock-in)'
              ]}
              onEnquireClick={(title) => setModalService(title)}
            />

            <ServiceCard
              id="real-estate"
              title="Real Estate Assistance"
              shortDesc="Discuss residential property buying, selling, and property-related requirements in Prayagraj."
              path="/services/real-estate"
              category="real-estate"
              highlights={[
                'Residential property buying guidance',
                'Seller coordination and inquiry support',
                'Local Prayagraj & Allapur insights'
              ]}
              onEnquireClick={(title) => setModalService(title)}
            />

            <ServiceCard
              id="rental-property"
              title="Rental & Office Property"
              shortDesc="Enquire about residential rental flats, commercial office setups, and retail property opportunities."
              path="/services/rental-property"
              category="real-estate"
              highlights={[
                'Flats and independent house rentals',
                'Furnished & bare-shell office spaces',
                'Commercial showroom availability'
              ]}
              onEnquireClick={(title) => setModalService(title)}
            />

            {/* 6th Card: Direct Quick Consultation Card */}
            <div className="card-standard p-8 bg-gradient-to-br from-brand-navy to-brand-navy-light text-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md text-brand-gold flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">
                  Have a Custom Requirement?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Not sure which service suits your current circumstances? Reach out for an honest, pressure-free discussion.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <a
                  href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'General Consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-xs sm:text-sm py-3"
                >
                  <MessageSquare className="w-4 h-4 fill-white mr-2" />
                  <span>Message on WhatsApp</span>
                </a>
                <a
                  href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold mr-2" />
                  <span>Call {BUSINESS_CONFIG.phones.formattedPrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CONNECT WITH SANJAY GOSWAMI? (Honest, Service-Oriented Pillars)
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-brand-bg-alt border-y border-slate-200/80">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 text-brand-navy text-xs font-semibold uppercase tracking-wider mb-4 border border-brand-gold/30">
              <span>Client-First Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Why Connect with Sanjay Goswami?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              An approachable advisory service rooted in straightforward discussions, honest explanations, and direct personal availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-light text-brand-navy flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-navy mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. HOW IT WORKS (Simple 3-Step Visual Process)
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Simple & Transparent</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Three straightforward steps to explore insurance options, mutual fund fundamentals, or property requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative bg-slate-50/80 rounded-2xl p-8 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-extrabold text-brand-gold/60 font-heading">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-blue">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 text-xs text-slate-500 font-medium">
                    Step {idx + 1} of 3
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto italic">
              * Note: Actual product availability, underwriting suitability, and final terms depend on the relevant insurance company, asset management company (AMC), or property owner.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LOCAL AREA & CONTACT HIGHLIGHT (Prayagraj / Allapur)
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-brand-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-brand-gold text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Local Presence in Prayagraj</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Located in Allapur, Serving Prayagraj & Nearby Regions
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Benefit from direct local access. Whether you prefer an in-person meeting in Prayagraj or a phone consultation, Sanjay Goswami is reachable on both primary and alternative contact lines.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
                className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition text-white"
              >
                <div>
                  <div className="text-xs text-brand-gold font-medium">Primary Contact</div>
                  <div className="text-base font-bold">{BUSINESS_CONFIG.phones.formattedPrimary}</div>
                </div>
                <Phone className="w-5 h-5 text-brand-gold" />
              </a>

              <a
                href={getTelUrl(BUSINESS_CONFIG.phones.alternative)}
                className="flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition text-white"
              >
                <div>
                  <div className="text-xs text-brand-gold font-medium">Alternative Contact</div>
                  <div className="text-base font-bold">{BUSINESS_CONFIG.phones.formattedAlternative}</div>
                </div>
                <Phone className="w-5 h-5 text-brand-gold" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FAQ PREVIEW (Accordion for common questions)
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Clear answers to the most common queries about health coverage, life protection, and mutual funds.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {previewFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-base sm:text-lg text-brand-navy">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-blue' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-blue transition group"
            >
              <span>View All Questions & Resources</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CALL TO ACTION (Conversion Section)
         ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E7B52C_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-semibold tracking-wider uppercase border border-white/10">
            <span>Direct Advisory Connection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Requirements
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you want to understand health insurance waiting periods, start a disciplined monthly SIP, or enquire about property in Prayagraj, Sanjay Goswami is ready to guide you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={getTelUrl(BUSINESS_CONFIG.phones.primary)}
              className="btn-gold w-full sm:w-auto text-base py-4 px-8"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Now ({BUSINESS_CONFIG.phones.formattedPrimary})</span>
            </a>

            <a
              href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Website Enquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto text-base py-4 px-8"
            >
              <MessageSquare className="w-4 h-4 fill-white mr-2" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Regulatory Banner */}
      <div className="bg-slate-50 py-6 border-t border-slate-200">
        <div className="container-custom">
          <RiskNotice type="general" />
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={!!modalService}
        onClose={() => setModalService(null)}
        serviceTitle={modalService || undefined}
      />
    </>
  );
}
