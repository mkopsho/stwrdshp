import React, { Component } from 'react'

export default class Park extends Component {
  state = {
    parkId: '',
    parkName: '',
    stateCode: '',
    imgUrl: ''
  }

  componentDidMount() {
    console.log("Park component mounted")
    let parkId = this.props.match.params.parkId
    fetch(`http://localhost:3000/parks/${parkId}`)
      .then((park) => {
        return park.json()
      })
      .then((park) => {
        console.log(park)
        this.setState({
          parkId: park.id,
          parkName: park.name,
          stateCode: park.state,
          imgUrl: park.image
        })
      })
  }

  render() {
    return (
      <div>
        <h3>
          Park Info for {this.state.parkName}
        </h3>
        <ul>
          <li>
            State: {this.state.stateCode}
          </li>
          <li>
            Location:
          </li>
          <li>
            Site:
          </li>
          <li>
            Other stuff (placeholder)
          </li>
          <img src={this.state.imgUrl} alt={"Image of " + this.state.imgUrl}></img>
        </ul>
      </div >
    )
  }
}
