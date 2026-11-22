import React from 'react';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';

export default function VenueCard({ venue }) {
  const [copied, setCopied] = React.useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(`${venue.name}, ${venue.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-12 px-4 max-w-lg mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#3f4020] tracking-wide mb-2">
        The Venue
      </h2>
      <div className="w-16 h-0.5 bg-[#b3a05e] mx-auto mb-6 opacity-60"></div>

      <div className="rounded-2xl border border-[#d9d1bf] bg-white p-6 shadow-md text-center relative overflow-hidden">
        <div className="w-10 h-10 rounded-full bg-[#f1e9da] text-[#858640] flex items-center justify-center mx-auto mb-3">
          <MapPin className="w-5 h-5" />
        </div>

        <h3 className="font-display text-xl font-bold text-[#3f4020] mb-1">
          {venue.name || "Wedding Venue"}
        </h3>
        <p className="text-sm text-[#6b675e] leading-relaxed max-w-sm mx-auto mb-5">
          {venue.address}
        </p>

        {venue.note && (
          <p className="text-xs text-[#858640] italic mb-4">
            Note: {venue.note}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#d9d1bf]/60">
          <a
            href={venue.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(venue.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3f4020] text-amber-100 px-4 py-2 text-xs font-semibold shadow hover:bg-[#5a5b28] transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>

          <button
            onClick={copyAddress}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#d9d1bf] bg-[#fbf8f1] text-[#514f49] px-3.5 py-2 text-xs font-medium hover:bg-[#f1e9da] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied!" : "Copy Address"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
