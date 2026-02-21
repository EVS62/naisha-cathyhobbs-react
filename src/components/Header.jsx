import { useState } from 'react';
import './Header.css';

const navItems = [
  { label: 'About', children: [
    { group: 'About', links: [['The Company', '#home'], ['Naisha Rivera', '#about'], ['Press', '#home']] },
  ]},
  { label: 'Portfolio', children: [
    { group: null, links: [['All Projects', '#portfolio'], ['Before & After', '#portfolio']] },
  ]},
  { label: 'Services', children: [
    { group: 'Design', links: [['Full-Service Design', '#services'], ['Interior Renovation', '#services'], ['E-Design', '#services']] },
    { group: 'Staging', links: [['Vacant Home Staging', '#services'], ['Speed Staging', '#services'], ['Remote Staging', '#services'], ['Short-Term Rentals', '#services']] },
  ]},
  { label: 'Shop', children: null },
];

export default function Header() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        In order to be loved … your space has to be <strong>designed!</strong>
        &nbsp;·&nbsp;<a href="#contact">Schedule a Free Consultation →</a>
      </div>
      <header className="header" onMouseLeave={() => setOpen(null)}>
        <div className="header__inner">
          <a href="#home" className="header__logo">
            <img src="/logo.png" alt="Interiors by Naisha" className="header__logo-img" />
          </a>

          <nav className="header__nav">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="header__nav-item"
                onMouseEnter={() => setOpen(item.label)}
              >
                <a href="#home" className="header__nav-link">
                  {item.label} {item.children && <span>▾</span>}
                </a>
                {item.children && open === item.label && (
                  <div className="header__dropdown">
                    {item.children.map((col, ci) => (
                      <div key={ci} className="header__dropdown-col">
                        {col.group && <div className="header__dropdown-head">{col.group}</div>}
                        {col.links.map(([label, href]) => (
                          <a key={label} href={href} className="header__dropdown-link" onClick={() => setOpen(null)}>
                            {label}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#contact" className="header__cta">Schedule Now</a>
          </nav>

          <button className="header__burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>

        {mobileOpen && (
          <div className="header__mobile-menu">
            {navItems.map(item => (
              <a key={item.label} href={item.label === 'Portfolio' ? '#portfolio' : item.label === 'Services' ? '#services' : '#home'} className="header__mobile-link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="header__mobile-link header__mobile-cta" onClick={() => setMobileOpen(false)}>Schedule Now</a>
          </div>
        )}
      </header>
    </>
  );
}
