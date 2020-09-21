import React, { Component } from 'react'
import ParkCard from './ParkCard'
import ParkSearch from './ParkSearch'

export default class ParksContainer extends Component {
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
        <h2>
          <ParkSearch />
        </h2>
        <ul>
          {this.state.parks.map((park, index) => <ParkCard name={park.name} img={park.image} key={index} />)}
        </ul>
      </div >
    )
  }
}
