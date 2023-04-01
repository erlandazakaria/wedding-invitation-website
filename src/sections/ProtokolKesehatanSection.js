import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import EmptyBox from '../components/EmptyBox';
import ProkesIcon from '../components/ProkesIcon';


const prokesPGN = [
    {
        type: "icon", 
        icon: 
        {
            img: "/img/content-page/protokol-kesehatan-section/gunakan_masker.png", 
            alt: "gunakan_masker", 
            iconText: "Gunakan Masker"
        }
    },
    {
        type: "empty_box"
    }, 
    {
        type: "icon",
        icon: 
        {
            img: "/img/content-page/protokol-kesehatan-section/cuci_tangan.png", 
            alt: "cuci_tangan", 
            iconText: "Cuci Tangan"
        }        
    },
    {
        type: "empty_box"
    },
    {
        type: "icon",
        icon: 
        {
            img: "/img/content-page/protokol-kesehatan-section/gunakan_handsanitizer.png", 
            alt: "gunakan_handsanitizer", 
            iconText: "Gunakan Handsanitizer"
        }
    }
]

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
            limaRatus: 500,
            enamRatus: 600,
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
        },
        iconTextStyles: {
            fontFamily: '"Roboto","Helvetica","Arial","sans-serif"',
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            "@media(min-width: 400px)": {
                fontSize: '0.8rem',
            },
            "@media(min-width: 600px)": {
                fontSize: '0.9rem',
            },
            "@media(min-width: 700px)": {
                fontSize: '1rem',
            },
        }
    }
})

function ProtokolKesehatan () {
    const iconContainerStyles = {
        boxSizing: "border-box", 
        height: "100%", 
        display: "flex",
        justifyContent: "center"
    }
    return (
        <Box sx={{height: "100%", backgroundColor: "#FFF7F5"}}>
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
                        <Box sx={{textAlign: "center", width: {xs: "80%", tigaEnamPuluh: "75%"},textIndent: {xs: "6px", tigaEnamPuluh: 0}}}>
                            <Typography variant='gunaMencegah'>Guna mencegah penyebaran Covid-19, diharapkan bagi tamu undangan untuk mematuhi Protokol Kesehatan di bawah ini :</Typography>
                        </Box>    
                    </ThemeProvider>
                </Box>

                <EmptyBox emptyBoxStyles={{height: "60px"}} />   

                <Box sx={iconContainerStyles}>
                    {
                        prokesPGN.map((prokesIcon, index) => ( 
                            prokesIcon.type === "icon" 
                                ?   <ProkesIcon 
                                    key={index}
                                    theme={theme} 
                                    imgLink={prokesIcon.icon.img}
                                    iconText={prokesIcon.icon.iconText}
                                    alt={prokesIcon.icon.alt} />    
                                :   <ThemeProvider theme={theme} key={index}>
                                        <Box sx={{height: "100%", width: { md: "20px", lg: "120px" }}}></Box>    
                                    </ThemeProvider>
                        ))
                    }
                </Box>
                
            </Box>

            <EmptyBox emptyBoxStyles={{height: "100px"}} />
            
        </Box>
    )
}

export default ProtokolKesehatan;