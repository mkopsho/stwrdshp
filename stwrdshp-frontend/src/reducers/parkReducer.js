export default function parkReducer(
  state = {
    parks: [],
    filteredList: [],
    stateCode: '',
    parkName: ''
  }, action) {
  switch (action.type) {
    case "GET_PARKS":
      return state
    default:
      return state
  }
}
