import React, { useState, useEffect } from 'react'

export default function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleElements, setVisibleElements] = useState({});
  const [displayText, setDisplayText] = useState('');
  const [autoPlay, setAutoPlay] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [formStatus, setFormStatus] = useState({ loading: false, success: null, error: null });
  const [activeModal, setActiveModal] = useState(null);
  const [pdfModal, setPdfModal] = useState(false);
  const [contactForm, setContactForm] = useState(false);
  const fullText = 'Industrial Production Management SaaS Platform';
  const modalData = {
    projects: {
      stat: "1+", title: "Projects Completed",
      content: [
        { heading: "Completed Project Highlights", items: ["Rudrayam.com — Full-stack Industrial Production Management SaaS Platform", "Custom UI/UX design and responsive development for mobile and desktop", "SEO optimization and Google Analytics integration", "Secure HTTPS, SSL certificate setup and performance optimization"] },
        { heading: "Technologies Used", items: ["Frontend: React.js", "Backend: Node.js", "Database: Firebase, MySQL, MongoDB", "Hosting: Vercel / Cloud Servers"] }
      ]
    },
    ongoing: {
      stat: "2+", title: "Ongoing Projects",
      content: [
        { heading: "Current Active Projects", items: ["Project 1 — RudrayamX Platform Expansion: Adding new modules, dashboards and analytics", "Project 2 — Client Onboarding System: Multi-client SaaS setup with subscription plans"] },
        { heading: "Our Development Process", items: ["Requirement gathering and scope finalization", "Wireframe and UI/UX design approval", "Frontend and backend development", "Quality assurance and testing", "Deployment and client handover", "Post-launch support and maintenance"] }
      ]
    },
    plants: {
      stat: "∞", title: "Plants Supported",
      content: [
        {
          heading: "Unlimited Plant Support",
          items: [
            "Connect and manage unlimited factory plants from one dashboard",
            "Each plant gets its own dedicated real-time production view",
            "Centralized reporting and analytics across all locations",
            "Role-based access per plant — operators see only their floor",
            "Independent plant operations with central admin control"
          ]
        }
      ]
    }
  };

  useEffect(() => {

  if (displayText.length < fullText.length) {
    const timer = setTimeout(() => {
      setDisplayText(prev => fullText.slice(0, prev.length + 1));
    }, 80);
    return () => clearTimeout(timer);
  }
}, [displayText, fullText]);
  // Auto-play functionality for expertise slider
  useEffect(() => {
  if (!autoPlay) return;
  const interval = setInterval(() => {
    changeSlide((currentSlide + 1) % 7);
  }, 6000);
  return () => clearInterval(interval);
}, [autoPlay, currentSlide]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
          observer.unobserve(entry.target); // ✅ ek baar trigger, dobara nahi
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-scroll]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Android Development",
      description: "Native Android apps with modern architecture, high performance and polished Material UI.",
      points: ["Java & Kotlin Apps", "Material UI Design"],
      action: "Request Demo",
      image: "/android.png"
    },
    {
      title: "Web Development",
      description: "Modern web apps with performance, accessibility and sleek UI.",
      points: ["Dynamic & Responsive", "UI/UX Focused"],
      action: "Request Demo",
      image: "/web.png"
    },
    {
      title: "Production Tracking System",
      description: "Track real-time production data across all plants with accurate logs and insights.",
      points: ["Live production logs", "Operator tracking", "Batch management"],
      action: "Request Demo",
      image: "/production.png"
    },
    {
      title: "Technical Support",
      description: "24x7 professional support teams to keep your systems online.",
      points: ["24x7 Assistance", "Instant Solutions"],
      action: "Request Demo",
      image: "/technical.png"
    },

    {
      title: "Inventory Management",
      description: "Track raw materials, tanks, and stock movement across plants.",
      points: ["Stock tracking", "Usage logs", "Low stock alerts"],
      action: "Request Demo",
      image: "/inventory.png"
    },
    {
      title: "Multi-Client SaaS Platform",
      description: "Manage multiple clients and plants from a single centralized system.",
      points: ["Client isolation", "Subscription plans", "Admin control"],
      action: "Request Demo",
      image: "/multi-client.png"
    },
    {
      title: "Worker & Operator System",
      description: "Track worker productivity and role-based activities across plants.",
      points: ["Worker logs", "Role access", "Performance tracking"],
      action: "Request Demo",
      image: "/worker.png"
    }
  ];
  useEffect(() => {
    services.forEach(service => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  const [slideVisible, setSlideVisible] = useState(true);

  const changeSlide = (newIndex) => {
    setSlideVisible(false);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setSlideVisible(true);
    }, 70);
  };
  const features = [
  {
    icon: "📦",
    title: "Real-Time Production Tracking",
    desc: "Track live production across all plants with real-time updates.",
    points: ["Live production logs", "Operator-wise tracking", "Timestamp-based entries", "Central monitoring"],
    tag: "Production",
    level: 1
  },
  {
    icon: "📊",
    title: "Advanced Analytics Engine",
    desc: "AI-powered analytics for production insights and performance tracking.",
    points: ["Daily & monthly KPIs", "Efficiency & productivity", "Plant comparison", "Performance insights"],
    tag: "Analytics",
    level: 1
  },
  {
    icon: "🚨",
    title: "Smart Alert System",
    desc: "Automatically detect issues and notify teams instantly.",
    points: ["Low production alerts", "Threshold monitoring", "Real-time alerts", "Issue detection"],
    tag: "Alerts",
    level: 1
  },
  {
    icon: "🏢",
    title: "Multi-Client SaaS Architecture",
    desc: "Each client operates as an independent company with complete data isolation and dedicated environment.",
    points: ["Unique clientId isolation", "Separate database scope", "Independent billing", "Secure multi-tenant system"],
    tag: "SaaS",
    level: 1
  },
  {
    icon: "💳",
    title: "Subscription & Billing System",
    desc: "Flexible subscription plans with feature-based access and usage control.",
    points: ["Plan-based features", "Active / suspended control", "Billing tracking", "Usage limits"],
    tag: "Billing",
    level: 1
    },
  {
    icon: "🔐",
    title: "Enterprise Security",
    desc: "Advanced Firestore security rules ensure complete data protection and isolation.",
    points: ["Client-level isolation", "Role-based access", "Secure queries", "Audit logging"],
    tag: "Security",
    level: 1
  },
  {
    icon: "🏭",
    title: "Multi-Plant Management",
    desc: "Manage multiple factories with centralized control and plant-specific operations.",
    points: ["Plant-wise data", "Independent operations", "Central dashboard"],
    tag: "Plant",
    level: 2
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "Real-time analytics to track efficiency, productivity and performance.",
    points: ["Daily KPIs", "Efficiency %", "Downtime tracking"],
    tag: "Analytics",
    level: 2
  },
  {
    icon: "📦",
    title: "Inventory System",
    desc: "Complete inventory tracking system for raw materials and outputs.",
    points: ["Stock tracking", "Usage logs", "Alerts"],
    tag: "Inventory",
    level: 2
  },
  {
    icon: "⚙️",
    title: "Machinery Monitoring",
    desc: "Track machine activity, downtime and performance.",
    points: ["Machine logs", "Downtime alerts", "Performance"],
    tag: "Machinery",
    level: 2
  },
  {
    icon: "👥",
    title: "Role-Based Access",
    desc: "Secure system with hierarchical role control.",
    points: ["Super Admin", "Admin", "Supervisor", "Operator", "Worker"],
    tag: "RBAC",
    level: 2
  },
  {
    icon: "🔐",
    title: "Enterprise Security",
    desc: "Secure and isolated client data using Firestore rules.",
    points: ["Client-level isolation", "Secure access rules", "Audit logs", "Data protection"],
    tag: "Security",
    level: 2
  },
  {
    icon: "📱",
    title: "Mobile + Web Sync",
    desc: "Seamless integration between Android app and web dashboard.",
    points: ["Android app for workers", "Web dashboard for admins", "Real-time sync"],
    tag: "Sync",
    level: 2
  },
  {
    icon: "📈",
    title: "Performance Metrics",
    desc: "Measure efficiency, productivity and downtime.",
    points: ["Efficiency %", "Downtime %", "Productivity score", "Avg batch size"],
    tag: "Metrics",
    level: 2
  },
  {
    icon: "🤖",
    title: "Automated Analytics",
    desc: "Backend engine automatically processes all data.",
    points: ["Auto daily summary", "Monthly reports", "Scheduled jobs", "Real-time processing"],
    tag: "Automation",
    level: 2
  }
];
  const nextSlide = () => {
    changeSlide((currentSlide + 1) % services.length);
    setAutoPlay(false);
  };
  const prevSlide = () => {
    changeSlide((currentSlide - 1 + services.length) % services.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    changeSlide(index);
    setAutoPlay(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'contact@rudrayam.com',
          subject: `New Contact Form Submission from ${formData.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          `
        })
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus({ loading: false, success: null, error: null }), 5000);
      } else {
        setFormStatus({ loading: false, success: false, error: data.error || 'Failed to send email' });
      }
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: error.message });
    }
  };

  return (
    <>
      <nav>
        <div className="logo-container">
          <span className="navbar-brand" style={{cursor:'pointer', userSelect:'none', WebkitUserSelect:'none', WebkitTouchCallout:'none'}} onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>RudrayamX</span>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>

        <ul className={menuOpen ? 'open' : ''}>
          <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#" onClick={() => { setMenuOpen(false); setContactForm(true); }}>Contact</a></li>
        </ul>
      </nav>


      <div className="hero">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title premium-title">
              <span className="typing-text">{displayText}</span>
              
            </h1>
            <p className="hero-subtitle premium-subtitle fade-in-delayed">Real-time production tracking, analytics, and multi-plant management system built for modern manufacturing businesses.</p>
          </div>
          
          <div className="buttons fade-in-delayed-2">
  <a className="btn btn-outline premium-button" href="#features" style={{ textDecoration: 'none' }}>View Platform</a>
  <button className="btn btn-primary premium-button" onClick={() => setContactForm(true)}>
    Request Demo
  </button>
  <button className="btn btn-brochure premium-button" onClick={() => setPdfModal(true)}>
    Company Profile
  </button>
</div>
        </div>
      </div>

      <section id="about" data-scroll className={`about-section scroll-reveal ${visibleElements['about'] ? 'visible' : ''}`} style={{marginBottom: '0', paddingBottom: '50px'}}>
  <div className="g1" /><div className="g2" />
  <div className="ac">
    <h2 className="about-headline">
  About Us
  <span className="about-sub">Industrial Intelligence Redefined</span>
</h2>

    <div className="about-card">

      <div className="about-img-col">
        <img src="/about.png" alt="Rudrayam Platform" />
        <div className="img-vignette" />
        <div className="br-tl" />
        <div className="br-br" />
        <div className="img-caption">
          <div className="caption-kicker">Powering Indian Factories</div>
          <div className="caption-text">One dashboard.<br />Every plant. Real-time.</div>
        </div>
      </div>

      <div className="about-content-col">
        <p className="about-body">
          <strong>RudrayamX Private Limited</strong> is an Industrial Production Management
          SaaS platform built for modern Indian manufacturers. We help factories digitize
          production tracking, analytics, and multi-plant operations — from a single, unified dashboard.
        </p>

        <span className="tag-pill">⚡ Built for Indian Manufacturing</span>

        <div className="sep" />

        <div>
          <span className="caps-head">Platform Capabilities</span>
          <div className="caps-grid">
            {['Multi-Plant Management','Real-Time Analytics','Role-Based Access Control',
              'Android + Web App','Secure Cloud Architecture','Production Tracking']
              .map(cap => (
              <div className="cap" key={cap}>
                <span className="cap-dot" />{cap}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="services" data-scroll className={`expertise-section scroll-reveal ${visibleElements['services'] ? 'visible' : ''}`}>
        <div className="section-title">
          <h2>Our Expertise</h2>
          <p>Explore what we do best</p>
        </div>

        <div className="container">
          <div className="slider-container">
            <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="slider"
              onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
              onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
              onTouchEnd={() => {
                if (!touchStart || !touchEnd) return;
                const distance = touchStart - touchEnd;
                if (distance > 50) nextSlide();
                if (distance < -50) prevSlide();
                setTouchStart(null);
                setTouchEnd(null);
        }}
          >
              <div className="feature-service" key={currentSlide} style={{opacity: slideVisible ? 1 : 0, transition: 'opacity 0.07s ease'}}>
                <div className="feature-content fade-content">
                  <h2 className="feature-title">{services[currentSlide].title}</h2>
                  <p className="lead feature-desc">{services[currentSlide].description}</p>
                  <ul className="feature-points">
                    {services[currentSlide].points.map((point, idx) => (
                      <li key={idx} style={{animation: `slideInLeft 0.5s ease-out ${0.1 + idx * 0.1}s forwards`, opacity: 0}}>{point}</li>
                    ))}
                  </ul>
                  <div className="feature-actions">
                    <button className="btn btn-outline" onClick={() => setContactForm(true)}>
                      {services[currentSlide].action}
                    </button>
                  </div>
                </div>
                <div className="feature-media" aria-hidden style={{padding:'0', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', background:'#0a1628'}}>
                  <img src={services[currentSlide].image} alt={services[currentSlide].title} style={{width:'100%', height:'auto', objectFit:'contain', objectPosition:'center', borderRadius:'12px'}} />
                </div>
              </div>
            </div>

            <button className="slider-btn slider-btn-next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="slider-dots">
            {services.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <section id="features" data-scroll className={`features-section scroll-reveal ${visibleElements['features'] ? 'visible' : ''}`}>
  <div className="section-title">
    <h2>Platform Features</h2>
    <p>Enterprise-grade multi-level architecture built for scale</p>
  </div>

  <div className="container">

    {/* Level Badges */}
    <div className="features-levels">
      <div className="level-badge level-2">
        <span>🏢</span> Client Level
      </div>
      <div className="level-arrow">→</div>
      <div className="level-badge level-2">
        <span>👤</span> Client Admin
      </div>
      <div className="level-arrow">→</div>
      <div className="level-badge level-3">
        <span>🏭</span> Plant Level
      </div>
      <div className="level-arrow">→</div>
      <div className="level-badge level-3">
        <span>👷</span> Workers
      </div>
    </div>

    {/* Client Level Heading */}
    <div className="features-level-title">
      <span className="level-dot level-dot-2"></span>
      Client Level
    </div>

    <div className="features-grid">
      {features.filter(f => f.level === 1).map((f, i) => (
        <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="feature-card-top">
            <span className="feature-icon">{f.icon}</span>
            <span className="feature-tag">{f.tag}</span>
          </div>
          <h3 className="feature-card-title">{f.title}</h3>
          <p className="feature-card-desc">{f.desc}</p>
          <ul className="feature-card-points">
            {f.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Plant Level Heading */}
    <div className="features-level-title" style={{ marginTop: '32px' }}>
      <span className="level-dot level-dot-3"></span>
      Plant Level
    </div>

    <div className="features-grid">
      {features.filter(f => f.level === 2).map((f, i) => (
        <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
          <div className="feature-card-top">
            <span className="feature-icon">{f.icon}</span>
            <span className="feature-tag">{f.tag}</span>
          </div>
          <h3 className="feature-card-title">{f.title}</h3>
          <p className="feature-card-desc">{f.desc}</p>
          <ul className="feature-card-points">
            {f.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div style={{ textAlign: 'center', padding: '40px 20px', marginTop: '32px' }}>
      <p style={{ fontSize: '18px', color: '#d0dce5', marginBottom: '20px', fontWeight: '600' }}>
        Ready to transform your operations?
      </p>
      <button className="btn btn-primary"
        onClick={() => setContactForm(true)}>
        Get Started Today
      </button>
    </div>
  </div>
</section>

{/* WHY SECTION */}
<section className="why-section">
  <div className="section-title">
    <h2>Why Choose Our Platform</h2>
    <p>Built for modern industrial operations</p>
  </div>
  <div className="container why-grid">
    <div className="why-card">
      <h3>🚀 Increase Efficiency</h3>
      <p>Track production and optimize performance with real-time insights.</p>
    </div>
    <div className="why-card">
      <h3>📊 Data-Driven Decisions</h3>
      <p>Use analytics to improve productivity and reduce losses.</p>
    </div>
    <div className="why-card">
      <h3>🔐 Secure & Scalable</h3>
      <p>Enterprise-grade architecture built for scale and security.</p>
    </div>
    <div className="why-card">
      <h3>🏭 Multi-Plant Control</h3>
      <p>Manage all your factories from one central dashboard.</p>
    </div>
  </div>
</section>
      <section id="testimonials" data-scroll className={`scroll-reveal ${visibleElements['testimonials'] ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-title">
            <h2>Our Leadership</h2>
            <p>The team behind Rudrayam</p>
          </div>

          <div className="testimonials">
            <div className="testimonial">
              <p>
                Deepak Singh Gautam is the Founder of RudrayamX Private Limited and the strategic visionary behind the platform. With expertise in Android Development, Web Technologies, and AI-driven solutions, he focuses on building scalable, secure, and performance-oriented digital products. He plays a key role in technology strategy, system architecture, and product innovation, ensuring every project reflects quality, reliability, and modern design standards. His forward-thinking approach drives RudrayamX towards building cutting-edge solutions for the industrial sector. He is committed to creating a technology ecosystem that empowers businesses to achieve operational efficiency and sustainable growth.
              </p>
              <div className="testimonial-info">
                <h4>Deepak Singh Gautam</h4>
                <span>Founder</span>
              </div>
            </div>

            <div className="testimonial">
              <p>
                Suvesh Kumar is the Co-Founder & CEO of RudrayamX Private Limited and the driving force behind its growth. With strong expertise in UI/UX design, business development, and client management, he ensures seamless coordination between technical teams and clients. He leads operations, key decisions, and long-term strategy, ensuring every solution reflects excellence, reliability, and impactful results. His client-first approach and visionary leadership continue to strengthen RudrayamX as a trusted name in the industrial management space. He is dedicated to fostering meaningful partnerships and delivering value-driven solutions that help industries scale with confidence.
              </p>
              <div className="testimonial-info">
                <h4>Suvesh Kumar</h4>
                <span>Co-Founder & CEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
  <div className="container" style={{ textAlign: 'center' }}>
    <h2>Ready to Digitize Your Factory?</h2>
    <p>Start managing production, analytics and operations in one platform.</p>
    <button className="btn btn-primary" onClick={() => setContactForm(true)}
      style={{ marginTop: '20px', padding: '14px 40px', fontSize: '16px' }}>
      Request Demo
    </button>
  </div>
</section>

  <div
  onClick={() => setContactForm(true)}
  style={{
    position: 'fixed',
    bottom: '32px',
    right: '32px',
    background: 'linear-gradient(135deg, #00e0ff, #0099bb)',
    color: '#071428',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 24px',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    zIndex: '999',
    width: 'fit-content',
    boxShadow: '0 8px 30px rgba(0,224,255,0.4)',
    transition: 'all 0.3s ease',
  }}
>
  <i className="fas fa-envelope"></i>
  <span>Contact Us</span>
</div>

      {contactForm && (
        <div className="contact-modal-overlay" onClick={(e) => e.target.classList.contains('contact-modal-overlay') && setContactForm(false)}>
          <div className="contact-modal-box">
            <div className="contact-modal-header">
              <div>
                <div className="contact-modal-title">Get In Touch</div>
                <div className="contact-modal-sub">We'll get back to you within 24 hours</div>
              </div>
              <button className="modal-close" onClick={() => setContactForm(false)}>✕</button>
            </div>
            <div className="contact-modal-body">
              {formStatus.success && (
                <div className="form-success">✓ Message sent! We'll get back to you soon.</div>
              )}
              {formStatus.error && (
                <div className="form-error">✗ Error: {formStatus.error}</div>
              )}
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                <input type="text" name="name" placeholder="Your Name"
                  required className="form-input"
                  value={formData.name} onChange={handleFormChange} />
                <span className="form-underline"></span>
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email"
                  required className="form-input"
                  value={formData.email} onChange={handleFormChange} />
                <span className="form-underline"></span>
              </div>
              <div className="form-group">
                <textarea rows="4" name="message" placeholder="Your Message"
                  required className="form-input"
                  value={formData.message} onChange={handleFormChange}>
                </textarea>
                <span className="form-underline"></span>
              </div>
              <button type="submit" className="btn btn-primary contact-btn"
                disabled={formStatus.loading}>
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    )}
      {activeModal && (
        <div className="modal-overlay" onClick={(e) => e.target.classList.contains('modal-overlay') && setActiveModal(null)}>
          <div className="modal-box">
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-stat-big">{modalData[activeModal].stat}</span>
                <div>
                 <div className="modal-title">{modalData[activeModal].title}</div>
                 <div className="modal-subtitle">DETAILS & OVERVIEW</div>
                </div>
              </div>
              <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
            </div>
            <div className="modal-body">
              {modalData[activeModal].content.map((section, i) => (
                <div key={i}>
                  <h4 className="modal-section-heading">{section.heading}</h4>
                  <ul className="modal-list">
                    {section.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {pdfModal && (
        <div className="pdf-modal-overlay" onClick={(e) => e.target.classList.contains('pdf-modal-overlay') && setPdfModal(false)}>
          <div className="pdf-modal-box">
            <div className="pdf-modal-header">
              <div className="pdf-modal-title">
                <span className="pdf-icon">📄</span>
                <div>
                  <div className="pdf-modal-name">RudrayamX Company Profile</div>
                  <div className="pdf-modal-sub">Official Brochure 2026</div>
                </div>
              </div>
              <div className="pdf-modal-actions">
                <a href="/RudrayamX_Company_Profile.pdf" download className="btn btn-primary pdf-dl-btn">
                  ⬇ Download
                </a>
                <button className="modal-close" onClick={() => setPdfModal(false)}>✕</button>
              </div>
            </div>
            <div className="pdf-modal-body">
              <iframe
                src="/RudrayamX_Company_Profile.pdf"
                width="100%"
                height="100%"
                title="RudrayamX Company Profile"
                style={{ border: 'none', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      )}
      <footer>
        <div className="container footer-grid">
          <div className="footer-brand fade-footer-item" style={{animationDelay: '0s'}}>
            <a href="#" onClick={() => window.scrollTo({top:0, behavior:'smooth'})} style={{display:'block', width:'fit-content'}}>
              <img src="/rudrayam.png" alt="logo" className="footer-logo" />
            </a>
            <p>At RudrayamX Private Limited, we are a technology-driven startup committed to delivering smart, scalable, and future-ready business solutions.</p>
          </div>

          <div className="footer-links fade-footer-item" style={{animationDelay: '0.1s'}}>
            <h4>Company</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setContactForm(true); }}>Contact us</a></li>
              <li><a href="/privacy-policy">Privacy policy</a></li>

            </ul>
          </div>

          <div className="footer-contact fade-footer-item" style={{animationDelay: '0.2s'}}>
            <h4>Address</h4>
            <address>
              Pan India — Remote &amp; On-site<br />
            </address>

            <div className="contact-list">
              <div className="contact-row"><i className="fas fa-phone"></i><span>+91 9241283120</span></div>
              <div className="contact-row"><i className="fas fa-envelope"></i><a href="mailto:contact@rudrayam.com">contact@rudrayam.com</a></div>
              <div className="contact-row"><i className="fab fa-whatsapp"></i><a href="https://wa.me/919241283120" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a></div>
              <div className="contact-row social-inline">
                <a href="https://www.linkedin.com/company/rudrayam-venture-pvt-ltd/" className="social-icon social-hover" style={{color: 'var(--accent)'}} target="_blank" rel="noopener noreferrer" onTouchEnd={(e) => e.currentTarget.blur()}><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.facebook.com/share/1BGgop4vcr/" className="social-icon social-hover" style={{color: 'var(--accent)'}} target="_blank" rel="noopener noreferrer" onTouchEnd={(e) => e.currentTarget.blur()}><i className="fab fa-facebook"></i></a>
                <a href="https://x.com/contactrudrayam" className="social-icon social-hover" style={{color: 'var(--accent)'}} target="_blank" rel="noopener noreferrer" onTouchEnd={(e) => e.currentTarget.blur()}><i className="fab fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/rudrayamx?igsh=ZHlzaDk5MzBlYnps" className="social-icon social-hover" style={{color: 'var(--accent)'}} target="_blank" rel="noopener noreferrer" onTouchEnd={(e) => e.currentTarget.blur()}><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <hr className="footer-sep" />
          <p className="copyright">RUDRAYAMX PRIVATE LIMITED | CIN: U62011DC2026PTC470019 | © 2026 All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}