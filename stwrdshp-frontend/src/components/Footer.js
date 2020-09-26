import React from 'react'
import { connect } from 'react-redux'

const Footer = () => {
  if (localStorage.getItem("username")) {
    return (
      <>
        <div className="container has-text-centered">
          Logged in as {localStorage.getItem("username")}
        </div>
        <div className="container has-text-centered">
          STWRDSHP by <a href="https://kopsho.cafe">Michael Kopsho</a>.
        </div>
      </>
    )
  } else {
    return (
      <div className="container has-text-centered">
        STWRDSHP by < a href="https://kopsho.cafe"> Michael Kopsho</a>.
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Footer)
