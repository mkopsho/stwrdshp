import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = () => {
  let userNavDisplay
  let likesDisplay
  if (localStorage.getItem("username")) {
    likesDisplay = (
      <NavLink className="navbar-item" to="/likes">Likes</NavLink>
    )
    userNavDisplay = (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <NavLink className="button is-light is-info" to="/logout">Log Out</NavLink>
          </div>
        </div>
      </div>
    )
  } else {
    userNavDisplay = (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <NavLink className="button is-info" to="/signup">Sign Up</NavLink>
            <NavLink className="button is-light is-info" to="/login">Log In</NavLink>
          </div>
        </div>
      </div>
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
              {likesDisplay}
            </div>
            {userNavDisplay}
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
