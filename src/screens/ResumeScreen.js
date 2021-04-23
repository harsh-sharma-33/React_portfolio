import React from "react"
import { motion } from "framer-motion"
import TopHeading from "../components/TopHeading"
import SubHeading from "../components/SubHeading"
import Card from "../components/Card"
import SkillBar from "../components/SkillBar"
import CloseButton from "../components/CloseButton"
import {
  topResumeVariants,
  cardTitleVariants,
  cardVariants,
  resumeContainerVariants,
} from "../animations/resumeScreenAnimations"
const ResumeScreen = () => {
  return (
    <motion.div
      className="resume-container"
      initial="init"
      animate="animate"
      exit="exit"
    >
      <motion.div className="resume" variants={resumeContainerVariants}>
        <CloseButton />
        <motion.div className="top-resume" variants={topResumeVariants}>
          <TopHeading subheading="I'm available for hire" heading="My Resume" />
        </motion.div>

        <div className="resume-section-1">
          <div className="education">
            <motion.div variants={cardTitleVariants}>
              <SubHeading text="Education" />
            </motion.div>
            <div className="card-wrap">
              <motion.div variants={cardVariants}>
                <Card
                  serialNo="1"
                  dateFrom="Feb 2002"
                  dateTo="March 2003"
                  heading="High School"
                  from="Haldwani School"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="2"
                  dateFrom="Feb 2004"
                  dateTo="March 2005"
                  heading="Intermediate"
                  from="Muzaffarnagar"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="3"
                  dateFrom="Feb 2002"
                  dateTo="March 2003"
                  heading="Bechloers of Techonology"
                  from="Meerut"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                />
              </motion.div>
            </div>
          </div>
          <div className="work-experiance">
            <motion.div variants={cardTitleVariants}>
              <SubHeading text="Work Experiances" />
            </motion.div>
            <div className="card-wrap">
              <motion.div variants={cardVariants}>
                <Card
                  serialNo="1"
                  dateFrom="Feb 2002"
                  dateTo="March 2003"
                  heading="Bechloers of Techonology"
                  from="Meerut"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="2"
                  dateFrom="Feb 2002"
                  dateTo="March 2003"
                  heading="Bechloers of Techonology"
                  from="Meerut"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="3"
                  dateFrom="Feb 2002"
                  dateTo="March 2003"
                  heading="Bechloers of Techonology"
                  from="Meerut"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="resume-section-2">
          <div className="programming-skills">
            <motion.div variants={cardTitleVariants}>
              <SubHeading text="Programming Skills" />
            </motion.div>
            <motion.div variants={cardVariants}>
              <SkillBar skill="HTML" percentage="95" />
            </motion.div>
            <motion.div variants={cardVariants}>
              <SkillBar skill="JavaScript" percentage="100" />
            </motion.div>
          </div>
          <div className="other-skills">
            <motion.div variants={cardTitleVariants}>
              <SubHeading text="Other Skills" />
            </motion.div>
            <motion.div variants={cardVariants}>
              <SkillBar skill="JavaScript" percentage="100" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ResumeScreen
