
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteData {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    heading: string;
    content: string;
  };
  contact: {
    address: string;
    phone: string;
    hours: string;
    email: string;
  };
  services: Service[];
}

export type ViewMode = 'HOME' | 'STAFF';
