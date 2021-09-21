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
                  dateFrom="Feb 2016"
                  dateTo="March 2017"
                  heading="High School"
                  from="Beersheba"
                  text="C.G.P.A - 8.8"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="2"
                  dateFrom="Feb 2017"
                  dateTo="March 2018"
                  heading="Intermediate"
                  from="Kendra Vidhalaya"
                  text="Percentage Obtained - 63%"
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="3"
                  dateFrom="Feb 2018"
                  dateTo="Currently Persuing"
                  heading="Bechloers of Techonology"
                  from="Meerut Institute of Techonology"
                  text=""
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
                  dateFrom="2018"
                  dateTo="2019"
                  heading="Freelancing (Content Writing)"
                  from="Remote"
                  text="I've worked 1.0+ years as a content writer "
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="2"
                  dateFrom="2019"
                  dateTo="2020"
                  heading="Freelancing (Developer)"
                  from="Remote"
                  text="I've worked 1.0+ years as a freelancer."
                />
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card
                  serialNo="3"
                  dateFrom="2020"
                  dateTo="Present"
                  heading="Android Developer"
                  from="Remote"
                  text="Working as an android developer in Digital Exchange Techonologies from past 7 months."
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
              <SkillBar skill="Flutter" percentage="95" />
            </motion.div>
            <motion.div variants={cardVariants}>
              <SkillBar skill="Dart" percentage="90" />
            </motion.div>

            <motion.div variants={cardVariants}>
              <SkillBar skill="C++" percentage="88" />
            </motion.div>

            <motion.div variants={cardVariants}>
              <SkillBar skill="Java" percentage="70" />
            </motion.div>
          </div>
          <div className="other-skills">
            <motion.div variants={cardTitleVariants}>
              <SubHeading text="Other Skills" />
            </motion.div>
            <motion.div variants={cardVariants}>
              <SkillBar skill="English Proficiency" percentage="95" />
            </motion.div>

            <motion.div variants={cardVariants}>
              <SkillBar skill="Teamwork" percentage="95" />
            </motion.div>

            <motion.div variants={cardVariants}>
              <SkillBar skill="Time Management" percentage="90" />
            </motion.div>

            <motion.div variants={cardVariants}>
              <SkillBar skill="Critical Thinking" percentage="90" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ResumeScreen
