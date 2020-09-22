import React, { Component } from 'react'
import ParkCard from './ParkCard'
import ParkSearch from './ParkSearch'

export default class ParksContainer extends Component {
  state = {
    parks: []
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
    let renderedParks = this.state.parks
    if (stateCode) {
      this.setState({
        stateCode: stateCode
      })
      renderedParks = this.state.parks.filter((park) => park.state.includes(stateCode))
    }
    console.log(renderedParks)
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
