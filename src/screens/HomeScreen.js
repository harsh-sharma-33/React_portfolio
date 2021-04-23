import React, { useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { BsPhone } from "react-icons/bs"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  bottomDivVariant,
  nameVariant,
  phoneVariants,
  homeContainerVariant,
} from "../animations/homeScreenAnimations"

const HomeScreen = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }
  return (
    <motion.div
      className="home-screen-wrapper"
      variants={homeContainerVariant}
      exit="exit"
    >
      <motion.div className="home-screen">
        <div className="top">
          <motion.div
            className="name"
            variants={nameVariant}
            initial="init"
            animate="animate"
            exit="exit"
          >
            <h1>Neeraj Gailakoti</h1>
            <h2>Android Developer</h2>
          </motion.div>

          <motion.div
            className="ph-no"
            variants={phoneVariants}
            initial="init"
            animate="animate"
            exit="exit"
          >
            <div className="icon">
              <BsPhone color="#ffb135" />
            </div>
            +917895652295
          </motion.div>
        </div>

        <motion.div className="hamburger" onClick={toggleNav}>
          {navOpen ? (
            <AiOutlineArrowLeft color="#ffb135" size="2rem" />
          ) : (
            <div className="burger"></div>
          )}
        </motion.div>

        <motion.div
          className={navOpen ? "bottom" : "bottom hide"}
          variants={bottomDivVariant}
          initial="init"
          animate="animate"
          exit="exit"
        >
          <h2>Neeraj Gailakoti</h2>
          <ul className="nav">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/resume"
            >
              <li className="nav-item">Resume</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/about"
            >
              <li className="nav-item">About Me</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/projects"
            >
              <li className="nav-item">Projects</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
            >
              <li className="nav-item">Contact</li>
            </Link>
          </ul>
          <button className="cta">download CV</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default HomeScreen
