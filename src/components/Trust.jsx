import React from 'react'
import './Trust.css'

const Trust = () => {
  return (
    <section className="trust">
      <div className="container">
        <div className="section-header">
          <h2>Enterprise Ready Platform</h2>
          <p>Built for the World's Leading Manufacturers</p>
        </div>

        <div className="trust-content">
          <div className="trust-card">
            <div className="trust-icon">✓</div>
            <h3>Enterprise Scalability</h3>
            <p>Proven architecture supporting operations at unlimited scale with consistent performance</p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">✓</div>
            <h3>Industry Compliance</h3>
            <p>Certifications and compliance frameworks for regulated manufacturing verticals</p>
          </div>
          <div className="trust-card">
            <div className="trust-icon">✓</div>
            <h3>24/7 Support</h3>
            <p>Dedicated enterprise support with SLA guarantees and technical assistance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
