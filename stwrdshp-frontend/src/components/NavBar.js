import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = () => {
  let userNavDisplay
  if (localStorage.getItem("username")) {
    userNavDisplay = (
      <>
        <li>
          <NavLink to="/logout">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/likes">Likes</NavLink>
        </li>
      </>
    )
  } else {
    userNavDisplay = (
      <>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    )
  }

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/parks">Parks</NavLink>
      </li>
      {userNavDisplay}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(NavBar)
