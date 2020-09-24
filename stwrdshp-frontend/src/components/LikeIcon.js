import React from 'react'

const Like = () => {
  let star = "☆"
  return (
    <p onClick={() => star = "★"}>
      {star}
    </p>
  )
}

export default Like
