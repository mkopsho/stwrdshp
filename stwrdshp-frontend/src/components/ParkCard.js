import React from 'react'
import { NavLink } from 'react-router-dom'

const ParkCard = (props) => {
  console.log("I'm being rendered")
  return (
    <div className="park_card" >
      <NavLink to={`/parks/${props.index}`}>
        <p key={props.index}>{props.name}<img src={props.img} alt={"Image of " + props.name}></img></p>
        <div>
          {props.name} | {props.state}
        </div>
      </NavLink>
    </div>
  )
}

export default ParkCard
