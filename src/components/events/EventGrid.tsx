import EventCard from './EventCard';
import styles from './EventGrid.module.css';
import type { EventGridProps } from '@/types';

export default function EventGrid({ events }: EventGridProps) {
  return (
    <div className={styles.grid}>
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} index={index} />
      ))}
    </div>
  );
}
