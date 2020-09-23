import React from 'react'
import { NavLink, Link } from 'react-router-dom' // decide on one (`Link` or `NavLink`) and stick with it!

const NavBar = () => {
  let userNavDisplay
  if (localStorage.logged_in) { // TODO: use Redux state to re-render
    userNavDisplay = (
      <>
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
        <li>
          <Link to="/likes">Likes</Link>
        </li>
      </>
    )
  } else {
    userNavDisplay = (
      <>
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
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
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/parks">Parks</Link>
      </li>
      {userNavDisplay}
    </ul>
  )
}

export default NavBar
