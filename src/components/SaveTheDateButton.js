import { Box, Button,Typography, ThemeProvider } from '@mui/material';
function SaveTheDateButton ({ theme, saveTheDateButtonStyle }) {
    return (
        <ThemeProvider theme={theme}>
            <Box style={saveTheDateButtonStyle.boxStyles}>
                <Button variant='contained' sx={saveTheDateButtonStyle.buttonStyles}>
                    <Typography variant='saveTheDate' >Save The Date </Typography>
                </Button>
            </Box>
        </ThemeProvider>
        
    )
}

export default SaveTheDateButton;