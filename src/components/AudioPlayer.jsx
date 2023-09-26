import React, {useState, useEffect} from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying]=useState(false);
  const toggle = ()=> setPlaying(!playing);
  useEffect(()=>{
    playing ? audio.play() : audio.pause();
  }, [playing]);
  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
}

export default function AudioPlayer(url) {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
}