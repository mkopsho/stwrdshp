import React from 'react'

const ParkCard = (props) => {
  return (
    <div>
      <li>{props.name}<img src={props.img}></img></li>
    </div>
  )
}

export default ParkCard
