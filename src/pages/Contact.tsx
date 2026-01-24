import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Button } from '@/components/ui';
import styles from './Contact.module.css';
import type { ContactFormData } from '@/types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@dktsk.am?subject=${encodeURIComponent(formData.subject || 'Website Inquiry')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact</h1>
          <p className={styles.heroSubtitle}>
            Have a question, want to collaborate, or book the studio? We'd love to hear from you.
          </p>
        </div>
        <div className={styles.heroDecoration} />
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>Let's connect</h2>
              <p className={styles.infoText}>
                Whether you're interested in booking the studio, joining the collective,
                or just want to say hello — reach out.
              </p>

              <div className={styles.contactMethods}>
                <a href="mailto:hello@dktsk.am" className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <span>hello@dktsk.am</span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/dktsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactCard}
                >
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </div>
                  <div>
                    <h4>Instagram</h4>
                    <span>@dktsk</span>
                  </div>
                </a>

                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <span>Teryan 91, Yerevan, Armenia</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapWrapper}>
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapOverlay}>
                    <span>Teryan 91</span>
                    <span className={styles.mapCity}>Yerevan, Armenia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>Send a message</h2>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">Select a topic</option>
                    <option value="Studio Booking">Studio Booking</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Join Collective">Join the Collective</option>
                    <option value="Event Inquiry">Event Inquiry</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="large" fullWidth>
                  Send Message
                </Button>

                <p className={styles.formNote}>
                  This opens your email client with the message pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
