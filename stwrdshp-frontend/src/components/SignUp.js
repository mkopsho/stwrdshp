import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let email = this.state.email
    let password = this.state.password
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
      .then(response => response.json())
      .then(userData => {
        console.log(userData)
        localStorage.setItem("token", userData.jwt)
        localStorage.setItem("username", userData.user.username)
        this.props.history.push("/")
      })
  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state, [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>
          Sign Up Page
        </h1>
        <form onSubmit={this.handleOnSubmit}>
          <li>Username: <input type="text" name="username" value={this.state.value} onChange={this.handleOnChange}></input></li>
          <li>Email: <input type="text" name="email" value={this.state.value} onChange={this.handleOnChange}></input></li>
          <li>Password: <input type="password" name="password" value={this.state.value} onChange={this.handleOnChange}></input></li>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
