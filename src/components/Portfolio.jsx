import { useState } from 'react';
import './Portfolio.css';

const filters = ['All', 'Living Rooms', 'Kitchens', 'Bedrooms', 'Staging', 'Before & After'];

const projects = [
  { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop', label: 'Living Room · Brooklyn Heights', title: 'The Calloway Residence', cat: 'Living Rooms', tall: true },
  { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop', label: 'Kitchen · Upper West Side', title: 'Madison Townhouse', cat: 'Kitchens' },
  { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop', label: 'Dining Room · Tribeca', title: 'The Mercer Loft', cat: 'Living Rooms' },
  { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop', label: 'Primary Bedroom · Park Slope', title: 'The Park Brownstone', cat: 'Bedrooms' },
  { img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop', label: 'Primary Bath · The Hamptons', title: 'Ocean Road Retreat', cat: 'Staging' },
  { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop', label: 'Full Staging · Westchester', title: 'The Ridgewood Estate', cat: 'Staging', tall: true },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const visible = active === 'All' ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__inner">
        <div className="section-header">
          <span className="eyebrow">Our Work</span>
          <h2>Featured Projects</h2>
          <p>A selection of residential design and staging projects across New York City and the tri-state area.</p>
        </div>
        <div className="portfolio__filters">
          {filters.map(f => (
            <button key={f} className={`portfolio__filter ${active === f ? 'portfolio__filter--active' : ''}`} onClick={() => setActive(f)}>
              {f}
            </button>
          ))}
        </div>
        <div className="portfolio__grid">
          {visible.map((p, i) => (
            <div key={i} className={`portfolio__card ${p.tall ? 'portfolio__card--tall' : ''}`}>
              <img src={p.img} alt={p.title} />
              <div className="portfolio__card-info">
                <span>{p.label}</span>
                <h4>{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
