import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <div className="section-label">About RudrayamX</div>
          <h2>Enterprise Digital Manufacturing Technology</h2>
          <p>Transforming industrial operations with intelligent infrastructure</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Intelligent Manufacturing for Modern Enterprises</h3>
            <p>
              RudrayamX Private Limited develops scalable digital solutions that connect people, processes, and production systems. We empower manufacturers and enterprises with the intelligence needed to optimize operations, reduce costs, and drive sustainable growth.
            </p>
            <p>
              Built on principles of reliability, security, and innovation, our platform enables organizations to achieve complete production visibility and operational excellence at enterprise scale.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🏭</div>
                <h4>Industrial Scale</h4>
                <p>Designed for complex manufacturing with millions of data points</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🔐</div>
                <h4>Enterprise Security</h4>
                <p>Grade-A security with compliance for regulated industries</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">⚡</div>
                <h4>Real-time Visibility</h4>
                <p>Live intelligence with instantaneous operational insights</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🚀</div>
                <h4>Future Technology</h4>
                <p>Cloud-native built for tomorrow's manufacturing</p>
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Data Collection</h4>
                <p>QR-based production tracking</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Processing</h4>
                <p>Real-time data aggregation</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Analytics</h4>
                <p>AI-powered insights</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Action</h4>
                <p>Optimized decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
