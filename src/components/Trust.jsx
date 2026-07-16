import React from 'react'
import './Trust.css'

const Trust = () => {
  const trustPoints = [
    {
      title: 'Enterprise Scalability',
      description: 'Proven architecture supporting unlimited scale with consistent performance',
    },
    {
      title: 'Industry Compliance',
      description: 'Certifications and compliance frameworks for regulated industries',
    },
    {
      title: 'Dedicated Support',
      description: 'Enterprise support with SLA guarantees and technical assistance',
    },
  ]

  return (
    <section className="trust">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Enterprise Ready</div>
          <h2>Built for Enterprise</h2>
          <p>The manufacturing platform trusted by leading enterprises</p>
        </div>

        <div className="trust-content">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="trust-card" style={{ '--card-delay': `${idx * 0.1}s` }}>
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trust
