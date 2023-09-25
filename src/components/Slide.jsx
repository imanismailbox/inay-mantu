import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import '../styles.css';

// import required modules
import { Pagination, Keyboard, Mousewheel, History } from 'swiper/modules';

import Navigation from './Navigation'
import Slide1 from './Slide1'
import Messages from './Messages';

export default function Slide({data}) {
  const swiperRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {}, []);

  const toSlide = (e, num) => {
    console.log("go to slide", num);
    swiperRef.current?.swiper.slideTo(num);
  };
  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index+1) + '</span>';
    // },
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        direction={'vertical'}
        history={{
          key: 'halaman',
        }}
        pagination={pagination}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        modules={[Pagination, Keyboard, Mousewheel]}
        className="mySwiper max-w-sm w-full glass"
      >
        <SwiperSlide>
          <Slide1 data={data} />
        </SwiperSlide>
        <SwiperSlide><Messages /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <Navigation />
    </>
  );
}
