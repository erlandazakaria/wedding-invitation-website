import { Box,Typography, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import EmptyBox from '../components/EmptyBox';
import CeritaBox from '../components/CeritaBox';

const theme = createTheme({
    typography: {
        title : {
            fontSize: "1.5rem",
            fontWeight: "400",
           fontFamily: "Crimson Text",
           "@media(min-width: 768px)": {
            fontSize: "2.8rem"
           }
        },
        ceritaHeader: {
            fontSize: "1.2rem",
            fontFamily: 'Alegreya',
            "@media(min-width: 768px)": {
                fontSize: "1.4rem"
            }
        },
        ceritaContent: {
            fontSize: "0.9rem",
            fontFamily: 'Alegreya',
            "@media(min-width: 768px)": {
                fontSize: "1rem"
            }
        }    
    },
    palette: {
        heartShapeIcon: {
            main: "#E8D3C3"
        }
    }
    
})

function CeritaKamiSection () {
    const isScreenAt768Px = useMediaQuery("(min-width: 768px)")
    const ceritaKamiTitleStyle = {
        width: "70%",
        borderRadius: "8px", 
        backgroundColor: "#E8D3C3",
        boxShadow: "0px 4px 5px -1px #B19F93",
        color: "#6C6C6C",
        textAlign: "center",
        
    }
    const ceritaText = [
        {
            header: "Awal Bertemu", 
            content: "Tahun 2020 merupakan tahun dimana pertama kali kami bertemu. Kami bertemu sebagai senior dan junior di tempat kerja kami."
        }, 
        {
            header: "Kedekatan",
            content: "Selama awal bekerja, kami sering bertukar pengetahuan dan mengobrol. Lama-kelamaan kami juga sering pergi berdua sepulang kerja."
        }, 
        {
            header: "Pernikahan",
            content: "Pada pertengahan tahun 2022, kami setuju untuk berkomitmen menjalani hubungan yg lebih serius. Akhirnya kami saling mengenalkan keluarga masing-masing dan menentukan hari pernikahan."
        }
    ];

    return (
        <Box sx={{boxSizing: "border-box", height: "100%",backgroundImage: "url('./img/BAHAN-TEMA-08-NAMA-3-scaled-1.jpg')", backgroundSize: "cover"}}>
            <Box sx={{height: "14%",display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                <Box sx={ceritaKamiTitleStyle}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='title'>Cerita Kami</Typography>
                    </ThemeProvider>    
                </Box>
               
            <EmptyBox emptyBoxStyles={{height: "50px", width: "100%"}} />    
            </Box>
            

            <Box sx={{boxSizing: "border-box", height: "86%", padding: "0 24px"}}>
                {isScreenAt768Px 
                    ? ceritaText.map((cerita,index) => {
                        if(index % 2 === 0) {
                            return (
                                <Box key={index} sx={{width: "100%", display: "flex",}}>
                                    <Box sx={{ width: "50%"}}></Box>
                                    <CeritaBox 
                                        theme={theme} 
                                        containerStyles={{boxSizing: "border-box", display: "flex", width: "50%"}}
                                        ceritaHeader={cerita.header}
                                        ceritaContent={cerita.content}  />             
                                </Box>
                            )
                        } else {
                            return (
                                <Box sx={{width: "100%", display: "flex",}} key={index}>
                                    <CeritaBox 
                                        theme={theme} 
                                        containerStyles={{boxSizing: "border-box", display: "flex", width: "50%"}} 
                                        ceritaHeader={cerita.header}
                                        ceritaContent={cerita.content}   />
                                    <Box sx={{width: "50%"}}></Box>
                                </Box>
                            )
                            
                        }})
                    :   ceritaText.map((cerita, index) => <CeritaBox key={index} theme={theme} containerStyles={{boxSizing: "border-box", display: "flex", marginBottom: "24px"}}  ceritaHeader={cerita.header} ceritaContent={cerita.content}   />)
                    
                    
                }
                

               
            </Box>
        </Box>
    )
}

export default CeritaKamiSection;

