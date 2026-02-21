import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__logo-main">Interiors by Naisha</div>
          <div className="footer__logo-sub">Interior Design &amp; Staging</div>
          <p>A full-service residential interior design and staging studio serving New York City and the tri-state region. We create spaces that are unmistakably, beautifully yours.</p>
          <p className="footer__contact-info">
            ✉ info@interiorsbynaisha.com<br />
            ✆ (212) 000-0000<br />
            ⌖ New York, NY
          </p>
        </div>
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Full-Service Design</a></li>
            <li><a href="#services">Interior Renovation</a></li>
            <li><a href="#services">Vacant Staging</a></li>
            <li><a href="#services">Speed Staging</a></li>
            <li><a href="#services">E-Design</a></li>
            <li><a href="#services">Short-Term Rentals</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Naisha</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#portfolio">Before &amp; After</a></li>
            <li><a href="#contact">Press</a></li>
            <li><a href="#contact">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Service Areas</h4>
          <ul>
            <li><a href="#contact">New York City</a></li>
            <li><a href="#contact">Brooklyn &amp; Queens</a></li>
            <li><a href="#contact">The Hamptons</a></li>
            <li><a href="#contact">Westchester County</a></li>
            <li><a href="#contact">New Jersey</a></li>
            <li><a href="#contact">Connecticut</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Interiors by Naisha. All Rights Reserved.</p>
        <div className="footer__social">
          <a href="#home">Instagram</a>
          <a href="#home">Pinterest</a>
          <a href="#home">Houzz</a>
          <a href="#home">LinkedIn</a>
        </div>
        <a href="#home" className="footer__terms">Terms &amp; Conditions</a>
      </div>
    </footer>
  );
}
