export const gotParks = (parks) => ({
  type: "GOT_PARKS",
  payload: parks
})

export const searchParksByName = (renderedParks) => ({
  type: "SEARCH_PARKS_BY_NAME",
  payload: renderedParks
})

export const searchParksByState = (renderedParks) => ({
  type: "SEARCH_PARKS_BY_STATE",
  payload: renderedParks
})

export const resetParkCards = (parks) => ({
  type: "RESET_PARK_CARDS",
  payload: parks
})

// Async stuff
// TODO: Better data gathering! (https://developer.nps.gov/api/v1/parks?api_key=eucnhNo81VauxloY6tcZF41iFh5AUkofsEqeIW2x)
export const fetchParks = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch('http://localhost:3000/parks')
      .then((parks) => {
        return parks.json()
      })
      .then((parks) => {
        dispatch(gotParks(parks)) // same as `dispatch({ type: "GOT_PARKS", payload: action.payload })`
      })
  }
}
