import { useState } from 'react';
import { Box, Typography, Button, createTheme, ThemeProvider, Snackbar, Alert } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmptyBox from '../components/EmptyBox';


const theme = createTheme({
    typography: {
        sectionHeader: {
            fontFamily: 'Amiri Quran',
            // fontFamily: "Roboto Mono",
            fontSize: "1.2rem",
            fontWeight: 700,
            color:"black",
            "@media(min-width: 375px)": {
              fontSize: "1.2rem"
            },
            "@media(min-width: 540px)": {
              fontSize: "1.4rem"
            },
            "@media(min-width: 900px)": {
              fontSize: "1.6rem",
            },
            "@media(min-width: 1200px)": {
              fontSize: "2rem",
              fontWeight: 400,
            }
        },
        subHeaderText: {
            fontSize: "1rem",
            fontFamily: "Cabin",
            "@media(min-width: 540px)": {
                fontSize: "1.2rem"
              },
            "@media(min-width: 900px)": {
                fontSize: "1.4rem",
            },
        },
        noRekeningText: {
            fontFamily: "Roboto Mono",
            fontSize: "1.2rem",
            fontWeight: 700,
            "@media(min-width: 540px)": {
                fontSize: "1.4rem"
            },
            "@media(min-width: 900px)": {
                fontSize: "1.6rem",
            },
        },
        pemilikRekeningText: {
            fontFamily: "Roboto Mono",
            fontSize: "1rem",
            fontWeight: 700,
            "@media(min-width: 540px)": {
                fontSize: "1.2rem"
            },
            "@media(min-width: 900px)": {
                fontSize: "1.4rem",
            },
        }
    }
})

