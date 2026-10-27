export interface BusinessConfig {
  name: string;
  title: string;
  tagline: string;
  secondaryTagline: string;
  location: {
    area: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  phones: {
    primary: string;
    alternative: string;
    formattedPrimary: string;
    formattedAlternative: string;
  };
  emailDraftNote: string;
  services: {
    id: string;
    title: string;
    shortDesc: string;
    path: string;
    category: 'insurance' | 'investment' | 'real-estate';
  }[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Sanjay Goswami',
  title: 'Insurance & Investment Advisor',
  tagline: 'Plan Today. Secure Tomorrow.',
  secondaryTagline: 'Your Goals. My Commitment.',
  location: {
    area: 'Allapur',
    city: 'Prayagraj',
    state: 'Uttar Pradesh',
    country: 'India',
    full: 'Prayagraj (Allapur), Uttar Pradesh, India',
  },
  phones: {
    primary: '7668986660',
    alternative: '9453622977',
    formattedPrimary: '+91 76689 86660',
    formattedAlternative: '+91 94536 22977',
  },
  emailDraftNote: 'Draft information subject to verification before official business publication.',
  services: [
    {
      id: 'health-insurance',
      title: 'Health Insurance',
      shortDesc: 'Explore comprehensive medical coverage, hospitalisation benefits, and family floater options.',
      path: '/services/health-insurance',
      category: 'insurance',
    },
    {
      id: 'life-insurance',
      title: 'Life Insurance',
      shortDesc: 'Understand pure term protection, family financial safety nets, and future coverage planning.',
      path: '/services/life-insurance',
      category: 'insurance',
    },
    {
      id: 'mutual-funds',
      title: 'Mutual Funds & SIP',
      shortDesc: 'Learn about equity, debt, hybrid, retirement funds, and systematic investing methods.',
      path: '/services/mutual-funds',
      category: 'investment',
    },
    {
      id: 'real-estate',
      title: 'Real Estate Assistance',
      shortDesc: 'Guidance and advisory support for residential property buying, selling, and investment opportunities.',
      path: '/services/real-estate',
      category: 'real-estate',
    },
    {
      id: 'rental-property',
      title: 'Rental & Office Property',
      shortDesc: 'Assistance for residential rentals, commercial office spaces, and retail property requirements.',
      path: '/services/rental-property',
      category: 'real-estate',
    },
  ],
};

/**
 * Generate click-to-call URL
 */
export function getTelUrl(phone: string = BUSINESS_CONFIG.phones.primary): string {
  const clean = phone.replace(/[^0-9]/g, '');
  return `tel:+91${clean}`;
}

/**
 * Generate properly URL-encoded WhatsApp link with prefilled enquiry message
 */
export function getWhatsAppUrl(
  phone: string = BUSINESS_CONFIG.phones.primary,
  serviceName?: string,
  customDetails?: { name?: string; message?: string }
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  
  let text = `Hello Sanjay ji, I visited your website and would like to enquire about ${
    serviceName || 'your advisory services'
  }. Please contact me regarding the available options.`;

  if (customDetails?.name) {
    text = `Hello Sanjay ji, My name is ${customDetails.name}. I visited your website and would like to enquire about ${
      serviceName || 'your services'
    }.${customDetails.message ? ` Note: ${customDetails.message}` : ''} Please connect with me to discuss options.`;
  } else if (customDetails?.message) {
    text += ` Detail: ${customDetails.message}`;
  }

  return `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(text)}`;
}
