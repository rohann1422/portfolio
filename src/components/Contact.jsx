/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

// Initialize EmailJS with your public key
emailjs.init('1u9WqNaJC2eNYTkuC')

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Send email using EmailJS
      await emailjs.send('service_jbxdqek', 'template_n7lhwdt', {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'rohansidd9@gmail.com',
        message: formData.message,
      })

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err) {
      console.error('Email send error:', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'rohansidd9@gmail.com',
      link: 'mailto:rohansidd9@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '8447911899',
      link: 'tel:8447911899',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'rohann1422',
      link: 'https://github.com/rohann1422',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'rohan-sharma-384522202',
      link: 'https://www.linkedin.com/in/rohan-sharma-384522202/',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <div className="header-underline" />
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="contact-info">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out to me through any of the following channels:</p>

            <div className="info-grid">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-item"
                    whileHover={{ x: 5 }}
                    variants={itemVariants}
                  >
                    <Icon className="info-icon" />
                    <div>
                      <p className="info-label">{info.label}</p>
                      <p className="info-value">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            className="contact-animation"
            variants={itemVariants}
          >
            <h3>Let's Create Magic Together</h3>
            
            <div className="animation-container">
              {/* Floating orbs */}
              <motion.div
                className="floating-orb orb-1"
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.div
                className="floating-orb orb-2"
                animate={{
                  y: [0, 30, 0],
                  x: [0, -20, 0],
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              <motion.div
                className="floating-orb orb-3"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Connecting lines */}
              <svg className="connection-lines" viewBox="0 0 300 400">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ff0080" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                
                <motion.line
                  x1="150" y1="50" x2="80" y2="150"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.line
                  x1="150" y1="50" x2="220" y2="150"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                
                <motion.line
                  x1="150" y1="50" x2="150" y2="180"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                
                <motion.circle
                  cx="150" cy="50" r="8"
                  fill="#ff6b6b"
                  animate={{ r: [8, 12, 8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.circle
                  cx="80" cy="150" r="6"
                  fill="#ff0080"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <motion.circle
                  cx="220" cy="150" r="6"
                  fill="#ff0080"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
                
                <motion.circle
                  cx="150" cy="180" r="6"
                  fill="#ff0080"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
              </svg>

              {/* Pulse ring */}
              <motion.div
                className="pulse-ring"
                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>

            <p className="animation-text">
              Ready to collaborate? Reach out through any channel and let's build something amazing!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
