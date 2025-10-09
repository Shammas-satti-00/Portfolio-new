import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    // Initialize EmailJS with your real public key
    emailjs.init('4ieIbVnWo_hCbLAeR')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }
    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
        to_email: 'shammassatti00@gmail.com'

      }
      const result = await emailjs.send(
        'service_ry005h9',
        'template_k9eb1jz',
        templateParams,
        '4ieIbVnWo_hCbLAeR'
      )
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "shammassatti00@gmail.com",
      link: "mailto:shammassatti00@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+92 3703550503",
      link: "tel:+923703550503"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Islamabad, Pakistan",
      link: "#"
    }
  ]

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className={`contact-intro ${isVisible ? 'fade-in' : ''}`}> 
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>
          <div className="contact-content">
            <div className={`contact-info ${isVisible ? 'slide-in-left' : ''}`}> 
              <h3>Let's Connect</h3>
              <p>
                Available for freelance and full-time roles from crafting immersive games to building intelligent systems.
                 If your project needs a touch of creativity and code, I’m all in!
              </p>
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-buttons">
                  <a
                    href="https://github.com/Shammas-satti-00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shammas-ul-islam-660895275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className={`contact-form-container ${isVisible ? 'slide-in-right' : ''}`}>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message"
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="success-message">
                    🎉 Thank you! Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="error-message">
                    ❌ Failed to send message. Please check your EmailJS configuration:<br />• Make sure you've replaced the placeholder credentials with your actual EmailJS Service ID, Template ID, and Public Key<br />• Check the browser console for detailed error information
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .contact-section {
          background: var(--bg-primary); 
          padding: 100px 0;
        }
        .contact-intro {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeIn 0.8s ease forwards;
        }
        .contact-intro p {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.8s ease forwards;
        }
        .contact-info h3 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .contact-info > p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .contact-details {
          margin-bottom: 2rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .contact-icon {
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          background: var(--bg-tertiary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-text h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }
        .contact-text a {
          color: var(--accent-primary);
          text-decoration: none;
          font-size: 0.98rem;
          word-break: break-all;
        }
        .social-links {
          margin-top: 2.5rem;
        }
        .social-links h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .social-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 0.5rem;
        }
        .social-button {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1rem;
          background: var(--bg-secondary);
          border-radius: 6px;
          text-decoration: none;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          font-weight: 500;
          font-size: 0.9rem;
        }
        .social-button:hover {
          background: var(--accent-primary);
          color: #fff;
          border-color: var(--accent-primary);
        }
        .social-button svg {
          flex-shrink: 0;
        }
        .contact-form-container {
          opacity: 0;
          transform: translateX(50px);
          animation: slideInRight 0.8s ease forwards;
        }
        .contact-form {
          background: var(--card-bg);
          border-radius: 12px;
          box-shadow: 0 2px 24px var(--card-shadow);
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          background: var(--card-bg);
          color: var(--text-primary);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .success-message {
          margin-top: 1rem;
          padding: 1rem;
          background: #d4edda;
          color: #155724;
          border-radius: 8px;
          text-align: center;
        }
        .error-message {
          margin-top: 1rem;
          padding: 1rem;
          background: #f8d7da;
          color: #721c24;
          border-radius: 8px;
          text-align: center;
        }
        .info-message {
          margin-top: 1rem;
          padding: 1rem;
          background: #fff3cd;
          color: #856404;
          border-radius: 8px;
          text-align: center;
        }
        @media (max-width: 1024px) {
          .contact-content {
            gap: 3rem;
          }
          .contact-info h3 {
            font-size: 1.8rem;
          }
          .contact-form {
            padding: 2.5rem;
          }
        }
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .social-grid {
            gap: 0.6rem;
          }
          .social-link {
            padding: 0.8rem 1rem;
            min-height: 45px;
          }
          .social-name {
            font-size: 0.9rem;
          }
          .contact-form {
            padding: 1.5rem;
          }
          .contact-info h3 {
            font-size: 1.7rem;
          }
          .contact-item {
            gap: 0.8rem;
          }
          .contact-icon {
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
