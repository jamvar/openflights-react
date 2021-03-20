
import React, { useState } from 'react'

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  return(
    <div className="home">
      <div className="header">
        <h1>OpenFlights</h1>
        <p className="subheader">Airline reviews showcase to test react with rails</p>
      </div>
      <div className="grid">
        AIRLINE GRID GOES HERE
      </div>
    </div>
  )
}

export default Airlines
