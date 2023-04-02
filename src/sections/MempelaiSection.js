import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import ArRum from '../components/ArRum';
import EmptyBox from '../components/EmptyBox';
import InstagramLinkButton from '../components/InstagramLinkButton';

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          tigaTujuhLima: 375,
          empatLimaPuluh: 450,
          limaratus: 500,
          tujuhEnamDelapan: 768
        }
      },
    typography: {
        assalamualaikumText: {
            fontSize: "1.3rem",
            fontFamily: "Playball",
            color: "#AB8144",
            fontWeight: "400",
            "@media(min-width: 375px)": {
                fontSize: "1.45rem"
            },
            "@media(min-width: 500px)": {
                fontSize: "1.2rem"
            },
            "@media(min-width: 768px)": {
                fontSize: "2.3rem"
            }
        },
        tanpaMengurangiHormatText: {
            fontSize: "0.8rem",
            fontFamily: 'Raleway',
            color: "#6C6C6C",
            fontWeight: "700",
            letterSpacing: "0.5px",
            "@media(min-width: 768px)": {
                fontSize: "1rem"
            }
        },
        namaMempelaiText: {
            fontSize: "1.5rem",
            fontFamily: "Playball",
            color: "#AB8144",
            fontWeight: "400",
            "@media(min-width: 375px)": {
                fontSize: "1.7rem"
            },
            "@media(min-width: 500px)": {
                fontSize: "1.5rem"
            },
            "@media(min-width: 768px)": {
                fontSize: "2.6rem"
            }
        },
        anakDariText: {
            fontSize: "1rem",
            // fontFamily: 'Raleway',
           fontFamily: 'Crimson Text',
            color: "#6C6C6C",
            fontWeight: "400",
            "@media(min-width: 768px)": {
                fontSize: "1.2rem"
            }
        },
        danText: {
            fontFamily: 'Great Vibes',
            fontSize: "1.4rem",
            fontWeight: 600,
            color: "#6C6C6C"
        },
        arRum: {
            fontSize: "1rem",
            color: "grey",
            fontFamily: 'Cormorant Garamond',
            fontWeight: "700",
            lineHeight: 1,
            "@media(min-width: 768px)": {
                fontSize: "1.4rem", 
                lineHeight: 1.4
            }
        }
    }
})
function MempelaiSection () {
    return (
        <Box id="mempelai-section">
            <Box sx={{height: "100%", backgroundImage: "url('./img/BAHAN-TEMA-08-NAMA-1-scaled-1.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <Box sx={{ textAlign: "center",display: "flex",flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <ThemeProvider theme={theme}>
                        <Box sx={{height: {xs: "4vh", sm: "8vh", tujuhEnamDelapan: "10vh"}}}></Box>
                    </ThemeProvider>
                    
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Typography variant="assalamualaikumText">Assalamualaikum Wr. Wb. </Typography>    
                        </ThemeProvider>

                    <EmptyBox theme={theme} emptyBoxStyles={{height: {xs: 0, tujuhEnamDelapan: "2vh"}}} />

                    </Box>
                    <Box sx={{display: "flex",width: "90%", justifyContent: "center",  }}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='tanpaMengurangiHormatText'>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian</Typography>    
                        </ThemeProvider>
                    </Box>
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Typography variant='tanpaMengurangiHormatText'>untuk menghadiri acara pernikahan kami:</Typography>
                        </ThemeProvider>
                    </Box>
                </Box>

                <EmptyBox theme={theme} emptyBoxStyles={{height: {xs: "4vh", empatLimaPuluh: "3vh"}}} />

                {/* mempelai wanita */}

                <ThemeProvider theme={theme}>
                    <Box sx={{
                        height: {xs: "26vh",tigaTujuhLima: "32vh",empatLimaPuluh: "36vh", limaratus: "42vh",sm: "48vh", tujuhEnamDelapan: "22%"}, 
                        width: "auto", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        margin: "0 auto",
                    }}>               
                    <Box 
                        sx={{
                            height: {xs: "150px", tigaTujuhLima: "170px", empatLimaPuluh: "190px",limaratus: "210px", sm: "230px", tujuhEnamDelapan: "250px"},
                            width: { xs: "150px", tigaTujuhLima: "170px", empatLimaPuluh: "190px", limaratus: "210px", sm: "230px", tujuhEnamDelapan: "250px"}
                            }}>
                       <Box sx={{width: "auto",height: "100%"}}>
                        <img src='./img/content-page/mempelai-section/mempelai_wanita.jpg' alt='foto_mempelai_wanita' style={{ width: "100%",height: "100%", borderRadius: "50%"}} />
                        </Box>  
                    </Box>
                          
                    </Box>
                </ThemeProvider>
                
                <EmptyBox theme={theme} emptyBoxStyles={{height: "2vh"}} />

                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>          
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Typography variant="namaMempelaiText">Cintya Aulia Putri, S.Pd</Typography>    
                        </ThemeProvider>    
                    </Box>
                    <Box sx={{width: "98%"}}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='anakDariText'>Putri Pertama dari Bapak Suliono</Typography>    
                        </ThemeProvider>    
                    </Box>
                    <Box sx={{ width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='anakDariText'>& Ibu Wiwik Puji Astutik S.Pd</Typography>    
                        </ThemeProvider>    
                    </Box>
                    <Box>
                        <InstagramLinkButton />
                    </Box>             
                </Box>

                <EmptyBox theme={theme} emptyBoxStyles={{height: {xs: "4vh", empatLimaPuluh: "3vh", tujuhEnamDelapan: "2vh"}}} />
                
                    {/* mempelai pria */}
                
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="danText">&</Typography>    
                    </ThemeProvider>
                    
                </Box>   
                
                <EmptyBox theme={theme} emptyBoxStyles={{height: {xs: "4vh", empatLimaPuluh: "3vh", tujuhEnamDelapan: "2vh"}}} />  
                
                <ThemeProvider theme={theme}>
                    <Box sx={{
                        height: {xs: "26vh",tigaTujuhLima: "32vh",empatLimaPuluh: "36vh", limaratus: "42vh",sm: "48vh", tujuhEnamDelapan: "300px"}, 
                        width: "auto", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        margin: "0 auto",
                    }}>  
                        <Box 
                            sx={{
                                height: {xs: "150px", tigaTujuhLima: "170px", empatLimaPuluh: "190px",limaratus: "210px", sm: "230px", tujuhEnamDelapan: "250px"},
                                width: { xs: "150px", tigaTujuhLima: "170px", empatLimaPuluh: "190px", limaratus: "210px", sm: "230px", tujuhEnamDelapan: "250px"}
                            }}>
                            <Box sx={{width: "auto",height: "100%"}}>
                                <img src='./img/content-page/mempelai-section/mempelai_pria.jpg' alt='foto_mempelai_pria' style={{ width: "100%",height: "100%", borderRadius: "50%"}} /> 
                            </Box>          
                        </Box>             
                        
                    </Box>
                </ThemeProvider>
                
                <EmptyBox theme={theme} emptyBoxStyles={{height: "2vh"}} />

                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>          
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Typography variant="namaMempelaiText">Handika Dwiyanto Putra, S.Pd</Typography>    
                        </ThemeProvider>    
                    </Box>
                    <Box sx={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='anakDariText'>Putra  dari Bapak Haryanto</Typography>    
                        </ThemeProvider>    
                    </Box>
                    <Box sx={{ width: "80%"}}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='anakDariText'>& Ibu Tri Winarni</Typography>    
                        </ThemeProvider>    
                    </Box>
                    <Box>
                        <InstagramLinkButton />
                    </Box>             
                </Box>
                    
                <EmptyBox emptyBoxStyles={{height: "8vh"}} />
            </Box>  

            <Box sx={{boxSizing: "border-box",height: "100%", width:'100%', backgroundColor: "#E8D3C3", padding: "32px"}}>         
                <ArRum theme={theme} />   
            </Box>  
        </Box>
        
    )
}

export default MempelaiSection;