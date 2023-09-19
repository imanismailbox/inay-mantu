import { useState, useEffect } from 'react'
import config from './config.json'

// const useQuery = () => new URLSearchParams(useLocation().search);

function App() {
  let urlParams = new URLSearchParams(window.location.search);
  let kepada = urlParams.get('kepada');
  const [tujuan, setTujuan] = useState(kepada)
  const [data, setData] = useState(config);

  return (
    <>
      <div className="max-w-md sm:w-full mx-auto glass shadow-lg shadow-indigo-500/50 overflow-hidden md:max-w-2xl items-center text-center">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
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
                    <h2 className="card-title">{tujuan}</h2>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <button className="animate__animated animate__headShake animate__slow animate__infinite infinite btn btn-primary shadow-lg shadow-primary-focus md:my-5 my-10">Buka Undangan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
