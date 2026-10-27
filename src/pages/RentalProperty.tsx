import { 
  Building2, 
  Home, 
  Store, 
  FileCheck, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Briefcase 
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, getTelUrl } from '../config/business';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';
import EnquiryForm from '../components/EnquiryForm';

export default function RentalProperty() {

  const rentalTypes = [
    {
      title: 'Residential Rentals',
      subtitle: 'Homes, Flats & Independent Floors',
      desc: 'Assistance for families, students, and working professionals relocating to Prayagraj seeking 1BHK, 2BHK, or 3BHK rental apartments or independent floors in peaceful residential localities.',
      icon: Home,
      features: ['Family & executive flats', 'Semi-furnished & furnished options', 'Clear deposit & lease terms'],
    },
    {
      title: 'Commercial Office Space',
      subtitle: 'Workspaces, Cabins & Bare-Shell Units',
      desc: 'Finding practical, accessible office premises in Prayagraj for doctors, advocates, chartered accountants, educational coaching centers, and branch offices.',
      icon: Briefcase,
      features: ['High-visibility corporate locations', 'Power backup & parking access', 'Flexible lease tenures'],
    },
    {
      title: 'Retail Shops & Showrooms',
      subtitle: 'Road-Facing Commercial Pockets',
      desc: 'Assisting business owners and brand franchises in securing retail storefronts and commercial parcels with optimal pedestrian footfall in prominent market zones like Allapur.',
      icon: Store,
      features: ['Main-road frontage', 'Commercial zoning compliance', 'Tailored fit-out periods'],
    },
  ];

  return (
    <>
      <SEOHead
        title="Rental & Office Property in Prayagraj & Allapur"
        description="Assistance for residential rental homes, commercial office space, and retail showroom leases in Prayagraj with Sanjay Goswami."
        canonicalPath="/services/rental-property"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 text-cyan-800 text-xs font-semibold uppercase tracking-wider border border-cyan-200">
              <Building2 className="w-4 h-4" />
              <span>Commercial & Residential Leases</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Rental & Office Property
            </h1>

            <p className="text-base sm:text-xl text-brand-blue font-medium">
              Find Suitable Residential Homes and Business Premises in Prayagraj
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you need a serene family rental in Allapur, an accessible clinic or consultancy office, or commercial retail space, share your specific requirements for direct coordination.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Rental Property Requirement')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3.5 px-6 shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white mr-2" />
                <span>Enquire About Rental Property</span>
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
            
            {/* Left Column: Rental Categories (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-4">
                  Rental Categories Supported
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We bridge the gap between discerning tenants and property owners, focusing on clear communication regarding rent expectations, maintenance terms, and documentation:
                </p>
              </div>

              {/* 3 Categories Showcase */}
              <div className="space-y-6">
                {rentalTypes.map((type, idx) => {
                  const Icon = type.icon;
                  return (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-lg text-brand-navy">
                            {type.title}
                          </h3>
                          <p className="text-xs text-brand-blue font-medium mb-2">
                            {type.subtitle}
                          </p>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                            {type.desc}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {type.features.map((feat, i) => (
                              <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700" />
                                <span>{feat}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Information to share */}
              <div className="p-6 rounded-2xl bg-brand-bg-alt border border-slate-200/80 space-y-3">
                <h3 className="text-lg font-heading font-bold text-brand-navy flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-brand-blue" />
                  <span>Details to Mention When You Enquire</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-1.5 flex-shrink-0" />
                    <span><strong>Preferred Location:</strong> Allapur, Civil Lines, Mumfordganj, George Town, etc.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-1.5 flex-shrink-0" />
                    <span><strong>Space Requirement:</strong> Carpet area in sq. ft. or number of rooms/cabins needed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-1.5 flex-shrink-0" />
                    <span><strong>Monthly Budget:</strong> Approximate range for monthly rental and security deposit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-1.5 flex-shrink-0" />
                    <span><strong>Move-In Timeline:</strong> Immediate, 15 days, or 1 month.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Enquiry Form (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <EnquiryForm initialService="Rental & Office Property" />
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
