import { Container, Paper, Typography } from '@mui/material'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const wiedza = ({ data }) => {
  const a = 5
  // TODO work on some design for posts list

  return (
    <Container sx={{ mt: 2, px: 1 }} maxWidth="sm">
      {data.allMdx.nodes.map(({ frontmatter, excerpt }) => (
        <Paper sx={{ mb: 2, p: 2 }} key={frontmatter.slug}>
          <Typography
            sx={{
              display: 'inline-block',
              textDecoration: 'none',
              color: 'inherit',
              mb: 1,
            }}
            component={Link}
            to={frontmatter.slug}
            variant="h2"
          >
            {frontmatter.title}
          </Typography>
          <GatsbyImage image={frontmatter.featuredImage.childImageSharp.gatsbyImageData} />
          <Typography variant="subtitle2">{frontmatter.date}</Typography>
          <Typography variant="body1">{excerpt}</Typography>
        </Paper>
      ))}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Container>
  )
}

export default wiedza

export const query = graphql`
  {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
          date
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 900
                height: 300
                quality: 10
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
