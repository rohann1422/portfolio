/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'Delhi Technological University',
      year: '2020 - 2024',
      gpa: '8.5/10',
      icon: '🎓'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2023',
      icon: '✅'
    },
    {
      id: 2,
      name: 'React.js Advanced',
      issuer: 'Coursera',
      date: '2023',
      icon: '⚛️'
    },
    {
      id: 3,
      name: 'Node.js & Express',
      issuer: 'Udemy',
      date: '2022',
      icon: '🟢'
    },
    {
      id: 4,
      name: 'MongoDB Basics',
      issuer: 'MongoDB University',
      date: '2022',
      icon: '🍃'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="education" id="education">
      <div className="section-container">
        <div className="section-header">
          <h2>Education & Certifications</h2>
          <div className="header-underline"></div>
        </div>

        <div className="education-grid">
          {/* Education Section */}
          <div className="education-column">
            <h3 className="column-title">🎓 Education</h3>
            <motion.div
              className="education-items"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="education-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-content">
                    <h4>{edu.degree}</h4>
                    <p className="field">{edu.field}</p>
                    <p className="institution">{edu.institution}</p>
                    <div className="edu-footer">
                      <span className="year">{edu.year}</span>
                      <span className="gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Section */}
          <div className="certification-column">
            <h3 className="column-title">✨ Certifications</h3>
            <motion.div
              className="certification-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="cert-badge"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <h5>{cert.name}</h5>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
