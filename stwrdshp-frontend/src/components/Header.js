import React from 'react'

const Header = () => {
  // use Redux
  if (localStorage.getItem("username")) {
    return (
      <div>
        Logged in as {localStorage.getItem("username")}
      </div>
    )
  } else {
    return null
  }
}

export default Header
