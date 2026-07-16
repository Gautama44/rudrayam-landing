import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title animate-slide-in-down">
            Building Intelligent Digital Infrastructure for Modern Industries
          </h1>
          <p className="hero-subtitle animate-slide-in-up">
            Rudrayam Technologies enables manufacturers and enterprises with real-time production intelligence, industrial automation, advanced analytics, and connected digital platforms. Transform your manufacturing operations with enterprise-grade digital solutions.
          </p>
          <div className="hero-cta animate-slide-in-up">
            <button className="btn btn-primary btn-lg" onClick={scrollToContact}>
              Explore Platform
            </button>
            <button className="btn btn-outline btn-lg" onClick={scrollToContact}>
              Contact Enterprise Team
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Real-time Monitoring</div>
            </div>
            <div className="stat">
              <div className="stat-value">100%</div>
              <div className="stat-label">Enterprise Uptime</div>
            </div>
            <div className="stat">
              <div className="stat-value">∞</div>
              <div className="stat-label">Scalability</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card animate-slide-in-right">
            <div className="hero-card-icon">📊</div>
            <div className="hero-card-content">
              <h3>Digital Manufacturing Platform</h3>
              <p>Enterprise-grade infrastructure for complete production visibility and control</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
