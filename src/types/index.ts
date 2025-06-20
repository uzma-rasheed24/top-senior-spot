// Route types
export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  children?: RouteConfig[];
}

// Component Props Types
export interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ProfessionalProfileProps {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  profileLink: string;
}

export interface TestimonialProps {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  content: string;
}

export interface ResourceCardProps {
  title: string;
  category: string;
  image: string;
  readTime: string;
  link: string;
}

export interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Data Types
export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: NavigationItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}