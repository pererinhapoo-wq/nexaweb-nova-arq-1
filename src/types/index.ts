export interface Project {
  id: string;
  name: string;
  category: 'Residencial' | 'Corporativo' | 'Interiores';
  shortDescription: string;
  concept: string;
  image: string;
  area: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  scope: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface Differential {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  projectType: string;
}
