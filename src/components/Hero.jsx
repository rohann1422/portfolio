/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          <span className="wave">👋</span> Hey there!
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title">
          I'm <span className="highlight">Rohan Sharma</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Full Stack Developer | React Enthusiast | Problem Solver
        </motion.p>

        <motion.p variants={itemVariants} className="hero-description">
          I build interactive and responsive web applications with modern technologies.
          Let's create something amazing together!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-buttons"
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById('projects').scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            View My Work
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="hero-animation"
        >
          <motion.div
            className="animated-shape"
            animate={{
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
