import React from 'react'
import { connect } from 'react-redux'

const Footer = (props) => {
  if (props.location.pathname === "/parks" || props.location.pathname === "/likes") {
    return null
  }
  if (localStorage.getItem("username")) {
    return (
      <>
        <footer className="footer">
          <div className="container has-text-centered">
            Logged in as {localStorage.getItem("username")}
          </div>
          <div className="container has-text-centered">
            STWRDSHP by <a href="https://kopsho.cafe">Michael Kopsho</a>.
        </div>
        </footer>
      </>
    )
  } else {
    return (
      <footer className="footer">
        <div className="container has-text-centered">
          STWRDSHP by <a href="https://kopsho.cafe"> Michael Kopsho</a>.
      </div>
      </footer>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Footer)
