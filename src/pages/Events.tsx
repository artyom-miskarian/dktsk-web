import { useState } from 'react';
import { EventGrid } from '@/components/events';
import { useEvents } from '@/hooks';
import { eventsService } from '@/services/eventsService';
import styles from './Events.module.css';

export default function Events() {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const { events } = useEvents();

  // Get unique years from events
  const years = eventsService.getYears();

  // Filter and sort events
  const filteredEvents = selectedYear === 'all'
    ? events
    : events.filter(event =>
        new Date(event.date).getFullYear() === parseInt(selectedYear)
      );

  const sortedEvents = eventsService.sortByDate(filteredEvents);

  return (
    <div className={styles.page}>
      {/* Filter & Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          {/* Year Filter */}
          <div className={styles.filterBar}>
            <span className={styles.filterLabel}>Filter by year:</span>
            <div className={styles.filterButtons}>
              <button
                className={`${styles.filterButton} ${selectedYear === 'all' ? styles.active : ''}`}
                onClick={() => setSelectedYear('all')}
              >
                All
              </button>
              {years.map(year => (
                <button
                  key={year}
                  className={`${styles.filterButton} ${selectedYear === String(year) ? styles.active : ''}`}
                  onClick={() => setSelectedYear(String(year))}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <EventGrid events={sortedEvents} />

          {filteredEvents.length === 0 && (
            <div className={styles.empty}>
              <p>No events found for this year.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
