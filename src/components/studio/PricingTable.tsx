import { Button } from '@/components/ui';
import styles from './PricingTable.module.css';
import type { PricingPlan } from '@/types';

const pricingPlans: PricingPlan[] = [
  {
    id: 'hourly',
    name: 'Hourly',
    price: '15,000',
    currency: 'AMD',
    period: 'per hour',
    description: 'Perfect for short sessions',
    features: [
      'Full studio access',
      'Basic equipment included',
      'Engineer available (+)',
    ],
  },
  {
    id: 'half-day',
    name: 'Half Day',
    price: '50,000',
    currency: 'AMD',
    period: '4 hours',
    description: 'Focused creative sessions',
    features: [
      'Full studio access',
      'All equipment included',
      'Engineer included',
      'Refreshments',
    ],
  },
  {
    id: 'full-day',
    name: 'Full Day',
    price: '90,000',
    currency: 'AMD',
    period: '8 hours',
    description: 'Extended production time',
    features: [
      'Full studio access',
      'All equipment included',
      'Engineer included',
      'Refreshments',
      'Priority booking',
    ],
  },
];

export default function PricingTable() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={styles.card}
            style={{ animationDelay: `${index * 100}ms` }}
          >

            <div className={styles.header}>
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.description}>{plan.description}</p>
            </div>

            <div className={styles.pricing}>
              <span className={styles.currency}>{plan.currency}</span>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.period}>{plan.period}</span>
            </div>

            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.feature}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant="primary"
              fullWidth
              href="mailto:hello@dktsk.am?subject=Studio Booking"
            >
              Book Now
            </Button>
          </div>
        ))}
      </div>

      <p className={styles.note}>
        Custom packages available for long-term bookings.{' '}
        <a href="mailto:hello@dktsk.am" className={styles.noteLink}>
          Contact us
        </a>{' '}
        to discuss.
      </p>
    </div>
  );
}
