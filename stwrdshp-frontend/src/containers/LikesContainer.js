import React, { Component } from 'react'

export default class LikesContainer extends Component {
  state = {
    likes: []
  }

  componentDidMount() {
    console.log("LikesContainer mounted")
  }

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
