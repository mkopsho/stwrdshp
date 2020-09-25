import React, { Component } from 'react'
// import ParkCard from '../components/ParkCard'
import ParkSearch from '../components/ParkSearch'
import { connect } from 'react-redux'
import { fetchParks, handleLikedPark, searchParksByName, searchParksByState, resetParkCards } from '../actions/parkActions'
import { Suspense } from 'react';

const ParkCard = React.lazy(() => import('../components/ParkCard'))

class ParksContainer extends Component {
  state = {
    parks: [],
    filteredList: [],
    stateCode: '',
    parkName: '',
    loadingParks: false
  }

  componentDidMount() {
    console.log('ParksContainer mounted!')
    this.props.fetchParks()
  }


  renderParkCards = (searchObj) => {
    console.log(this.props)
    if (this.props.parks.loadingParks) {
      return <h2>Loading Parks...</h2>
    }

    if (searchObj) {
      if (searchObj.stateCode) {
        let renderedParks = this.props.parks.parks.filter((park) => park.state.includes(searchObj.stateCode))
        this.props.searchParksByState(renderedParks)
      }
      if (searchObj.parkName) {
        let renderedParks = this.props.parks.parks.filter((park) => park.name.toLowerCase().includes(searchObj.parkName.toLowerCase()))
        this.props.searchParksByName(renderedParks)
      }
    }
    return this.props.parks.filteredList.map((park, index) => {
      console.log(park.image)
      if (park.image === null) {
        park.image = "../../stwrdshp_placeholder.jpg"
      }
      return <Suspense fallback={<div>Loading...</div>}>
        <ParkCard handleLikedPark={this.handleLikedPark} name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
      </Suspense>
    })
  }

  resetParkCards = () => {
    this.props.resetParkCards(this.props.parks.parks)
  }

  handleLikedPark = (parkId) => {
    this.props.handleLikedPark(parkId)
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

export default connect(mapStateToProps, { fetchParks, handleLikedPark, searchParksByName, searchParksByState, resetParkCards })(ParksContainer)
