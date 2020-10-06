import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'
import { connect } from 'react-redux'
import { fetchLikes, handleUnlikedPark } from '../actions/likeActions'

class LikesContainer extends Component {

  componentDidMount() {
    let user_id = localStorage.getItem("id")
    this.props.fetchLikes(user_id)
  }

  renderLikedParks = () => {
    if (this.props.likedParks.length === 0) {
      return <h2>You haven't liked any parks.</h2>
    } else {
      return this.props.likedParks.map((park, index) => {
        return <ParkCard handleUnlikedPark={this.handleUnlikedPark} liked={true} name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
      })
    }
  }

  handleUnlikedPark = (parkId) => {
    this.props.handleUnlikedPark(parkId)
  }

  render() {
    return (
      <section className="section mt-4">
        <div className="container">
          <h1 className="title">
            Likes
          </h1>
          <ul>
            {this.renderLikedParks()}
          </ul>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state.likes
}

export default connect(mapStateToProps, { fetchLikes, handleUnlikedPark })(LikesContainer)
