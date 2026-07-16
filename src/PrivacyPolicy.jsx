import React from 'react'

export default function PrivacyPolicy() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src="/rudrayam.png" alt="RUDRAYAMX Logo" className="navbar-logo" />
          <span className="navbar-brand">RUDRAYAMX</span>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#features">Features</a></li>
          <li><a href="/#services">Services</a></li>
        </ul>
      </nav>

      <div className="privacy-page">
        <div className="container">
          <div className="privacy-header">
            <h1>Privacy Policy</h1>
            <p>Last updated: March 2026</p>
          </div>
          <div className="privacy-content">
            <div className="privacy-section">
              <h2>1. Introduction</h2>
              <p>Welcome to RudrayamX Private Limited. We are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit <a href="https://www.rudrayam.com">www.rudrayam.com</a>.</p>
            </div>
            <div className="privacy-section">
              <h2>2. Information We Collect</h2>
              <ul>
                <li><strong>Personal Information:</strong> Name, email, phone number when you contact us.</li>
                <li><strong>Company Information:</strong> Company name, number of plants for onboarding.</li>
                <li><strong>Usage Data:</strong> How you use our platform — login times, features accessed.</li>
                <li><strong>Device Information:</strong> IP address, browser type for security purposes.</li>
              </ul>
            </div>
            <div className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>Provide and maintain our Industrial SaaS Platform</li>
                <li>Process demo requests and onboard new clients</li>
                <li>Send important platform updates</li>
                <li>Improve platform based on usage analytics</li>
                <li>Ensure platform security</li>
              </ul>
            </div>
            <div className="privacy-section">
              <h2>4. Data Security</h2>
              <ul>
                <li>Firebase Firestore with strict security rules</li>
                <li>Role-Based Access Control (RBAC)</li>
                <li>Client-level data isolation</li>
                <li>SSL/HTTPS encryption for all data</li>
                <li>Audit logs for all activities</li>
              </ul>
            </div>
            <div className="privacy-section">
              <h2>5. Data Sharing</h2>
              <p>We do not sell or share your personal information except to comply with legal requirements or with trusted service providers under strict confidentiality agreements.</p>
            </div>
            <div className="privacy-section">
              <h2>6. Client Data Ownership</h2>
              <p>All production data, inventory records and operational data belongs entirely to the respective client. We do not access or use your operational data for any other purpose.</p>
            </div>
            <div className="privacy-section">
              <h2>7. Your Rights</h2>
              <ul>
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your operational data</li>
              </ul>
            </div>
            <div className="privacy-section">
              <h2>8. Contact Us</h2>
              <div className="privacy-contact">
                <p><strong>RudrayamX Private Limited</strong></p>
                <p>📧 <a href="mailto:contact@rudrayam.com">contact@rudrayam.com</a></p>
                <p>📞 <a href="tel:+919241283120">+91 9241283120</a></p>
                <p>🌐 <a href="https://www.rudrayam.com">www.rudrayam.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <hr className="footer-sep" />
          <p className="copyright">© 2026 RudrayamX Private Limited | www.rudrayam.com | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}