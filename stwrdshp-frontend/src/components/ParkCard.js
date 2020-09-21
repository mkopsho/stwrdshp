import React from 'react'

const ParkCard = (props) => {
  return (
    <div>
      <li key={props.key}>{props.name}<img src={props.img}></img></li>
    </div>
  )
}

export default ParkCard
