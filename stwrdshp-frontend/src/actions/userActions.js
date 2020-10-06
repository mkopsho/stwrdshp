export const logInTheUser = () => ({
  type: "LOG_IN_THE_USER"
})

export const logOutTheUser = () => ({
  type: "LOG_OUT_THE_USER"
})

export const logOutUser = () => {
  return (dispatch) => {
    console.log("in logOutUser")
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("logged_in")
    localStorage.removeItem("id")
    dispatch(logOutTheUser())
  }
}

// Async stuff
export const createUser = (username, email, password) => {
  return (dispatch) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
      .then(response => response.json())
      .then(userData => {
        console.log(userData)
        localStorage.setItem("token", userData.jwt)
        localStorage.setItem("username", userData.user.username)
        localStorage.setItem("id", userData.user.id)
        localStorage.setItem("logged_in", true)
        dispatch(logInTheUser())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const logInUser = (username, password) => {
  return (dispatch) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(userData => {
        console.log(userData)
        localStorage.setItem("token", userData.jwt)
        localStorage.setItem("username", userData.user.username)
        localStorage.setItem("id", userData.user.id)
        localStorage.setItem("logged_in", true)
        dispatch(logInTheUser())
      })
      .catch(error => {
        console.log(error)
      })
  }
}
