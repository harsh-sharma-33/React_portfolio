import React from "react"
import CloseButton from "../components/CloseButton"
import TopHeading from "../components/TopHeading"
import img from "../img/Kh8lgoX-emma-watson-hd-wallpaper.jpg"
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
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProjectScreens
