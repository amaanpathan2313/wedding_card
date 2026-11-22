import React, { useState } from 'react';
import { Mail, RotateCw } from 'lucide-react';

export default function FlipNote({ story, couple }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto my-12 px-4">
      <div 
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative h-64 w-full cursor-pointer perspective-1000 group"
      >
        <div 
          className={`relative h-full w-full rounded-2xl shadow-lg transition-transform duration-700 preserve-3d border border-[#d9d1bf] ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Front of Envelope / Note */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#fffdf8] to-[#f8f3e8] p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-[#b3a05e]/40">
            <div className="w-12 h-12 rounded-full bg-[#f1e9da] flex items-center justify-center text-[#858640] mb-3 shadow-inner">
              <Mail className="w-6 h-6" />
            </div>
            <p className="font-serif text-2xl font-bold tracking-widest text-[#3f4020]">
              {couple.brideName?.[0]} & {couple.groomName?.[0]}
            </p>
            <p className="font-script text-xl text-[#b3a05e] my-1">
              With love
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#858640] font-semibold bg-[#f1e9da]/70 px-3.5 py-1.5 rounded-full border border-[#d9d1bf]">
              <RotateCw className="w-3.5 h-3.5 animate-spin" />
              <span>Tap to read our note</span>
            </div>
          </div>

          {/* Back of Note (Message Revealed) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-[#fffdf8] p-6 flex flex-col items-center justify-center text-center border border-[#b3a05e]/50 shadow-xl overflow-y-auto">
            <span className="text-4xl text-[#b3a05e]/60 font-serif leading-none select-none mb-1">“</span>
            <p className="font-body text-sm md:text-base text-[#514f49] leading-relaxed italic px-2">
              {story.message || "By the grace of Allah, we joyfully invite you to celebrate with us."}
            </p>
            <div className="mt-4 pt-3 border-t border-[#d9d1bf]/60 w-full text-center">
              <p className="text-[11px] uppercase tracking-widest text-[#858640] font-semibold">
                With love & prayers
              </p>
              <p className="font-serif text-sm font-bold text-[#3f4020] mt-0.5">
                {couple.brideName} & {couple.groomName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
