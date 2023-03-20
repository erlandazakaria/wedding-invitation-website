import { Box, Typography, createTheme, ThemeProvider, Button } from '@mui/material';
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
                {text: "Kamis, 17 November 2022", variant: "hariDanTanggal"},
                {text: "Pukul 09.00 WIB", variant: "tempatDanWaktu", haveMargin: true},
                {text: "Tempat: Kediaman Mempelai Wanita", variant: "tempatDanWaktu"},
                {text: "Jl. Danau Kerinci Raya F3 16E,", variant: "tempatDanWaktu"},
                {text: "Sawojajar, Kedungkandang, Kota Malang", variant: "tempatDanWaktu"},
            ]
        }, 
        {
            resepsi: [
                {text: "Resepsi", variant: "acaraHeader"},
                {text: "Sabtu, 19 November 2022", variant: "hariDanTanggal"},
                {text: "Sesi 1: 10.30 - 12.00", variant: "tempatDanWaktu", haveMarginTop: true},
                {text: "Sesi 2: 12.00 - 13.30", variant: "tempatDanWaktu", haveMargin: true},
                {text: "Tempat: Akasia Ballroom Hotel Savana.", variant: "tempatDanWaktu"},
                {text: "Jl. Letjen Sutoyo No.30, Rampal Celaket, Kec. Klojen, Kota Malang", variant: "tempatDanWaktu"},

            ]
        }
    ]
    return (
        <Box sx={containerStyles}>
             <Box sx={acaraBoxStyles}>
                <ThemeProvider theme={theme}>
                    {
                        acaraText[0].akad.map((akad, index)=> (<Typography key={index} variant={akad.variant} sx={{margin: akad.haveMargin ? "12px auto 8px" : null}}>{akad.text}</Typography>))
                    }
                </ThemeProvider>
            </Box>

            <EmptyBox emptyBoxStyles={{height: "30px"}} />

            <Box sx={acaraBoxStyles}>
                <ThemeProvider theme={theme}>
                    {
                        acaraText[1].resepsi.map((resepsi, index) => (
                            <Typography 
                            key={index} 
                            variant={resepsi.variant} 
                            sx={{margin: resepsi.haveMargin? "2px auto 12px " :  null, marginTop: resepsi.haveMarginTop ? "12px" : null }}>
                                
                                {resepsi.text}
                                
                            </Typography>))
                    }  
                </ThemeProvider>
            </Box>

            <EmptyBox emptyBoxStyles={{height: "32px"}} />
            
            <Box sx={{display: "flex", justifyContent: "center"}}>
                <Box >
                    
                        <Button variant='contained' sx={{ boxSizing: "border-box",padding: "6px 8px", borderRadius: "12px", backgroundColor: "#E8D3C3", border: "2px solid #fff", }}>
                            <LocationOnIcon sx={{fontSize: "18px", color: "#6C6C6C"}} />
                            <ThemeProvider theme={theme}>
                                <Typography variant='lihatLokasi'>Lihat Lokasi</Typography>
                            </ThemeProvider>  
                        </Button>
                      
                </Box>
            </Box>
            
            
        </Box>
    )
}

export default AcaraSection;