import React, { Component } from 'react'

export default class LogIn extends Component {
  state = {
    username: '',
    password: ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
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
          Log In Page
        </h1>
        <form onSubmit={this.handleOnSubmit}>
          <li>Username: <input type="text" name="username" value={this.state.value} onChange={this.handleOnChange}></input></li>
          <li>Password: <input type="password" name="password" value={this.state.value} onChange={this.handleOnChange}></input></li>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}
