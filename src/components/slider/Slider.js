import { useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode, Thumbs, Zoom } from 'swiper';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './slider.css';

import EmptyBox from '../EmptyBox';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            tigaTujuhLima: 375,
            empatLimaPuluh: 450,
            limaratus: 500,
            enamratuslimapuluh: 650,
            tujuhEnamDelapan: 768
          }
    }
}) 


const cicinPhotos = [
    {photo: "/img/content-page/cicin-resized/1.jpeg", alt: "photo-1"},
    {photo: "/img/content-page/cicin-resized/2.jpeg", alt: "photo-2"},
    {photo: "/img/content-page/cicin-resized/3.jpeg", alt: "photo-3"},
    {photo: "/img/content-page/cicin-resized/4.jpeg", alt: "photo-4"},
    {photo: "/img/content-page/cicin-resized/5.jpeg", alt: "photo-5"},
    {photo: "/img/content-page/cicin-resized/6.jpeg", alt: "photo-6"},
    {photo: "/img/content-page/cicin-resized/7.jpeg", alt: "photo-7"},
    {photo: "/img/content-page/cicin-resized/8.jpeg", alt: "photo-8"},
    {photo: "/img/content-page/cicin-resized/9.jpeg", alt: "photo-9"},
    {photo: "/img/content-page/cicin-resized/10.jpeg", alt: "photo-10"},
    {photo: "/img/content-page/cicin-resized/11.jpeg", alt: "photo-11"},
    {photo: "/img/content-page/cicin-resized/12.jpeg", alt: "photo-12"},
    {photo: "/img/content-page/cicin-resized/13.jpeg", alt: "photo-13"},
    {photo: "/img/content-page/cicin-resized/14.jpeg", alt: "photo-14"}
]

function Slider () {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Box sx={{ boxSizing: "border-box",height: "100%", padding: {md: "0 100px", lg: "0 200px"}}}>
            <ThemeProvider theme={theme}>
                <Box sx={{ height: {xs: "250px", tujuhEnamDelapan: "450px"}}}>
                    <Swiper 
                        style={{"--swiper-navigation-color": "#fff"}}
                        zoom={true}
                        loop={true}
                        navigation={true}
                        mousewheel={true}
                        keyboard={true}
                        freeMode={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        spaceBetween={0}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode, Thumbs, Zoom ]}
                        className="mySwiper2" >
                        
                        { 
                        cicinPhotos.map((photo, index) => (
                            <SwiperSlide key={index}>
                                <Box className="swiper-zoom-container" >
                                    <img src={photo.photo} alt={photo.alt} />
                                </Box>
                            </SwiperSlide>  
                        ))
                        }
                    </Swiper>    
                </Box>    
            </ThemeProvider>
            
                <EmptyBox emptyBoxStyles={{height: "32px"}} />
            
            <ThemeProvider theme={theme}>
                <Box sx={{height: {xs: "50px", tigaTujuhLima: "68px", empatLimaPuluh: "80px", limaratus: "90px", enamratuslimapuluh: "100px",md: "160px"}}}>
                    <ThemeProvider theme={theme}>
                        <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        className="mySwiper"
                        loop={true}
                        modules={[FreeMode, Navigation, Thumbs]}>
                            {
                                cicinPhotos.map((photo, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={photo.photo} alt={photo.alt} />
                                    </SwiperSlide>  
                                ))
                            }
                            
                        </Swiper>
                    </ThemeProvider>
                </Box>
            </ThemeProvider>
           
            <EmptyBox emptyBoxStyles={{height: "12px"}} />
        </Box>
        
    )
}


export default Slider;