// Async stuff
export const createUser = (username, email, password) => {
  return () => {
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
        localStorage.setItem("token", userData.jwt)
        localStorage.setItem("username", userData.user.username)
        localStorage.setItem("id", userData.user.id)
        localStorage.setItem("logged_in", true)
      })
  }
}

export const logInUser = (username, password) => {
  return () => {
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
      })
  }
}