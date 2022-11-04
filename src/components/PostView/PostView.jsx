/* eslint-disable react/jsx-props-no-spreading */
import { MDXProvider } from '@mdx-js/react'
import { Container, Divider, Link, ListItem, Typography } from '@mui/material'
import { Link as GLink } from 'gatsby'
import React from 'react'
import CategoryDateDisplay from './CategoryDateDisplay'

const MyH1 = (props) => <Typography variant="h1" {...props} />
const MyH2 = (props) => <Typography variant="h2" {...props} />
const MyH3 = (props) => <Typography variant="h3" {...props} />
const MyH4 = (props) => (
  <Typography
    variant="h4"
    color="text.secondary"
    sx={{ fontSize: { xs: '1.5rem', md: '1.8rem' }, my: 3 }}
    {...props}
  />
)
const MyH5 = (props) => (
  <Typography
    variant="h5"
    color="text.secondary"
    sx={{ fontSize: { xs: '1.1rem', md: '1.4rem' }, my: 3 }}
    {...props}
  />
)
const MyH6 = (props) => <Typography color="text.secondary" variant="h6" {...props} />
const MyParagraph = (props) => (
  <Typography
    variant="body1"
    color="text.secondary"
    sx={{ mb: 1, fontSize: '1.1rem' }}
    {...props}
  />
)
const MyLink = (props) => <Link color="inherit" {...props} />

const MyLi = (props) => <Typography component="li" color="text.secondary" {...props} />

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
    li: MyLi,
  }

  return (
    <Container color="text.secondary" sx={{ mt: 2 }} maxWidth="xsm">
      <Typography
        variant="h3"
        color="text.secondary"
        sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2, mt: { xs: 1, md: 5 } }}
      >
        {pageContext.frontmatter.title}
      </Typography>
      <CategoryDateDisplay
        category={pageContext.frontmatter.category}
        date={pageContext.frontmatter.date}
      />
      <Divider sx={{ my: 2 }} />
      <MDXProvider components={components}>{children}</MDXProvider>
      <Link
        color="info.main"
        sx={{ fontSize: '1.1rem', display: 'block', my: 3 }}
        component={GLink}
        to="/wiedza"
      >
        Powrót do listy
      </Link>
    </Container>
  )
}

export default PostView
