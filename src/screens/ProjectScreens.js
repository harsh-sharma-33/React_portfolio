import React from "react"
import CloseButton from "../components/CloseButton"
import TopHeading from "../components/TopHeading"
import academicMaster from "../img/Acadmic.jpeg"
import sikka from "../img/sikka.jpeg"
import aur from "../img/Aur.jpeg"
import prerna from "../img/prerna.jpeg"
const ProjectScreens = () => {
  return (
    <div className="project-screen-container">
      <div className="project-screen">
        <CloseButton />
        <div className="top-resume">
          <TopHeading
            subheading="Showcase of my best works"
            heading="My Projects"
          />
        </div>
        <div className="projects-section-1">
          <img src={aur} alt="aur_app" />
          <img src={academicMaster} alt="Academic_master_app" />
          <img src={sikka} alt="sikka_app" />
          <img src={prerna} alt="prerna_app" />
        </div>
      </div>
    </div>
  )
}

export default ProjectScreens
