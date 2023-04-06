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
        <Button sx={{ transition: ".3 ease","&:hover" : {transform: "scale(1.3)", backgroundColor: "transparent"}}}>
            <ThemeProvider theme={theme}>
            <Link to={linkIg}>
                <InstagramIcon 
                color="instagramIconStyles" 
                    sx={{
                        backgroundColor: "#E8D3C3",
                        borderRadius: "14px", 
                        padding: "4px", 
                        fontSize: {xs: "1.7rem",sm: "1.9rem", md: "2rem"},
                        "&:hover": {backgroundColor: "#424242", color: "white"}
                    }} />
            </Link> 
            </ThemeProvider>
            
        </Button>
    )
}

export default InstagramLinkButton;