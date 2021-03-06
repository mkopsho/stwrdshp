import React, { Component } from 'react'
import ParkCard from '../components/ParkCard'
import ParkSearch from '../components/ParkSearch'
import { connect } from 'react-redux'
import { fetchParks, fetchParksByName, fetchParksByState, handleLikedPark, resetParkCards } from '../actions/parkActions'
import ReactPaginate from 'react-paginate'

class ParksContainer extends Component {
  // keep local state for pagination
  state = {
    perPage: 20,
    offset: 0,
    pageCount: 25
  }

  componentDidMount() {
    console.log('ParksContainer mounted!')
    this.props.fetchParks(this.state.perPage, this.state.offset)
  }

  renderParkCards = (searchObj) => {
    console.log(this.props)
    if (this.props.loadingParks) {
      return <h4 className="title is-4">Loading Parks...</h4>
    }

    if (searchObj) {
      if (searchObj.stateCode) {
        this.props.fetchParksByState(searchObj.stateCode)
      }
      if (searchObj.parkName) {
        this.props.fetchParksByName(searchObj.parkName)
      }
    }
    return this.props.filteredList.map((park, index) => {
      if (park.image === null) {
        park.image = "../../stwrdshp_placeholder.jpg"
      }
      return <ParkCard handleLikedPark={this.handleLikedPark} name={park.name} img={park.image} state={park.state} id={park.id} key={index} />
    })
  }

  resetParkCards = () => {
    this.props.fetchParks(this.state.perPage, this.state.offset)
  }

  handleLikedPark = (event, parkId) => {
    this.props.handleLikedPark(parkId)
    event.target.innerHTML = "★"
  }

  handlePageClick = (data) => {
    let selected = data.selected
    let offset = Math.ceil(selected * this.state.perPage)

    this.setState({ offset: offset }, () => {
      this.props.fetchParks(this.state.perPage, offset)
    })
  }

  render() {
    return (
      <section className="section mt-4">
        <div className="container">
          <h1 className="title">
            Parks
          </h1>
          <div>
            <ParkSearch renderParkCards={this.renderParkCards} resetParkCards={this.resetParkCards} />
          </div>
          <div>
            <nav className="pagination" role="navigation" aria-label="pagination">
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination-list'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
              />
            </nav>
          </div>
          <section className="section mt-4">
            <div className="container">
              <ul>
                {this.renderParkCards()}
              </ul>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state.parks
}

export default connect(mapStateToProps, { fetchParks, fetchParksByName, fetchParksByState, handleLikedPark, resetParkCards })(ParksContainer)
