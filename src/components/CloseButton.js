import React from "react"
import { Link } from "react-router-dom"

const CloseButton = () => {
  return (
    <Link to="/">
      <div className="close-btn"></div>
    </Link>
  )
}

export default CloseButton
