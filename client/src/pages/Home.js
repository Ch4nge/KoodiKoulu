import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

const Home = () => {
  return(
    <Grid padded='vertically' verticalAlign='middle' container stackable>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h1'>Koodi Koulu</Header>
          <Container>
            Suomenkielistä materiaalia ohjelmoinnin oppimiseen on hyvin vähän,
            materiaali on usein todella vanhaa, tai liian kryptistä tavallisen
            nuoren luettavaksi. Tämän sivuston tarkoitus on tuoda korkeatasoista,
            helposti ymmärrettävää ohjelmointikoulutusta kaikille ohjelmoinnista
            kiinnostuneille.
          </Container>
          <Header as='h2'>Open source</Header>
          <Container>
            Tarkoituksena on luoda kursseja open source -henkisesti. Joka tarkoittaa
            siis sitä, että jokainen ohjelmointia taitava hyväntahtoinen koodijumala
            voi halutessaan jakaa tietouttaan tällä sivustolla.
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Home
