const Section1 = ({data}) => {
  return(
    <>
      <div className="grid place-items-center text-center">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <h1 className="text-lg font-mono my-5">Undangan Pernikahan</h1>
            <h1 className="md:text-4xl text-4xl font-bold font-display">{data.pria.panggilan} & {data.wanita.panggilan}</h1>
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
            <p className="text-sm mt-3">
					  	Dengan Memohon Rahmat dan Ridlo Allah SWT.<br/>
					  	Kami Mengharapkan Do'a Restu dan Kehadiran Anda.
					  </p>
            <h2 className="text-lg mb-0 pb-0">{data.hari}</h2>
            <h2 className="text-lg mb-3">{data.tanggal}</h2>
            {/* <Countdown date={data.timestamp} renderer={renderer}>
					    <Completionist />
					  </Countdown> */}
          </div>
        </div>
      </div>
    </>
  )
}