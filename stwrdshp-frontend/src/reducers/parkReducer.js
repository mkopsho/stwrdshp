export default function parkReducer(
  state = {
    parks: [],
    filteredList: [],
    stateCode: '',
    parkName: '',
    loadingParks: false,
  }, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loadingParks: true }
    case "GOT_PARKS":
      return { ...state, parks: action.payload, filteredList: action.payload, loadingParks: false }
    case "RESET_PARK_CARDS":
      return { ...state, filteredList: action.payload }
    default:
      return state
  }
}
