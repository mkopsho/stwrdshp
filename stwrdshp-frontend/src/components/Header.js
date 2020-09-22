import React from 'react'

const Header = () => {
  if (localStorage.getItem("token")) {
    return (
      <div>
        Logged in as {localStorage.getItem("token")}
      </div>
    )
  } else {
    return null
  }
}

export default Header
