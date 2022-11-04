import { Container, Paper, Typography } from '@mui/material'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { SEO } from '../components/Layout/seo'
import CategoryDateDisplay from '../components/PostView/CategoryDateDisplay'

// TODO article 1 about heat fluid (water, glycol 2 types)
// TODO art 2 about calc gas installation
// TODO art 3 about valve authority
// TODO art 4 about something vent

const wiedza = ({ data }) => {
  const a = 5
  // TODO work on some design for posts list
  console.log(data)
  return (
    <Container sx={{ mt: 2, px: 1 }} maxWidth="xsm">
      {data.allMdx.nodes.map(({ frontmatter, excerpt }) => (
        <Paper sx={{ mb: 2, p: 2 }} key={frontmatter.slug}>
          <Typography
            sx={{
              display: 'inline-block',
              textDecoration: 'none',
              color: 'inherit',
              mb: 2,
              fontSize: { xs: '1.7rem', sm: '2rem' },
            }}
            component={Link}
            to={frontmatter.slug}
            variant="h4"
          >
            {frontmatter.title}
          </Typography>
          <GatsbyImage image={frontmatter.featuredImage.childImageSharp.gatsbyImageData} />
          <CategoryDateDisplay category={frontmatter.category} date={frontmatter.date} />
          <Typography variant="body1" sx={{ fontSize: { xs: '1.1rem', md: '1.1rem' } }}>
            {excerpt}
          </Typography>
        </Paper>
      ))}
    </Container>
  )
}

export default wiedza

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          slug
          title
          date
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 900
                height: 300
                quality: 70
                formats: [JPG]
                placeholder: TRACED_SVG
              )
            }
          }
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`
export const Head = () => <SEO title="wiedza" />
