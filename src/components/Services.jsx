import './Services.css';

const services = [
  { icon: '🏠', title: 'Full-Service Interior Design', desc: 'End-to-end design management from initial concept through final installation. We manage every detail — sourcing, procurement, contractor coordination.' },
  { icon: '🔑', title: 'Vacant Home Staging', desc: 'Professionally staged homes sell faster and for more. We transform empty spaces into aspirational homes buyers immediately connect with.' },
  { icon: '💻', title: 'E-Design & Remote Staging', desc: 'Get the Interiors by Naisha experience from anywhere. Curated plans, mood boards, and shopping lists delivered right to your inbox.' },
  { icon: '⚡', title: 'Speed Staging', desc: 'Need to get to market fast? Our speed staging uses existing furnishings supplemented with key accessories to refresh your property quickly.' },
  { icon: '🏖️', title: 'Short-Term Rental Styling', desc: 'Maximize your Airbnb or VRBO revenue with spaces that photograph beautifully and consistently earn 5-star guest reviews.' },
  { icon: '🔨', title: 'Interior Renovation', desc: 'We manage your renovation from design concept to final punch list, coordinating architects, contractors, and tradespeople seamlessly.' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="section-header">
          <span className="eyebrow">What We Offer</span>
          <h2>Design Services Tailored to You</h2>
          <p>From full home renovations to real estate staging, we offer a comprehensive suite of services to meet you wherever you are in your journey.</p>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="service-tile">
              <div className="service-tile__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className="service-tile__link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
