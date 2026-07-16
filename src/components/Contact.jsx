import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('pending')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get Started Today</h2>
          <p>Connect with our enterprise team</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Send Message
              </button>

              {status === 'success' && (
                <div className="form-success">✓ Message sent successfully. We'll be in touch soon.</div>
              )}
              {status === 'pending' && (
                <div className="form-pending">Sending...</div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h4>Email</h4>
              <p>contact@rudrayam.com</p>
            </div>

            <div className="info-item">
              <div className="info-icon">🌐</div>
              <h4>Web</h4>
              <p>www.rudrayam.com</p>
            </div>

            <div className="info-item">
              <div className="info-icon">🏢</div>
              <h4>Enterprise Solutions</h4>
              <p>Dedicated support for enterprise customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
