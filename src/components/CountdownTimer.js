import { Box, Typography, ThemeProvider } from '@mui/material';

function CountdownTimer ({ theme, remainingTime }) {
    const wrapperStyles = {
        boxSizing: "border-box", height: {sm: "18vh",md:"32vh"}
    }
    const boxesContainerStyles = {
        padding: "0 8px", 
        height: {sm: "14vh", md: "100%"}, 
        display: "flex", 
        justifyContent: {xs: "space-evenly",custm: "center", sm: "center"}, 
        textAlign: "center"
    }
    const boxesStyles =  {
        boxSizing: "border-box", 
        borderRadius: "14px", 
        height: {xs: "40px", md: "60px"}, 
        width: {xs:"60px", md: "180px"}, 
        display: "flex", 
        flexDirection: "column", 
        backgroundColor: "#E8D3C3", 
        marginRight: {custm: "14px" }
    }
    return (
        <ThemeProvider theme={theme}>
            <Box style={wrapperStyles}>
                <Box sx={{height: "32px"}}></Box>
                <Box  sx={boxesContainerStyles}>
                    <Box sx={boxesStyles}>
                        <Typography variant="numberAtCountdown">{remainingTime.day}</Typography>
                        <Typography variant='dateAtCountdown'>Hari</Typography>
                    </Box>

                    <Box sx={boxesStyles}>
                        <Typography variant="numberAtCountdown">{remainingTime.hours}</Typography>
                        <Typography variant='dateAtCountdown'>Jam</Typography>
                    </Box>

                    <Box sx={boxesStyles}>
                        <Typography variant="numberAtCountdown">{remainingTime.minutes}</Typography>
                        <Typography variant='dateAtCountdown'>Menit</Typography>
                    </Box>

                    <Box sx={boxesStyles}>
                        <Typography variant="numberAtCountdown">{remainingTime.seconds}</Typography>
                        <Typography variant='dateAtCountdown'>Detik</Typography>
                    </Box>
                </Box>    
            </Box>    
        </ThemeProvider>
        
    )
}

export default CountdownTimer;