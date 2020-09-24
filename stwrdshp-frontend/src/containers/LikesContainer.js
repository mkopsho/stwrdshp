import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'

export default class LikesContainer extends Component {
  state = {
    likedParks: []
  }

  componentDidMount() {
    console.log("LikesContainer mounted")
    let user_id = localStorage.getItem("id")
    fetch(`http://localhost:3000/users/${user_id}`)
      .then((likedParks) => {
        return likedParks.json()
      })
      .then((likedParks) => {
        console.log(likedParks)
        this.setState({
          likedParks: likedParks
        })
      })
  }

  renderLikedParks = () => {
    // TODO: use Redux
    return this.state.likedParks.map((park, index) => {
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
