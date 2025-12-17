/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar({ isScrolling }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = ['About', 'Projects', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${isScrolling ? 'scrolling' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="logo-text">RS</span>
        </motion.div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection(item)}
            >
              <span className="nav-link">{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>
    </motion.nav>
  )
}
