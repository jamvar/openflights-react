
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AirlineCard from './AirlineCard'
import styled from 'styled-components'

const Home = styled.div`
  text-align:center;
`
const Header = styled.div`
  padding:100px 100px 10px 100px;

  h1 {
    font-size:42px;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding:20px;
`

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('/api/v1/airlines.json')
    .then( resp => setAirlines(resp.data.data) )
    .catch( resp => console.log(resp) )
  }, [])

  const grid = airlines.map( (airline, index) => {
    return (
      <AirlineCard
        key={index}
        attributes={airline.attributes}
      />
    )
  })

  return(
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Airline reviews showcase to test react with rails</Subheader>
      </Header>
      <div className="grid">
        <Grid>
          {grid}
        </Grid>
      </div>
    </Home>
  )
}

export default Airlines
