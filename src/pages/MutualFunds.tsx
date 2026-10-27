import { 
  TrendingUp, 
  LineChart, 
  Layers, 
  PieChart, 
  Clock, 
  Award, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Info,
  CalendarCheck
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppUrl, getTelUrl } from '../config/business';
import { MUTUAL_FUND_CATEGORIES } from '../data/servicesData';
import SEOHead from '../components/SEOHead';
import RiskNotice from '../components/RiskNotice';
import EnquiryForm from '../components/EnquiryForm';

export default function MutualFunds() {
  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    Layers,
    PieChart,
    Clock,
    Award,
  };

  return (
    <>
      <SEOHead
        title="Mutual Funds & SIP Guidance in Prayagraj"
        description="Learn about Equity, Debt, Hybrid, ELSS, and Retirement mutual funds in plain language with Sanjay Goswami in Prayagraj. Understand SIP and market risks."
        canonicalPath="/services/mutual-funds"
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-brand-bg-alt to-white py-14 lg:py-20 border-b border-slate-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wider border border-blue-200">
              <TrendingUp className="w-4 h-4" />
              <span>Wealth & Disciplined Investing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Mutual Funds & SIP Advisory
            </h1>

            <p className="text-base sm:text-xl text-brand-blue font-medium">
              Understand Wealth Building, Market Dynamics, and Disciplined Investing
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Demystify mutual funds without confusing financial jargon. Learn how Equity, Debt, and Hybrid funds function, why SIP is a disciplined process rather than a magic scheme, and how risk aligns with your financial horizon.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppUrl(BUSINESS_CONFIG.phones.primary, 'Mutual Funds & SIP Enquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm py-3.5 px-6 shadow"
              >
                <MessageSquare className="w-4 h-4 fill-white mr-2" />
                <span>Enquire About Mutual Funds</span>
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
            
            {/* Left Column: Educational Breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* What is a Mutual Fund? */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-navy mb-4">
                  What is a Mutual Fund?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                  A mutual fund is an investment vehicle where money pooled from numerous individual investors is professionally managed by experienced fund managers. Rather than putting all eggs in one basket, the fund diversifies the pool across a portfolio of multiple company shares (equities), government bonds, or corporate debt instruments.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every investor owns units corresponding to their invested amount. As the underlying assets fluctuate in market value, the Net Asset Value (NAV) of the fund changes accordingly.
                </p>
              </div>

              {/* Clarifying SIP (Crucial Requirement) */}
              <div className="p-6 sm:p-7 rounded-2xl bg-brand-blue-light/60 border border-blue-200/80 space-y-3">
                <div className="flex items-center gap-2.5 text-brand-navy font-heading font-bold text-lg">
                  <CalendarCheck className="w-5 h-5 text-brand-blue" />
                  <span>Understanding SIP: A Method, Not a Product</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  A common misconception is that "SIP" is a separate financial product with guaranteed returns. In reality:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Systematic Investment Plan (SIP)</strong> is simply a convenient payment facility where you invest a predetermined sum (e.g. ₹1,000, ₹2,500, or ₹5,000) every month on an automated date into your chosen mutual fund scheme.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Rupee-Cost Averaging:</strong> When markets are high, your fixed instalment purchases fewer units; when markets correct or dip, your instalment automatically purchases more units. Over time, this smooths out purchase costs without needing to predict market highs or lows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span><strong>Compounding Benefit:</strong> Reinvesting returns over longer horizons (7+ years) allows compounding to demonstrate its full mathematical strength.</span>
                  </li>
                </ul>
              </div>

              {/* Fund Categories Showcase */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-navy">
                  Mutual Fund Categories Explained
                </h3>
                <p className="text-sm text-slate-600">
                  Different categories carry distinct risk-return profiles. Sanjay Goswami explains these categories to help you understand which aligns with your risk tolerance:
                </p>

                <div className="space-y-4">
                  {MUTUAL_FUND_CATEGORIES.map((cat, idx) => {
                    const CatIcon = iconMap[cat.icon] || LineChart;
                    return (
                      <div key={idx} className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-slate-50 transition">
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-xl bg-white text-brand-navy shadow-sm border border-slate-200 flex items-center justify-center flex-shrink-0">
                            <CatIcon className="w-5 h-5 text-brand-blue" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                              <h4 className="font-heading font-bold text-base text-brand-navy">
                                {cat.name}
                              </h4>
                              <div className="flex items-center gap-2 text-xs">
                                <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 font-medium">
                                  Horizon: {cat.horizon}
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
                                  Risk: {cat.risk}
                                </span>
                              </div>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {cat.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ELSS & Tax Clarification */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-950 font-heading font-bold text-base">
                  <Info className="w-5 h-5 text-amber-700" />
                  <span>Important Note on ELSS & Tax Deductions</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  Equity Linked Savings Schemes (ELSS) qualify for tax deduction under Section 80C of the Income Tax Act up to the prescribed ceiling of ₹1.5 Lakh per year (if choosing the Old Tax Regime). ELSS investments have a mandatory 3-year lock-in period from the date of each SIP installment. Tax treatment is subject to prevailing tax laws and individual tax circumstances.
                </p>
              </div>

            </div>

            {/* Right Column: Enquiry Form (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <EnquiryForm initialService="Mutual Funds & SIP" />
            </div>

          </div>
        </div>
      </section>

      {/* Prominent Statutory Risk Notice */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container-custom">
          <RiskNotice 
            type="mutual-fund" 
            customText="Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns. No scheme promises guaranteed returns, assured capital preservation, or fixed income. Scheme suitability must be evaluated in accordance with individual risk appetite and financial horizons."
          />
        </div>
      </section>
    </>
  );
}
