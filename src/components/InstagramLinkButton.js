import { Button, createTheme, ThemeProvider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
    palette: {
        instagramIconStyles : {
            main: "#424242"
        }    
    }
    
})
function InstagramLinkButton () {
    return (
        <Button >
            <ThemeProvider theme={theme}>
                <InstagramIcon color="instagramIconStyles" sx={{backgroundColor: "#E8D3C3", borderRadius: "14px", padding: "4px", fontSize: 26}} />
            </ThemeProvider>
            
        </Button>
    )
}

export default InstagramLinkButton;