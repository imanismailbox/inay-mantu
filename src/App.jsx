import { useState, useEffect } from 'react';
import config from './config.json';

import Navigation from './components/Navigation';

import Pembuka from './sections/Pembuka';
import Pengantin from './sections/Pengantin';
import Acara from './sections/Acara';
import Ayat from './sections/Ayat';
import Penutup from './sections/Penutup';

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

  return (
    <>
      <div className='mx-auto snap-y snap-mandatory'>
      { opening ? (
        <div className="grid place-items-center text-center min-h-screen px-2">
          <div className="card md:w-6/12 w-full py-6 glass shadow-lg">
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
                  <div className="card w-80 bg-base-100 shadow-xl mb-2">
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
        ) : (
        <>
          <Pembuka data={data} />
          <Ayat />
          <Pengantin pria={data.pria} wanita={data.wanita} />
          <Acara acara={data.acara} />
          <Penutup data={data} />
        </>
        )}
      </div>
      <Navigation className="z-50" />
    </>
  )
}

export default App
