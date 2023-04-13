import { Box, Typography, ThemeProvider } from '@mui/material';

function InvitationText ({ theme, backgroundColor}) {
    return (
        <ThemeProvider theme={theme}>
            <Box style={{height: "26vh", textAlign: "center", backgroundColor: backgroundColor}}>
                <Box >
                    <Typography variant='weInviteYou' >We invite you to celebrate our wedding</Typography>
                </Box>
                <Box style={{marginBottom: "8px"}}>
                    <Typography variant='testText' style={{ boxSizing: "border-box"}}>Cintya & Handhika</Typography>  
                </Box>
                <Box style={{marginBottom: "8px"}}>
                    <Typography variant='weInviteYou' >Kamis, 11 Mei 2023</Typography>
                </Box>
            </Box>    
        </ThemeProvider>
        
    )
}

export default InvitationText;