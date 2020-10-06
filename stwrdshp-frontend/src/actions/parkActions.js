export const gotParks = (parks) => ({
  type: "GOT_PARKS",
  payload: parks
})

export const resetParkCards = (parks) => ({
  type: "RESET_PARK_CARDS",
  payload: parks
})

// Async stuff
export const fetchParks = (perPage, offset) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch('http://localhost:3000/parks')
      .then((parks) => {
        return parks.json()
      })
      .then((data) => {
        let parks
        parks = data.slice(offset, offset + perPage)
        dispatch(gotParks(parks)) // same as `dispatch({ type: "GOT_PARKS", payload: action.payload })`
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const fetchParksByName = (name) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch('http://localhost:3000/parks')
      .then((parks) => {
        return parks.json()
      })
      .then((data) => {
        let parks
        parks = data.filter((park) => park.name.toLowerCase().includes(name))
        dispatch(gotParks(parks)) // same as `dispatch({ type: "GOT_PARKS", payload: action.payload })`
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const fetchParksByState = (stateCode) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" })
    fetch('http://localhost:3000/parks')
      .then((parks) => {
        return parks.json()
      })
      .then((data) => {
        let parks
        parks = data.filter((park) => park.state == stateCode)
        debugger
        dispatch(gotParks(parks)) // same as `dispatch({ type: "GOT_PARKS", payload: action.payload })`
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const handleLikedPark = (parkId) => {
  return () => {
    fetch('http://localhost:3000/likes', {
      method: "POST",
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
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
