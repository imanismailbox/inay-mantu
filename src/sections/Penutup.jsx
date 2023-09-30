const Penutup = ({data}) => {
  return(
    <>
      <div className="grid place-items-center text-center">
        <div className="card w-96 py-3 bg-base-100 shadow-lg my-5">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div className="card-body">
                <p className="text-sm italic">
                  "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do'a restunya untuk keberkahan pernikahan kami."
                </p>
                <h1 className="md:text-5xl text-4xl text-primary font-bold font-display">{data.pria.panggilan} & {data.wanita.panggilan}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Penutup
