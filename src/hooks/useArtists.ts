import { artistsService } from '@/services/artistsService';
import type { UseArtistsReturn, UseArtistReturn } from '@/types';

/**
 * Hook to get all artists
 * Future: will use React Query or SWR for async data
 */
export const useArtists = (): UseArtistsReturn => {
  const artists = artistsService.getAll();
  return { artists, isLoading: false, error: null };
};

/**
 * Hook to get a single artist by slug
 * Future: will use React Query or SWR for async data
 */
export const useArtist = (slug: string): UseArtistReturn => {
  const artist = artistsService.getBySlug(slug);
  return { artist, isLoading: false, error: null };
};
