import { useState, useEffect } from 'react'
import config from './config.json'
import Popup from './components/Popup'
// import Slide from './components/Slide'
import Fullpage from './components/Fullpage';
import Navigation from './components/Navigation';

function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');

  const [tujuan, setTujuan] = useState('Tamu Istimewa')
  const [data, setData] = useState(config);
  
  useEffect(()=>{
    if (kepada) {
      setTujuan(kepada)
    }
  }, [kepada])

  useEffect(()=>{
    // play()
  })

  return (
    <>
      <div className='max-w-md sm:w-full bg-base-200 px-6'>
        <Fullpage data={data} />
        <Navigation className="z-50 max-w-sm sm:w-full" />
      </div>
      <Popup data={data} kepada={tujuan} />
      {/* <Slide data={data} /> */}
    </>
  )
}

export default App
