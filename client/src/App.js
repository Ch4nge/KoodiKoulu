import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CoursePage from './pages/CoursePage'
import Forum from './pages/Forum'
import { initUser } from './reducers/userReducer'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      this.props.initUser(user)
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/forum' component={Forum} />
          <CoursePage />
        </div>
      </Router>
    )
  }
}

export default connect(null, { initUser })( App )
