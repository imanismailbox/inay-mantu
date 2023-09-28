import { useState, useEffect } from 'react'
import config from './config.json'


import Popup from './components/Popup'
import Navigation from './components/Navigation';

import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
// import Section4 from './sections/Section4';
// import Section5 from './sections/Section5';

function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');

  const [tujuan, setTujuan] = useState('Tamu Istimewa')
  const [data, setData] = useState(config);
  const [opening, setOpening] = useState(true);
  
  useEffect(()=>{
    if (kepada) {
      setTujuan(kepada)
    }
  }, [kepada])

  if (opening) {
    // return <Popup data={data} kepada={tujuan} />
    return(
      <>
      <div className='min-h-screen max-w-md sm:w-full glass px-3'>
        <div className="grid place-items-center text-center min-h-screen">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div className='flex justify-center'>
                <img src='/bismillah.png' className='w-1/3' />
              </div>
              <h1 className="text-lg font-mono mb-5">Undangan Pernikahan</h1>
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
              <p className="mt-6 mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
              <div className='flex justify-center'>
                <div className="card w-10/12 bg-base-100 shadow-xl mb-2">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{tujuan}</h2>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button onClick={()=>{setOpening(!opening)}} className="animate__animated animate__headShake animate__slow animate__infinite infinite btn btn-primary shadow-lg shadow-primary-focus md:my-5 my-10">Buka Undangan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  } else {
    return (
    <>
      <div className='min-h-screen max-w-md sm:w-full px-3 mb-5'>
        <Section1 data={data} />
        <Section2 data={data} />
        <Section3 data={data} />
        {/* <Section4 data={data} /> */}
        {/* <Section5 data={data} /> */}
      </div>
      <Navigation className="z-50 max-w-sm sm:w-full" />

      {/* <button onClick={()=>{console.log('klik')}} title="Play/Pause Music" */}
      {/*   className="fixed z-90 bottom-10 right-8 btn btn-circle"> */}
      {/*   <label className="swap"> */}
      {/*     <input type="checkbox" /> */}
      {/*     <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg> */}
      {/*     <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg> */}
      {/*   </label> */}
      {/* </button> */}
    </>
    )
  }
}

export default App
