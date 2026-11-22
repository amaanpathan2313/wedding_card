import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(targetDate || "2026-12-26T18:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="my-10 text-center px-4">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#3f4020] tracking-wide mb-6">
        Counting Down
      </h2>

      <div className="grid grid-cols-4 gap-2.5 max-w-xs mx-auto">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((unit, idx) => (
          <div 
            key={idx}
            className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-[#d9d1bf] bg-white/80 shadow-sm backdrop-blur-sm"
          >
            <span className="font-date text-xl md:text-2xl font-bold text-[#686a31]">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#77736b] mt-0.5 font-medium">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
