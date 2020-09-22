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
    // TODO: use thunk and uncomment for actual API crawling (async fetch vs. render)
    //   fetch('https://developer.nps.gov/api/v1/parks?api_key=eucnhNo81VauxloY6tcZF41iFh5AUkofsEqeIW2x')
    //     .then((parks) => {
    //       return parks.json()
    //     })
    //     .then((parks) => {
    //       parks.data.forEach((park) =>
    //         this.setState({
    //           parks: [...this.state.parks, park]
    //         }))
    //     })
    // }
    console.log('ParksContainer mounted!')
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
    // TODO: use Redux
    // TODO: use defaultState or re-render full list when we mess with this.state.parks due to the searches
    if (searchObj) {
      if (searchObj.stateCode) {
        let renderedParks = this.state.parks.filter((park) => park.state.includes(searchObj.stateCode))
        this.setState({
          parks: renderedParks
        })
      }
      if (searchObj.parkName) {
        let renderedParks = this.state.parks.filter((park) => park.name.toLowerCase().includes(searchObj.parkName.toLowerCase()))
        this.setState({
          parks: renderedParks
        })
      }
    }
    return this.state.parks.map((park, index) => {
      return <ParkCard name={park.name} img={park.image} state={park.state} key={index} />
    })
  }

  render() {
    return (
      <div>
        <h1>
          Parks
        </h1>
        <h2>
          {/* TODO: use Redux */}
          <ParkSearch renderParkCards={this.renderParkCards} />
        </h2>
        <ul>
          {this.renderParkCards()}
        </ul>
      </div >
    )
  }
}
