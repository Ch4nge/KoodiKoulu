import React from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'

class SignupForm extends React.Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      github: '',
      email: '',
    }
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { confirmPassword, email, github, username, password } = this.state
    return (
      <Modal style={{ top: '15em' }}
        trigger={<Button color='orange' style={{ marginLeft: '0.5em' }}basic >Rekisteröidy</Button>}
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
            <Form.Group widths='equal'>
              <Form.Input
                value={password}
                onChange={this.onChangeHandler}
                name='password'
                label='Salasana'
                placeholder='Salasana'
                type='password'/>
              <Form.Input
                value={confirmPassword}
                onChange={this.onChangeHandler}
                name='confirmPassword'
                label='Vahvista Salasana'
                placeholder='Salasana'
                type='password'/>
            </Form.Group>
            <Form.Input
              value={email}
              onChange={this.onChangeHandler}
              name='email'
              label='Sähköposti'
              placeholder='Sähköposti'/>
            <Form.Input
              value={github}
              onChange={this.onChangeHandler}
              name='github'
              label='Github'
              placeholder='Github'/>

            <Button color='green' onClick={this.onClickHandler}>Sign up</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default SignupForm
