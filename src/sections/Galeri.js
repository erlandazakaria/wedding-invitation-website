import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import Slider from '../components/slider/Slider';
import EmptyBox from '../components/EmptyBox';


const theme = createTheme({
    typography: {
        galeriTitle: {
            fontSize: "1.8rem",
            color: "#AB8144",
            fontFamily: "Playball",
            "@media(min-width: 500px)": {
                fontSize: "2.5rem"
            },
            "@media(min-width: 768px)": {
                fontSize: "3rem"
            }
        }
    }
})

function Galeri () {

    return (
        <ThemeProvider theme={theme}>
            <Box id="galeri-section" sx={{boxSizing: "border-box", height: "100%", padding: "16px", backgroundColor: "#E8D3C3", textAlign: "center"}}>
                    <Typography variant='galeriTitle'>Galeri Foto</Typography>
                <EmptyBox emptyBoxStyles={{height: "24px"}} />
                <Slider />
            </Box>      
        </ThemeProvider>
              
    )
}

export default Galeri;




