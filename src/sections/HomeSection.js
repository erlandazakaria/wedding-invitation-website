import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import InvitationText from '../components/InvitationText';
import CountdownTimer from '../components/CountdownTimer';
import SaveTheDateButton from '../components/SaveTheDateButton';
import '../App.css';


const countDownDate = new Date(2023, 5, 11, 12, 30, 0).getTime();
const saveTheDateButtonStyle = {
    boxStyles: {marginTop: {sm: "24px", md: "24px 0"}}, 
    buttonStyles: {padding: "4px 16px", textTransform: "capitalize", borderRadius: "8px", backgroundColor: "#424242"}
}

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
    const isScreenAt1000Px = useMediaQuery("(min-width: 1000px)");
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
        <Box sx={{padding: isScreenAt1000Px ? " 0 20px" : 0,height: "100vh"}}>
            <Box sx={{height: "20vh", backgroundColor: "#FFF7F5"}}></Box>
            <Box ><InvitationText theme={theme} backgroundColor="#FFF7F5" /></Box>
            <Box sx={{boxSizing: "border-box",height: "50vh",backgroundImage: "url('./img/test/test111.png')", backgroundPosition: "bottom", backgroundSize: "cover"}}>
                <Box sx={{height: {xs: "40px", sm: 0}}}></Box>
                <Box sx={{boxSizing: "border-box", height:"30vh"}}>
                    <Box sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                        <SaveTheDateButton theme={theme} saveTheDateButtonStyle={saveTheDateButtonStyle} />    
                    </Box>
                    {/* dummy box to simply eat space */}
                    <Box sx={{height: "9vh"}}></Box>
                    <CountdownTimer theme={theme} remainingTime={remainingTime} />
                </Box>
                <Box sx={{height: {xs: "30px", sm: 0}}}></Box>
                <Box sx={{boxSizing: "border-box", height: {xs: "100px", sm: "24vh"},width: "100%", backgroundColor: "#FFF7F5"}}>
                    <img src='/img/Untitled.png'alt='wavy_divider_picture' height="100%" width="100%" />
                </Box>

            </Box>
            </Box>
    )
}

export default HomeSection;