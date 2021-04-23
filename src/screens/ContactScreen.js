import React, { useState } from "react"
import { motion } from "framer-motion"
import axios from "axios"
import CloseButton from "../components/CloseButton"
import TopHeading from "../components/TopHeading"
import {
  topContactVariants,
  contactContainerVariants,
  inputContactVariants,
  buttonContactVariants,
} from "../animations/contactScreenAnimations"
const ContactScreen = () => {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setFormData({ ...formData, name: e.target.value })
        break
      case "phone":
        setFormData({ ...formData, phone: e.target.value })
        break
      case "email":
        setFormData({ ...formData, email: e.target.value })
        break
      case "message":
        setFormData({ ...formData, message: e.target.value })
        break

      default:
        setFormData({ formData })
    }
  }

  const sendHandler = () => {
    // Axios form request goes here
    axios({
      method: "post",
      url: "https://v1.nocodeapi.com/harshsharma/telegram/kHigiwHZYuhuFmCb",
      params: {},
      data: formData,
    })
      .then(function (response) {
        // handle success
        setFormData({})
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }
  return (
    <div className="contact-container">
      <motion.div
        className="contact"
        variants={contactContainerVariants}
        exit="exit"
        initial="init"
        animate="animate"
      >
        <CloseButton />
        <motion.div className="top-resume" variants={topContactVariants}>
          <TopHeading heading="Contact" subheading="I'm available for hire" />
        </motion.div>
        <div className="contact-section-1">
          {/* {success && <Message message="success" />} */}

          <div className="form">
            <motion.div className="left" variants={inputContactVariants}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Your Phone"
                value={formData.phone}
                name="phone"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </motion.div>
            <motion.div className="right" variants={inputContactVariants}>
              <textarea
                rows="10"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </motion.div>
          </div>
          <motion.button variants={buttonContactVariants} onClick={sendHandler}>
            Send
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactScreen
