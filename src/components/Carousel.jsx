import React from 'react'
import Banner from '../assets/img/banner-arkafstore.png'
import Banner2 from '../assets/img/banner-arkafstore-2.png'
import Banner3 from '../assets/img/banner-arkafstore-3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='rounded-xl' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8951ab101866185.5f294eb94154d.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8951ab101866185.5f294eb94154d.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='rounded-xl' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/8951ab101866185.5f294eb94154d.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel