import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'
import { connect } from 'react-redux'
import { fetchLikes, handleUnlikedPark } from '../actions/likeActions'

class LikesContainer extends Component {
  state = {
    likedParks: []
  }

  componentDidMount() {
    let user_id = localStorage.getItem("id")
    this.props.fetchLikes(user_id)
  }

  renderLikedParks = () => {
    return this.props.likes.likedParks.map((park, index) => {
      return <ParkCard handleUnlikedPark={this.handleUnlikedPark} liked={true} name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
    })
  }

  handleUnlikedPark = (parkId) => {
    this.props.handleUnlikedPark(parkId)
  }

  render() {
    return (
      <div>
        <h1>
          Likes
        </h1>
        <ul>
          {this.renderLikedParks()}
        </ul>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { fetchLikes, handleUnlikedPark })(LikesContainer)
