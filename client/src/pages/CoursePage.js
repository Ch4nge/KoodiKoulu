import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Grid } from 'semantic-ui-react'
import text from '../courses/java/peruskurssi.md'
import { getCourse } from '../services/courseService'

class CoursePage extends React.Component {

  constructor() {
    super()
    this.state = {
      fileContents: ''
    }
  }

  componentDidMount = async () => {
    const file = await getCourse(text)
    this.setState({ fileContents: file })
  }

  render() {
    const { fileContents } = this.state
    return (
      <Grid padded='vertically' verticalAlign='middle' container stackable>
        <Grid.Column width={8}> <ReactMarkdown source={fileContents} /> </Grid.Column>
      </Grid>
    )
  }
}

export default CoursePage
