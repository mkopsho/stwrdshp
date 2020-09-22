import React from 'react'
import { NavLink, Link } from 'react-router-dom' // decide on one (`Link` or `NavLink`) and stick with it!

const NavBar = () => {
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
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  )
}

export default NavBar
