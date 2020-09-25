import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logInUser } from '../actions/userActions'

class LogIn extends Component {
  state = {
    username: '',
    password: '',
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    this.props.logInUser(username, password)
    this.props.history.push("/")
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state, [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <section className="section mt-4">
        <div className="container">
          <h1 className="title">
            Log In Page
        </h1>
          <form onSubmit={this.handleOnSubmit}>
            Username: <input type="text" name="username" value={this.state.value} onChange={this.handleOnChange}></input>
            Password: <input type="password" name="password" value={this.state.value} onChange={this.handleOnChange}></input>
            <input type="submit"></input>
          </form>
        </div>
      </section >
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { logInUser })(LogIn)
