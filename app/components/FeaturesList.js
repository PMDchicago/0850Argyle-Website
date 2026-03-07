import { Home, Users, MapPin, Wrench } from 'lucide-react';

const FEATURES = [
  {
    Icon: Home,
    title: 'Quality Apartments',
    desc: 'Studios, one-bedroom, and two-bedroom floor plans with utilities and internet included.',
  },
  {
    Icon: Users,
    title: 'Professional Management',
    desc: 'On-site management team keeping the community well-maintained and responsive to residents.',
  },
  {
    Icon: MapPin,
    title: 'Prime Uptown Location',
    desc: '2 blocks to the Argyle Red Line, steps from the lakefront, and walking distance to Andersonville.',
  },
  {
    Icon: Wrench,
    title: 'Responsive Maintenance',
    desc: 'Maintenance requests handled promptly so you can focus on what matters most.',
  },
];

export default function FeaturesList() {
  return (
    <section className="section features-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '2.75rem' }}>
          <span className="eyebrow">Why Argyle Place</span>
          <h2 className="section-title">A Community Built for You</h2>
        </div>
        <div className="features-grid">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div key={title} className="feature-item">
              <div className="feature-icon-wrap">
                <Icon size={28} style={{ color: 'var(--accent)' }} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
