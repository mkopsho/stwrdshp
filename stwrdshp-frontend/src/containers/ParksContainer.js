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
    // TODO: fix search - by - state now that we're fetching API data
    // TODO: revisit search - by - name when you can
    if (searchObj) {
      if (searchObj.stateCode) {
        this.setState({
          stateCode: searchObj.stateCode
        })
      }
    }
    let renderedParks = this.state.parks.filter((park) => park.state.includes(this.state.stateCode))
    return renderedParks.map((park, index) => {
      // console.log(park)
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
