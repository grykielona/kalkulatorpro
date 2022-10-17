import { Container, List } from '@mui/material'
import React from 'react'
import Bibliography from '../components/Bibliography/Bibliography'
import { SEO } from '../components/Layout/seo'
import bakowski from '../images/bakowski.jpg'
import koczyk from '../images/koczyk.jpg'
import paragraf from '../images/paragraf.jpg'
import pelech from '../images/pelech.jpg'
import recknagel from '../images/recknagel.jpg'
import sosnowski from '../images/sosnowski.jpg'

const bibliography = [
  {
    title: `"Sieci i instalacje gazowe"`,
    img: bakowski,
    author: 'Konrad Bąkowski',
    publisher: 'PWN',
  },
  {
    title: `"Wentylacja i Klimatyzacja. Podstawy"`,
    img: pelech,
    author: 'Aleksander Pełech',
    publisher: 'Oficyna Wydawnicza Politechniki Wrocławskiej',
  },
  {
    title: `"Ogrzewnictwo praktyczne. Projektowanie, montaż, certyfikacja energetyczna, eksploatacja" pod redakcją prof. dr hab. Haliny Koczyk i inni`,
    img: koczyk,
    author: 'Halina Koczyk',
    publisher: 'Systherm',
  },
  {
    title: `"Instalacje Wodociągowe - projektowanie, wykonanie, eksploatacja"`,
    img: sosnowski,
    author: 'Jarosław Chudzicki, Stanisław Sosnowski',
    publisher: 'Seidel-Przywecki',
  },
  {
    title: `"Poradnik Ogrzewanie + Klimatyzacja"`,
    img: recknagel,
    author: 'Recknagel, Sprenger, Honmann, Shramek',
    publisher: 'OMNI SCALA',
  },
  {
    title: `"Rozporządzenie Ministra Infrastruktury z dnia 12 kwietnia 2002 r. w sprawie warunków technicznych, jakim powinny odpowiadać budynki i ich usytuowanie"`,
    img: paragraf,
    author: 'Dz.U. 2002 nr 75 poz. 690, z późniejszymi zmianami',
    publisher: '',
  },
  {
    title: `"Rozporządzenie Ministra Gospodarki z dnia 26 kwietnia 2013 r. w sprawie warunków technicznych, jakim powinny odpowiadać sieci gazowe i ich usytuowanie"`,
    img: paragraf,
    author: 'Dz.U. 2013 poz. 640, z późniejszymi zmianami',
    publisher: '',
  },
  {
    title: `"Prawo Budowlane"`,
    img: paragraf,
    author: 'Dz.U. 1994 nr 89 poz. 414, z późniejszymi zmianami',
    publisher: '',
  },
]

const Literatura = () => (
  <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
    <List sx={{}}>
      {bibliography.map(({ title, img, author, publisher }) => (
        <Bibliography
          key={title}
          alt={title}
          author={author}
          img={img}
          publisher={publisher}
          title={title}
        />
      ))}
    </List>
  </Container>
)

export default Literatura

export const Head = () => <SEO title="literatura" />
