import React from "react"

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="skill-bar-wrapper">
      <div className="skill">
        <p>{skill}</p>
        <p className="percent">{percentage}%</p>
      </div>
      <div className="bar">
        <div className="bar-overly" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBar
