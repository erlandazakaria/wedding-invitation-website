import { Box, Button,Typography, ThemeProvider } from '@mui/material';
function SaveTheDateButton ({ theme, saveTheDateButtonStyle }) {
    return (
        <Box style={saveTheDateButtonStyle.boxStyles}>
            <Button variant='contained' sx={saveTheDateButtonStyle.buttonStyles}>
                <ThemeProvider theme={theme}>
                    <Typography variant='saveTheDate' >Save The Date </Typography>
                </ThemeProvider>
                
            </Button>
        </Box>
    )
}

export default SaveTheDateButton;