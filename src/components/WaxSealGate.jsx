import React, { useState } from 'react';

export default function WaxSealGate({ couple, onOpen, isOpen }) {
  const [animating, setAnimating] = useState(false);

  const handleBreakSeal = () => {
    if (isOpen || animating) return;
    setAnimating(true);
    setTimeout(() => {
      onOpen();
      setAnimating(false);
    }, 700);
  };

  if (isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity duration-700 ${animating ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative flex flex-col items-center justify-center text-center px-4 max-w-sm mx-auto">
        {/* Glow Effects */}
        <div className="relative mb-6">
          <div className="absolute -inset-6 rounded-full bg-amber-400/20 blur-2xl animate-breathe" />
          <div className="absolute -inset-10 rounded-full border border-amber-300/30 animate-ping opacity-30" />
          
          {/* Wax Seal Button */}
          <button
            onClick={handleBreakSeal}
            className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 ${animating ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}
            aria-label="Break the seal to open the invitation"
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#c8b26e] via-[#858640] to-[#5a5b28] p-1.5 shadow-2xl flex items-center justify-center border-2 border-amber-200/50">
              <div className="w-full h-full rounded-full border border-dashed border-amber-100/60 flex flex-col items-center justify-center bg-[#686a31]/30 backdrop-blur-sm">
                <span className="font-serif text-2xl font-bold tracking-widest text-amber-100">
                  {couple.brideName?.[0] || 'N'} & {couple.groomName?.[0] || 'S'}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-amber-200/80 mt-0.5">
                  Save Our Date
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Tap Prompt */}
        <p className="font-serif text-amber-200/90 text-sm tracking-[0.25em] uppercase font-medium animate-pulse">
          Tap seal to open invitation
        </p>
        <p className="text-xs text-amber-100/60 mt-1 font-light">
          {couple.brideName} & {couple.groomName}
        </p>
      </div>
    </div>
  );
}
