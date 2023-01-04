import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, Card, CardActions, CardContent, CardMedia, Fab } from '@mui/material'
import resutant from '../images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg'
const ImageCard = () => {
  return (
    <Card sx={{ maxWidth: 345, mt: 4}}>
    <CardMedia
      sx={{ height: 140 }}
      image={resutant}
      title="green iguana"
      
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Fab size="small" variant="extended" sx={{p: 2}} color='primary'>Share</Fab>
      <Fab  sx={{p: 2}} size="small"  color='secondary' variant='extended'>Learn More</Fab>
    </CardActions>
  </Card>
  )
}

export default ImageCard