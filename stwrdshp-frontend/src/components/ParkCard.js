import React from 'react'

const ParkCard = (props) => {
  console.log("I'm being rendered!")
  return (
    <div>
      <li key={props.index}>{props.name}<img src={props.img}></img></li>
    </div>
  )
}

export default ParkCard
