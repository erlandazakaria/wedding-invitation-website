import { Box, Typography, ThemeProvider } from '@mui/material';
import EmptyBox from '../components/EmptyBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
function CeritaBox ({ theme, containerStyles, ceritaHeader, ceritaContent }) {
    const heartIconContainerStyle = {
        boxSizing: "border-box",
        height: "32px",
        width: "32px", 
        borderRadius: "50%", 
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginRight: "12px",
    }
    const ceritaBoxStyle = {
        boxSizing: "border-box",
        border: "1px solid #fff",
        height: "100%", 
        width: "100%", 
        backgroundColor: "#E8D3C3", 
        borderRadius: "8px",
        padding: "12px",
        boxShadow: "0px 4px 5px -1px #B19F93",
        color: "#6C6C6C",
    }
    return (
        <ThemeProvider theme={theme}>
            <Box sx={containerStyles}>
                <Box>
                    <EmptyBox emptyBoxStyles={{height: "8px"}} />
                    <Box sx={heartIconContainerStyle}>
                        <FavoriteIcon color="heartShapeIcon" /> 
                    </Box>
                </Box>
                
                <Box sx={ceritaBoxStyle}>
                    <Typography variant='ceritaHeader'>{ceritaHeader}</Typography>
                    <EmptyBox emptyBoxStyles={{height: "8px"}} />
                    <Box sx={{height: "100%", lineHeight: 1.3}}>
                        <Typography variant='ceritaContent'>
                            {ceritaContent}
                        </Typography>    
                    </Box>     
                </Box>
            </Box>    
        </ThemeProvider>
        
    )
}

export default CeritaBox;