import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import InstagramLinkButton from '../components/InstagramLinkButton';

const theme = createTheme({
    typography: {
        assalamualaikumText: {
            fontSize: "1.3rem",
            fontFamily: "Playball",
            color: "#AB8144",
            fontWeight: "400"
        },
        tanpaMengurangiHormatText: {
            fontSize: "0.8rem",
            // fontFamily: 'Bitter',
            // fontFamily: 'Crimson Text',
            // fontFamily: 'Cormorant',
            // fontFamily: 'Hammersmith One',
            fontFamily: 'Raleway',
            color: "#6C6C6C",
            // color: "black",
            fontWeight: "700"
        },
        namaMempelaiText: {
            fontSize: "1.5rem",
            fontFamily: "Playball",
            color: "#AB8144",
            fontWeight: "400"
        },
        anakDariText: {
            fontSize: "1rem",
            // fontFamily: 'Raleway',
           fontFamily: 'Crimson Text',
            color: "#6C6C6C",
            fontWeight: "400"
        }
    }
})
function MempelaiSection () {
    return (
        <Box sx={{height: "150vh", backgroundImage: "url('./img/BAHAN-TEMA-08-NAMA-1-scaled-1.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <Box sx={{border: "1px solid black", textAlign: "center"}}>
                <Box sx={{height: "4vh"}}></Box>
                <Box sx={{border: "1px dotted blue"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="assalamualaikumText">Assalamualaikum Wr. Wb. </Typography>    
                    </ThemeProvider>
                </Box>
                <Box>
                    <ThemeProvider theme={theme}>
                        <Typography variant='tanpaMengurangiHormatText'>Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian</Typography>    
                    </ThemeProvider>
                </Box>
                <Box>
                    <ThemeProvider theme={theme}>
                        <Typography variant='tanpaMengurangiHormatText'>untuk menghadiri acara pernikahan kami</Typography>
                    </ThemeProvider>
                </Box>
            </Box>

             {/* mempelai wanita */}

            <Box sx={{
                height: {xs: "30vh", md: "50vh"}, 
                width: "auto", 
                border: "3px dotted red", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                margin: "0 auto"
            }}>               
                <Box sx={{width: "auto",height: "100%", border: "2px dashed green"}}>
                <img src='/img/content-page/mempelai-section/mempelai-photo-1.webp'style={{ width: "auto",height: "100%"}} />   
                </Box>   
            </Box>

            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>          
                <Box>
                    <ThemeProvider theme={theme}>
                        <Typography variant="namaMempelaiText">Gaby Amandasari, S.S.T., M.A</Typography>    
                    </ThemeProvider>    
                </Box>
                <Box sx={{width: "98%", border: "1px dashed blue"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='anakDariText'>Putri Pertama dari Bapak Imam Idhi Kurniadi, S.E</Typography>    
                    </ThemeProvider>    
                </Box>
                <Box sx={{ width: "80%", border: "1px dashed blue"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='anakDariText'>& Ibu Indah Sri Handayani, S.E</Typography>    
                    </ThemeProvider>    
                </Box>
                <Box>
                    <InstagramLinkButton />
                </Box>             
            </Box>

             {/* dummy Box Component */}
             <Box sx={{height: "4vh", border: "1px solid grey"}}></Box>
             
                {/* mempelai pria */}
               
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid green"}}>
                <Typography variant="h5">&</Typography>
            </Box>   
             
             {/* dummy Box Component  */}
             <Box sx={{height: "4vh"}}></Box>
             
            <Box sx={{height: "30vh", width: "100%", border: "2px dashed orange"}}>
                <Box sx={{border: "2px dotted black", height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Box sx={{border: "1px solid brown",height: "100%", width: "auto"}}>
                        <img src='./img/content-page/mempelai-section/mempelai-photo-2.webp' style={{height: "100%",width: "auto"}} />
                    </Box>
                </Box>
            </Box>

            {/* dummy Box Component  */}
            <Box sx={{height: "2vh"}}></Box>

            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>          
                <Box>
                    <ThemeProvider theme={theme}>
                        <Typography variant="namaMempelaiText">Erlanda Zakaria, S.S</Typography>    
                    </ThemeProvider>    
                </Box>
                <Box sx={{display: "flex",justifyContent: "center",alignItems: "center", border: "1px dashed blue"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='anakDariText'>Putra Kedua dari Bapak Suliono</Typography>    
                    </ThemeProvider>    
                </Box>
                <Box sx={{ width: "80%", border: "1px dashed blue"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='anakDariText'>& Ibu Wiwik Puji Astutik, S.Pd</Typography>    
                    </ThemeProvider>    
                </Box>
                <Box>
                    <InstagramLinkButton />
                </Box>             
            </Box>
                
            
        </Box>
    )
}

export default MempelaiSection;