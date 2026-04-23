import { getGallery, getSiteConfig } from '../../lib/content';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'Gallery',
  description: 'Photos of Argyle Place apartments and community in Chicago, IL.'
};

export default function GalleryPage() {
  const site = getSiteConfig();
  const images = getGallery();

  return (
    <main>
      <PageHero
        title="Gallery"
        subtitle="Take a look around Argyle Place."
      />
      <section className="section">
        <div className="container">
          {images.length > 0 ? (
            <div className="gallery-grid">
              {images.map((img, i) => {
                const filename = img.src.split('/').pop();
                return (
                  <figure key={i} className="gallery-item">
                    <div className="gallery-img-wrap">
                      <img src={img.src} alt={img.alt_text || 'Argyle Place'} loading="lazy" />
                      <a
                        href={img.src}
                        download={filename}
                        className="gallery-download"
                        title={`Download ${img.alt_text || filename}`}
                      >
                        <Download size={18} />
                      </a>
                    </div>
                    {img.alt_text && <figcaption>{img.alt_text}</figcaption>}
                  </figure>
                );
              })}
            </div>
          ) : (
            <p className="muted text-center">Photos coming soon.</p>
          )}
        </div>
      </section>
      <CtaBand site={site} />
    </main>
  );
}
