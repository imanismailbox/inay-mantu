const Section3 = ({data}) => {
    return(
      <>
        <div className="grid place-items-center text-center min-h-screen">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div className="card w-96 py-3 glass shadow-lg mb-16">
                <div className="card-body">
                  <h1 className="text-xl underline decoration-wavy font-body font-bold my-5 mb-10">Undangan Pernikahan</h1>
                  <p className="text-md">
                    Dengan segala kerendahan hati dan dengan ucapan syukur atas karunia Tuhan, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang akan dilaksanakan pada:
                  </p>
                  
                  <h1 className="md:text-4xl text-4xl font-bold font-display mt-5 mb-3 underline decoration-wavy decoration-primary">Akad Nikah</h1>
                  <h2 className="text-lg mb-0 pb-0">{data.hari}, {data.tanggal}</h2>
                  <h2 className="text-lg mb-0 pb-0">{data.akad.jam}</h2>

                  <h1 className="md:text-4xl text-4xl font-bold font-display mt-5 mb-3 underline decoration-wavy decoration-primary">Resepsi</h1>
                  <h2 className="text-lg mb-0 pb-0">{data.hari}, {data.tanggal}</h2>
                  <h2 className="text-lg mb-0 pb-0">{data.resepsi.jam}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Section3