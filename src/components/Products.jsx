import React from 'react'
import './Products.css'

const Products = () => {
  const products = [
    {
      id: 1,
      icon: '📲',
      name: 'QR Production Platform',
      description: 'Real-time production tracking and workflow management powered by QR-based intelligence',
      features: [
        'Real-time production tracking',
        'QR-based workflow management',
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
      description: 'Comprehensive dashboards and multi-client management for enterprise operations',
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
      icon: '📱',
      name: 'Mobile Operations',
      description: 'Empower field workers with real-time updates and mobile-first operations management',
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
          <h2>Our Platform Ecosystem</h2>
          <p>Comprehensive Solutions for Modern Manufacturing</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-features">
                <h4>Key Capabilities</h4>
                <ul>
                  {product.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
