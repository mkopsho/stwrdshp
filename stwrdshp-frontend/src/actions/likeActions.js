export const gotLikes = (likes) => ({
  type: "GOT_LIKES",
  payload: likes
})

export const deleteLike = (likes) => ({
  type: "DELETE_LIKE",
  payload: likes
})

// Async stuff
export const fetchLikes = (user_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${user_id}`)
      .then((likedParks) => {
        return likedParks.json()
      })
      .then((likes) => {
        dispatch(gotLikes(likes))
      })
  }
}

export const handleUnlikedPark = (parkId) => {
  return (dispatch) => {
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
      .then((likes) => {
        dispatch(deleteLike(likes))
      })
  }
}
