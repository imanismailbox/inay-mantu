import React from 'react';
import Countdown from "react-countdown";

const Completionist = () => <span>Terima Kasih Atas Kehadiran dan Doa Restunya!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max max-w-sm mx-10">

			  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			    <span className="countdown font-mono text-4xl">
			      <span style={{"--value": days}}></span>
			    	{/* { days } */}
			    </span>
			    hari
			  </div> 
			  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			    <span className="countdown font-mono text-4xl">
			      <span style={{"--value": hours }}></span>
			    </span>
			    jam
			  </div> 
			  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			    <span className="countdown font-mono text-4xl">
			      <span style={{"--value": minutes}}></span>
			    </span>
			    menit
			  </div> 
			  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
			    <span className="countdown font-mono text-4xl">
			      <span style={{"--value": seconds}}></span>
			    </span>
			    detik
			  </div>
			</div>
    );
  }
};

export default function Slide1({data}) {
	return(
		<>
			<div className="grid bg-base-200 place-items-center text-center min-h-screen">
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
            <Countdown date={data.timestamp} renderer={renderer}>
					    <Completionist />
					  </Countdown>
            {/* <p className="mt-10 mb-3">Kepada Yth. Bapak/Ibu/Saudara/i:</p> */}
            {/* <div className='flex justify-center'> */}
            {/*   <div className="card w-11/12 bg-base-100 shadow-xl mb-6"> */}
            {/*     <div className="card-body items-center text-center"> */}
            {/*       <h2 className="card-title">{data.kepada}</h2> */}
            {/*     </div> */}
            {/*   </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
		</>
	)
}