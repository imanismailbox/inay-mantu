import { useState, useEffect } from 'react'
import config from './config.json'
import ReactFullpage from '@fullpage/react-fullpage';


function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');

  const [tujuan, setTujuan] = useState(kepada)
  const [data, setData] = useState(config);
 
  return (
    <>

    </>
  )
}

export default App
