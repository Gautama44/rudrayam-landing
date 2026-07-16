import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: 'neural',
      title: 'AI Analytics',
      description: 'Machine learning-powered insights for predictive analytics',
    },
    {
      id: 2,
      icon: 'zap',
      title: 'Real-time Monitoring',
      description: 'Live dashboards with instantaneous production metrics',
    },
    {
      id: 3,
      icon: 'link',
      title: 'ERP Integration',
      description: 'Seamless connectivity with existing enterprise systems',
    },
    {
      id: 4,
      icon: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalable, reliable cloud-native architecture',
    },
    {
      id: 5,
      icon: 'lock',
      title: 'Security Architecture',
      description: 'Enterprise-grade encryption and access controls',
    },
    {
      id: 6,
      icon: 'users',
      title: 'Role-Based Access',
      description: 'Granular permission system for multi-user enterprises',
    },
  ]

  const renderIcon = (iconType) => {
    const iconProps = { width: 24, height: 24, stroke: 'currentColor', strokeWidth: 2, fill: 'none' }
    
    switch(iconType) {
      case 'neural':
        return (
          <svg {...iconProps} viewBox="0 0 24 24"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="3"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="8" x2="8" y2="16"/><line x1="16" y1="8" x2="16" y2="16"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
        )
      case 'zap':
        return (
          <svg {...iconProps} viewBox="0 0 24 24"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/></svg>
        )
      case 'link':
        return (
          <svg {...iconProps} viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        )
      case 'cloud':
        return (
          <svg {...iconProps} viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        )
      case 'lock':
        return (
          <svg {...iconProps} viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        )
      case 'users':
        return (
          <svg {...iconProps} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Capabilities</div>
          <h2>Enterprise Solutions</h2>
          <p>Comprehensive technology stack for modern manufacturing</p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={feature.id} className="feature-item" style={{ '--item-delay': `${idx * 0.1}s` }}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  {renderIcon(feature.icon)}
                </div>
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
