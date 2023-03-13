import { Box, Typography, ThemeProvider } from '@mui/material';
import SaveTheDateButton from './SaveTheDateButton';
function InvitationText ({ theme, backgroundColor}) {
    const saveTheDateButtonStyle = {
        boxStyles: {marginTop: "24px"}, 
        buttonStyles: {padding: "4px 8px", textTransform: "capitalize", borderRadius: "8px", backgroundColor: "#424242"}
    }
    return (
        <Box style={{height: "26vh", textAlign: "center", backgroundColor: backgroundColor}}>
                <Box >
                    <ThemeProvider theme={theme}>
                    <Typography variant='weInviteYou' >We invite you to celebrate our wedding</Typography>
                    </ThemeProvider>
                </Box>
                <Box style={{marginBottom: "8px"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='testText' style={{ boxSizing: "border-box"}}>Gaby & Erlanda</Typography>  
                    </ThemeProvider>    
                </Box>
                
                <Box style={{marginBottom: "8px"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='weInviteYou' >Sabtu, 19 November 2022</Typography>
                    </ThemeProvider>    
                </Box>

                {backgroundColor 
                    ? null 
                    : <SaveTheDateButton theme={theme} saveTheDateButtonStyle={saveTheDateButtonStyle} />
                      }
                
            </Box>
    )
}

export default InvitationText;