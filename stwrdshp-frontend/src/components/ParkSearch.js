import React, { Component } from 'react'

export default class ParkSearch extends Component {
  state = {
    stateCode: '',
    parkName: ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.renderParkCards(this.state)
    this.setState({
      stateCode: '',
      parkName: ''
    })
    console.log(this.state)
  }

  handleClearOnSubmit = (event) => {
    event.preventDefault()
    this.props.resetParkCards()
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleOnSubmit}>
            <div class="field has-addons">
              <div className="control">
                <div className="select">
                  <select id="search-states" name="stateCode" value={this.state.stateCode} onChange={this.handleOnChange}>
                    <option value="Select a state" select="true">Select a state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
              </div>
              <div class="control">
                <button className="button is-info" type="submit">Search by State</button>
              </div>
            </div>
          </form>
        </div>

        <div className="container">
          <form onSubmit={this.handleOnSubmit}>
            <div class="field has-addons mt-4">
              <div className="control">
                <div className="field">
                  <input className="input" placeholder="Park Name" type="text" name="parkName" value={this.state.parkName} onChange={this.handleOnChange}></input>
                </div>
              </div>
              <button className="button is-info" type="submit">Search by Name</button>
            </div>
          </form>
        </div>

        <div className="container mt-4">
          <form onSubmit={this.handleClearOnSubmit}>
            <button className="button is-light is-danger" type="submit"><strong>Reset Parks</strong></button>
          </form>
        </div>
      </div >
    )
  }
}
