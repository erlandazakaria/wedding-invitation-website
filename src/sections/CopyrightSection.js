import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import EmptyBox from '../components/EmptyBox';
import InstagramLinkButton from '../components/InstagramLinkButton';

const theme = createTheme({
    typography: {
        devText : {
            fontFamily: "Cabin",
            fontSize: "0.8rem",
            "@media(min-width: 425px)": {
                fontSize: "0.9rem"
            },
            "@media(min-width: 1000px)": {
                fontSize: "1rem"
            }
        }
    }
})
function CopyrightSection () {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{height: {xs: "200px", md: "250px"}, backgroundColor: "rgb(232, 211, 195)"}}>
                <EmptyBox emptyBoxStyles={{height: {xs: "30px", sm: "10px"}}} />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Box>
                        <Typography variant='devText'>Coded by Edo Jarror</Typography>
                    </Box>
                    
                    <Box><Typography variant='devText'>Supervised & Maintenance by Erlanda Zakaria</Typography></Box>    
                    <Box><InstagramLinkButton linkIg="https://www.instagram.com/edojarror/" /></Box>
                </Box>
                
            </Box>    
        </ThemeProvider>
        
    )
}

export default CopyrightSection;