import { useState, useEffect } from 'react'
import config from './config.json'
import Popup from './components/Popup'
// import Slide from './components/Slide'
import Fullpage from './components/Fullpage';
import Navigation from './components/Navigation';
// import AudioPlayer from './components/AudioPlayer';
import useSound from 'use-sound';
import asmarandana from './assets/asmarandana.mp3'

function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');

  const [tujuan, setTujuan] = useState(kepada)
  const [data, setData] = useState(config);
  const [play] = useSound(asmarandana);
  
  // componentDidMount() {
  //   console.log(asmarandana);
  //   play();
  // };

  useEffect(()=>{
    play()
  })

  return (
    <>
      {/* <AudioPlayer className="z-50" url={'./assets/bg-audio.mp3'}/> */}
      <Navigation className="z-50" />
      <div className='max-w-sm sm:w-full bg-base-200 px-6'>
        <Fullpage data={data} />
      </div>
      <Popup data={data} kepada={tujuan} />
      {/* <Slide data={data} /> */}
    </>
  )
}

export default App
