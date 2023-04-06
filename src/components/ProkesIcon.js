import { Box, Typography, ThemeProvider } from '@mui/material';

function ProkesIcon ({ theme, imgLink, iconText, alt }) {
    return (
         <ThemeProvider theme={theme}>
            <Box sx={{
                textAlign: "center",
                width: {sx: "100px", tujuhRatus: "250px" },
            }}>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Box sx={{width: {xs: "50px", empatRatus: "65px", limaRatus: "75px", enamRatus: "85px", tujuhRatus: "100px"},}}>
                            <img src={imgLink} alt={alt} width="100%" />    
                    </Box>    
                </Box>
               
                <Box sx={{padding: iconText === "Gunakan Handsanitizer" ? 0 : " 0 20px"}}>
                    <Typography variant='iconTextStyles' >
                        {iconText}
                    </Typography>     
                </Box>       
            </Box>
               
        </ThemeProvider> 
    )
}

export default ProkesIcon;