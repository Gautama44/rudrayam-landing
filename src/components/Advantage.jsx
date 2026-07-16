import React from 'react'
import './Advantage.css'

const Advantage = () => {
  const advantages = [
    {
      number: '01',
      title: 'Built for Industrial Scale',
      description: 'Engineered to handle complex manufacturing operations with high-volume data processing and real-time performance',
    },
    {
      number: '02',
      title: 'Secure Architecture',
      description: 'Enterprise-grade security infrastructure with compliance certifications and data protection standards',
    },
    {
      number: '03',
      title: 'Real-time Visibility',
      description: 'Complete production visibility with live dashboards and instantaneous operational insights',
    },
    {
      number: '04',
      title: 'Future-Ready Technology',
      description: 'Cloud-native architecture built for scalability, flexibility, and continuous innovation',
    },
    {
      number: '05',
      title: 'Customizable Workflows',
      description: 'Flexible platform that adapts to your specific manufacturing processes and business requirements',
    },
  ]

  return (
    <section className="advantage">
      <div className="container">
        <div className="section-header">
          <h2>Why Enterprises Choose Rudrayam</h2>
          <p>Enterprise-Grade Digital Manufacturing Platform</p>
        </div>

        <div className="advantage-list">
          {advantages.map((item, idx) => (
            <div key={idx} className="advantage-item">
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
