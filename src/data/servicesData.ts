export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  headline: string;
  subtitle: string;
  iconName: string;
  badge: string;
  overview: string;
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  whoNeedsThis: string[];
  discussionPoints: string[];
  nextSteps: string[];
  disclaimer?: string;
  ctaText: string;
}

export interface StorySlide {
  id: string;
  stage: string;
  title: string;
  tagline: string;
  narrative: string;
  icon: string;
  primarySolution: string;
  keyHighlights: string[];
  serviceLink: string;
  serviceName: string;
  accentColor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'health-insurance' | 'life-insurance' | 'mutual-funds' | 'real-estate';
}

export const STORY_SLIDES: StorySlide[] = [
  {
    id: 'career-start',
    stage: 'Milestone 01',
    title: 'Starting Your Career & Financial Footing',
    tagline: 'Build strong financial discipline early with compounding & emergency health cover.',
    narrative: 'When starting your professional journey, the two smartest steps are creating a basic medical shield so hospital bills never wipe out your savings, and starting small, disciplined monthly SIPs.',
    icon: 'Briefcase',
    primarySolution: 'Health Insurance + Systematic Investment Plan (SIP)',
    keyHighlights: [
      'Begin compounding early even with modest monthly contributions',
      'Secure personal health coverage independent of employer policy',
      'Understand fund risk profiles before allocating funds'
    ],
    serviceLink: '/services/mutual-funds',
    serviceName: 'Mutual Funds & SIP',
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'family-protection',
    stage: 'Milestone 02',
    title: 'Protecting Your Growing Family',
    tagline: 'Ensure your dependents are safeguarded against unforeseen life events.',
    narrative: 'When family members depend on your earnings, pure term life insurance and comprehensive family floater health plans form the indispensable safety net for peace of mind.',
    icon: 'ShieldCheck',
    primarySolution: 'Pure Term Life Insurance + Family Floater Health Cover',
    keyHighlights: [
      'High sum-assured life cover at affordable premium rates',
      'Cashless hospital network access for all family members',
      'Clear evaluation of policy waiting periods and exclusions'
    ],
    serviceLink: '/services/life-insurance',
    serviceName: 'Life Insurance',
    accentColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'wealth-growth',
    stage: 'Milestone 03',
    title: 'Growing Wealth & Beating Inflation',
    tagline: 'Balance risk and growth through diversified mutual fund strategies.',
    narrative: 'Traditional fixed deposits may struggle to beat rising inflation. Explore equity, debt, and balanced hybrid mutual funds aligned to your personal horizon and risk comfort.',
    icon: 'TrendingUp',
    primarySolution: 'Diversified Mutual Funds (Equity, Debt & Hybrid)',
    keyHighlights: [
      'Portfolio diversification across asset classes',
      'Systematic investing to smooth out market volatility',
      'Transparent risk disclosures tailored to your timeline'
    ],
    serviceLink: '/services/mutual-funds',
    serviceName: 'Mutual Funds',
    accentColor: 'from-amber-600 to-yellow-700',
  },
  {
    id: 'retirement-tax',
    stage: 'Milestone 04',
    title: 'Tax-Saving & Long-Term Retirement',
    tagline: 'Optimize tax liabilities under Section 80C and plan long-term retirement security.',
    narrative: 'Discover Equity Linked Savings Schemes (ELSS) with a 3-year lock-in period and retirement-oriented funds designed to support financial self-reliance in your golden years.',
    icon: 'Landmark',
    primarySolution: 'ELSS Tax-Saving Schemes & Retirement Funds',
    keyHighlights: [
      'Potential tax deduction under applicable income tax provisions',
      'Lowest lock-in period among Section 80C options (3 years)',
      'Disciplined retirement accumulation horizon'
    ],
    serviceLink: '/services/mutual-funds',
    serviceName: 'Tax-Saving & Retirement',
    accentColor: 'from-purple-600 to-indigo-800',
  },
  {
    id: 'property-goals',
    stage: 'Milestone 05',
    title: 'Property & Commercial Space in Prayagraj',
    tagline: 'Find the right residential property, commercial office, or rental space.',
    narrative: 'Whether buying your family home in Prayagraj, leasing office space for business expansion, or seeking rental opportunities in Allapur, receive straightforward local guidance.',
    icon: 'Building2',
    primarySolution: 'Real Estate & Rental Assistance in Prayagraj',
    keyHighlights: [
      'Honest requirement assessment for buyers and tenants',
      'Local market understanding of Prayagraj and Allapur',
      'Transparent discussion on verification and terms'
    ],
    serviceLink: '/services/real-estate',
    serviceName: 'Real Estate Assistance',
    accentColor: 'from-cyan-600 to-blue-800',
  },
];

export const SERVICES_DETAILED: Record<string, ServiceDetail> = {
  'health-insurance': {
    id: 'health-insurance',
    slug: 'health-insurance',
    title: 'Health Insurance',
    headline: 'Shield Your Savings Against Medical Inflation and Emergencies',
    subtitle: 'Understand hospitalisation benefits, family floater options, waiting periods, and network hospital facilities in Prayagraj.',
    iconName: 'HeartPulse',
    badge: 'Medical Protection',
    overview: 'A single planned surgery or sudden illness can significantly deplete hard-earned savings. Health insurance is a financial safety net designed to cover medical, surgical, and hospitalisation expenses. Sanjay Goswami assists you in understanding the fine print—including pre-existing disease waiting periods, co-payments, room rent limits, and cashless hospital networks—so you choose coverage that genuinely supports your family when medical needs arise.',
    keyFeatures: [
      {
        title: 'Cashless Hospitalisation',
        description: 'Access treatment at affiliated network hospitals in Prayagraj and across India without upfront out-of-pocket medical bills.',
        icon: 'CreditCard',
      },
      {
        title: 'Pre & Post Hospitalisation',
        description: 'Coverage often includes diagnostic tests, doctor consultations, and prescribed medications before and after hospital discharge.',
        icon: 'Stethoscope',
      },
      {
        title: 'Family Floater Option',
        description: 'Cover yourself, your spouse, and dependent children under a single unified sum insured for optimal premium value.',
        icon: 'Users',
      },
      {
        title: 'Daycare Procedures',
        description: 'Modern medical procedures that require less than 24 hours of hospitalisation due to advanced technological care.',
        icon: 'Activity',
      },
    ],
    whoNeedsThis: [
      'Salaried professionals seeking personal coverage beyond basic corporate employer limits',
      'Self-employed individuals and business owners requiring dedicated medical security',
      'Families planning comprehensive protection for parents and growing children',
      'Senior citizens looking for targeted health protection against age-related ailments'
    ],
    discussionPoints: [
      'Current family health status and pre-existing medical conditions',
      'Existing corporate insurance limits and potential coverage gaps',
      'Understanding initial waiting periods, specific ailment waiting periods, and PED exclusions',
      'Room-rent sub-limits, ICU capping, and restoration benefits'
    ],
    nextSteps: [
      'Click to connect directly via Call or WhatsApp',
      'Share details on family age group and preferred coverage amount',
      'Review available policy structures and terms transparently',
      'Decide on the most appropriate policy without high-pressure sales'
    ],
    disclaimer: 'Insurance is a subject matter of solicitation. Policy terms, conditions, waiting periods, and exclusions are governed solely by the respective insurance provider policy document. No guarantee of claim approval is made.',
    ctaText: 'Enquire About Health Insurance',
  },
  'life-insurance': {
    id: 'life-insurance',
    slug: 'life-insurance',
    title: 'Life Insurance',
    headline: 'Uncompromised Financial Security for the People You Love',
    subtitle: 'Clarify term life coverage, financial dependency calculations, and policy terms to protect your family\'s future.',
    iconName: 'ShieldCheck',
    badge: 'Family Protection',
    overview: 'Life insurance is fundamentally about safeguarding your family\'s standard of living if you are no longer there to provide for them. Sanjay Goswami helps individuals in Prayagraj unpack the difference between pure term protection (which offers maximum financial cover at minimal cost) and traditional endowment structures, ensuring you make well-informed decisions without confusion.',
    keyFeatures: [
      {
        title: 'Pure Term Protection',
        description: 'Maximum financial sum assured provided to nominees in the unfortunate event of the policyholder\'s demise during policy tenure.',
        icon: 'Shield',
      },
      {
        title: 'Income Replacement',
        description: 'Help your spouse and children continue their education, maintain living standards, and repay any pending liabilities.',
        icon: 'Banknote',
      },
      {
        title: 'Critical Illness Riders',
        description: 'Optional add-ons providing a lump-sum payout upon diagnosis of specified critical ailments to fund intensive recovery.',
        icon: 'HeartHandshake',
      },
      {
        title: 'Flexible Premium Terms',
        description: 'Options for regular annual premiums, limited pay terms, or tailored tenure matching your active earning years.',
        icon: 'CalendarClock',
      },
    ],
    whoNeedsThis: [
      'Primary breadwinners with financial dependents (spouse, children, or elderly parents)',
      'Individuals with home loans, personal loans, or business liabilities',
      'Parents planning long-term funding for their children\'s education and milestones',
      'Young earners seeking locked-in lower premium rates early in their working lives'
    ],
    discussionPoints: [
      'Calculating human life value (HLV) and debt coverage requirements',
      'Selecting an appropriate policy tenure that covers until retirement',
      'Evaluating optional riders such as accidental disability and critical illness',
      'Ensuring truthful disclosure of lifestyle habits (e.g. smoking) to prevent claim disputes'
    ],
    nextSteps: [
      'Initiate a direct consultation via phone or WhatsApp',
      'Discuss your dependency timeline and existing loan liabilities',
      'Review side-by-side policy parameters and insurer claim settlement practices',
      'Finalize an informed application with complete disclosure'
    ],
    disclaimer: 'Insurance products are underwritten by authorized life insurers. All benefits, terms, and conditions are subject to the policy contract. Please read the sales brochure carefully before concluding a sale.',
    ctaText: 'Discuss Life Insurance Options',
  },
  'mutual-funds': {
    id: 'mutual-funds',
    slug: 'mutual-funds',
    title: 'Mutual Funds & SIP',
    headline: 'Disciplined Investing to Beat Inflation and Build Long-Term Wealth',
    subtitle: 'Understand Equity, Debt, Hybrid, ELSS, and Retirement funds in simple, transparent terms.',
    iconName: 'TrendingUp',
    badge: 'Wealth & Investing',
    overview: 'Mutual funds pool money from multiple investors to invest in diversified baskets of stocks, bonds, or money market instruments managed by professional asset management companies (AMCs). Sanjay Goswami provides clear, jargon-free explanations of how different fund categories operate, how Systematic Investment Plans (SIP) help mitigate market timing risk, and what time horizon suits each financial objective.',
    keyFeatures: [
      {
        title: 'Systematic Investment Plan (SIP)',
        description: 'Invest a fixed amount monthly into chosen mutual funds, taking advantage of rupee-cost averaging and compounding.',
        icon: 'Coins',
      },
      {
        title: 'Equity Funds (Growth)',
        description: 'Invest primarily in shares of companies for long-term capital appreciation, suitable for 5+ year horizons.',
        icon: 'LineChart',
      },
      {
        title: 'Debt Funds (Stability)',
        description: 'Invest in fixed-income securities like government bonds and corporate debentures for relatively lower volatility.',
        icon: 'Layers',
      },
      {
        title: 'ELSS (Tax Saving)',
        description: 'Equity Linked Savings Schemes offer potential tax deductions under Section 80C with a mandatory 3-year lock-in.',
        icon: 'FileBadge',
      },
    ],
    whoNeedsThis: [
      'First-time investors wanting to start small with disciplined monthly SIPs (e.g. ₹500, ₹1000/mo)',
      'Individuals aiming for long-term wealth accumulation for goals 5 to 15 years away',
      'Taxpayers looking for Section 80C eligible options with equity growth potential',
      'Savers seeking options beyond traditional fixed deposits for beating inflation'
    ],
    discussionPoints: [
      'Aligning investment horizon with appropriate fund category (equity vs debt vs hybrid)',
      'Understanding that SIP is a method of regular investing, not a guaranteed return instrument',
      'Risk appetite evaluation and portfolio diversification principles',
      'Taxation rules applicable on short-term and long-term capital gains'
    ],
    nextSteps: [
      'Connect directly to discuss your financial timeline and comfort with market fluctuations',
      'Review educational material on equity vs debt allocation',
      'Clarify KYC documentation (PAN, Aadhaar, Bank Details)',
      'Establish a disciplined SIP schedule aligned to your monthly cash flows'
    ],
    disclaimer: 'Mutual Fund investments are subject to market risks, read all scheme related documents carefully. Past performance is not indicative of future returns. No guaranteed returns or assured gains are promised.',
    ctaText: 'Enquire About Mutual Funds',
  },
  'real-estate': {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate Assistance',
    headline: 'Local Property Guidance for Buying, Selling & Investing in Prayagraj',
    subtitle: 'Transparent property-related support in Allapur and surrounding Prayagraj neighborhoods.',
    iconName: 'Home',
    badge: 'Property Advisory',
    overview: 'Navigating real estate transactions requires reliable local knowledge, honest requirement evaluation, and patient coordination. Sanjay Goswami assists clients in Prayagraj with property search, buyer-seller connection, and property investment discussions, focusing on straightforward communication and genuine client priorities.',
    keyFeatures: [
      {
        title: 'Property Buying Support',
        description: 'Assistance in identifying residential plots, apartments, and independent houses fitting your budget and preferred locality.',
        icon: 'Search',
      },
      {
        title: 'Property Selling Assistance',
        description: 'Guidance on presenting your property and connecting with prospective genuine buyers in Prayagraj.',
        icon: 'Tag',
      },
      {
        title: 'Investment Advisory',
        description: 'Discussing emerging growth corridors and developmental prospects across Prayagraj and Allapur.',
        icon: 'Compass',
      },
      {
        title: 'Local Area Insight',
        description: 'Familiarity with neighbourhood amenities, connectivity, civil infrastructure, and neighborhood appeal.',
        icon: 'MapPin',
      },
    ],
    whoNeedsThis: [
      'Home seekers looking to purchase their primary family residence in Prayagraj',
      'Property owners wishing to sell residential land or built-up property smoothly',
      'Investors exploring capital appreciation opportunities in upcoming suburban zones',
      'Individuals seeking an honest local contact for property coordination'
    ],
    discussionPoints: [
      'Target budget, preferred micro-locations, and timeline for purchase or sale',
      'Importance of independent legal verification, title clearance, and registry processes',
      'Realistic prevailing market rates vs inflated asking expectations',
      'Financing considerations and home loan readiness'
    ],
    nextSteps: [
      'Call or WhatsApp Sanjay Goswami with your specific property requirement',
      'Define parameters: residential plot, flat, independent house, or commercial parcel',
      'Schedule a local discussion or site exploration in Prayagraj',
      'Conduct independent due diligence before committing financial tokens'
    ],
    disclaimer: 'Real estate services provided as local facilitation and coordination. Property availability, prices, and title validity are subject to independent legal verification and actual owner negotiations. No guaranteed property appreciation or price predictions are made.',
    ctaText: 'Discuss Property Requirements',
  },
  'rental-property': {
    id: 'rental-property',
    slug: 'rental-property',
    title: 'Rental & Office Property',
    headline: 'Find the Right Residential, Office & Commercial Rental Spaces',
    subtitle: 'Assisting tenants and property owners with rental homes, corporate offices, and retail showrooms in Prayagraj.',
    iconName: 'Building',
    badge: 'Commercial & Rental',
    overview: 'Whether you are a professional relocating to Prayagraj, a growing business in search of an accessible office space, or a retail brand seeking footfall-friendly commercial space in Allapur, Sanjay Goswami helps match your space requirements with suitable available properties.',
    keyFeatures: [
      {
        title: 'Residential Rentals',
        description: '1BHK, 2BHK, 3BHK flats and independent floors for families, working professionals, and students in Prayagraj.',
        icon: 'Home',
      },
      {
        title: 'Commercial Office Space',
        description: 'Office cabins, bare-shell setups, and furnished workspaces suitable for clinics, consultancies, and corporate branches.',
        icon: 'Building2',
      },
      {
        title: 'Retail & Showrooms',
        description: 'Road-facing commercial shops, retail outlets, and warehouse spaces in prominent commercial pockets.',
        icon: 'Store',
      },
      {
        title: 'Agreement Coordination',
        description: 'Assisting both parties in finalizing fair lease agreements, security deposit terms, and notice period clarity.',
        icon: 'FileCheck',
      },
    ],
    whoNeedsThis: [
      'Families relocating to Prayagraj seeking quality residential accommodation',
      'Doctors, advocates, CA firms, and IT teams looking for accessible office spaces',
      'Retail entrepreneurs seeking high-visibility storefronts in Allapur and central areas',
      'Property owners seeking reliable, verified tenants for their vacant premises'
    ],
    discussionPoints: [
      'Space requirements (carpet area, furnished vs unfurnished, parking availability)',
      'Budget constraints including monthly rent, advance deposit, and maintenance dues',
      'Lease duration, lock-in period, and renewal terms',
      'Commercial zoning and utility connections (power load, water supply)'
    ],
    nextSteps: [
      'Message your rental requirement: size, preferred sector in Prayagraj, and budget',
      'Receive options matching your stated parameters',
      'Arrange convenient property inspections',
      'Draft transparent lease agreements mutually agreed upon by both parties'
    ],
    disclaimer: 'Rental availability, monthly rent, and terms are determined solely by respective property owners. Sanjay Goswami facilitates introduction and coordination.',
    ctaText: 'Enquire About Rental Property',
  },
};

