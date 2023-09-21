import { useState, useEffect } from 'react'
import config from './config.json'
import Popup from './components/Popup'
import Slide from './components/Slide';

function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');
  const [tujuan, setTujuan] = useState(kepada)
  const [data, setData] = useState(config);
  return (
    <>
      {/* <div className="max-w-md card"> */}
              <Slide data={data} kepada={tujuan} />
            
      {/* </div> */}
      
      <Popup data={data} kepada={tujuan}/>
    </>
  )
}

export default App
