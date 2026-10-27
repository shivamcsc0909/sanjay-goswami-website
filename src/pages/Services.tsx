import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  ShieldCheck, 
  TrendingUp, 
  Home, 
  Building2, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SERVICES_DETAILED } from '../data/servicesData';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';
import EnquiryModal from '../components/EnquiryModal';

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'insurance' | 'investment' | 'real-estate'>('all');
  const [modalService, setModalService] = useState<string | null>(null);

  const services = [
    {
      ...SERVICES_DETAILED['health-insurance'],
      category: 'insurance',
      icon: HeartPulse,
      path: '/services/health-insurance',
    },
    {
      ...SERVICES_DETAILED['life-insurance'],
      category: 'insurance',
      icon: ShieldCheck,
      path: '/services/life-insurance',
    },
    {
      ...SERVICES_DETAILED['mutual-funds'],
      category: 'investment',
      icon: TrendingUp,
      path: '/services/mutual-funds',
    },
    {
      ...SERVICES_DETAILED['real-estate'],
      category: 'real-estate',
      icon: Home,
      path: '/services/real-estate',
    },
    {
      ...SERVICES_DETAILED['rental-property'],
      category: 'real-estate',
      icon: Building2,
      path: '/services/rental-property',
    },
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(s => s.category === activeFilter);

  return (
    <>
      <SEOHead
        title="Services Overview | Insurance, Mutual Funds & Real Estate"
        description="Comprehensive advisory services by Sanjay Goswami in Prayagraj: Health Insurance, Life Insurance, Mutual Funds & SIP, Real Estate, and Rental Property assistance."
        canonicalPath="/services"
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <span>Client Advisory Verticals</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Our Advisory Services
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Honest, personalized guidance across healthcare security, life protection, disciplined mutual fund investments, and Prayagraj property assistance.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === 'all'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              All Services (5)
            </button>
            <button
              onClick={() => setActiveFilter('insurance')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === 'insurance'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Insurance Protection
            </button>
            <button
              onClick={() => setActiveFilter('investment')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === 'investment'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Mutual Funds & SIP
            </button>
            <button
              onClick={() => setActiveFilter('real-estate')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeFilter === 'real-estate'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              Real Estate & Rental
            </button>
          </div>
        </div>
      </section>

      {/* Services List with Rich Breakdown */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom space-y-16">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-3xl border border-slate-200/90 shadow-card p-8 sm:p-12 hover:shadow-card-hover transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Core Description (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-blue-light text-brand-blue flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-brand-gold-dark uppercase tracking-wider block">
                          {service.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-brand-blue font-medium leading-relaxed">
                      {service.headline}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.overview}
                    </p>

                    {/* Key features pills */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3">
                        Key Coverage & Discussion Points:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.keyFeatures.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="font-medium">{feat.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={service.path}
                        className="btn-primary text-sm py-3 px-6"
                      >
                        <span>Learn Full Details</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setModalService(service.title)}
                        className="btn-whatsapp text-sm py-3 px-6"
                      >
                        <MessageSquare className="w-4 h-4 fill-white mr-2" />
                        <span>Enquire on WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: "Who Needs This" & "Next Steps" (5 cols) */}
                  <div className="lg:col-span-5 bg-brand-bg-alt rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
                    <div>
                      <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-brand-gold-dark" />
                        <span>Who May Want to Enquire</span>
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {service.whoNeedsThis.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                        <span>What We Discuss During Enquiry</span>
                      </h3>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {service.discussionPoints.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 italic">
                      * Consultations are purely advisory and requirement-focused.
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Advisory Notice */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <RiskNotice type="general" />
        </div>
      </section>

      <EnquiryModal
        isOpen={!!modalService}
        onClose={() => setModalService(null)}
        serviceTitle={modalService || undefined}
      />
    </>
  );
}
