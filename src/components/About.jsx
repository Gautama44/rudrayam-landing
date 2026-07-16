import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Rudrayam</h2>
          <p>Enterprise Digital Manufacturing Technology</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Intelligent Manufacturing for the Modern Era</h3>
            <p>
              Rudrayam Technologies develops scalable digital solutions that connect people, processes, and production systems. We empower manufacturers and enterprises with the intelligence needed to optimize operations, reduce costs, and drive sustainable growth.
            </p>
            <p>
              Built on principles of reliability, security, and innovation, our platform enables organizations to achieve complete production visibility and operational excellence at enterprise scale.
            </p>

            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-icon">🏭</div>
                <h4>Built for Industrial Scale</h4>
                <p>Designed to handle complex manufacturing operations with millions of data points</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🔒</div>
                <h4>Secure Architecture</h4>
                <p>Enterprise-grade security with compliance for regulated industries</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">⚡</div>
                <h4>Real-time Visibility</h4>
                <p>Live production intelligence and instantaneous operational insights</p>
              </div>
              <div className="highlight">
                <div className="highlight-icon">🚀</div>
                <h4>Future-Ready Technology</h4>
                <p>Cloud-native architecture built for tomorrow's manufacturing challenges</p>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-box">
              <div className="visual-item">Manufacturing</div>
              <div className="visual-item">Real-time Data</div>
              <div className="visual-item">Advanced Analytics</div>
              <div className="visual-item">Enterprise Insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
