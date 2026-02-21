import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__images">
        <img className="about__img-main" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&auto=format&fit=crop" alt="Naisha Rivera" />
        <img className="about__img-sm" src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&auto=format&fit=crop" alt="Design Detail" />
        <img className="about__img-sm" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop" alt="Interior" />
      </div>
      <div className="about__text">
        <span className="eyebrow">About the Studio</span>
        <h2>Design with Intention.<br />Spaces with Soul.</h2>
        <p>Interiors by Naisha is a full-service residential design studio specializing in a unique approach that blends luxury interior design with expert real estate staging. Founded by Naisha Rivera, the studio brings warmth, precision, and personality to every project.</p>
        <p>With deep roots in New York's design community and a track record spanning hundreds of satisfied clients, we have earned our reputation as one of the region's most trusted design partners.</p>
        <div className="about__creds">
          <div className="about__cred">
            <strong>12+</strong>
            <span>Years in Design</span>
          </div>
          <div className="about__cred">
            <strong>NYC</strong>
            <span>Based Studio</span>
          </div>
          <div className="about__cred">
            <strong>200+</strong>
            <span>Homes Designed</span>
          </div>
        </div>
        <a href="#contact" className="btn-gold">Schedule a Consultation</a>
      </div>
    </section>
  );
}
