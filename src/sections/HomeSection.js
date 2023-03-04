import { useEffect, useState } from 'react';
import { Box, Typography, ThemeProvider, Button } from '@mui/material';

const countDownDate = new Date("2023-03-06 20:00:00").getTime();
function getDate (timeDifferences) {
    return Math.floor(timeDifferences / (1000 * 60 * 60 * 24))
} 
function getHour (timeDifferences) {
    return Math.floor((timeDifferences % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}
function getMinute (timeDifferences) {
    return Math.floor((timeDifferences % (1000 * 60 * 60)) / (1000 * 60));
}
function getSecond (timeDifferences) {
    return Math.floor((timeDifferences % (1000 * 60)) / 1000);
}

function HomeSection ({theme}) {
    const [remainingTime, setRemainingTime] = useState({
        day: getDate(countDownDate - new Date()), 
        hours: getHour(countDownDate - new Date()), 
        minutes: getMinute(countDownDate - new Date()), 
        seconds: getSecond(countDownDate - new Date())
    });

    const findRemainingTime = () => {
        
        setInterval(() => {
            let currentDate = new Date().getTime();
            let difference = countDownDate - currentDate;
            let day = getDate(difference)
            let hours = getHour(difference)
            let minutes = getMinute(difference)
            let seconds = getSecond(difference)
            // console.log({day: day, hours: hours, minutes: minutes, seconds: seconds})
            setRemainingTime({day, hours, minutes, seconds})
        }, 1000)    
    }

    useEffect(() => {
        findRemainingTime()
    },[])
    return (
        <Box sx={{boxSizing: "border-box", height: "100vh", width: "100%", backgroundImage: "url('./img/content-page/home-section-photo-rev1.png')" 
        , backgroundSize: "cover", backgroundRepeat: "no-repeat"
        }}>
            <Box style={{height: "42vh", border: "1px solid black"}}>
            </Box>
            <Box style={{height: "26vh", textAlign: "center"}}>
                <Box >
                    <ThemeProvider theme={theme}>
                    <Typography variant='weInviteYou'>We invite you to celebrate our wedding</Typography>
                    </ThemeProvider>
                </Box>
                <Box style={{marginBottom: "8px"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='testText' style={{ boxSizing: "border-box", color:"#9d7a5b"}}>Gaby & Erlanda</Typography>  
                    </ThemeProvider>    
                </Box>
                
                <Box style={{marginBottom: "8px"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='weInviteYou' >Sabtu, 19 November 2022</Typography>
                    </ThemeProvider>    
                </Box>
                
                <Box style={{marginTop: "24px", border: "1px dotted black"}}>
                    <Button variant='contained' sx={{padding: "4px 8px", textTransform: "capitalize", borderRadius: "8px", backgroundColor: "#424242"}}>
                        <ThemeProvider theme={theme}>
                            <Typography variant='saveTheDate' >Save The Date </Typography>
                        </ThemeProvider>
                        
                    </Button>
                </Box>
                
            </Box>
            <Box style={{boxSizing: "border-box", height: "32vh", border: "1px solid black"}}>
                <Box sx={{height: "32px"}}></Box>
                <Box  sx={{border: "1px dotted red", padding: "0 8px", height: "14vh", display: "flex", justifyContent: "space-evenly", textAlign: "center"}}>
                    
                    <Box sx={{boxSizing: "border-box", borderRadius: "14px", height: "40px", width: "60px", display: "flex", flexDirection: "column", backgroundColor: "#E8D3C3"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="numberAtCountdown">{remainingTime.day}</Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <Typography variant='dateAtCountdown'>Hari</Typography>
                    </ThemeProvider>
                    </Box>

                    <Box sx={{boxSizing: "border-box", borderRadius: "14px", height: "40px", width: "60px", display: "flex", flexDirection: "column", backgroundColor: "#E8D3C3"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="numberAtCountdown">{remainingTime.hours}</Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <Typography variant='dateAtCountdown'>Jam</Typography>
                    </ThemeProvider>
                    </Box>

                    <Box sx={{boxSizing: "border-box", borderRadius: "14px", height: "40px", width: "60px", display: "flex", flexDirection: "column", backgroundColor: "#E8D3C3"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="numberAtCountdown">{remainingTime.minutes}</Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <Typography variant='dateAtCountdown'>Menit</Typography>
                    </ThemeProvider>
                    </Box>

                    <Box sx={{boxSizing: "border-box", borderRadius: "14px", height: "40px", width: "60px", display: "flex", flexDirection: "column", backgroundColor: "#E8D3C3"}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="numberAtCountdown">{remainingTime.seconds}</Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={theme}>
                        <Typography variant='dateAtCountdown'>Detik</Typography>
                    </ThemeProvider>
                    </Box>
                    
                </Box>
                <Box sx={{boxSizing: "border-box", height: "14vh",width: "100%"}}>
                <img src="/img/Untitled.png" style={{height: "100%", width: "100%"}}  />    
                </Box>
                
            </Box>
      </Box>
    )
}

export default HomeSection;