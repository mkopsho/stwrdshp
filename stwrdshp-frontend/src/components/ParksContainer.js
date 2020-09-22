import React, { Component } from 'react'
import ParkCard from './ParkCard'
import ParkSearch from './ParkSearch'

export default class ParksContainer extends Component {
  state = {
    parks: [],
    stateCode: ''
  }

  componentDidMount() {
    console.log('mounted')
    fetch('http://localhost:3000/parks')
      .then((parks) => {
        return parks.json()
      })
      .then((parks) => {
        this.setState({
          parks: parks
        })
      })
  }

  renderParkCards = (stateCode) => {
    if (stateCode) {
      this.setState({
        stateCode: stateCode
      })
    }
    let renderedParks = this.state.parks.filter((park) => park.state.includes(this.state.stateCode))
    return renderedParks.map((park, index) => {
      return <ParkCard name={park.name} img={park.image} key={index} />
    })
  }

  render() {
    return (
      <div>
        <h1>
          Parks
        </h1>
        <h2>
          {/* use Redux */}
          <ParkSearch renderParkCards={this.renderParkCards} />
        </h2>
        <ul>
          {this.renderParkCards()}
        </ul>
      </div >
    )
  }
}
