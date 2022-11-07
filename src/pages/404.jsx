import { Container, Link, Typography } from '@mui/material'
import { navigate } from 'gatsby'
import * as React from 'react'
import { SEO } from '../components/Layout/seo'

const NotFoundPage = () => (
  <Container maxWidth="md">
    <Typography sx={{ fontSize: ' 2rem' }}>Nie ma takiej strony...</Typography>
    <Link
      sx={{ fontSize: '1.5rem' }}
      component="button"
      color="inherit"
      variant="body1"
      onClick={() => navigate(-1)}
    >
      Wróć
    </Link>
  </Container>
)
// TODO add Some icon or something else

export default NotFoundPage

export const Head = () => <SEO title="404" />
