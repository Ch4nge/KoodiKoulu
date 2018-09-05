import React from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from '../reducers/userReducer'

class LoginForm extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onClickHandler = () => {
    const { username, password } = this.state
    const credentials = {
      username,
      password
    }
    this.props.login(credentials)
  }

  render(){
    const { username, password } = this.state
    return(
      <Modal style={{ top: '15em' }}
        trigger={<Button color='green' basic >Kirjaudu</Button>}
        size='tiny' >
        <Modal.Content>
          <Header> Kirjaudu sisään </Header>
          <Form>
            <Form.Input
              value={username}
              onChange={this.onChangeHandler}
              name='username'
              label='Käyttäjätunnus'
              placeholder='Käyttäjätunnus'/>
            <Form.Input
              value={password}
              onChange={this.onChangeHandler}
              name='password'
              label='Salasana'
              placeholder='Salasana'
              type='password'/>
            <Button color='green' onClick={this.onClickHandler}>Kirjaudu sisään</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default connect(null, { login })( LoginForm )
