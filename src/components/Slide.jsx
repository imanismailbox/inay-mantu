import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import '../styles.css';

// import required modules
import { Pagination, Keyboard, Mousewheel, History } from 'swiper/modules';

export default function Slide({data, kepada}) {
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
        className="mySwiper max-w-md sm:w-full md:max-w-2xl"
      >
        <SwiperSlide>
          <div className="grid bg-base-200 place-items-center text-center min-h-screen max-w-md sm:w-full md:max-w-2xl">
            <div className="flex items-center justify-center">
              <div className="flex flex-col">
                <div className='flex justify-center'>
                  <img src='/bismillah.png' className='w-1/2' />
                </div>
                <h1 className="text-lg font-mono my-5">Undangan Pernikahan</h1>
                <h1 className="md:text-5xl text-4xl font-bold font-display">{data.pria.panggilan} & {data.wanita.panggilan}</h1>
                <div className="avatar-group -space-x-6 flex-wrap items-center justify-center gap-2">
                  <div className="avatar">
                    <div className="w-24">
                      <img src={data.pria.foto} />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-24">
                      <img src={data.wanita.foto} />
                    </div>
                  </div>
                </div>
                <p className="mt-10 mb-3">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                <div className='flex justify-center'>
                  <div className="card w-11/12 bg-base-100 shadow-xl mb-6">
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{kepada}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <div className='absolute bottom-0 left-1/2 z-50'>
        <div className='btn btn-primary' onClick={() => swiperRef.current?.swiper.slideTo(3)} ref={buttonRef}>slide 3</div>
      </div>
    </>
  );
}
