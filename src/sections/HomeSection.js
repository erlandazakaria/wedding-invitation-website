import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import InvitationText from '../components/InvitationText';
import CountdownTimer from '../components/CountdownTimer';
import SaveTheDateButton from '../components/SaveTheDateButton';
import '../App.css';
import WavyDivider from '../components/WavyDivider';


const countDownDate = new Date("2023-05-11 12:30:00").getTime();
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
    const isScreenAt900Px = useMediaQuery("(min-width: 900px)");
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
        isScreenAt900Px 
            ? <Box sx={{padding: isScreenAt1000Px ? " 0 20px" : 0,height: "100vh"}}>
                <Box sx={{height: "20vh", backgroundColor: "#FFF7F5"}}></Box>
                <Box ><InvitationText theme={theme} backgroundColor="#FFF7F5" /></Box>
                <Box sx={{boxSizing: "border-box",height: "50vh",backgroundImage: "url('./img/test/test111.png')", backgroundPosition: "bottom", backgroundSize: "cover"}}>
                    <Box sx={{boxSizing: "border-box", height:"30vh"}}>
                        <Box sx={{display: "flex", justifyContent: "center", alignContent: "center"}}>
                            <SaveTheDateButton theme={theme} saveTheDateButtonStyle={saveTheDateButtonStyle} />    
                        </Box>
                        {/* dummy box to simply eat space */}
                        <Box sx={{height: "9vh"}}></Box>
                        <CountdownTimer theme={theme} remainingTime={remainingTime} />
                    </Box>
                    <Box sx={{boxSizing: "border-box", height: "24vh",width: "100%", backgroundColor: "#FFF7F5"}}>
                        <img src='/img/Untitled.png' height="100%" width="100%" />
                    </Box>

                </Box>
              </Box>
            :  <Box sx={{
                boxSizing: "border-box", 
                height: "100vh", 
                width: "100%", 
                backgroundImage: {xs: "url('./img/content-page/home-section-photo-rev1.png')", md: "none"}, 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat", 
                }} className="homeSectionPhoto">
                    <Box style={{height: "42vh", textAlign: "center"}}>
           
                        <Box sx={{display: {xs: "none", md: "flex", margin: "0 auto", justifyContent: 'center'}}}>
                            <img src="/img/test/test111.png" sx={{margin: "0 auto"}} />    
                        </Box>
                        
                    </Box>
                    <InvitationText theme={theme}/>
                    <CountdownTimer theme={theme} remainingTime={remainingTime} />
                    <Box sx={{height: "8vh"}}></Box>
                    <Box sx={{boxSizing: "border-box", height: "8vh",width: "100%"}}>
                        <WavyDivider />
                    </Box>
                </Box>
    )
}

export default HomeSection;