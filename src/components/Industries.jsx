import React from 'react'
import './Industries.css'

const Industries = () => {
  const industries = [
    { name: 'Packaging', icon: '📦' },
    { name: 'FMCG', icon: '🛍️' },
    { name: 'Chemical', icon: '⚗️' },
    { name: 'Pharma', icon: '💊' },
    { name: 'Automotive', icon: '🚗' },
    { name: 'Medical Devices', icon: '🏥' },
    { name: 'Textiles', icon: '🧵' },
    { name: 'Paper & Pulp', icon: '📄' },
    { name: 'Electronics', icon: '🔌' },
  ]

  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-header">
          <h2>Industry Solutions</h2>
          <p>Tailored for Your Manufacturing Vertical</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, idx) => (
            <div key={idx} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
              <p>Optimized workflows for {industry.name.toLowerCase()} operations</p>
            </div>
          ))}
        </div>

        <div className="industries-note">
          <p>
            Our platform adapts to the unique requirements of each manufacturing vertical, providing industry-specific features and best practices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Industries
