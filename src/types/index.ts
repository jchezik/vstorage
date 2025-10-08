export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  subtitle: string;
  description: string;
  details?: string[];
  icon?: string;
}

export interface TrustIndicator {
  icon: string;
  title: string;
  description: string;
}

export interface AudioFormat {
  name: string;
  specs: string[];
}

export interface SecurityFeature {
  title: string;
  description: string;
  details: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface PricingTier {
  name: string;
  description: string;
  features: string[];
  price?: string;
}
