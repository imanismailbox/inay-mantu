const Section2 = ({data}) => {
  const deskripsi1 = data.pria.deskripsi
  const deskripsi2 = data.wanita.deskripsi
  return(
    <>
      <div className="grid place-items-center text-center">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-2xl my-5">Kedua Mempelai</h1>
            <div className="card w-full bg-base-100 px-2 py-3 shadow-lg">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-28 rounded-full shadow-lg">
                    <img src={data.pria.avatar} />
                  </div>
                </div>
                <h2 className="card-title font-display text-2xl">{data.pria.nama}</h2>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: data.pria.deskripsi }}></p>
                <p className="text-xs">({data.pria.alamat})</p>
              </div>
            </div>

            <div className="card w-full bg-base-100 px-2 py-3 shadow-lg mt-3">
              <div className="card-body items-center text-center">
                <div className="avatar">
                  <div className="w-28 rounded-full shadow-lg">
                    <img src={data.wanita.avatar} />
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