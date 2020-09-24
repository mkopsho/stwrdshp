import React from 'react'
import { connect } from 'react-redux'

const Header = () => {
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

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Header)
