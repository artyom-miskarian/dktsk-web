import { artists } from '@/data/artists';
import type { Artist } from '@/types';

/**
 * Artists Service
 * Currently uses static data, designed for easy swap to API later
 */
export const artistsService = {
  /**
   * Get all artists
   */
  getAll: (): Artist[] => artists,

  /**
   * Get artist by slug/id
   */
  getBySlug: (slug: string): Artist | undefined =>
    artists.find((a) => a.id === slug),

  /**
   * Get artist by name (case-insensitive)
   */
  getByName: (name: string): Artist | undefined =>
    artists.find((a) => a.name.toLowerCase() === name.toLowerCase()),
};
