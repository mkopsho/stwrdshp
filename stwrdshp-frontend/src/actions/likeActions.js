export const gotLikes = (likes) => ({
  type: "GOT_LIKES",
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
