import React from 'react'

const Like = (props) => {
  let parkId = props.parkId
  return (
    <div>
      <p onClick={() => props.handleLike(parkId)}>
        {/* TODO: Fix overlay */}
        Like me bro
      </p>
    </div>
  )
}

export default Like
