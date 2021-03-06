export default function likeReducer(state = { likedParks: [] }, action) {
  switch (action.type) {
    case "GOT_LIKES":
      return { likedParks: action.payload }
    case "DELETE_LIKE":
      return { likedParks: action.payload }
    default:
      return state
  }
}
