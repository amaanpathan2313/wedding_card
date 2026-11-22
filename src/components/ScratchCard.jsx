import React, { useRef, useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

export default function ScratchCard({ dateText, blessingText }) {
  const canvasRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Draw gold luxury scratch surface
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#cbb77d');
    gradient.addColorStop(0.3, '#ebdca9');
    gradient.addColorStop(0.6, '#9e8948');
    gradient.addColorStop(1, '#cbb77d');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Add subtle shimmer text
    ctx.fillStyle = '#5c4e20';
    ctx.font = '600 13px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ SCRATCH TO REVEAL DATE ✨', width / 2, height / 2);
  }, []);

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkScratchedPercentage();
  };

  const checkScratchedPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isScratched) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) transparentCount++;
    }

    const totalSampled = pixels.length / 16;
    if (transparentCount / totalSampled > 0.45) {
      setIsScratched(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#b3a05e', '#d7c995', '#686a31', '#ffffff']
      });
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto my-8 overflow-hidden rounded-xl border border-[#d9d1bf] bg-[#fbf8f1] p-6 shadow-md text-center">
      <div className="flex items-center justify-center gap-2 mb-3 text-[#b3a05e]">
        <Sparkles className="w-4 h-4" />
        <span className="font-serif text-xs tracking-widest uppercase font-semibold text-[#858640]">
          Scratch & Reveal
        </span>
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="relative w-full h-28 mx-auto rounded-lg overflow-hidden border border-[#d9d1bf]/60 shadow-inner flex items-center justify-center bg-white">
        {/* Hidden Content Beneath */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-3 select-none bg-gradient-to-b from-[#fffdf8] to-[#f8f3e8]">
          <p className="font-serif text-xs uppercase tracking-widest text-[#858640] mb-0.5">
            Save Our Date
          </p>
          <p className="font-serif text-base font-bold text-[#3f4020] tracking-wide">
            {dateText || 'Saturday, December 26, 2026'}
          </p>
          <p className="text-[11px] text-[#77736b] mt-1 italic font-serif">
            {blessingText || 'With the grace of Almighty Allah'}
          </p>
        </div>

        {/* Scratch Canvas Surface */}
        {!isScratched && (
          <canvas
            ref={canvasRef}
            width={320}
            height={112}
            className="absolute inset-0 w-full h-full cursor-pointer touch-none"
            onMouseDown={(e) => { isDrawing.current = true; scratch(e.clientX, e.clientY); }}
            onMouseMove={(e) => { if (isDrawing.current) scratch(e.clientX, e.clientY); }}
            onMouseUp={() => { isDrawing.current = false; }}
            onMouseLeave={() => { isDrawing.current = false; }}
            onTouchStart={(e) => {
              isDrawing.current = true;
              if (e.touches[0]) scratch(e.touches[0].clientX, e.touches[0].clientY);
            }}
            onTouchMove={(e) => {
              if (isDrawing.current && e.touches[0]) scratch(e.touches[0].clientX, e.touches[0].clientY);
            }}
            onTouchEnd={() => { isDrawing.current = false; }}
          />
        )}
      </div>

      <p className="text-[11px] text-[#77736b] mt-2.5 font-light">
        {isScratched ? "Date revealed! We look forward to celebrating with you." : "Drag finger or cursor across the card to scratch"}
      </p>
    </div>
  );
}
