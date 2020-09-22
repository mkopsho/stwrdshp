import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
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
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/parks" component={ParksContainer} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
