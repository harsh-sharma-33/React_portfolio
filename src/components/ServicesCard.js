import React from "react"

const ServicesCard = ({ Icon, heading, text }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon />
      </div>
      <div className="service-content">
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ServicesCard
