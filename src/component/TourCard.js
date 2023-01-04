import { Box, Grid, Hidden, Paper, Rating, Typography } from '@mui/material'
import "../App.css"
import React from 'react'
import Tour from '../images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const TourCard = ({tour}) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
    <Paper elevation={3} sx={{ }}>
      <img src={Tour}
      height={200}
    width= '100%'
      className="img" alt="..."/>
      <Box paddingX={1}>
      <Typography variant="subtitle1" component='h2' color="initial">
        {/* {tours.name} */}
      </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        px: 1
      }}  gap={0.5}>
        <AccessTimeIcon sx={{width: 15}}/>
        <Typography variant='body2' component='p'>
          5 hours
        </Typography>

      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        px: 1,
        mt: 3
      }}  gap={0.5}>
        <Rating name="read-only" value={4.5} readOnly size='small' precision={0.5}/>
        <Typography variant='body2' component='p'>
          4.5
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
          From c $147
        </Typography>
      </Box>
      </Paper>
      </Grid>
  )
}

export default TourCard