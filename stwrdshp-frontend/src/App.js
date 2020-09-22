import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import ParksContainer from './containers/ParksContainer'

// Test fetch to check backend connectivity
// function testFetch() {
//   fetch('http://localhost:3000/parks')
//     .then((parks) => {
//       return parks.json()
//     })
//     .then((parks) => {
//       console.log(parks)
//     })
// }

function App() {
  // testFetch()
  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/parks" component={ParksContainer} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
