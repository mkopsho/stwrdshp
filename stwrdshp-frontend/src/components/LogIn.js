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
      <section className="hero is-fullheight is-primary has-bg-img-login">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Log In
            </h1>
            <form onSubmit={this.handleOnSubmit}>
              Username: <input type="text" name="username" value={this.state.value} onChange={this.handleOnChange}></input><br></br>
              Password: <input type="password" name="password" value={this.state.value} onChange={this.handleOnChange}></input><br></br>
              <input type="submit"></input>
            </form>
          </div>
        </div>
      </section >
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { logInUser })(LogIn)
