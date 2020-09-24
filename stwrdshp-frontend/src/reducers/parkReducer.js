export default function parkReducer(
  state = {
    parks: [],
    filteredList: [],
    stateCode: '',
    parkName: ''
  }, action) {
  switch (action.type) {
    case "GOT_PARKS":
      return { ...state, parks: action.payload, filteredList: action.payload }
    case "SEARCH_PARKS_BY_NAME":
      return { ...state, filteredList: action.payload }
    case "SEARCH_PARKS_BY_STATE":
      return { ...state, filteredList: action.payload }
    case "RESET_PARK_CARDS":
      return { ...state, filteredList: action.payload }
    default:
      return state
  }
}
