import { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  BookOpen, 
  MessageSquare
} from 'lucide-react';
import { FAQS_DATA } from '../data/servicesData';
import { BUSINESS_CONFIG, getWhatsAppUrl } from '../config/business';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<string | null>('faq-1');

  const glossaryTerms = [
    {
      term: 'Sum Insured',
      domain: 'Health Insurance',
      definition: 'The maximum financial limit payable by an insurer towards eligible hospitalisation and medical expenses in a given policy year.',
    },
    {
      term: 'Sum Assured',
      domain: 'Life Insurance',
      definition: 'The guaranteed fixed amount paid to the designated nominee(s) in the unfortunate event of the insured person passing away during the policy term.',
    },
    {
      term: 'Net Asset Value (NAV)',
      domain: 'Mutual Funds',
      definition: 'The per-unit market value of a mutual fund scheme, calculated by taking total asset value minus liabilities and dividing by outstanding units.',
    },
    {
      term: 'Rupee-Cost Averaging',
      domain: 'Mutual Funds / SIP',
      definition: 'The process of purchasing more mutual fund units when market prices drop and fewer units when prices rise by maintaining regular periodic contributions.',
    },
    {
      term: 'Waiting Period',
      domain: 'Health Insurance',
      definition: 'A stipulated duration after policy inception during which certain illnesses or pre-existing diseases are not covered for claims.',
    },
    {
      term: 'Stamp Duty & Registration',
      domain: 'Real Estate',
      definition: 'Government levies mandated under the Registration Act to legally record real estate ownership transfer with the Sub-Registrar in Uttar Pradesh.',
    },
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <>
      <SEOHead
        title="Resources & Financial FAQs | Sanjay Goswami"
        description="Beginner-friendly educational resources, frequently asked questions, and terminology guide for insurance, mutual funds, and real estate in Prayagraj."
        canonicalPath="/resources"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-light text-brand-blue text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>Knowledge Base & FAQs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Financial Concepts Explained in Plain Language
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everyday answers to help you understand health insurance, life protection, mutual fund structures, and property enquiries without complicated jargon.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search FAQs (e.g. SIP, waiting period, ELSS, term insurance)..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-blue-light shadow-sm bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === 'all'
                  ? 'bg-brand-navy text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setActiveCategory('health-insurance')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === 'health-insurance'
                  ? 'bg-brand-navy text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Health Insurance
            </button>
            <button
              onClick={() => setActiveCategory('life-insurance')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === 'life-insurance'
                  ? 'bg-brand-navy text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Life Insurance
            </button>
            <button
              onClick={() => setActiveCategory('mutual-funds')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === 'mutual-funds'
                  ? 'bg-brand-navy text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Mutual Funds & SIP
            </button>
            <button
              onClick={() => setActiveCategory('real-estate')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === 'real-estate'
                  ? 'bg-brand-navy text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Real Estate
            </button>
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqIndex === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 bg-slate-50/70 hover:bg-slate-50 transition"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading font-semibold text-base sm:text-lg text-brand-navy leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-brand-blue' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-5 sm:p-6 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed space-y-3">
                        <p>{faq.answer}</p>
                        <div className="pt-2 flex items-center justify-end">
                          <a
                            href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, faq.question)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>Ask Sanjay ji about this</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No matching questions found for "{searchTerm}".</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="mt-3 text-xs font-semibold text-brand-blue hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Jargon Buster Glossary */}
      <section className="py-16 bg-brand-bg-alt border-y border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Financial Jargon Buster
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Key terminology simplified so you always understand what you are discussing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glossaryTerms.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-base text-brand-navy">
                    {item.term}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {item.domain}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Notice Banner */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <RiskNotice 
            type="general" 
            customText="Educational content provided on this page is for general awareness only and does not constitute personalized financial, legal, or investment advice. Specific product recommendations require an individual suitability and risk evaluation."
          />
        </div>
      </section>
    </>
  );
}
