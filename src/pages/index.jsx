import { Grid } from '@mui/material'
import Container from '@mui/material/Container'
import { graphql } from 'gatsby'
import * as React from 'react'
import FrontPageCards from '../components/Cards/FrontPageCards'
import Hero from '../components/Hero'
import { SEO } from '../components/Layout/seo'

const IndexPage = ({ data }) => {
  const cardItems = [
    {
      title: 'Ogrzewanie',
      text: 'Dobór średnicy rur na podstawie podanego przepływu. Obliczenie przepływu oraz średnic na podstawie podanej mocy i różnicy temperatur.',
      gImage: data.heatImg,
      path: '/ogrzewanie',
    },
    {
      title: 'Wentylacja',
      text: 'Automatyczny dobór kanałów wentylacyjnych Spiro w oparciu o podany przepływ. Obliczenie prędkości w kanale prostokątnym.',
      gImage: data.ventImg,
      path: '/wentylacja',
    },
    {
      title: 'Wodociągi',
      text: 'Automatyczny dobór średnic rur wodnych w oparciu o sumę wypływów normatywnych i przepływ obliczeniowy. Automatyczne obliczenie przepływu.',
      gImage: data.waterImg,
      path: '/woda',
    },
    {
      title: 'Gaz',
      text: 'Przeliczanie mocy urządzeń gazowych na wartość przepływu. Obliczenie spadku ciśnienia w przewodach oraz dobór średnicy.',
      gImage: data.gasImg,
      path: '/gaz',
    },
  ]

  return (
    <>
      <Hero />
      <br />
      <Container>
        <Grid container spacing={2}>
          {cardItems.map(({ title, text, gImage, path }) => (
            <Grid key={path} xs={12} smm={6} lg={3} item>
              <FrontPageCards title={title} text={text} gImage={gImage} path={path} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default IndexPage

export const Head = () => <SEO />

export const pageQuery = graphql`
  query {
    waterImg: file(relativeDirectory: { eq: "cards" }, name: { eq: "water" }) {
      ...ChImage
    }
    gasImg: file(relativeDirectory: { eq: "cards" }, name: { eq: "gas" }) {
      ...ChImage
    }
    heatImg: file(relativeDirectory: { eq: "cards" }, name: { eq: "heating" }) {
      ...ChImage
    }
    ventImg: file(relativeDirectory: { eq: "cards" }, name: { eq: "vent" }) {
      ...ChImage
    }
  }
`
export const query = graphql`
  fragment ChImage on File {
    childImageSharp {
      gatsbyImageData(width: 610, quality: 70, formats: JPG, placeholder: TRACED_SVG)
    }
  }
`
