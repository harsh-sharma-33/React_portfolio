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
import img from "../img/PicsArt_07-26-05.53.04.jpg"
import selfie from "../img/PicsArt_07-26-05.53.43.jpg"
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
            <img src={selfie} alt="profile" className="img-2" />
          </motion.div>
          <motion.div className="about-text" variants={aboutTextVariants}>
            <h2>
              Hello, I'm <span>Neeraj Gailakoti</span>
            </h2>
            <p className="about-para">
              Experienced Android Deveoper with a demonstrated history of
              working in the information technology and service industry skilled
              in android development, IOS development,Web development,flutter.
              Strong professional with a B.Tech focused in computer science form
              MIT Meerut.
            </p>
            <div className="info-wrapper">
              <p className="info">
                <span>Age</span> 20
              </p>
              <p className="info">
                <span>Residance</span> Haldwani - Nainital
              </p>
              <p className="info">
                <span>Address</span> Kathghariya Haldwani, Nainital, Uttrakhand
              </p>
              <p className="info">
                <span>Email</span> neerajgailakotialm@gmail.com
              </p>
              <p className="info">
                <span>Phone</span> +917895652295
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
              text="I like to code things from scratch, and enjoy bringing ideas to life in the Application."
            />

            <ServicesCard
              Icon={AiOutlineApple}
              heading="IOS Development"
              text="Partner closely with product management, QA and Development team members to continiously develop and improve application."
            />

            <ServicesCard
              Icon={AiOutlineLaptop}
              heading="Website Development"
              text="I value simple content structure, clean design patterns, and thoughtful interactions."
            />

            <ServicesCard
              Icon={BiNotepad}
              heading="Content Writer"
              text="I enjoy writing on a variety of topics and i am open to taking on projects in other industries"
            />

            <ServicesCard
              Icon={SiMaterialdesign}
              heading="UX/UI Designer"
              text="As a product designer with a background in frontend development, my ambition is to elevate, connect, and empower people through inclusive and long lastning solution design."
            />

            <ServicesCard
              Icon={BsGraphUp}
              heading="Digital Marketing"
              text="With a fair uderstanding of modern days requirements of individuals, I've been successfull in providing the deesired solutions and reciving applause in return."
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutScreen
