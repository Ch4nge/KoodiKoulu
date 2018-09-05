import React from 'react'
import { Dropdown, Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
        </Container>
      </Menu>
    </div>
  )
}

export default NavBar
