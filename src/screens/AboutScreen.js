import React from "react"
import { motion } from "framer-motion"
import {
  AiOutlineAndroid,
  AiOutlineApple,
  AiOutlineLaptop,
} from "react-icons/ai"
import { BiNotepad } from "react-icons/bi"
import { BsGraphUp } from "react-icons/bs"
import { SiMaterialdesign } from "react-icons/si"
import TopHeading from "../components/TopHeading"
import CloseButton from "../components/CloseButton"
import img from "../img/Kh8lgoX-emma-watson-hd-wallpaper.jpg"
import SubHeading from "../components/SubHeading"
import ServicesCard from "../components/ServicesCard"
import {
  aboutContainerVariants,
  topAboutVariants,
  imageContainerVariants,
  aboutTextVariants,
  cardTitleVariants,
  servicesVariants,
} from "../animations/aboutScreenAnimations"

const AboutScreen = () => {
  return (
    <motion.div
      className="about-container"
      initial="init"
      animate="animate"
      exit="exit"
    >
      <motion.div className="about" variants={aboutContainerVariants}>
        <CloseButton />
        <motion.div className="top-resume" variants={topAboutVariants}>
          <TopHeading heading="About Me" subheading="Who I Am" />
        </motion.div>

        <div className="about-section-1">
          <motion.div
            className="image-container"
            variants={imageContainerVariants}
          >
            <img src={img} alt="profile" className="img-1" />
            <img src={img} alt="profile" className="img-2" />
          </motion.div>
          <motion.div className="about-text" variants={aboutTextVariants}>
            <h2>
              Hello, I'm <span>Neeraj Gailakoti</span>
            </h2>
            <p className="about-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              doloribus veritatis aspernatur nisi eveniet officiis, ut voluptate
              vel dolorem. Repellendus sapiente nesciunt impedit eius eos. Rem
              non ratione ea voluptates? Odio sint magnam doloribus odit, vero
              accusamus expedita enim. Molestiae similique culpa quam sunt sit
              consequuntur accusamus labore porro atque!{" "}
            </p>
            <div className="info-wrapper">
              <p className="info">
                <span>Age</span> 36
              </p>
              <p className="info">
                <span>Residance</span> USA
              </p>
              <p className="info">
                <span>Address</span> 08 W 36th St, New York, NY 10001
              </p>
              <p className="info">
                <span>Email</span> admin@example.com
              </p>
              <p className="info">
                <span>Phone</span> +917017241759
              </p>
            </div>
          </motion.div>
        </div>

        <div className="about-section-2">
          <motion.div variants={cardTitleVariants}>
            <SubHeading text="My Services" />
          </motion.div>

          <motion.div
            className="service-card-wrapper"
            variants={servicesVariants}
          >
            <ServicesCard
              Icon={AiOutlineAndroid}
              heading="Android Development"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est necessitatibus sed perspiciatis! Praesentium "
            />

            <ServicesCard
              Icon={AiOutlineApple}
              heading="IOS Development"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est necessitatibus sed perspiciatis! Praesentium "
            />

            <ServicesCard
              Icon={AiOutlineLaptop}
              heading="Website Development"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est necessitatibus sed perspiciatis! Praesentium "
            />

            <ServicesCard
              Icon={BiNotepad}
              heading="Content Writer"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est necessitatibus sed perspiciatis! Praesentium "
            />

            <ServicesCard
              Icon={SiMaterialdesign}
              heading="UX/UI Designer"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est necessitatibus sed perspiciatis! Praesentium "
            />

            <ServicesCard
              Icon={BsGraphUp}
              heading="Digital Marketing"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est necessitatibus sed perspiciatis! Praesentium "
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutScreen
