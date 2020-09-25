import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = () => {
  let userNavDisplay
  if (localStorage.getItem("username")) {
    userNavDisplay = (
      <>
        <NavLink className="navbar-item" to="/logout">Log Out</NavLink>
        <NavLink className="navbar-item" to="/likes">Likes</NavLink>
      </>
    )
  } else {
    userNavDisplay = (
      <>
        <NavLink className="navbar-item" to="/login">Log In</NavLink>
        <NavLink className="navbar-item" to="/signup">Sign Up</NavLink>
      </>
    )
  }

  return (
    <div>
      <nav className="navbar has-shadow is-transparen is-fixed-top">
        <div className="container">
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink className="navbar-item" to="/">Home</NavLink>
              <NavLink className="navbar-item" to="/about">About</NavLink>
              <NavLink className="navbar-item" to="/parks">Parks</NavLink>
              {userNavDisplay}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(NavBar)
