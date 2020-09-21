import React, { Component } from 'react'

export default class Parks extends Component {
  state = {
    parks: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/parks')
      .then((parks) => {
        return parks.json()
      })
      .then((parks) => {
        console.log(parks)
        this.setState({
          parks: parks
        }, () => console.log("New state:", this.state))
      })
  }

  render() {
    return (
      <div>
        <h1>
          Parks
        </h1>
        <ul>
          {this.state.parks.map((park, index) => <li>{park.name}<img key={index} alt="Park image" src={park.image}></img></li>)}
        </ul>
      </div >
    )
  }
}
