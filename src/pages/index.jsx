import * as React from 'react'
import Container from '@mui/material/Container'
import { Button, Divider, Link } from '@mui/material'
import { Link as GLink } from 'gatsby'
import Hero from '../components/Hero'

const IndexPage = () => (
  <>
    <Hero />
    <br />

    <Container>
      Hello
      <div>
        fdsfsd fdsfpsjdfioshdfdf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Accusantium provident quos voluptatum natus, ipsum numquam! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Itaque laudantium distinctio quidem. Natus, ea.
      </div>
      <Divider variant="middle" />
      <br />
      &nbsp; &nbsp;
      <Button variant="outlined" color="error">
        Outlined
      </Button>
      <br />
      <br />
      <Button variant="text" color="primary">
        Text
      </Button>
      &nbsp;
      <Button variant="contained" color="primary">
        Contained
      </Button>
      &nbsp;
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      &nbsp;
      <br />
      <br />
      <Button variant="text" color="warning">
        Text
      </Button>
      &nbsp;
      <Button variant="contained" color="warning">
        Contained
      </Button>
      &nbsp;
      <Button variant="outlined" color="warning">
        Outlined
      </Button>
      <br />
      <br />
      &nbsp;
      <Button variant="text" color="info">
        Text
      </Button>
      &nbsp;
      <Button variant="contained" color="info">
        Contained
      </Button>
      &nbsp;
      <Button variant="outlined" color="info">
        Outlined
      </Button>
      <br />
      <br />
      &nbsp;
      <Button variant="text" color="success">
        Text
      </Button>
      &nbsp;
      <Button variant="contained" color="success">
        Contained
      </Button>
      &nbsp;
      <Button variant="outlined" color="success">
        Outlined
      </Button>
      <br />
      <br />
      <Link color="error" component={GLink} to="/404">
        Link
      </Link>
    </Container>
  </>
)

export default IndexPage
