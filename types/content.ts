export interface Content {
  Birthday: Birthday;
}

export interface Birthday {
  site: Site;
  theme: Theme;
  sections: Sections;
}

export interface Site {
  name: string;
  logo: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
    background: string;
    white: string;
    text: string;
    muted: string;
  };
}

export interface Sections {
  Header: {
    variants: {
      BirthdayHeader1: BirthdayHeader1;
    };
  };
  Banner: {
    variants: {
      BirthdayBanner1: BirthdayBanner1;
    };
  };
  About: {
    variants: {
      BirthdayAbout1: BirthdayAbout1;
    };
  };
  Services: {
    variants: {
      BirthdayServices1: BirthdayServices1;
    };
  };
  Gallery: {
    variants: {
      BirthdayGallery1: BirthdayGallery1;
    };
  };
  Testimonial: {
    variants: {
      BirthdayTestimonial1: BirthdayTestimonial1;
    };
  };
  FAQ: {
    variants: {
      BirthdayFAQ1: BirthdayFAQ1;
    };
  };
  Contact: {
    variants: {
      BirthdayContact1: BirthdayContact1;
    };
  };
  Footer: {
    variants: {
      BirthdayFooter1: BirthdayFooter1;
    };
  };
}

export interface QuickLink {
  name: string;
  href: string;
}

export interface SocialElement {
  name: string;
  icon: string;
  href: string;
  svg?: string;
}

export interface BirthdayHeader1 {
  logo: string;
  links: QuickLink[];
  button?: string;
  buttonHref?: string;
  buttonIcon?: string;
}

export interface BirthdayBanner1 {
  banners: string[];
}

export interface BirthdayAbout1 {
  cursiveText: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  mainImage: string;
  smallImage: string;
  thirdImage: string;
}

export interface BirthdayServices1Item {
  slug: string;
  icon: string;
  image: string;
  title: string;
  description: string;
  href: string;
  features?: string[];
}

export interface BirthdayServices1 {
  cursiveText: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  buttonText: string;
  items: BirthdayServices1Item[];
}

export interface BirthdayGallery1 {
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  images: string[];
}

export interface BirthdayTestimonial1Item {
  image: string;
  name: string;
  title: string;
  quote: string;
  rating: number;
}

export interface BirthdayTestimonial1 {
  cursiveText: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  items: BirthdayTestimonial1Item[];
}

export interface BirthdayFAQ1Item {
  question: string;
  answer: string;
}

export interface BirthdayFAQBottomBanner {
  eyebrow: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface BirthdayFAQ1 {
  cursiveText: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  bottomBanner: BirthdayFAQBottomBanner;
  items: BirthdayFAQ1Item[];
}

export interface ContactCardItem {
  title: string;
  details: string[];
  icon: string;
}

export interface ContactFormFields {
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  servicePlaceholder: string;
  messagePlaceholder: string;
  submittingText: string;
  resetButtonText: string;
}

export interface BirthdayContact1 {
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  description: string;
  image: string;
  formEyebrow: string;
  formTitlePart1: string;
  formTitlePart2: string;
  formDescription: string;
  formFields: ContactFormFields;
  services: string[];
  buttonText: string;
  successTitle: string;
  successDescription: string;
  contactCards: ContactCardItem[];
}

export interface BirthdayFooterContact {
  email: string;
  phone: string[];
  address: string;
}

export interface BirthdayFooter1 {
  description: string;
  quickLinksTitle: string;
  servicesTitle: string;
  contactTitle: string;
  copyrightText: string;
  bottomNote: string;
  quickLinks: QuickLink[];
  services: QuickLink[];
  social: SocialElement[];
  contact: BirthdayFooterContact;
}
