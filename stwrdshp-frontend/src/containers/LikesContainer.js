import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'
import { connect } from 'react-redux'
import { fetchLikes } from '../actions/likeActions'

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
      return <ParkCard handleUnLike={this.handleUnLike} liked={true} name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
    })
  }

  handleUnLike = (parkId) => {
    console.log("I've been unliked")
    console.log(parkId)
    fetch('http://localhost:3000/likes', {
      method: "DELETE",
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
      .then(likedParks => {
        console.log(likedParks)
        this.setState({
          likedParks: likedParks
        })
      })
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

export default connect(mapStateToProps, { fetchLikes })(LikesContainer)
