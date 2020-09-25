import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/userActions'

class LogOut extends Component {
  handleOnSubmit = (event) => {
    event.preventDefault()
    if (localStorage["token"]) {
      this.props.logOutUser()
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <section className="section mt-4">
        <div className="container">
          <h1 className="title">
            Are you sure?
          </h1>
          <input type="submit" value="Yes, get me outta here" onClick={this.handleOnSubmit}></input>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { logOutUser })(LogOut)
