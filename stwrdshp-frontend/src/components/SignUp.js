import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let email = this.state.email
    let password = this.state.password
    this.props.createUser(username, email, password)
    this.props.history.push("/")
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state, [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <section className="hero is-fullheight is-light has-bg-img-signup">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Sign Up Page
          </h1>
            <form onSubmit={this.handleOnSubmit}>
              <strong>Username: </strong><input type="text" name="username" value={this.state.value} onChange={this.handleOnChange}></input><br></br>
              <strong>Email: </strong><input type="text" name="email" value={this.state.value} onChange={this.handleOnChange}></input><br></br>
              <strong>Password: </strong><input type="password" name="password" value={this.state.value} onChange={this.handleOnChange}></input><br></br>
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

export default connect(mapStateToProps, { createUser })(SignUp)
