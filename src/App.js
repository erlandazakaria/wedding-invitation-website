import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, ThemeProvider, createTheme } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BottomNav from './BottomNavigation';
import HomeSection from './sections/HomeSection';
import MempelaiSection from './sections/MempelaiSection';
import './App.css';
import CeritaKamiSection from './sections/CeritaKamiSection';
import AcaraSection from './sections/AcaraSection';
import Galeri from './sections/Galeri';
import ProtokolKesehatan from './sections/ProtokolKesehatanSection';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      custm: 475
    }
  }
});


// responsive text
theme.typography.testText = {
  fontFamily: "Playball",
  fontSize: "2.2rem",
  color:"#9d7a5b",
  "@media(min-width: 375px)": {
    fontSize: "2.4rem"
  },
  "@media(min-width: 540px)": {
    fontSize: "2.6rem"
  },
  "@media(min-width: 900px)": {
    fontSize: "3.2rem",
    color: "#AB8144"
  },
  "@media(min-width: 1200px)": {
    fontSize: "4rem"
  }
}


theme.typography.kepadaBapakIbu = {
  fontSize: "0.875rem",
  "@media(min-width: 540px)": {
    fontSize: "1.125rem"
  },
  "@media(min-width: 1200px)": {
    fontSize: "1.3rem"
  }
}

theme.typography.kamiMengundangText = {
  fontSize: "0.2rem ",
  "@media(min-width: 375px)": {
    fontSize: "0.5rem"
  },
  "@media(min-width: 540px)": {
    fontSize: "0.8rem"
  },
  "@media(min-width: 1200px)": {
    fontSize: "1rem"
  }
}

theme.typography.bukaUndangan = {
  fontSize: "13px",
  "@media(min-width: 540px)": {
    fontSize: "1.125rem"
  }
}

// contentPage Component styles

// home section

theme.typography.weInviteYou = {
  // fontFamily: "Playfair Display",
  fontFamily: 'Cabin',
  fontSize: "0.9rem ",
  fontWeight: "400",
  color: "#6C6C6C",
  "@media(min-width: 380px)": {
    color: "black"
  },
  "@media(min-width: 450px)": {
    color: "#fff"
  },
  "@media(min-width: 900px)": {
    color: "#6C6C6C",
    fontSize: "1.2rem",
    fontWeight: 200
  },
  "@media(min-width: 1200px)": {
    fontSize: "1.4rem",
  }
}

theme.typography.saveTheDate = {
  fontFamily: 'Cabin',
  fontSize: "12px",
  "@media(min-width: 900px)": {
    fontSize: "16px"
  },
  "@media(min-width: 1200px)": {
    fontSize: "24px"
  },
}

theme.typography.numberAtCountdown = {
  color: "#6C6C6C",
  fontFamily: "Roboto Slab",
  lineHeight: "1.4",
  fontSize: "14px",
  fontWeight: 600,
  "@media(min-width: 900px)": {
    fontSize: "26px",
    lineHeight: "1.2",
  }
}

theme.typography.dateAtCountdown = {
  color: "#6C6C6C",
  fontFamily: "Merriweather",
  fontSize: "11px",
  fontWeight: 600,
  "@media(min-width: 900px)": {
    fontSize: "16px"
  }
}




// app container

function App() {  
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const fixAutoPlay = useRef();

  const bukaUndanganHandler = (event) => {
    event.preventDefault();
    setIsInvitationOpened(true);
    setIsMuted(false);
  }

  useEffect(() => {
    if(isMuted === false) {
      fixAutoPlay.current.play()  
    }
    return
  },[isMuted])

  return (
    <Box style={{margin: 0, padding: 0}}>
      {isInvitationOpened ? <ContentPage theme={theme} /> : <FrontPage bukaUndanganHandler={bukaUndanganHandler} />}
      <audio style={{visibility: "hidden"}} id="musicplayer" src="/audio/wedding-song.mp3" loop={true} autoPlay={true} preload="auto" muted={isMuted} ref={fixAutoPlay} >
      </audio>
    </Box>
   
    
  );
}

export default App;

// front page component

function FrontPage ({ bukaUndanganHandler }) {
  return (
    <Box className="App" style={
      {
        boxSizing: "border-box",
        backgroundImage: "url('./img/BAHAN-TEMA-08-scaled-1.jpg')", 
        height: "100%", 
        backgroundSize: "cover", 
        backgroundPosition: "center",
      }
    } >
      {/* elements styles could be saved on a variable of object, so the code will be neat when other people see it */}
      <Box style={{boxSizing: "border-box", height: "100vh", width: "100%"}}>
        <Box style={{boxSizing: "border-box", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Box style={{ marginBottom: "1rem"}} sx={ {width: {xs: "60%",sm: "50%", md: "30%"}}}>
           <img 
              src='/img/DW430D-co-.webp' 
              style={{boxSizing: "border-box", backgroundSize: "cover", backgroundPosition: "center", width: "100%" }}
            /> 
          </Box>
            
          {/* could be more simple than this by doing mapping on array that each index have variant, style, and text as key */}
          <ThemeProvider theme={theme}>
            <Typography variant='testText' style={{ boxSizing: "border-box", color:"#9d7a5b", marginBottom: "1rem"}}>Cintya & Handika</Typography>  
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Typography variant='kepadaBapakIbu' style={{ boxSizing: "border-box", color:"#6C6C6C", marginBottom: "1rem"}}>Kepada Bapak/Ibu/Saudara/i</Typography>
          </ThemeProvider>
          
          <ThemeProvider theme={theme}>
            <Typography variant='kamiMengundangText' style={{ boxSizing: "border-box", color:"#6C6C6C", marginBottom: "2rem"}}>Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami</Typography>
          </ThemeProvider>
          
          
          <Button onClick={(event) => bukaUndanganHandler(event)} variant='contained' style={{fontSize: "12px", borderRadius: "17px", backgroundColor:"#8a6b57", textTransform: "capitalize", padding: "6px 8px"}}>
            <MenuBookIcon sx={{marginRight: "0.3rem", fontSize: {xs: 18, sm: 23, lg: 26}}}></MenuBookIcon>
            <Typography variant='caption' sx={{fontSize: {xs:"13px",sm: "16px", md: "18px", lg: "24px"}, fontWeight: "700"}}>Buka Undangan</Typography>
          </Button>  
        </Box>
        
      </Box>
      
    </Box>  
  )
}

// content page component

function ContentPage ({theme}) {
  return (
    <Box sx={{boxSizing: "border-box"}}>
      <HomeSection theme={theme} />
      <MempelaiSection />
      <BottomNav />
      <CeritaKamiSection />
      <AcaraSection />
      <Galeri />
      <ProtokolKesehatan />
    </Box>
  )
}


