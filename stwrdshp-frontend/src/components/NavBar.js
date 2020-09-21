import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/parks">Parks</Link>
      </li>
    </ul>
  )
}

export default NavBar
