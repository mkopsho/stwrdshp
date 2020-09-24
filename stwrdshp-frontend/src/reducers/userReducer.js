export default function userReducer(
  state = {
    username: '',
    email: '',
    password: '',
    isLoggedIn: false
  }, action) {
  switch (action.type) {
    case "LOG_IN_THE_USER":
      return { ...state, isLoggedIn: true }
    case "LOG_OUT_THE_USER":
      return { ...state, isLoggedIn: false }
    default:
      return state
  }
}
