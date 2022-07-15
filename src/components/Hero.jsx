import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import hero2 from '../images/hero2.svg'

const heroSectionSX = {
  height: { xs: '220px', md: '370px' },
  bgcolor: 'primary.main',
  overflow: 'hidden',
  backgroundImage: `url(${hero2})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: { xs: '800px', md: '1400px', xl: '1500px' },
  backgroundPosition: {
    xs: '85% 20%',
    sm: '85% 60%',
    md: '85% 50%',
    lg: 'bottom 0px right 100px',
    xl: 'bottom -20px right 150px',
  },
}
const Hero = () => (
  <Box sx={heroSectionSX}>
    <Container>
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <Typography sx={{ color: 'common.white', fontWeight: 'bold', mb: 3 }} variant="h1">
          KalkulatorPro
        </Typography>

        <Typography sx={{ color: 'common.white' }} variant="h2">
          Dobór średnic rur,
          <br />
          obliczenia spadków ciśnień
        </Typography>
      </Box>
    </Container>
  </Box>
)

export default Hero
