import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';
import EmptyBox from '../components/EmptyBox';

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          tigaTujuhLima: 375,
          empatDuaLima: 425,
          limaRatus: 500,
          limaEnamPuluh: 560,
          tujuhRatus: 700
        }
      },
    typography: {
        sectionHeader: {
            fontFamily: "Playball",
            fontSize: "2rem",
            color:"#9d7a5b",
            "@media(min-width: 375px)": {
              fontSize: "2.2rem"
            },
            "@media(min-width: 540px)": {
              fontSize: "2.4rem"
            },
            "@media(min-width: 900px)": {
              fontSize: "3rem",
              color: "#AB8144"
            },
            "@media(min-width: 1200px)": {
              fontSize: "4rem"
            }
        },
        wassalamText: {
            fontFamily: "Playball",
            fontSize: "1.2rem",
            color: "#6C6C6C",
            "@media(min-width: 375px)": {
              fontSize: "1.3rem"
            },
            "@media(min-width: 540px)": {
              fontSize: "1.4rem"
            },
            "@media(min-width: 900px)": {
              fontSize: "2rem",
              color: "#AB8144"
            },
            "@media(min-width: 1200px)": {
              fontSize: "2.4rem"
            }
        },
        merupakanSuatuKehormatan: {
            fontFamily: "Cabin",
            fontSize: "0.9rem",
            fontWeight: 400,
            color: "#6C6C6C",
            "@media(min-width: 400px)": {
                fontSize: "1rem"
            },
            "@media(min-width: 500px)": {
                fontSize: "1.1rem"
            },
            "@media(min-width: 700px)": {
                fontSize: "1.2rem"
            },
        }
    }
})

function UcapanTerimaKasih () {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{boxSizing: "border-box", height: "100%", backgroundImage: "url('/img/BAHAN-TEMA-08-NAMA-1-scaled-1.jpg')", backgroundSize: "cover", backgroundPosition: "bottom"}}>
                
                <EmptyBox emptyBoxStyles={{height: {xs: "50px", md: "80px"}}} />

                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Box sx={{height: {xs: "180px", empatDuaLima: "210px", limaRatus: "250px", tujuhRatus: "300px", md: "350px"},
                            width: {xs: "180px", empatDuaLima: "210px", limaRatus: "250px", tujuhRatus: "300px", md: "350px"}}}>
                            <img src='/img/content-page/ucapan-section/2.jpg' alt='ucapan-section' height="100%" width="100%" style={{borderRadius: "50%"}} />    
                        </Box> 
                    </Box>    
                
                <EmptyBox emptyBoxStyles={{height: {xs: "40px" }}} />

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                    <Box sx={{width: {xs: "80%", limaEnamPuluh: "65%", tujuhRatus: "60%"}, display: "flex", justifyContent: "center"}}>
                            <Typography variant='merupakanSuatuKehormatan'>Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</Typography>
                    </Box> 
                       
                </Box>
                
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                    <Box sx={{width: {xs: "80%", limaEnamPuluh: "65%",tujuhRatus: "60%"}, display: "flex", justifyContent: "center"}}>                   
                        <Typography variant='merupakanSuatuKehormatan'>Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.</Typography>
                    </Box>
                </Box>

                <EmptyBox emptyBoxStyles={{height: {xs: "20px", empatDuaLima: "40px"}}} />        
                
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                    <Box sx={{width: "80%", display: "flex", justifyContent: "center",}}>
                        <Typography variant='wassalamText'> Wassalamu'alaikum Wr. Wb.</Typography>
                    </Box>
                </Box>

                <EmptyBox emptyBoxStyles={{height: "18px"}} />   

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                    <Box sx={{width: "80%", display: "flex", justifyContent: "center",}}>
                        <Typography variant='sectionHeader' style={{ boxSizing: "border-box"}}>Cintya & Handhika</Typography>  
                    </Box>
                </Box>

                <EmptyBox emptyBoxStyles={{height: {xs: "100px", md: "180px"}}} />
            </Box>    
        </ThemeProvider>
        
    )
}

export default UcapanTerimaKasih;