import { getPage, getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import MarkdownContent from '../components/MarkdownContent';
import { Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact',
  description: 'Contact the Argyle Place leasing office in Chicago, IL.'
};

export default function ContactPage() {
  const site = getSiteConfig();
  const page = getPage('contact');
  const addr = site.address || {};

  return (
    <main>
      <PageHero
        title={page.title || 'Contact Us'}
        subtitle="Questions about availability, tours, or leasing? Our team is here to help."
      />

      <section className="section">
        <div className="container two-col">

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card">
              <h2 style={{ marginTop: 0, fontFamily: 'var(--font-serif)' }}>Leasing Office</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1rem' }}>
                <a
                  href={`tel:${site.phone_number?.replace(/[^0-9]/g, '')}`}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    fontWeight: '700', fontSize: '1.2rem', color: 'var(--primary)'
                  }}
                >
                  <Phone size={18} strokeWidth={2.5} />
                  {site.phone_number}
                </a>
                <span style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text)', fontSize: '0.95rem' }}>
                  <MapPin size={18} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--primary)' }} strokeWidth={2} />
                  <span>{addr.street}<br />{addr.city}, {addr.state} {addr.zip}</span>
                </span>
              </div>
            </div>

            <div className="card">
              <MarkdownContent html={page.html} />
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0, fontFamily: 'var(--font-serif)' }}>Request Information</h2>
            <form className="contact-form" name="contact" method="post">
              <label>
                Full Name
                <input type="text" name="name" required placeholder="Your full name" />
              </label>
              <label>
                Email Address
                <input type="email" name="email" required placeholder="your@email.com" />
              </label>
              <label>
                Phone (optional)
                <input type="tel" name="phone" placeholder="(555) 000-0000" />
              </label>
              <label>
                I&apos;m interested in&hellip;
                <select name="interest">
                  <option value="">— Select unit type —</option>
                  <option value="studio">Studio ($1,600/mo)</option>
                  <option value="1br">1 Bedroom ($1,600/mo)</option>
                  <option value="2br">2 Bedroom ($1,700/mo)</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows={5} placeholder="Any questions or comments…" />
              </label>
              <button
                type="submit"
                className="btn-secondary"
                style={{
                  display: 'inline-block',
                  width: 'auto',
                  padding: '0.8rem 1.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}
              >
                Send Request
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
