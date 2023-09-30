const Pengantin = ({pria, wanita}) => {
  return(
    <>
      <div className="grid place-items-center text-center">
        <div className="card w-96 py-3 glass shadow-lg my-5">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div className="card-body items-center text-center">
                <h1 className="text-xl underline decoration-wavy font-body font-bold my-5 mb-10">Kedua Mempelai</h1>
                <div className="avatar">
                  <div className="w-24 rounded-full ring-4 ring-base-100 shadow-lg">
                    <img src={pria.foto} />
                  </div>
                </div>
                <h2 className="card-title font-display text-2xl">{pria.nama}</h2>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: pria.deskripsi }}></p>
                <p className="text-xs">({pria.alamat})</p>
                <h2 className="font-display font-bold text-4xl my-3">&amp;</h2>
                <div className="avatar">
                  <div className="w-24 rounded-full ring-4 ring-base-100 shadow-lg">
                    <img src={wanita.foto} />
                  </div>
                </div>
                <h2 className="card-title font-display text-2xl">{wanita.nama}</h2>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: wanita.deskripsi }}></p>
                <p className="text-xs">({wanita.alamat})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pengantin