import React from 'react'
import './Industries.css'

const Industries = () => {
  const industries = [
    { name: 'Packaging', icon: '📦', color: '#3B82F6' },
    { name: 'FMCG', icon: '🛒', color: '#10B981' },
    { name: 'Chemical', icon: '⚗️', color: '#F59E0B' },
    { name: 'Pharma', icon: '💊', color: '#8B5CF6' },
    { name: 'Automotive', icon: '🚗', color: '#EF4444' },
    { name: 'Medical', icon: '🏥', color: '#06B6D4' },
    { name: 'Textiles', icon: '🧥', color: '#EC4899' },
    { name: 'Paper', icon: '📄', color: '#A16207' },
    { name: 'Electronics', icon: '🔧', color: '#6366F1' },
  ]

  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Industries</div>
          <h2>Tailored Solutions</h2>
          <p>Optimized for your manufacturing vertical</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, idx) => (
            <div key={idx} className="industry-card" style={{ '--card-color': industry.color, '--card-delay': `${idx * 0.05}s` }}>
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
              <p>Specialized workflows for {industry.name.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
