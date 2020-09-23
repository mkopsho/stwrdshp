import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import ParksContainer from './containers/ParksContainer'

// Test fetch to check backend/API connectivity
// function testFetch() {
//   fetch('https://developer.nps.gov/api/v1/parks?api_key=eucnhNo81VauxloY6tcZF41iFh5AUkofsEqeIW2x')
//     .then((parks) => {
//       return parks.json()
//     })
//     .then((parks) => {
//       console.log(parks.data)
//       parks.data.forEach((park) => console.log(park.fullName, park.images[0], park.states))
//     })
// }

// TODO: revisit / use Redux
// function logout() {
//   if (localStorage['jwt']) {
//     localStorage.removeItem('jwt')
//     localStorage.removeItem('logged_in')
//   }
// }

function App() {
  //testFetch()
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/parks" component={ParksContainer} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" render={() => {
            if (localStorage["token"]) {
              localStorage.removeItem("token")
              localStorage.removeItem("username")
              localStorage.removeItem("logged_in")
            }
            return <Redirect to='/' />
          }} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
