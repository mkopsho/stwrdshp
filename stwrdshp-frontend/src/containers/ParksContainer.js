import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'
import ParkSearch from '../components/ParkSearch'

export default class ParksContainer extends Component {
  state = {
    parks: [],
    stateCode: '',
    parkName: ''
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

  renderParkCards = (searchObj) => {
    // use Redux
    // revisit search by name when you can
    if (searchObj) {
      if (searchObj.stateCode) {
        this.setState({
          stateCode: searchObj.stateCode
        })
      }
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
