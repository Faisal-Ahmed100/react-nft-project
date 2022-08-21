import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCards,Pagination,Navigation,Autoplay } from "swiper";


import Img1 from '../../assets/Nfts/bighead-1.svg';
import Img2 from '../../assets/Nfts/bighead-2.svg';
import Img3 from '../../assets/Nfts/bighead-3.svg';
import Img4 from '../../assets/Nfts/bighead-4.svg';
import Img5 from '../../assets/Nfts/bighead-5.svg';
import Img6 from '../../assets/Nfts/bighead-6.svg';
import Img7 from '../../assets/Nfts/bighead-7.svg';
import Img8 from '../../assets/Nfts/bighead-8.svg';
import Img9 from '../../assets/Nfts/bighead-9.svg';
import Img10 from '../../assets/Nfts/bighead-10.svg';


const Carosel = () => {
  return (
    <>
    <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay:2000,
          disableOnInteraction:false
        }}
        navigation={true}
        pagination={{
          type:'fraction'
        }}
        scrollbar={{
          draggable:true
        }}
        modules={[EffectCards,Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Img1} alt="about-nft" />
        </SwiperSlide>
        <SwiperSlide><img src={Img1} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img2} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img3} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img4} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img5} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img6} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img7} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img8} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img9} alt="about-nft" /></SwiperSlide>
        <SwiperSlide><img src={Img10} alt="about-nft" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carosel