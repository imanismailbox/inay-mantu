import { useState, useEffect } from 'react'
import config from './config.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import Popup from './Popup'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

import { Pagination, Keyboard } from 'swiper/modules';

function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');
  const [tujuan, setTujuan] = useState(kepada)
  const [data, setData] = useState(config);
  const [open, setOpen] = useState(true)

  return (
    <>
      <Popup data={data} kepada={tujuan}/>
      <main className="max-w-md sm:w-full mx-auto glass shadow-lg shadow-indigo-500/50 md:max-w-2xl items-center text-center max-h-screen snap snap-y snap-mandatory">
        <section className="flex items-center justify-center w-full h-screen bg-center bg-cover snap-start bg-home-1">
          <img
            alt="The todoist logo"
            title="The Todoist Logo"
            src="images/logo.png"
          />
        </section>
        <section className="flex items-center justify-center w-full h-screen snap-start">
          <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
            <div className="z-10 flex flex-col justify-center col-span-3 col-start-2 row-start-1">
              <h1 className="font-black text-purple">About The Todoist</h1>
              <h3 className="text-pink">
                Coffee, Adrenaline, and a bunch off craziness
              </h3>
            </div>
            <div className="flex flex-col items-end col-span-6 col-start-3 row-start-1">
              <img src="https://thetodoist.com/static/media/home_about.104e3ad7.jpg" />
              <a href="/about" className="mt-2 text-xs underline">
                Find out more →
              </a>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center w-full h-screen text-white bg-purple snap-start">
          <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
            <div className="col-span-5 col-start-2">
              <img src="https://thetodoist.com/img/blog/forgotten-punctuation/overview.jpg" />
            </div>
            <div className="flex flex-col justify-center col-span-3 col-start-8">
              <h2 className="font-black">Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing, sed diam, sed
                diam.
              </p>
              <a href="#" className="mt-2 text-xs underline">
                Read more →
              </a>
            </div>
          </div>
        </section>
        <section
          className="flex items-center w-full h-screen bg-indigo-200 bg-center bg-cover text-purple snap-start"
          style={{
            backgroundImage:
              "url(https://thetodoist.com/img/blog/beach-workouts/running.jpg)"
          }}
        >
          <div className="w-1/12">&nbsp;</div>
          <div className="w-3/12">
            <div className="relative">
              <span className="absolute flex w-full h-0.5 -ml-4 bg-purple -left-full top-1/2" />
              Health
            </div>
            <a href="#">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing, sed diam, sed
                diam.
              </p>
            </a>
            <a href="#" className="mt-2 text-xs underline">
              Read more →
            </a>
          </div>
        </section>
        <section className="flex items-center justify-center w-full h-screen bg-pattern-striped snap-start">
          <div className="grid grid-flow-row grid-cols-12 grid-rows-1 gap-8">
            <div className="col-span-10 col-start-2">
              <h2 className="font-black">Coffee? Sure let's do it.</h2>
              <strong className="flex w-1/2">
                Always up for meeting new people, learning stuff, trying new things,
                so please give me a shout out if you want to be in touch.
              </strong>
              <div className="flex mt-8">
                <div className="w-1/2">
                  <h4>Contact me</h4>
                  <p>
                    Send me an email on{" "}
                    <a className="underline" href="mailto:info@thetodoist.com">
                      info@thetodoist.com
                    </a>
                  </p>
                </div>
                <div className="w-1/2">
                  <h4>Currently in</h4>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
