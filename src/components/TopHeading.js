import React from "react"

const TopHeading = ({ subheading, heading }) => {
  return (
    <div className="top-heading">
      <p>{subheading}</p>
      <h1>{heading}</h1>
      <div className="hr"></div>
    </div>
  )
}

export default TopHeading
