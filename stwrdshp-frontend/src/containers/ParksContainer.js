import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'
import ParkSearch from '../components/ParkSearch'
import { connect } from 'react-redux'
import { gotParks } from '../actions/parkActions'
import { searchParksByName } from '../actions/parkActions'
import { searchParksByState } from '../actions/parkActions'
import { resetParkCards } from '../actions/parkActions'

class ParksContainer extends Component {
  state = {
    parks: [],
    filteredList: [],
    stateCode: '',
    parkName: '',
    loadingParks: true
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
        this.props.gotParks(parks)
      })
  }


  renderParkCards = (searchObj) => {
    if (this.props.loadingParks) {
      return <h2>Loading Parks...</h2>
    }

    if (searchObj) {
      if (searchObj.stateCode) {
        let renderedParks = this.props.parks.filter((park) => park.state.includes(searchObj.stateCode))
        this.props.searchParksByState(renderedParks)
      }
      if (searchObj.parkName) {
        let renderedParks = this.props.parks.filter((park) => park.name.toLowerCase().includes(searchObj.parkName.toLowerCase()))
        this.props.searchParksByName(renderedParks)
      }
    }
    return this.props.filteredList.map((park, index) => {
      return <ParkCard handleLike={this.handleLike} name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
    })
  }

  resetParkCards = () => {
    this.props.resetParkCards(this.props.parks)
  }

  handleLike = (parkId) => {
    console.log("I've been clicked")
    console.log(parkId)
    fetch('http://localhost:3000/likes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        park_id: parkId
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        <h1>
          Parks
        </h1>
        <h2>
          <ParkSearch renderParkCards={this.renderParkCards} resetParkCards={this.resetParkCards} />
        </h2>
        <ul>
          {this.renderParkCards()}
        </ul>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { gotParks, searchParksByName, searchParksByState, resetParkCards })(ParksContainer)
