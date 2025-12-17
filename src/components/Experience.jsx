/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2023 - Present',
      description: 'Developing scalable web applications using MERN stack, improving performance by 40% and reducing load time.',
      icon: '💼'
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      company: 'Digital Innovations',
      duration: 'Jun 2022 - Dec 2022',
      description: 'Built responsive UI components and collaborated with backend team to integrate APIs.',
      icon: '🚀'
    },
    {
      id: 3,
      title: 'Web Developer Trainee',
      company: 'Code Academy',
      duration: 'Mar 2022 - May 2022',
      description: 'Completed intensive training in web development fundamentals and modern frameworks.',
      icon: '📚'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <div className="section-header">
          <h2>Experience</h2>
          <div className="header-underline"></div>
        </div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <div className="experience-card">
                <div className="exp-icon">{exp.icon}</div>
                <div className="exp-content">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
