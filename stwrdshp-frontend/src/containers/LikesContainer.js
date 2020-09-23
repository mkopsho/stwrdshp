import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'

export default class LikesContainer extends Component {
  state = {
    likes: []
  }

  componentDidMount() {
    console.log("LikesContainer mounted")
    // fetch('http://localhost:3000/parks')
    //   .then((parks) => {
    //     return parks.json()
    //   })
    //   .then((parks) => {
    //     this.setState({
    //       // liked parks
    //     })
    //   })
  }

  // renderLikedParks = () => {
  //   // TODO: use Redux
  //   return this.state.likes.map((park, index) => {
  //     return <ParkCard name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
  //   })
  // }

  render() {
    return (
      <div>
        <h1>
          Likes
        </h1>
        <ul>
          {/* {this.renderLikedParks()} */}
        </ul>
      </div >
    )
  }
}
