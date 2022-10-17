import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

const FrontPageCards = ({ gImage, title, text, path }) => {
  const image = getImage(gImage)
  return (
    <Card sx={{ position: 'relative', height: '100%' }}>
      <CardMedia sx={{ height: { xs: '180px', lg: '230px' } }}>
        <GatsbyImage style={{ height: '100%' }} image={image} alt="test" />
      </CardMedia>
      <CardContent sx={{ mb: 6 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, position: 'absolute', bottom: '0' }}>
        <Button variant="outlined" component={Link} to={path} color="info">
          Przejdź
        </Button>
      </Box>
    </Card>
  )
}

export default FrontPageCards
