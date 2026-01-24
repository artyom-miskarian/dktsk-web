import { events } from '@/data/events';
import type { Event } from '@/types';

/**
 * Events Service
 * Currently uses static data, designed for easy swap to API later
 */
export const eventsService = {
  /**
   * Get all events
   */
  getAll: (): Event[] => events,

  /**
   * Get event by id
   */
  getById: (id: string): Event | undefined =>
    events.find((e) => e.id === id),

  /**
   * Get featured events
   */
  getFeatured: (): Event[] =>
    events.filter((e) => e.featured),

  /**
   * Get events by year
   */
  getByYear: (year: number): Event[] =>
    events.filter((e) => new Date(e.date).getFullYear() === year),

  /**
   * Get all unique years from events
   */
  getYears: (): number[] =>
    [...new Set(events.map((e) => new Date(e.date).getFullYear()))].sort(
      (a, b) => b - a
    ),

  /**
   * Sort events by date
   */
  sortByDate: (list: Event[], ascending = false): Event[] =>
    [...list].sort((a, b) => {
      const diff = new Date(a.date).getTime() - new Date(b.date).getTime();
      return ascending ? diff : -diff;
    }),
};
