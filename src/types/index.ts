import type { ReactNode } from 'react';

// ============================================
// Data Models
// ============================================

export interface Release {
  title: string;
  year: string;
  type: 'EP' | 'Album' | 'Single';
  bandcampUrl: string;
}

export interface LiveSet {
  title: string;
  date: string;
  duration: string;
  soundcloudUrl: string;
}

export interface Artist {
  id: string;
  name: string;
  tagline: string;
  genre: string;
  bio: string;
  image: string;
  bandcamp?: string;
  soundcloud?: string;
  instagram?: string;
  releases?: Release[];
  liveSets?: LiveSet[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  poster: string;
  gallery: string[];
  lineup: string[];
  featured: boolean;
}

export interface Podcast {
  id: string;
  title: string;
  artist: string;
  date: string;
  duration: string;
  description: string;
  cover: string;
  soundcloudUrl: string;
  tags: string[];
}

// ============================================
// Component Props
// ============================================

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: ReactNode;
  to?: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  overlay?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface ImageGalleryProps {
  images: string[];
  columns?: number;
}

export interface EmbedPlayerProps {
  type?: 'soundcloud' | 'bandcamp' | 'external';
  url: string;
  title?: string;
  artist?: string;
  coverImage?: string;
  className?: string;
}

export interface ArtistCardProps {
  artist: Artist;
  index?: number;
}

export interface ArtistGridProps {
  artists: Artist[];
}

export interface EventCardProps {
  event: Event;
  index?: number;
}

export interface EventGridProps {
  events: Event[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

// ============================================
// Hook Return Types
// ============================================

export interface UseArtistsReturn {
  artists: Artist[];
  isLoading: boolean;
  error: Error | null;
}

export interface UseArtistReturn {
  artist: Artist | undefined;
  isLoading: boolean;
  error: Error | null;
}

export interface UseEventsReturn {
  events: Event[];
  isLoading: boolean;
  error: Error | null;
}

export interface UseEventReturn {
  event: Event | undefined;
  isLoading: boolean;
  error: Error | null;
}

export interface UsePodcastsReturn {
  podcasts: Podcast[];
  isLoading: boolean;
  error: Error | null;
}

// ============================================
// Navigation & Routing
// ============================================

export interface NavItem {
  path: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

// ============================================
// Form Types
// ============================================

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
