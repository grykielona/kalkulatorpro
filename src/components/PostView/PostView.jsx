/* eslint-disable react/jsx-props-no-spreading */
import { MDXProvider } from '@mdx-js/react'
import { Container, Divider, Link, Typography } from '@mui/material'
import React from 'react'

const MyH1 = (props) => <Typography variant="h1" {...props} />
const MyH2 = (props) => <Typography variant="h2" {...props} />
const MyH3 = (props) => (
  <Typography variant="h3" sx={{ fontSize: '1rem', color: 'red' }} {...props} />
)
const MyH4 = (props) => (
  <Typography variant="h4" sx={{ fontSize: { xs: '1.3rem', md: '1.8rem' }, my: 3 }} {...props} />
)
const MyH5 = (props) => (
  <Typography variant="h5" sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, my: 3 }} {...props} />
)
const MyH6 = (props) => <Typography variant="h6" {...props} />
const MyParagraph = (props) => <Typography variant="body1" sx={{ mb: 1 }} {...props} />
const MyLink = (props) => <Link color="inherit" {...props} />

const PostView = ({ children, pageContext }) => {
  const components = {
    h1: MyH1,
    h2: MyH2,
    h3: MyH3,
    h4: MyH4,
    h5: MyH5,
    h6: MyH6,
    p: MyParagraph,
    a: MyLink,
  }

  return (
    <Container sx={{ mt: 2 }} maxWidth="md">
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: '1.5rem', md: '2.1rem' }, mb: 2, mt: { xs: 1, md: 5 } }}
      >
        {pageContext.frontmatter.title}
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
        {new Date(pageContext.frontmatter.date).toLocaleDateString()}
        <Typography component="span" sx={{ mx: 0.5 }}>
          {' '}
          |{' '}
        </Typography>
        {pageContext.frontmatter.category}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <MDXProvider components={components}>{children}</MDXProvider>
    </Container>
  )
}

export default PostView
