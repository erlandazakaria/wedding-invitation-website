import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';

const theme = createTheme({
    palette: {
        instagramIconStyles : {
            main: "#424242"
        }    
    }
    
})
function InstagramLinkButton ({ linkIg }) {
    return (
        <Button >
            <ThemeProvider theme={theme}>
            <Link to={linkIg}>
                <InstagramIcon color="instagramIconStyles" sx={{backgroundColor: "#E8D3C3", borderRadius: "14px", padding: "4px", fontSize: 26}} />
            </Link> 
            </ThemeProvider>
            
        </Button>
    )
}

export default InstagramLinkButton;