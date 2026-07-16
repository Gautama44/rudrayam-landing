import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (target) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="navbar-brand">
          <span className="logo">Rudrayam</span>
          <span className="logo-tagline">Technologies</span>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={() => handleNavClick('about')}>About</a></li>
            <li><a href="#products" onClick={() => handleNavClick('products')}>Platform</a></li>
            <li><a href="#industries" onClick={() => handleNavClick('industries')}>Industries</a></li>
            <li><a href="#features" onClick={() => handleNavClick('features')}>Solutions</a></li>
            <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-cta">
          <button className="btn btn-primary" onClick={() => handleNavClick('contact')}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
