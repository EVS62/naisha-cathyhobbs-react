import { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '' });
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&auto=format&fit=crop" alt="Luxury Interior" />
      </div>
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__badge">New York's Premier Design Studio</span>
          <h1>Transforming Spaces.<br /><em>Elevating Lives.</em></h1>
          <p>
            Interiors by Naisha is a full-service residential interior design and home staging firm
            serving New York City and the tri-state region. We blend luxury design with personal
            storytelling to create homes that are unmistakably yours.
          </p>
          <div className="hero__btns">
            <a href="#portfolio" className="btn-gold">View Our Portfolio</a>
            <a href="#services" className="hero__btn-outline">Our Services</a>
          </div>
        </div>

        <div className="hero__card">
          <h3>Start Your Project</h3>
          <p>Tell us about your space — we'll be in touch within 24 hours.</p>
          <div className="hero__card-form">
            <input name="name" value={form.name} onChange={handle} placeholder="Your Name" />
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email Address" />
            <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="Phone Number" />
            <select name="service" value={form.service} onChange={handle}>
              <option value="" disabled>Select a Service</option>
              <option>Full-Service Design</option>
              <option>Interior Renovation</option>
              <option>Vacant Home Staging</option>
              <option>Speed Staging</option>
              <option>E-Design</option>
              <option>Short-Term Rental Styling</option>
            </select>
            <a href="#contact" className="btn-gold" style={{ textAlign: 'center', width: '100%' }}>
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
