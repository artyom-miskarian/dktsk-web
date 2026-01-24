import { podcastsService } from '@/services/podcastsService';
import type { UsePodcastsReturn } from '@/types';

/**
 * Hook to get all podcasts
 * Future: will use React Query or SWR for async data
 */
export const usePodcasts = (): UsePodcastsReturn => {
  const podcasts = podcastsService.getAll();
  return { podcasts, isLoading: false, error: null };
};

/**
 * Hook to get podcasts by artist
 */
export const usePodcastsByArtist = (artist: string): UsePodcastsReturn => {
  const podcasts = podcastsService.getByArtist(artist);
  return { podcasts, isLoading: false, error: null };
};
