import React from 'react'
import './Products.css'

const Products = () => {
  const products = [
    {
      id: 1,
      icon: '📱',
      name: 'QR Production Platform',
      description: 'Real-time production tracking and workflow management',
      color: 'primary',
      features: [
        'Real-time production tracking',
        'QR-based workflow automation',
        'Inventory visibility',
        'Plant monitoring',
        'Digital records',
        'Advanced analytics',
      ],
    },
    {
      id: 2,
      icon: '🌐',
      name: 'Enterprise Web Platform',
      description: 'Comprehensive dashboards and multi-client management',
      color: 'secondary',
      features: [
        'Enterprise dashboards',
        'Multi-client management',
        'Role-based access control',
        'Custom reporting',
        'Data visualization',
        'API integration',
      ],
    },
    {
      id: 3,
      icon: '📲',
      name: 'Mobile Operations',
      description: 'Empower field workers with real-time updates',
      color: 'accent',
      features: [
        'Worker mobility',
        'Real-time updates',
        'Field operations',
        'Offline capabilities',
        'Location tracking',
        'Task management',
      ],
    },
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Platform</div>
          <h2>Complete Product Ecosystem</h2>
          <p>Comprehensive solutions for modern manufacturing</p>
        </div>

        <div className="products-grid">
          {products.map((product, idx) => (
            <div key={product.id} className="product-card" style={{ '--card-delay': `${idx * 0.1}s` }}>
              <div className="product-header">
                <div className={`product-icon color-${product.color}`}>{product.icon}</div>
                <div className="product-badge">Enterprise</div>
              </div>
              
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              
              <div className="product-features">
                <div className="features-label">Capabilities</div>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="product-cta">
                <a href="#contact" className="learn-more">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
