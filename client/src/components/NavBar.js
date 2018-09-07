import React from 'react'
import { Dropdown, Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { logout } from '../reducers/userReducer'


const NavBar = ({ user, logout }) => {
  console.log(user)
  return (
    <div>
      <Menu>
        <Container>
          <Menu.Item>
            <Link to='/'>
              Etusivu
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/forum'>
              Foorumi
            </Link>
          </Menu.Item>
          <Dropdown item simple text='Kurssit'>
            <Dropdown.Menu>
              <Dropdown.Item>
                Java
              </Dropdown.Item>
              <Dropdown.Item>
                Go
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item divided='false' position='right'>
            {user ? <p> {user.userWithoutPassword.username}
              <a onClick={logout}> Logout</a></p>
              : <div><LoginForm /><SignupForm /></div> }
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, { logout })( NavBar )
