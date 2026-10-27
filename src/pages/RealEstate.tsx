import { 
  Home, 
  Search, 
  Tag, 
  Compass, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  FileCheck2 
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, getTelUrl } from '../config/business';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';
import EnquiryForm from '../components/EnquiryForm';

export default function RealEstate() {

  const realEstatePathways = [
    {
      title: 'Buying Residential Property',
      desc: 'Guidance for home seekers looking to purchase residential plots, apartments, or independent houses in Prayagraj. We help align your budget with emerging neighborhoods and coordinate initial site visits.',
      icon: Search,
      action: 'Enquire for Buying',
    },
    {
      title: 'Selling Property in Prayagraj',
      desc: 'Assistance for property owners in Prayagraj wishing to sell residential or commercial land. Connect with genuine, verified prospective buyers without chaotic spam calls.',
      icon: Tag,
      action: 'Enquire for Selling',
    },
    {
      title: 'Property Investment Discussion',
      desc: 'Explore upcoming civil growth corridors, highway connectivity zones, and long-term land potential across Prayagraj and adjoining suburban tracts.',
      icon: Compass,
      action: 'Discuss Investment',
    },
    {
      title: 'Local Allapur & City Guidance',
      desc: 'In-depth familiarity with Allapur, Civil Lines, George Town, and nearby sectors—evaluating road widths, water access, and neighborhood amenities.',
      icon: MapPin,
      action: 'Ask About Localities',
    },
  ];

  return (
    <>
      <SEOHead
        title="Real Estate Assistance in Prayagraj & Allapur"
        description="Discuss residential property buying, selling, and property investment requirements in Prayagraj with Sanjay Goswami."
        canonicalPath="/services/real-estate"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider border border-amber-200">
              <Home className="w-4 h-4" />
              <span>Local Property Assistance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Real Estate Assistance in Prayagraj
            </h1>

            <p className="text-base sm:text-xl text-brand-blue font-medium">
              Transparent Support for Property Buying, Selling & Investment Discussions
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Navigating property transactions in Prayagraj requires reliable local insights and honest coordination. Connect directly with Sanjay Goswami to discuss your residential or land requirements.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Property Requirements in Prayagraj')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3.5 px-6 shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white mr-2" />
                <span>Discuss Property Requirements</span>
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
            
            {/* Left Column: Pathways (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-4">
                  How We Assist with Real Estate
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Real estate assistance by Sanjay Goswami is centered around honest consultation and local facilitation. Rather than listing hundreds of unverified ads, we listen to your specific criteria and guide you through real market conditions:
                </p>
              </div>

              {/* 4 Pathways Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {realEstatePathways.map((pathway, idx) => {
                  const Icon = pathway.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-brand-navy mb-2">
                          {pathway.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                          {pathway.desc}
                        </p>
                      </div>
                      <a
                        href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, pathway.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-navy transition mt-2"
                      >
                        <span>{pathway.action}</span>
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Due Diligence Emphasis */}
              <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-950 font-heading font-bold text-base sm:text-lg">
                  <FileCheck2 className="w-5 h-5 text-amber-700" />
                  <span>Emphasis on Due Diligence & Legal Verification</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  Sanjay Goswami strongly advises every client to perform independent legal verification before executing any sale agreement or paying advance tokens:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-amber-900/90 pt-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>Verify 30-year title deeds and mutation records with a qualified local advocate.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>Check Prayagraj Development Authority (PDA) master plan zoning and sanctioned layout approvals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                    <span>Conduct on-ground boundary demarcation and physically confirm possession status.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Enquiry Form (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <EnquiryForm initialService="Real Estate Assistance" />
            </div>

          </div>
        </div>
      </section>

      {/* Advisory Notice Banner */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <RiskNotice type="real-estate" />
        </div>
      </section>
    </>
  );
}
