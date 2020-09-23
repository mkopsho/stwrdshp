import React from 'react'
import { NavLink } from 'react-router-dom'

const ParkCard = (props) => {
  let likeDisplay
  if (localStorage.logged_in) { // TODO: use Redux
    likeDisplay = (
      <div>
        {props.name} | {props.state} | LIKE ME
      </div>
    )
  } else {
    likeDisplay = (
      <div>
        {props.name} | {props.state}
      </div>
    )
  }

  console.log("I'm being rendered")
  return (
    <div className="park_card" >
      <NavLink to={`/parks/${props.index}`}>
        <p key={props.index}>{props.name}<img src={props.img} alt={"Image of " + props.name}></img></p>
        <div>
          {likeDisplay}
        </div>
      </NavLink>
    </div>
  )
}

export default ParkCard
