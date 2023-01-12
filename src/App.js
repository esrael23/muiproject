import React from 'react';
import {BrowserRouter, Routes,Route } from 'react-router-dom'

import Appbar from './component/Appbar';
import { Container, createTheme, Grid, ThemeProvider, Typography ,Box,  Hidden, Paper, Rating, AppBar,  } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import cities from './data.json'
import Home from './pages/Home';
import Tour from './pages/Tour';



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


function App()  {
  return (
    
    
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element = {<Tour/>}/>
    </Routes>
    </BrowserRouter>
    
    // <Home/>
    // <ThemeProvider theme={ctheme}>
    // <>
    //   <Appbar/>
      
    //   {/* <ImageCard /> */}
    //   <Container sx={{marginY: 5}}>
    //     {cities.map(city => (
    //       <>

    //       <Typography variant='h4' component="h2" marginTop={5} marginBottom={3}> Top {city.name} Tours </Typography>

    //       <Grid container spacing={5}>
    //         {city.tours.map(tour =>  
    //           <Grid item xs={12} sm={6} md={3}>
    //           <Paper elevation={3} sx={{ }}>
    //             <img src={tour.image}
    //             height={200}
    //           width= '100%'
    //             className="img" alt="..."/>
    //             <Box paddingX={1}>
    //             <Typography variant="subtitle1" component='h2' color="initial" >
    //               {tour.name}
    //             </Typography>
    //             </Box>
    //             <Box sx={{
    //               display: 'flex',
    //               alignItems: 'center',
    //               px: 1
    //             }}  gap={0.5}>
    //               <AccessTimeIcon sx={{width: 15}}/>
    //               <Typography variant='body2' component='p'>
    //                 {tour.duration} hours
    //               </Typography>
          
    //             </Box>
    //             <Box sx={{
    //               display: 'flex',
    //               alignItems: 'center',
    //               px: 1,
    //               mt: 3
    //             }}  gap={0.5}>
    //               <Rating name="read-only" value={tour.rating} readOnly size='small' precision={0.5}/>
    //               <Typography variant='body2' component='p'>
    //               {tour.rating}
    //               </Typography>
    //               <Typography variant='body2' component='p'>
    //                 (655 reviews)
    //               </Typography>
          
    //             </Box>
    //             <Box sx={{
    //               display: 'flex',
    //               alignItems: 'center',
    //               px: 1,
                  
    //             }}  gap={0.5}>
    //             <Typography variant='h6' component='h3'>
    //                 From c ${tour.price}
    //               </Typography>
    //             </Box>
    //             </Paper>
    //             </Grid>)}
           
         
    //     </Grid>
          
    //       </>
    //     ))}

        
         
    //   </Container>
       
    // </>
    // </ThemeProvider>
  );
}

export default App;
// mui5 crash course 53 52 by  
//  maping problem 