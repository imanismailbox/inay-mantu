import ismailPhoto from './assets/ismail.png'
import titikPhoto from './assets/titik.png'
function App() {
  return (
    <>
      <div class="max-w-md mx-auto glass shadow-md overflow-hidden md:max-w-2xl items-center text-center">
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-mono my-5">Undangan Pernikahan</h1>
              <h1 className="text-7xl font-bold font-display">Ismail & Titik</h1>
              <div className="avatar-group -space-x-6 flex-wrap items-center justify-center gap-2">
                <div className="avatar">
                  <div className="w-24">
                    <img src={ismailPhoto} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-24">
                    <img src={titikPhoto} />
                  </div>
                </div>
              </div>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Buka Undangan</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
