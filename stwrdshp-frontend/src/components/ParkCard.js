import React from 'react'

const ParkCard = (props) => {
  // console.log("I'm being rendered!")
  return (
    <div className="park_card">
      <p key={props.index}>{props.name}<img src={props.img} alt={"Image of " + props.name}></img></p>
      <div>
        {props.name} | {props.state}
      </div>
    </div>
  )
}

export default ParkCard
