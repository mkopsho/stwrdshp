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
      return <ParkCard name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
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
