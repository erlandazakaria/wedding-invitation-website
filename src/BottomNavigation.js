import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Box, AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';


export default function BottomNav() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 8 }}>
        <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
          
          {/* important note :  */}
          {/* boxes of icon below could be simplified by mapping an array of icon variable */}

          <Box sx={{display: "flex", flexDirection: "column"}}>
            <IconButton color="inherit" aria-label="open drawer" sx={{padding: 0}}>
              <HomeIcon sx={{fontSize: 18}} />
            </IconButton>
            <Typography variant='caption' sx={{fontSize: 8}}>Home</Typography>
          </Box>

          <Box sx={{display: "flex", flexDirection: "column"}}>
            <IconButton color="inherit" sx={{padding: 0}}>
              <PeopleIcon sx={{fontSize: 18}} />
            </IconButton>
            <Typography variant='caption' sx={{fontSize: 8}}>Mempelai</Typography>
          </Box>
          
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <IconButton color="inherit" sx={{padding: 0}}>
              <CalendarMonthIcon sx={{fontSize: 18}} />
            </IconButton>
            <Typography variant='caption' sx={{fontSize: 8}}>Acara</Typography>
          </Box>

          <Box sx={{display: "flex", flexDirection: "column"}}>
            <IconButton color="inherit" sx={{padding: 0}}>
              <CollectionsIcon  sx={{fontSize: 18}} />
            </IconButton>
            <Typography variant='caption' sx={{fontSize: 8}}>Galeri</Typography>
          </Box>

          <Box sx={{display: "flex", flexDirection: "column"}}>
            <IconButton color="inherit" sx={{padding: 0}}>
              <ForumIcon sx={{fontSize: 18}} />
            </IconButton>
            <Typography variant='caption' sx={{fontSize: 8}}>Ucapan</Typography>
          </Box>
          
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}