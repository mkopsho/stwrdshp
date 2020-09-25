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
      <div>
        <h3>
          Are you sure?
        </h3>
        <input type="submit" value="Yes, get me outta here" onClick={this.handleOnSubmit}></input>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { logOutUser })(LogOut)
