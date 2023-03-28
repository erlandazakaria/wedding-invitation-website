import { Box, Typography, Grid, createTheme, ThemeProvider } from '@mui/material';
import EmptyBox from '../components/EmptyBox';

// const prokesPGN = [
//    "/img/content-page/protokol-kesehatan-section/cuci_tangan.png",
//    "/img/content-page/protokol-kesehatan-section/gunakan_handsanitizer.png",
//    "/img/content-page/protokol-kesehatan-section/gunakan_masker.png",
//    "/img/content-page/protokol-kesehatan-section/jaga_jarak.png"

// ]

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            tigaEnamPuluh: 360,
            empatRatus: 400,
            empatTigaEmpat: 434,
            tujuhRatus: 700
        }
        
    },
    typography: {
        sectionHeader: {
            fontFamily: "Playball",
            fontSize: "1.8rem",
            color: "#AB8144",
            "@media(min-width: 400px)": {
                fontSize: '2rem'
            },
            "@media(min-width: 768px)": {
                fontSize: '3rem'
            }
        },
        gunaMencegah: {
            fontFamily: "Crimson Text",
            fontSize: "0.8rem",
            color: "#6C6C6C",
            fontWeight: 600,
            "@media(min-width: 400px)": {
                fontSize: '1rem',
                fontWeight: 400,
            },
            "@media(min-width: 768px)": {
                fontSize: '1.2rem'
            }
        }
    }
})

function ProtokolKesehatan () {
    return (
        <Box sx={{height: "100vh", backgroundColor: "#FFF7F5"}}>
            <EmptyBox emptyBoxStyles={{height: "50px"}} />
            <Box>

                <ThemeProvider theme={theme}>
                    <Box sx={{textAlign: "center"}}>
                        <Typography variant='sectionHeader'>Protokol Kesehatan</Typography>
                    </Box>    
                </ThemeProvider>
                
                <EmptyBox emptyBoxStyles={{height: "20px"}} />

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <ThemeProvider theme={theme}>
                        <Box sx={{textAlign: "center", width: {xs: "64%", tigaEnamPuluh: "75%"},textIndent: {xs: "6px", tigaEnamPuluh: 0}}}>
                            <Typography variant='gunaMencegah'>Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan untuk mematuhi Protokol Kesehatan di bawah ini :</Typography>
                        </Box>    
                    </ThemeProvider>
                </Box>

                <EmptyBox emptyBoxStyles={{height: "60px"}} />   

                <Grid container sx={{height: "100%"}}>
                    <ThemeProvider theme={theme}>
                        <Grid item xs={1} empatRatus={2} empatTigaEmpat={1} tujuhRatus={2} ></Grid>
                    </ThemeProvider>

                    <ThemeProvider theme={theme}>
                        <Grid item xs={2} empatRatus={2} tujuhRatus={2} 
                        sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",textAlign: "center" }}> 
                            <Box>
                                <img src="/img/content-page/protokol-kesehatan-section/cuci_tangan.png" height="50px" alt="cuci_tangan" />
                            </Box>
                            <Box>
                                <Typography variant='caption'>Cuci Tangan</Typography>      
                            </Box>
                        </Grid>
                    </ThemeProvider>
                    
                    <ThemeProvider theme={theme}> 
                        <Grid item xs={2} empatRatus={1} tujuhRatus={0}></Grid>
                    </ThemeProvider>
                    
                    <ThemeProvider theme={theme}> 
                        <Grid item xs={2} empatRatus={2} empatTigaEmpat={3}  tujuhRatus={2}  
                        sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",textAlign: "center" }}> 
                            <Box>
                                <img src="/img/content-page/protokol-kesehatan-section/gunakan_masker.png" height="50px" alt="gunakan_masker" />    
                            </Box>
                            <Box>
                                <Typography variant='caption'>Gunakan Masker</Typography>      
                            </Box>
                             
                        </Grid>
                    </ThemeProvider>
                    
                    <ThemeProvider theme={theme}> 
                        <Grid item xs={2} empatRatus={1} tujuhRatus={1}></Grid>
                    </ThemeProvider>
                    
                    <ThemeProvider theme={theme}>
                        <Grid item xs={2} empatRatus={3} empatTigaEmpat={4} tujuhRatus={2} 
                        sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",textAlign: "center" }}> 
                            <Box>
                                <img src="/img/content-page/protokol-kesehatan-section/gunakan_handsanitizer.png" height="50px" alt="pakai_handsanitizer" />    
                            </Box>
                            <Box>
                                <Typography variant='caption'>Pakai Handsanitizer</Typography>     
                            </Box>
                            
                        </Grid>      
                    </ThemeProvider>
                </Grid>
                
            </Box>
            
        </Box>
    )
}

export default ProtokolKesehatan;