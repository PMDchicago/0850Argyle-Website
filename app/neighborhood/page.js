import { getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { MapPin, Bus, ShoppingCart, Coffee } from 'lucide-react';

export const metadata = {
  title: 'Neighborhood',
  description: 'Neighborhood highlights near Argyle Place in Chicago\'s Uptown and Andersonville.'
};

const HIGHLIGHTS = [
  {
    Icon: ShoppingCart,
    iconBg: '#edf7f1',
    iconColor: '#4a7c59',
    title: 'Shopping & Essentials',
    desc: 'Mariano\'s, neighborhood markets, and Andersonville\'s independent shops all within walking distance.',
  },
  {
    Icon: Bus,
    iconBg: '#e0eeff',
    iconColor: '#2563eb',
    title: 'Transit Access',
    desc: 'Argyle Red Line station 2 blocks away — 20 minutes to the Loop. Express CTA buses steps from the door.',
  },
  {
    Icon: MapPin,
    iconBg: '#fff0f0',
    iconColor: '#dc2626',
    title: 'Lakefront Living',
    desc: '2 blocks to Foster Beach, the Lakefront Trail, and Margate Park — perfect for running, biking, or unwinding.',
  },
  {
    Icon: Coffee,
    iconBg: '#fffbeb',
    iconColor: '#d97706',
    title: 'Dining & Culture',
    desc: 'Asia on Argyle, Andersonville restaurants, Aragon Ballroom, and Riviera Theatre all at your doorstep.',
  },
];

export default function NeighborhoodPage() {
  const site = getSiteConfig();

  return (
    <main>
      <PageHero
        title="The Neighborhood"
        subtitle="840–850 W. Argyle St. — at the crossroads of Uptown and Andersonville, steps from the lakefront."
      />

      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '2.75rem' }}>
            <span className="eyebrow">Location Highlights</span>
            <h2 className="section-title">Everything Within Reach</h2>
          </div>
          <div className="features-grid">
            {HIGHLIGHTS.map(({ Icon, iconBg, iconColor, title, desc }) => (
              <div key={title} className="feature-item">
                <div className="feature-icon-wrap" style={{ background: iconBg }}>
                  <Icon size={28} style={{ color: iconColor }} strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '680px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1rem' }}>
              <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <strong>840–850 W. Argyle St., Chicago, IL 60640</strong>
            </div>
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}>
              <iframe
                src="https://maps.google.com/maps?q=850+W+Argyle+St+Chicago+IL+60640&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Argyle Place Location"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand site={site} />
    </main>
  );
}
