import { Box, ThemeProvider } from '@mui/material';
function EmptyBox ({ theme, emptyBoxStyles}) {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={emptyBoxStyles}></Box>
        </ThemeProvider>
    )
}

export default EmptyBox;