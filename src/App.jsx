import { useState, useEffect, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import bgSound from './assets/jannat64.mp3'
import config from './config.json';

import Pembuka from './sections/Pembuka';
import Ayat from './sections/Ayat';
import Pengantin from './sections/Pengantin';
import Acara from './sections/Acara';
import BukuTamu from './sections/BukuTamu'
import Penutup from './sections/Penutup';

function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');

  const [tujuan, setTujuan] = useState('Tamu Istimewa')
  const [data, setData] = useState(config);
  const [opening, setOpening] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const player = useRef()
  
  useEffect(()=>{
    if (kepada) {
      setTujuan(kepada)
    }
  }, [kepada])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      player.current.audioEl.current.pause()
    } else {
      player.current.audioEl.current.play()
    }
  }

  const bukaUndangan = () => {
    player.current.audioEl.current.play()
    setOpening(!opening)
  }

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
                  <button onClick={bukaUndangan} className="animate__animated animate__headShake animate__slow animate__infinite infinite btn btn-primary shadow-lg shadow-primary-focus md:my-5 my-10">Buka Undangan</button>
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
          <BukuTamu />
          <Penutup data={data} />
        </>
        )}
      </div>
      <div title="Play/Pause Music"
        className="fixed z-50 bottom-1/3 left-4">
        <label className="swap items-center justify-center w-10 h-10 font-medium text-white bg-primary rounded-full hover:bg-primary-700 group hover:shadow-lg hover:shadow-primary-focus focus:ring-4 focus:ring-primary-300 focus:outline-none">
          <input type="checkbox" 
            checked={isPlaying}
            onChange={togglePlay}
          />
          <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
        </label>
      </div>
      <ReactAudioPlayer
        src={bgSound}
        loop
        autoPlay
        id="bg-sound"
        ref={player}
      />
    </>
  )
}

export default App
