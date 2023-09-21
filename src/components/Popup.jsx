export default function Popup({data, kepada}) {
  return (
    <>
      <dialog id="my_modal_4" className="modal" open>
        <div className="modal-box grid bg-base-200 place-items-center text-center min-h-screen max-w-md sm:w-full md:max-w-2xl">
          <div className="flex items-center justify-center">
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
                    <h2 className="card-title">{kepada}</h2>
                  </div>
                </div>
              </div>
              <div className='flex justify-center modal-action'>
                <form method="dialog">
                  <button className="animate__animated animate__headShake animate__slow animate__infinite infinite btn btn-primary shadow-lg shadow-primary-focus md:my-5 my-10">Buka Undangan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  )
}