import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">⚡</span>
              <div>
                <div className="footer-logo-name">RudrayamX</div>
                <div className="footer-logo-subtitle">Enterprise Platform</div>
              </div>
            </div>
            <p>Intelligent digital infrastructure for modern industries</p>
          </div>

          <div className="footer-section">
            <h4>Platform</h4>
            <ul>
              <li><a href="#products">QR Production Platform</a></li>
              <li><a href="#products">Enterprise Web</a></li>
              <li><a href="#products">Mobile Operations</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About RudrayamX</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#features">Solutions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} RudrayamX Private Limited. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="https://rudrayam.com" target="_blank" rel="noopener noreferrer">Visit Website</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
