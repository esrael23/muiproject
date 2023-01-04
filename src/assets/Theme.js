import { createTheme, AppBar, Toolbar, Typography } from "@mui/material"
import { green, purple } from "@mui/material/colors"

const primarycolor = '#b71c1c'
const secondarycolor = '#f06292'

const theme = createTheme({

    palette: {
      primary: {
        main: primarycolor,
        light: primarycolor,
        dark: secondarycolor,
      },
      secondary: {
         main: secondarycolor,
   
      },
  },
  components: {
    MuiFab: {
      styleOverrides:{
        root: {
          background: '#f06292',
          color: 'white',
          
          '&:hover': {
            color: 'red',
            background: 'yellow'

          }
        },
      }
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          color: 'black',
          background: 'yellow'}
        
      }

    }
  }

})
export default theme;
