import { podcasts } from '@/data/podcasts';
import type { Podcast } from '@/types';

/**
 * Podcasts Service
 * Currently uses static data, designed for easy swap to API later
 */
export const podcastsService = {
  /**
   * Get all podcasts
   */
  getAll: (): Podcast[] => podcasts,

  /**
   * Get podcast by id
   */
  getById: (id: string): Podcast | undefined =>
    podcasts.find((p) => p.id === id),

  /**
   * Get podcasts by artist (case-insensitive, partial match)
   */
  getByArtist: (artist: string): Podcast[] =>
    podcasts.filter((p) =>
      p.artist.toLowerCase().includes(artist.toLowerCase())
    ),

  /**
   * Get podcasts by tag
   */
  getByTag: (tag: string): Podcast[] =>
    podcasts.filter((p) =>
      p.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    ),

  /**
   * Sort podcasts by date
   */
  sortByDate: (list: Podcast[], ascending = false): Podcast[] =>
    [...list].sort((a, b) => {
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return ascending ? diff : -diff;
    }),
};
