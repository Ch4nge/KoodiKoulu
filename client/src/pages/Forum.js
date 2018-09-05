import React from 'react'
import { Container, Icon, Grid, Header, List }  from 'semantic-ui-react'

const Forum = () => {
  return(
    <Grid padded='vertically' verticalAlign='middle' container stackable>
      <Grid.Column width={16} >
        <List divided relaxed >
          <Container>
            <Header as='h3'> Yleinen keskustelu </Header>
          </Container>
          <List.Item>
            <Icon name='envelope open outline' />
            <List.Content>
              <List.Header as='a'> Yleinen keskustelu </List.Header>
              <List.Description> Uusin postaus: Testipost </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name='envelope open outline' />
            <List.Content>
              <List.Header as='a'> Ohjelmointi </List.Header>
              <List.Description> Uusin postaus: Testipost </List.Description>
            </List.Content>
          </List.Item>
          <Container style={{ paddingTop: '1em' }}>
            <Header as='h3'> Kurssit </Header>
          </Container>
          <List.Item>
            <Icon name='envelope open outline' />
            <List.Content>
              <List.Header as='a'> Javan perusteet </List.Header>
              <List.Description> Uusin postaus: Testipost </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Icon name='envelope open outline' />
            <List.Content>
              <List.Header as='a'> Go perusteet </List.Header>
              <List.Description> Uusin postaus: Testipost </List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  )
}

export default Forum
