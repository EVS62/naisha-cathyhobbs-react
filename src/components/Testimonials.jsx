import './Testimonials.css';

const testimonials = [
  { initial: 'A', quote: 'Working with Naisha completely changed how we live in our home. She listened, she pushed us in the best ways, and the end result was beyond anything we imagined.', name: 'Alexandra & James T.', location: 'Brooklyn Heights, NY' },
  { initial: 'M', quote: 'Our home sold in 5 days over asking price after Naisha\'s staging. Her eye for creating an emotional connection between buyers and the space is truly remarkable.', name: 'Marcus W.', location: 'Upper West Side, NY' },
  { initial: 'P', quote: 'The e-design package was perfect for us. We got a full room plan, every source included, and it felt very personalized despite being remote. Worth every penny.', name: 'Priya & David K.', location: 'Jersey City, NJ' },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="section-header">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>Client Love</span>
          <h2 style={{ color: '#fff' }}>What Our Clients Say</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)' }}>Real reviews from real clients across New York City and beyond.</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testi-card">
              <div className="testi-card__stars">★★★★★</div>
              <p>"{t.quote}"</p>
              <div className="testi-card__author">
                <div className="testi-card__avatar">{t.initial}</div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__loc">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
