import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🤖',
      title: 'AI Analytics',
      description: 'Machine learning-powered insights for predictive analytics and operational optimization',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Real-time Monitoring',
      description: 'Live dashboards with instantaneous production data and operational metrics',
    },
    {
      id: 3,
      icon: '🔗',
      title: 'ERP Integration',
      description: 'Seamless connectivity with existing enterprise resource planning systems',
    },
    {
      id: 4,
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'Scalable, reliable cloud-native architecture for enterprise operations',
    },
    {
      id: 5,
      icon: '🔐',
      title: 'Security Architecture',
      description: 'Enterprise-grade security with encryption, compliance, and access controls',
    },
    {
      id: 6,
      icon: '👥',
      title: 'Role-Based Access',
      description: 'Granular permission system for secure multi-user enterprise environments',
    },
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Enterprise Solutions</h2>
          <p>Comprehensive Technology Stack for Modern Manufacturing</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-item">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
