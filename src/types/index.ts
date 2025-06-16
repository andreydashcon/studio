import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  subItems?: NavItem[];
  icon?: LucideIcon;
};

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: LucideIcon;
  dataAiHint?: string;
  image?: string; 
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand?: string;
  categorySlug: string;
  images: string[];
  shortDescription: string;
  detailedDescription?: string; 
  specifications?: { key: string; value: string }[];
  availablePackages?: string[];
  downloads?: { name: string; url: string }[];
  dataAiHint?: string;
};

export type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  benefits?: string[];
  technologyUsed?: string[];
  targetCultures?: string[];
  images: string[];
  videoUrl?: string;
  icon?: LucideIcon;
  dataAiHint?: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string; 
  author: string;
  excerpt: string;
  content: string; 
  category?: string;
  tags?: string[];
  imageUrl?: string;
  dataAiHint?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
  dataAiHint?: string;
};

export type ContactInfo = {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  openingHours: string;
  mapEmbedUrl?: string; // Optional: if using direct embed
  socialLinks: {
    facebook?: string;
    instagram?: string;
  }
};
