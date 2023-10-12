import { useState, useEffect } from 'react'
import ReactTimeAgo from 'react-time-ago'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://akvlznzubtoxzjdqhlig.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdmx6bnp1YnRveHpqZHFobGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2MTUxOTgsImV4cCI6MjAxMTE5MTE5OH0.heCj3HDDYVUK386lXUp8sIFnAfncV7MreuAKEiOOrS4");

export default function BukuTamu() {
  const [bukutamu, setBukutamu] = useState([]);
  const [nama, setNama] = useState('');
  const [ucapan, setUcapan] = useState('');
  const [hadir, setHadir] = useState(1);
  const [errorMsg, setErrorMsg] = useState('');
  const [msg, setMsg] = useState('');

  const fetchAll = async () => {
    const { data, error } = await supabase.from('ucapan').select('*').order('created_at', { ascending: false })
    if (data) setBukutamu(data);
    if (error) setErrorMsg("Gagal mengambil data");
  };

  const addNew = async () => {
    var pesan = encodeURI(nama+":"+ucapan+" - "+hadir)
    console.log(text)
    fetch('https://api.telegram.org/bot6544179398:AAEgw19T4YZVyvnJvzireIFIRraZdAyWpqk/sendMessage?chat_id=-957974370&text='+pesan)
      .then(res => res.json())
    
    const { data, error } = await supabase
      .from('ucapan')
      .insert([
        { nama: nama, ucapan: ucapan, hadir: hadir }
      ])
      .select()

      setNama('');
      setUcapan('');
      setHadir(1);

    if (data) {
      // setBukutamu(values=>([...values, data]))
      fetchAll()
      // setIsAdded(true)
      setMsg("Pesan terkirim");
    }
    if (error) {
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    fetchAll();
    //console.log(bukutamu)
  }, []);

  // useEffect(() => {
  //   setIsAdded(false)
  // }, [isAdded]);

  return(
    <>
      <div className="grid place-items-center text-center px-2">
        <div className="card md:w-96 w-full py-3 bg-base-100 shadow-lg my-5">
          <div className="flex items-center justify-center">
            <div className="flex flex-col">
              <div className="card-body">
                <h1 className="text-xl underline decoration-wavy font-body font-bold my-5 mb-10">Ucapan ({bukutamu.length})</h1>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Nama?</span>
                  </label>
                  <input
                    type="text" 
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukan nama kamu" className="input input-bordered rounded-md w-full max-w-sm" />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Pesan?</span>
                  </label>
                  <textarea placeholder="tulis ucapan kamu disini..." className="textarea textarea-bordered rounded-md w-full max-w-sm" onChange={(e) => setUcapan(e.target.value)} value={ucapan} />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Kamu hadir kan?</span>
                  </label>
                  <select className="select select-bordered rounded-md w-full max-w-sm" value={hadir} onChange={(e) => setHadir(e.target.value)}>
                    <option value="1">Insya Allah Hadir</option>
                    <option value="0">Maaf, Belum bisa hadir</option>
                  </select>
                </div>
                <div className="">
                  <button className="btn btn-primary" onClick={addNew}>Kirim Ucapan</button>
                </div>
                <hr/>
                {bukutamu.length<1 ? (
                <span className="text-gray-300">Belum Ada Ucapan</span>
                ):(
                <div className="max-h-96 w-full overflow-y-scroll">
                {bukutamu.map((p) => (
                  <div className="chat chat-start my-2" key={p.id}>
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        { p.nama=="iman ismail" ? (
                        <img src='https://avatars.githubusercontent.com/u/6139348?v=4' />
                        ):(
                        <img src={`https://ui-avatars.com/api/?name=${p.nama}&background=random`} />
                        )}
                      </div>
                    </div>
                    <div className="chat-header">
                      {p.nama} 
                      <time className="text-xs opacity-50 pl-1">
                        {/* <ReactTimeAgo date={p.created_at} /> */}
                        <ReactTimeAgo date={Date.parse(p.created_at)} locale="id-ID" timeStyle="twitter"/>
                      </time>
                    </div>
                    <div className="chat-bubble text-left text-sm">{p.ucapan}</div>
                    { p.hadir===true ? (
                      <div className="chat-footer text-primary">
                        Insya Allah hadir
                      </div>
                    ):('')}
                  </div>
                ))}
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