export const MUTUAL_FUND_CATEGORIES = [
  {
    name: 'Equity Funds',
    desc: 'Invests primarily in shares of listed companies. Offers higher potential growth over 5+ years, accompanied by higher short-term market fluctuation.',
    icon: 'TrendingUp',
    risk: 'Moderately High to High',
    horizon: '5+ Years',
  },
  {
    name: 'Debt Funds',
    desc: 'Invests in government securities, corporate bonds, and money market instruments. Designed for relatively lower volatility and steady capital preservation.',
    icon: 'Layers',
    risk: 'Low to Moderate',
    horizon: '1 to 3 Years',
  },
  {
    name: 'Hybrid Funds',
    desc: 'Blends both equity and debt allocations in one scheme. Designed for balanced investors who want growth along with a cushion during market corrections.',
    icon: 'PieChart',
    risk: 'Moderate',
    horizon: '3 to 5 Years',
  },
  {
    name: 'Retirement-Oriented Funds',
    desc: 'Solution-oriented mutual funds with long lock-in or structured asset allocation tailored towards accumulating a retirement corpus over decades.',
    icon: 'Clock',
    risk: 'Moderate to High',
    horizon: '7+ Years / Until Retirement',
  },
  {
    name: 'ELSS (Tax Saving)',
    desc: 'Equity Linked Savings Schemes that qualify for tax deductions under Section 80C of the Income Tax Act, carrying a mandatory 3-year lock-in period.',
    icon: 'Award',
    risk: 'High (Equity Exposure)',
    horizon: '3+ Years (3-Year Lock-in)',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'health-insurance',
    question: 'What is health insurance, and why is an individual policy necessary if I have employer coverage?',
    answer: 'Health insurance covers medical and hospitalisation expenses arising from illnesses or injuries. Employer-provided group health policies are tied to your job—if you change jobs, retire, or face layoffs, coverage ceases. Having a personal or family floater policy ensures uninterrupted lifetime renewability and safeguards your family regardless of employment changes.',
  },
  {
    id: 'faq-2',
    category: 'life-insurance',
    question: 'What is the main difference between Life Insurance and Health Insurance?',
    answer: 'Health Insurance pays for hospital bills, medical treatments, and surgeries while you are alive and receiving care. Life Insurance (such as Term Insurance) provides a financial payout to your designated family members (nominees) in the unfortunate event of your demise, replacing your lost income.',
  },
  {
    id: 'faq-3',
    category: 'mutual-funds',
    question: 'What is a Mutual Fund, and how does a Systematic Investment Plan (SIP) work?',
    answer: 'A mutual fund collects money from multiple investors to invest in a professionally managed portfolio of stocks, bonds, or other securities. A Systematic Investment Plan (SIP) is not a separate product, but a method of investing a fixed amount (such as ₹1,000 or ₹5,000) into a mutual fund scheme at regular monthly intervals, instilling financial discipline and averaging purchase costs.',
  },
  {
    id: 'faq-4',
    category: 'mutual-funds',
    question: 'What are the basic differences between Equity Funds and Debt Funds?',
    answer: 'Equity funds invest in company shares and are aimed at long-term capital growth, carrying market fluctuation risks. Debt funds invest in fixed-income debt papers (government bonds, commercial paper) and are aimed at income generation with comparatively lower volatility.',
  },
  {
    id: 'faq-5',
    category: 'mutual-funds',
    question: 'What is ELSS, and can it save income tax?',
    answer: 'ELSS stands for Equity Linked Savings Scheme. Under Section 80C of the Income Tax Act (subject to the chosen tax regime), investments in ELSS up to ₹1.5 Lakh per financial year are eligible for tax deduction. ELSS has a mandatory 3-year lock-in period, which is the shortest among Section 80C options.',
  },
  {
    id: 'faq-6',
    category: 'real-estate',
    question: 'How does Sanjay Goswami assist with property buying and renting in Prayagraj?',
    answer: 'Sanjay Goswami provides local coordination and advisory assistance in Allapur and wider Prayagraj. You share your budget and preferences, and he helps identify genuine options, coordinate site visits, and discuss terms transparently before you proceed with independent legal verification.',
  },
  {
    id: 'faq-7',
    category: 'general',
    question: 'How do I start a discussion or consultation with Sanjay Goswami?',
    answer: 'You can directly call on +91 7668986660 / +91 9453622977 or click any WhatsApp button across this website. There are no high-pressure sales pitches—the goal is to understand your specific requirement and clearly explain available options.',
  },
];
