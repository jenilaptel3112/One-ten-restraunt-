export type NavSection = 'home' | 'menu' | 'reservations' | 'about' | 'gallery' | 'contact';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'tasting' | 'dinner' | 'lunch' | 'beverage';
  courseCategory?: 'starter' | 'main' | 'dessert' | 'cocktail' | 'wine';
  dietary?: ('GF' | 'DF' | 'VG' | 'V')[];
  pairing?: string;
  provenance?: string;
  recommended?: boolean;
}

export interface TastingCourse {
  courseNumber: number;
  title: string;
  dish: string;
  description: string;
  winePairing: string;
  origin: string;
  dietary?: ('GF' | 'DF' | 'VG')[];
}

export interface ReservationData {
  id: string;
  experience: 'dining-room' | 'solarium' | 'chefs-counter' | 'private-library';
  guests: number;
  date: string;
  time: string;
  guestName: string;
  email: string;
  phone: string;
  occasion?: string;
  dietaryRestrictions?: string;
  specialRequests?: string;
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cuisine' | 'ambiance' | 'cellar' | 'craft';
  imageUrl: string;
  caption: string;
  aspect?: 'square' | 'portrait' | 'landscape';
}

export interface PartnerFarm {
  name: string;
  location: string;
  specialty: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
