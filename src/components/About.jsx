import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  const skills = [
    'React.js',
    'JavaScript',
    'Node.js',
    'HTML & CSS',
    'Responsive Design',
    'Git & GitHub',
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="about">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="header-underline" />
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p>
              I'm a passionate full-stack developer with a keen interest in building
              beautiful, functional, and user-friendly web applications. With a strong
              foundation in modern web technologies, I love tackling complex problems
              and turning ideas into reality.
            </p>
            <p>
              I'm constantly learning and staying updated with the latest trends in
              web development. My approach combines technical expertise with creative
              thinking to deliver solutions that not only work but also delight users.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="skills-container">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
