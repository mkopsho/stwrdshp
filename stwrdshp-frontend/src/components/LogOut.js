import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../actions/userActions'

class LogOut extends Component {
  handleOnClick = () => {
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
          <button className="button is-danger" onClick={this.handleOnClick}>Yes, get me outta here!</button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { logOutUser })(LogOut)