function AngpaoDanHadiahSection () {
    const [clipboardAlert, setClipboardAlert] = useState(false);
    const firstWrapperStyles = {
        padding: "20px", 
        backgroundImage: "url('./img/test/test111.png')", 
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
    const belowFirstWrapperStyles = {
        backgroundColor: "rgba(255, 247, 245, 0.3)",
        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
        padding: "20px", 
        borderRadius: "12px",
        width: {xs: "100%", sm: "60%", md: "40%"}
    }
    const headerAndIconStyles = {
        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.5)",
        padding: "10px", 
        borderRadius: "12px",
        display: "flex",
    }
    const secondWrapperStyles = {
        boxSizing: "border-box",
        background: "url('/img/BAHAN-TEMA-08-NAMA-1-scaled-1.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "bottom", 
        backgroundRepeat: "no-repeat",
    }

    const handleClick = () => {
        setClipboardAlert(true);
    }
    const handleClose = () => {
        setClipboardAlert(false);
    }

    const clipboardButtonStyles = {
        backgroundColor: "#424242", color: "#fff", padding: "10px 18px", "&:hover": {transform: "scale(1.1)", backgroundColor: "#8a6b57"}
    }
    return (
        <ThemeProvider theme={theme}>
        <Box sx={{boxSizing: "border-box", height: "100%", borderTop: "4px solid #E8D3C3" }}>
            <Box sx={{boxSizing: "border-box", height: "2px", border: "2px solid white"}}></Box>
            <Box sx={{boxSizing: "border-box", height: "2px", border: "2px solid #E8D3C3"}}></Box>

            
            <Box id="hadiah-section" sx={firstWrapperStyles}>
                <EmptyBox emptyBoxStyles={{height: "30px"}} />
                <Box sx={belowFirstWrapperStyles}>
                    <Box sx={{headerAndIconStyles}}>
                        <Box sx={{textAlign: "center"}}>
                            <Typography variant='sectionHeader'>
                                Untuk Yang Berhalangan Hadir, Kami Sediakan Fitur Dibawah Ini
                            </Typography>
                        </Box>

                        <EmptyBox emptyBoxStyles={{height: "30px"}} />
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Button disabled sx={{backgroundColor: "#E8D3C3", color: "#000", opacity: 1, "&.Mui-disabled": { color: "#000"}}}>
                                <CardGiftcardIcon />
                                <Typography variant='subHeaderText'>Angpao & Hadiah</Typography>    
                            </Button>
                            
                        </Box>    
                    </Box>
                </Box>
                

                

            </Box>
            <Box sx={secondWrapperStyles}>
                <EmptyBox emptyBoxStyles={{height: "20px", }} />

                    <Box sx={{  
                            display: "flex", 
                            flexDirection: "column",
                            justifyContent: "center", 
                            alignItems: "center", }}>

                        <Box sx={{
                            height: "100%", 
                            boxShadow: "0 0 5px 5px black", 
                            width: {xs: "70%", sm: "40%"},
                            borderRadius: "12px"
                        }}>
                            <Box sx={{
                                display: "flex", 
                                flexDirection: "column",
                                justifyContent: "center", 
                                alignItems: "center",
                            }}>
                                <EmptyBox emptyBoxStyles={{height: "20px"}} />
                                <Box sx={{height: "35px"}}>
                                    <img src="/img/content-page/hadiah-section/bni-1.png" alt='logo-bni' height="100%" />
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "20px"}} />
                                <Box>
                                    <Typography variant='noRekeningText'>0906589701</Typography>
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "10px"}} />
                                <Box>
                                    <Typography variant='pemilikRekeningText'>Cintya Aulia Putri</Typography>
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "10px"}} />
                                <Box>
                                    <CopyToClipboard text='0906589701'>
                                        <Button variant='contained' onClick={handleClick} sx={clipboardButtonStyles}>
                                            <Box sx={{display: "flex"}}>
                                                <ContentCopyIcon sx={{fontSize: {xs: "15px", sm: "18px"}}} />
                                                <EmptyBox emptyBoxStyles={{width: "4px", height: "100%"}} />
                                                <Typography variant="caption" sx={{fontSize: {xs: "10px", sm: "13px"}}}>Salin No Rekening</Typography>    
                                            </Box>
                                            
                                        </Button>    
                                    </CopyToClipboard>
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "20px"}} />
                            </Box>
                          
                        </Box>

                        <Snackbar open={clipboardAlert} autoHideDuration={5000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity='info'>No. Rekening telah disalin</Alert>
                        </Snackbar>

                        <EmptyBox emptyBoxStyles={{height: "60px"}} />

                        <Box sx={{
                            height: "100%", 
                            boxShadow: "0 0 5px 5px black", 
                            width: {xs: "70%", sm: "40%"},
                            borderRadius: "12px"
                        }}>
                            <Box sx={{
                                display: "flex", 
                                flexDirection: "column",
                                justifyContent: "center", 
                                alignItems: "center",
                            }}>
                                <EmptyBox emptyBoxStyles={{height: "20px"}} />
                                <Box sx={{height: "50px"}}>
                                    <img src="/img/content-page/hadiah-section/mandiri-1.png" alt='logo-mandiri' height="100%" />
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "20px"}} />
                                <Box>
                                    <Typography variant="noRekeningText" >1440022395625</Typography>
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "10px"}} />
                                <Box>
                                    <Typography variant="pemilikRekeningText">Cintya Aulia Putri</Typography>
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "10px"}} />
                                <Box>
                                    <CopyToClipboard text='1440022395625'>
                                        <Button variant='contained' onClick={handleClick} sx={clipboardButtonStyles}>
                                            <Box sx={{display: "flex"}}>
                                                <ContentCopyIcon sx={{fontSize: {xs: "15px", sm: "18px"}}} />
                                                <EmptyBox emptyBoxStyles={{width: "4px", height: "100%"}} />
                                                <Typography variant="caption" sx={{fontSize: {xs: "10px", sm: "13px"}}}>Salin No Rekening</Typography>    
                                            </Box>
                                            
                                        </Button>    
                                    </CopyToClipboard>
                                    
                                </Box>
                                <EmptyBox emptyBoxStyles={{height: "20px"}} />
                            </Box>
                          
                        </Box>

                       
                    </Box>
                    <EmptyBox emptyBoxStyles={{height: "24px"}} />
            </Box>
           
        </Box>
        </ThemeProvider>
    )
}

export default AngpaoDanHadiahSection;