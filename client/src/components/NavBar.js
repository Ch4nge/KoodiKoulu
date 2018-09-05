import React from 'react'
import { Dropdown, Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const NavBar = () => {
  return (
    <div>
      <Menu>
        <Container>
          <Menu.Item as='a' header>
            <Link to='/'>
              Etusivu
            </Link>
          </Menu.Item>
          <Menu.Item as='a'>
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
            <LoginForm />
            <SignupForm />
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  )
}

export default NavBar
