const Acara = ({acara}) => {
  return(
    <>
      <div className="grid place-items-center text-center px-2">
        <div className="card md:w-96 w-full py-3 glass shadow-lg my-5">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div className="card-body">
                <h1 className="text-xl underline decoration-wavy font-body font-bold my-5 mb-10">Undangan Pernikahan</h1>
                <p className="text-md">
                  Dengan segala kerendahan hati dan dengan ucapan syukur atas karunia Tuhan, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami yang akan dilaksanakan pada:
                </p>
                
                <h1 className="md:text-4xl text-4xl font-bold font-display mt-5 mb-3 underline decoration-wavy decoration-primary">Akad Nikah</h1>
                <h2 className="text-lg mb-0 pb-0">{acara.hari}, {acara.tanggal}</h2>
                <h2 className="text-lg mb-0 pb-0">{acara.akad}</h2>

                <h1 className="md:text-4xl text-4xl font-bold font-display mt-5 mb-3 underline decoration-wavy decoration-primary">Resepsi</h1>
                <h2 className="text-lg mb-0 pb-0">{acara.hari}, {acara.tanggal}</h2>
                <h2 className="text-lg mb-0 pb-0">{acara.resepsi}</h2>

                <h1 className="md:text-4xl text-4xl font-bold font-display mt-5 mb-3 underline decoration-wavy decoration-primary">Lokasi</h1>
                <div className='flex justify-center'>
                  <img src='/lokasi.jpg' className='w-2/3' />
                </div>
                <p className="text-md">
                  LES ABAMA DAN PRISMA KEBOJONGAN, 4GP3+VJM, Kebukuran, Kebojongan, Kec. Comal, Kabupaten Pemalang, Jawa Tengah 52363, Indonesia
                </p>
                <a href="https://maps.app.goo.gl/xFVjvFvpdPJHQ1dy8" target="_blank" className="btn btn-primary">
                  Open Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Acara