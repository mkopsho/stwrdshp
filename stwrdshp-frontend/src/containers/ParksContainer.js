import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'
import ParkSearch from '../components/ParkSearch'
import { connect } from 'react-redux'
import { fetchParks, searchParksByName, searchParksByState, resetParkCards } from '../actions/parkActions'

class ParksContainer extends Component {
  state = {
    parks: [],
    filteredList: [],
    stateCode: '',
    parkName: '',
    loadingParks: true
  }

  componentDidMount() {
    console.log('ParksContainer mounted!')
    this.props.fetchParks()
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

export default connect(mapStateToProps, { fetchParks, searchParksByName, searchParksByState, resetParkCards })(ParksContainer)
