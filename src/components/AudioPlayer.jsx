import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer({ musicUrl, autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay was prevented by browser policy", err);
      });
    }
  }, [autoPlayTrigger]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#3f4020]/90 text-amber-100 px-3.5 py-2.5 shadow-xl backdrop-blur-md border border-amber-300/30 transition-all hover:scale-105 active:scale-95"
        title={isPlaying ? "Mute music" : "Play music"}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-amber-300 animate-pulse" />
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-amber-300 animate-[pulse_0.6s_ease-in-out_infinite] h-2"></span>
              <span className="w-0.5 bg-amber-300 animate-[pulse_0.8s_ease-in-out_infinite] h-3"></span>
              <span className="w-0.5 bg-amber-300 animate-[pulse_0.5s_ease-in-out_infinite] h-1.5"></span>
            </div>
          </>
        ) : (
          <VolumeX className="w-4 h-4 text-amber-200/70" />
        )}
      </button>
    </>
  );
}
