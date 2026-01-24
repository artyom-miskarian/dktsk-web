import { eventsService } from '@/services/eventsService';
import type { UseEventsReturn, UseEventReturn } from '@/types';

/**
 * Hook to get all events
 * Future: will use React Query or SWR for async data
 */
export const useEvents = (): UseEventsReturn => {
  const events = eventsService.getAll();
  return { events, isLoading: false, error: null };
};

/**
 * Hook to get a single event by id
 * Future: will use React Query or SWR for async data
 */
export const useEvent = (id: string): UseEventReturn => {
  const event = eventsService.getById(id);
  return { event, isLoading: false, error: null };
};

/**
 * Hook to get featured events
 */
export const useFeaturedEvents = (): UseEventsReturn => {
  const events = eventsService.getFeatured();
  return { events, isLoading: false, error: null };
};
