import React from 'react';

import ImageCard from './component/ImageCard';
import Appbar from './component/Appbar';
import { Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from './assets/Theme'
import TourCard from './component/TourCard';
import cities from './data.json'


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


const App =() => {
  return (
    <ThemeProvider theme={ctheme}>
    <>
      <Appbar/>
      
      {/* <ImageCard /> */}
      <Container>
        {cities.map((city) => (
          <>

          <Typography variant='h4' component="h2" marginTop={5} marginBottom={3}> Top {city.name} Tours </Typography>

          <Grid container spacing={4}>
            {/* {city.tours.map((tour, index) => <TourCard tour={tour} key={index}/> )} */}
            {city.tours.map((tours, index) => 
              <TourCard tours={tours} key={index}/>
            )}
          
          <TourCard/>
          <TourCard/>
          <TourCard/>
        </Grid>
          
          </>
        ))}

        
         
      </Container>
       
    </>
    </ThemeProvider>
  );
}

export default App;
// mui5 crash course 53 52 by laith academy
//  maping problem 