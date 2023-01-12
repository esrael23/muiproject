import React from 'react'
import Appbar from '../component/Appbar';
import { Container, createTheme, Grid, ThemeProvider, Typography ,Box,  Hidden, Paper, Rating, Button,  } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import cities from '../data.json'
import { Link } from 'react-router-dom';

const ctheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          }
        }
      ]
    }
  }
})


const Home = () => {
  return (
    <ThemeProvider theme={ctheme}>
    <>
      
      
      {/* <ImageCard /> */}
      <Container sx={{marginY: 5}}>
        {cities.map(city => (
          <>

          <Typography variant='h4' component="h2" marginTop={5} marginBottom={3}> Top {city.name} Tours </Typography>

          <Grid container spacing={5}>
            {city.tours.map(tour =>  
              <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ }}>
                <img src={tour.image}
                height={200}
              width= '100%'
                className="img" alt="..."/>
                <Box paddingX={1}>
                <Typography variant="subtitle1" component='h2' color="initial" >
                  {tour.name}
                </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 1
                }}  gap={0.5}>
                  <AccessTimeIcon sx={{width: 15}}/>
                  <Typography variant='body2' component='p'>
                    {tour.duration} hours
                  </Typography>
          
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 1,
                  mt: 3
                }}  gap={0.5}>
                  <Rating name="read-only" value={tour.rating} readOnly size='small' precision={0.5}/>
                  <Typography variant='body2' component='p'>
                  {tour.rating}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    (655 reviews)
                  </Typography>
          
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: 1,
                  
                }}  gap={0.5}>
                <Typography variant='h6' component='h3'>
                    From c ${tour.price}
                  </Typography>
                </Box>
                </Paper>
                </Grid>)}
           
         
        </Grid>
          
          </>
        ))}

        
         
      </Container>
      <Button variant='contained' href="/2" >detail</Button>
      {/* <Link href="/4">Link</Link> */}
       
    </>
    </ThemeProvider>
  )
}

export default Home