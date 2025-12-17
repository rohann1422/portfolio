import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Study Assistant AI (MERN Stack)',
      description: 'Developed a full-stack AI-powered study platform that integrates LLM APIs to generate quizzes, answer academic questions, and summarize content. Built an interactive dashboard and chatbot interface providing real-time academic support with significantly improved student engagement.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'LLM APIs'],
      link: 'https://study-app-frontend-phi.vercel.app/',
      github: 'https://github.com/rohann1422',
      image: '🤖',
    },
    {
      id: 2,
      title: 'Employee Management System',
      description: 'Designed a responsive Employee Management System with role-based access control (RBAC). Features client-side authentication, admin employee management, task assignment, and secure employee access. Includes comprehensive manual functional testing on authentication flows.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'RBAC', 'Authentication'],
      link: 'https://employee-management-system-fawn-mu.vercel.app/',
      github: 'https://github.com/rohann1422',
      image: '👥',
    },
    {
      id: 3,
      title: 'Twitter Sentiment Analysis',
      description: 'Created a machine learning-based sentiment analysis system using Python. Performed data cleaning, tokenization, lemmatization, and sentiment classification on Twitter data. Improved model accuracy through effective preprocessing and visualized sentiment trends.',
      technologies: ['Python', 'NLTK', 'NumPy', 'Pandas', 'ML'],
      link: '#',
      github: 'https://github.com/rohann1422',
      image: '📊',
    },
  ]

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="header-underline" />
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <motion.a
                  href={project.link}
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="View Project"
                >
                  <FaExternalLinkAlt />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="GitHub Repository"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
