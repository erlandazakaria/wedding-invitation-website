import { Box, Typography, createTheme, ThemeProvider, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EmptyBox from '../components/EmptyBox';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const theme = createTheme({
    typography: {
        acaraHeader : {
        fontFamily: 'Great Vibes',
        color: "#AB8144",
        fontSize: "2.4rem",
        "@media(min-width: 768px)" : {
            fontSize: "4rem"
        }
        },      
        hariDanTanggal : {
            color: "#6C6C6C",
            fontSize: "1.1rem",
            fontWeight: 700,
            fontFamily: "Alegreya",
            "@media(min-width: 768px)" : {
                fontSize: "1.4rem"
            }
        },
        tempatDanWaktu : {
            color: "#6C6C6C",
            fontSize: "1rem",
            fontFamily: "Alegreya",
            "@media(min-width: 768px)" : {
                fontSize: "1.2rem"
            }
        },
        lihatLokasi: {
            fontSize: "0.7rem",
            color: "#6C6C6C",
            fontFamily: "Alegreya",
            '@media(min-width: 450px)': {
                fontSize: "0.9rem"
            },
            '@media(min-width: 768px)': {
                fontSize: "1.1rem"
            }
        }
    },
})

function AcaraSection () {
    const containerStyles = {
        height: "100%", padding: "50px 20px", backgroundImage: "url('/img/BAHAN-TEMA-08-NAMA-1-scaled-1.jpg')", backgroundSize: "cover", backgroundPosition: "bottom"  
    }
    const acaraBoxStyles = {
        height: "100%",
        width: "100%", 
        backgroundColor: "rgba(255, 247, 245, 0.5)",
        boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "24px",
        textAlign: "center"
    }

    const acaraText = [
        {
            akad: [
                {text: "Akad Nikah", variant: "acaraHeader"},
                {text: "Kamis, 11 Mei 2023", variant: "hariDanTanggal"},
                {text: "Pukul 08.00 WIB", variant: "tempatDanWaktu", haveMargin: true},
                {text: "Tempat: Chapel Royal Garden Orchid", variant: "tempatDanWaktu"},
                {text: "Royal Orchids Garden Hotel & Condominiums", variant: "tempatDanWaktu"},
                {text: "Jl. Indragiri No.4, Pesanggrahan, Kota Batu", variant: "tempatDanWaktu"},
            ]
        }, 
        {
            resepsi: [
                {text: "Resepsi", variant: "acaraHeader"},
                {text: "Kamis, 11 Mei 2023", variant: "hariDanTanggal"},
                {text: "Sesi 1: 13.00 - 15.00", variant: "tempatDanWaktu", haveMarginTop: true},
                {text: "Sesi 2: 15.00 - 17.00", variant: "tempatDanWaktu", haveMargin: true},
                {text: "Tempat: Arjuna Hall Royal Garden Orchid", variant: "tempatDanWaktu"},
                {text: "Jl. Indragiri No.4, Pesanggrahan, Kota Batu", variant: "tempatDanWaktu"},

            ]
        }
    ]
    return (
        <ThemeProvider theme={theme}>
            <Box sx={containerStyles} id="acara-section">
                <Box sx={acaraBoxStyles}>
                    {
                        acaraText[0].akad.map((akad, index)=> (<Typography key={index} variant={akad.variant} sx={{margin: akad.haveMargin ? "12px auto 8px" : null}}>{akad.text}</Typography>))
                    }
                </Box>

                <EmptyBox emptyBoxStyles={{height: "30px"}} />

                <Box sx={acaraBoxStyles}>
                    {
                        acaraText[1].resepsi.map((resepsi, index) => (
                            <Typography 
                            key={index} 
                            variant={resepsi.variant} 
                            sx={{margin: resepsi.haveMargin? "2px auto 12px " :  null, marginTop: resepsi.haveMarginTop ? "12px" : null }}>
                                
                                {resepsi.text}
                                
                            </Typography>))
                    }   
                </Box>

                <EmptyBox emptyBoxStyles={{height: "32px"}} />
                
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Box>
                        <Button 
                            variant='contained' 
                            sx={{ 
                                boxSizing: "border-box",
                                padding: "6px 8px", 
                                borderRadius: "12px", 
                                backgroundColor: "#E8D3C3", 
                                border: "2px solid #fff",
                                "&:hover": 
                                    {
                                        transform: "scale(1.3)", 
                                        color: "white", 
                                        backgroundColor: "#424242"
                                    } 
                            }}>
                            <LocationOnIcon sx={{fontSize: "18px", color: "#6C6C6C", "&:hover": {color: "white"}}} />
                            <Typography variant='lihatLokasi' sx={{"&:hover": {color: "white"}}}>
                                <Link to="https://goo.gl/maps/wcuHSPC4g27xmGkR9" style={{textDecoration: "none", color: "inherit"}}>Lihat Lokasi</Link>
                            </Typography>     
                        </Button>
                        
                    </Box>
                </Box>
                
                
            </Box>    
        </ThemeProvider>
        
    )
}

export default AcaraSection;