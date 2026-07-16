import React from 'react'
import './Advantage.css'

const Advantage = () => {
  const advantages = [
    {
      number: '01',
      title: 'Built for Industrial Scale',
      description: 'Engineered to handle complex manufacturing with high-volume data',
    },
    {
      number: '02',
      title: 'Secure Architecture',
      description: 'Enterprise-grade security with compliance certifications',
    },
    {
      number: '03',
      title: 'Real-time Visibility',
      description: 'Complete production visibility with live dashboards',
    },
    {
      number: '04',
      title: 'Future-Ready Technology',
      description: 'Cloud-native architecture built for innovation',
    },
    {
      number: '05',
      title: 'Customizable Workflows',
      description: 'Flexible platform adapting to your specific processes',
    },
  ]

  return (
    <section className="advantage">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Why Choose Us</div>
          <h2>Enterprise Advantages</h2>
          <p>Why leading manufacturers choose RudrayamX</p>
        </div>

        <div className="advantage-list">
          {advantages.map((item, idx) => (
            <div key={idx} className="advantage-item" style={{ '--item-delay': `${idx * 0.1}s` }}>
              <div className="advantage-number">{item.number}</div>
              <div className="advantage-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantage
