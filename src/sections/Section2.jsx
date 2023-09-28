const Section2 = ({data}) => {
  const deskripsi1 = data.pria.deskripsi
  const deskripsi2 = data.wanita.deskripsi
  return(
    <>
      <div className="grid place-items-center text-center min-h-screen">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <div className="card w-96 py-3 glass shadow-lg mb-16">
              <div className="card-body items-center text-center">
                <h1 className="text-xl underline decoration-wavy font-body font-bold my-5 mb-10">Kedua Mempelai</h1>
                <div className="avatar">
                  <div className="w-24 rounded-full ring-4 ring-base-100 shadow-lg">
                    <img src={data.pria.foto} />
                  </div>
                </div>
                <h2 className="card-title font-display text-2xl">{data.pria.nama}</h2>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: data.pria.deskripsi }}></p>
                <p className="text-xs">({data.pria.alamat})</p>
                <h2 className="font-display font-bold text-4xl my-3">&amp;</h2>
                <div className="avatar">
                  <div className="w-24 rounded-full ring-4 ring-base-100 shadow-lg">
                    <img src={data.wanita.foto} />
                  </div>
                </div>
                <h2 className="card-title font-display text-2xl">{data.wanita.nama}</h2>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: data.wanita.deskripsi }}></p>
                <p className="text-xs">({data.wanita.alamat})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2