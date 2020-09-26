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
      <section className="hero is-fullheight is-primary has-bg-img-logout">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Are you sure?
          </h1>
            <button className="button is-danger" onClick={this.handleOnClick}>Yes, get me outta here!</button>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { logOutUser })(LogOut)
