import { Box, Typography, ThemeProvider } from '@mui/material';
import EmptyBox from './EmptyBox';

function ArRum ({theme}) {
    return (
        <Box sx={{boxSizing: "border-box",border: "4px solid #fff", height: "100%" }}>
            <ThemeProvider theme={theme}>
                <Box sx={{height: "100%",width: "100%",border: "4px solid #E8D3C3", backgroundColor: "#FFF7F5", padding: {xs: "16px", tujuhEnamDelapan: "42px"}, textAlign: "center", textIndent: "-4px", }}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='arRum'>“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</Typography>    
                    </ThemeProvider>
                    <EmptyBox emptyBoxStyles={{height: "18px"}} />
                    <Box>
                        <ThemeProvider theme={theme}>
                            <Typography variant='arRum'>- QS. Ar-Rum 21 -</Typography>
                        </ThemeProvider>
                    </Box>    
                </Box>    
            </ThemeProvider>
           
            
        </Box>
    )
}

export default ArRum;