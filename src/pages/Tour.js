import React from 'react'
import Typography from '@mui/material/Typography'
import Appbar from '../component/Appbar'
import { BottomNavigation, BottomNavigationAction, Box, Container, Paper } from '@mui/material'
import Addis from '../images/addisabeba.jpg'
import ImageCollage from '../component/ImageCollage'
import CustomizedAccordions from '../component/Accordian'
import BasicModal from '../component/Modal'

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      {/* <Appbar/> */}
      
      <Typography variant="h3" component='h1' marginTop={3} >Explore the world in addis </Typography>
      <Box marginTop={3} sx={{display: 'flex'}}>
        <img src={Addis}  alt="..." height={350}/>
        <ImageCollage/>
    

      </Box>
      <Box marginBottom={10}>
        <Typography variant='h6' component='h4' marginTop={3}>
          about this ticket
        </Typography>
        <Typography variant='paragraph' component='p' marginTop={3}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
        <Typography variant='h6' component='h4' marginTop={3}>
          Frequently Asked questions
        </Typography>
        <CustomizedAccordions/>
      </Box>
      {/* bottom */}

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          
         
        >
        <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour