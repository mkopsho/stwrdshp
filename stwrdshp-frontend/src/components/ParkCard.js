import React from 'react'
import { NavLink } from 'react-router-dom'
// import LikeIcon from './LikeIcon'

const ParkCard = (props) => {
  let overlay
  if (localStorage.logged_in) { // TODO: use Redux
    if (props.liked) {
      overlay = (
        <div>
          {props.name} | {props.state}
          <p onClick={() => props.handleUnLike(props.id)}>
            ★
        </p>
        </div>
      )
    } else {
      overlay = (
        <div>
          {props.name} | {props.state}
          <p onClick={() => props.handleLike(props.id)}>
            ☆
        </p>
        </div>
      )
    }
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
