import * as React from 'react'
import Container from '@mui/material/Container'
import { Button, Link } from '@mui/material'
import { Link as GLink } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Layout>
      <Container>
        Hello
        <div>
          fdsfsd fdsfpsjdfioshdfdf Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Accusantium provident quos voluptatum natus, ipsum numquam! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Itaque laudantium distinctio quidem. Natus, ea.
        </div>
        <br />
        &nbsp;
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
        <br />
        <br />
        &nbsp;
        <Button variant="text" color="secondary">
          Text
        </Button>
        &nbsp;
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        &nbsp;
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
        <br />
        <br />
        &nbsp;
        <Button variant="text" color="error">
          Text
        </Button>
        &nbsp;
        <Button variant="contained" color="error">
          Contained
        </Button>
        &nbsp;
        <Button variant="outlined" color="error">
          Outlined
        </Button>
        <br />
        <br />
        &nbsp;
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
    </Layout>
  </>
)

export default IndexPage
