import React from "react"

const Card = ({ serialNo, dateFrom, dateTo, heading, from, text }) => {
  return (
    <div className="card">
      <div className="s-no">
        <p>{serialNo}</p>
      </div>
      <p className="date">
        {dateFrom} - {dateTo}
      </p>

      <div className="course">
        <h3>{heading}</h3>
        <p>- {from}</p>
      </div>

      <p className="text">{text}</p>
    </div>
  )
}

export default Card
