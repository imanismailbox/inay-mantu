import Countdown, {zeroPad} from "react-countdown";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const Completionist = () => <span>Terima Kasih Atas Doa Restu dan Kehadirannya!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto">
        <div className="flex flex-col w-14 p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl">
            <span>{zeroPad(days)}</span>
          </span>
          hari
        </div> 
        <div className="flex flex-col w-14 p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl">
            <span>{zeroPad(hours)}</span>
          </span>
          jam
        </div> 
        <div className="flex flex-col w-14 p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl">
            <span>{zeroPad(minutes)}</span>
          </span>
          menit
        </div> 
        <div className="flex flex-col w-14 p-2 bg-neutral rounded-box text-neutral-content">
          <span className="font-mono text-3xl">
            <span>{zeroPad(seconds)}</span>
          </span>
          detik
        </div>
      </div>
    );
  }
};

const Pembuka = ({data}) => {
  return(
    <>
      <div className="grid place-items-center text-center min-h-screen px-2">
        <div className="card md:w-96 w-full py-3 glass shadow-lg my-5">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div className="card-body items-center text-center">
                <h1 className="text-lg font-mono mb-5">Undangan Pernikahan</h1>
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
                <p className="text-sm mt-3">
                  Dengan Memohon Rahmat dan Ridlo Allah SWT.<br/>
                  Kami Mengharapkan Do'a Restu dan Kehadiran Anda.
                </p>
                <h2 className="text-lg underline decoration-wavy decoration-primary">{data.acara.hari}, {data.acara.tanggal}</h2>
                <h2 className="text-lg">Simpan Event:</h2>
                <div className="flex-wrap items-center justify-center gap-2 mx-auto mb-3">
                  <AddToCalendarButton className="z-50"
                    name="Pernikahan Ismail & Titik"
                    startDate="2023-10-21"
                    startTime="12:30"
                    endTime="15:00"
                    timeZone="Asia/Jakarta"
                    language="id"
                    location="LES ABAMA DAN PRISMA KEBOJONGAN, 4GP3+VJM, Kebukuran, Kebojongan, Kec. Comal, Kabupaten Pemalang, Jawa Tengah 52363, Indonesia"
                    description="Pernikahan Iman Ismail dan Titik Marini:[br]→ [url]https://ismail-titik.vercel.app"
                    options="'Google','Apple','iCal','Outlook.com'"
                    buttonsList
                    hideTextLabelButton
                    buttonStyle="round"
                    lightMode="bodyScheme"
                  ></AddToCalendarButton>
                </div>
                <Countdown 
                  date={data.acara.timestamp}
                  zeroPadTime={2} 
                  zeroPadDays={2} 
                  renderer={renderer}
                >
                  <Completionist />
                </Countdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pembuka