import React from 'react';
import { Calendar, Clock, MapPin, Download } from 'lucide-react';

export default function EventsTimeline({ events, couple }) {
  const downloadICS = (event) => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//SaveOurDate//Wedding Invitation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${couple.brideName} & ${couple.groomName} — ${event.name}`,
      `DESCRIPTION:${event.detail} at ${event.location}`,
      `LOCATION:${event.location}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.name}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="my-14 px-4 max-w-lg mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#3f4020] tracking-wide">
          Wedding Events
        </h2>
        <div className="w-16 h-0.5 bg-[#b3a05e] mx-auto mt-2 opacity-60"></div>
      </div>

      <div className="space-y-6">
        {events.map((evt, idx) => (
          <div 
            key={evt.id || idx}
            className="rounded-xl border border-[#d9d1bf] bg-white/90 p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#858640]"></div>
            
            <div className="flex items-start justify-between gap-3 mb-2">
              <div>
                <h3 className="font-display text-xl font-bold text-[#3f4020]">
                  {evt.name}
                </h3>
                <span className="inline-block text-xs uppercase tracking-wider text-[#b3a05e] font-semibold">
                  {evt.detail}
                </span>
              </div>

              <button
                onClick={() => downloadICS(evt)}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-[#686a31] hover:text-[#3f4020] border border-[#d9d1bf] rounded-full px-2.5 py-1 bg-[#fbf8f1] transition-colors"
                title="Add to Google / Apple Calendar"
              >
                <Download className="w-3 h-3" />
                <span>Calendar</span>
              </button>
            </div>

            <div className="space-y-1.5 text-xs text-[#6b675e] mt-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#858640] shrink-0" />
                <span className="font-medium text-[#3f4020]">{evt.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#858640] shrink-0" />
                <span>{evt.time}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#858640] shrink-0 mt-0.5" />
                <span>{evt.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
