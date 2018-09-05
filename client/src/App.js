import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Forum from './pages/Forum'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/forum' component={Forum} />
        </div>
      </Router>
    )
  }
}

export default App
