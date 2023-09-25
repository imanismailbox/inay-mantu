import { useState, useEffect } from 'react'
import config from './config.json'
import Popup from './components/Popup'
import Slide from './components/Slide'
import Fullpage from './components/FullPage';


function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');

  const [tujuan, setTujuan] = useState(kepada)
  const [data, setData] = useState(config);
 
  return (
    <>
      {/* <AudioPlayer className="z-50" /> */}
      {/* <Navigation className="z-50" /> */}
      <div className='max-w-sm sm:w-full bg-base-200 px-6'>
        <Fullpage /> 
      </div>
      {/* <Popup data={data} kepada={tujuan} /> */}
      {/* <Slide data={data} /> */}
    </>
  )
}

export default App
