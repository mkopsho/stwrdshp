import React from 'react'
import { NavLink } from 'react-router-dom'
import Like from './Like'

const ParkCard = (props) => {
  let overlay
  if (localStorage.logged_in) { // TODO: use Redux
    overlay = (
      <div>
        {props.name} | {props.state}
        {/* TODO: fix this overlay */}
        <Like parkId={props.id} handleLike={props.handleLike} />
      </div>
    )
  } else {
    overlay = (
      <div>
        {props.name} | {props.state}
      </div>
    )
  }

  console.log("I'm being rendered")
  return (
    <div className="park_card" >
      <NavLink to={`/parks/${props.id}`}>
        <p key={props.index}>{props.name}</p>
      </NavLink>
      <img src={props.img} alt={"Image of " + props.name}></img>
      <div>
        {overlay}
      </div>
    </div>
  )
}

export default ParkCard
