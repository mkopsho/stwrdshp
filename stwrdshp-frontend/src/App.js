import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import LikesContainer from './containers/LikesContainer'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import NavBar from './components/NavBar'
import Park from './components/Park'
import ParksContainer from './containers/ParksContainer'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/parks/:parkId" component={Park} />
          <Route exact path="/parks" component={ParksContainer} />
          <Route exact path="/likes" component={LikesContainer} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={LogOut} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
