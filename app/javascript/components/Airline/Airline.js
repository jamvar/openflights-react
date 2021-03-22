
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'

const Airline = () => {
  const [airline, setAirlineData] = useState({})
  const [review, setReview] = useState([])
  // const [loaded, setLoaded] = useState(false)

  useEffect( (props) => {
    debugger
    const slug = props.match.params.slug

    axios.get(`/api/v1/airlines/${slug}`)
    .then( (resp) => {
      debugger
      setAirlineData(resp.data)
      setLoaded(true)
    })
    .catch( resp => console.log(resp) )
  }, [])

  return(
    <div>
      <div className="column">
        <Header attributes={airline}/>
        <div className="reviews">
        </div>
      </div>
    </div>
  )
}

export default Airline
