import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Box, AppBar, CssBaseline, Toolbar, Typography, createTheme, ThemeProvider } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import EmailIcon from '@mui/icons-material/Email';

const theme = createTheme({
  palette: {
    newPallete: {main: "#FFF7F5"}
  }
})

export default function BottomNav() {
  const iconStyles = {
    fontSize: 18, 
    color: "#9d7a5b",
    "@media(min-width: 900px)": {
      fontSize: 60
    }
  }
  const iconTextStyles = {
    fontSize: 8, 
    color: "#9d7a5b",
    "@media(min-width: 900px)": {
      fontSize: 20
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="newPallete" sx={{ top: 'auto', bottom: {xs:8, md: 20}, borderRadius: 8, padding: {md: "15px 25px 10px 25px"}, height: {md: 118} }}>
          <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
            
            {/* important note :  */}
            {/* boxes of icon below could be simplified by mapping an array of icon variable */}

            <Box sx={{display: "flex", flexDirection: "column"}}>
              <IconButton color="#inherit" aria-label="open drawer" sx={{padding: 0}} href='#home-section'>
                <HomeIcon sx={iconStyles} />
              </IconButton>
              <Typography variant='caption' sx={iconTextStyles}>Home</Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column"}}>
              <IconButton color="inherit" sx={{padding: 0}} href='#mempelai-section'>
                <PeopleIcon sx={iconStyles} />
              </IconButton>
              <Typography variant='caption' sx={iconTextStyles}>Mempelai</Typography>
            </Box>
            
            <Box sx={{display: "flex", flexDirection: "column"}}>
              <IconButton color="inherit" sx={{padding: 0}} href='#acara-section'>
                <CalendarMonthIcon sx={iconStyles} />
              </IconButton>
              <Typography variant='caption' sx={iconTextStyles}>Acara</Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column"}}>
              <IconButton color="inherit" sx={{padding: 0}} href='#galeri-section'>
                <CollectionsIcon  sx={iconStyles} />
              </IconButton>
              <Typography variant='caption' sx={iconTextStyles}>Galeri</Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column"}}>
              <IconButton color="inherit" sx={{padding: 0}} href='#hadiah-section'>
                <EmailIcon sx={iconStyles} />
              </IconButton>
              <Typography variant='caption' sx={iconTextStyles}>Angpao</Typography>
            </Box>

            <Box sx={{display: "flex", flexDirection: "column"}}>
              <IconButton color="inherit" sx={{padding: 0}} href='#pesan-untuk-kami-section'>
                <ForumIcon sx={iconStyles} />
              </IconButton>
              <Typography variant='caption' sx={iconTextStyles}>Ucapan</Typography>
            </Box>
            
          </Toolbar>
        </AppBar>  
      </ThemeProvider>
      
    </React.Fragment>
  );
}