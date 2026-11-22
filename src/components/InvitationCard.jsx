import React, { useState } from 'react';
import WaxSealGate from './WaxSealGate';
import AudioPlayer from './AudioPlayer';
import ScratchCard from './ScratchCard';
import FlipNote from './FlipNote';
import CountdownTimer from './CountdownTimer';
import EventsTimeline from './EventsTimeline';
import VenueCard from './VenueCard';
import RSVPModal from './RSVPModal';
import { Heart, Sparkles, Phone, MessageCircle } from 'lucide-react';

export default function InvitationCard({ data, isPreview = false, onRSVPSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  const couple = data.couple || {};
  const isGroomFirst = couple.nameOrder === 'groom-first';
  const firstName = isGroomFirst ? couple.groomName : couple.brideName;
  const secondName = isGroomFirst ? couple.brideName : couple.groomName;

  const hiddenSections = new Set(data.hiddenSections || []);

  const scrollToEvents = () => {
    const el = document.getElementById('events-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="tmpl-zaytoon min-h-screen bg-[#fbf8f1] text-[#514f49] font-body relative overflow-x-hidden selection:bg-[#d7c995] selection:text-[#3f4020]">
      {/* Wax Seal Gate on initial load */}
      <WaxSealGate 
        couple={couple} 
        isOpen={isOpen} 
        onOpen={() => setIsOpen(true)} 
      />

      {/* Background Audio */}
      <AudioPlayer 
        musicUrl={data.musicUrl} 
        autoPlayTrigger={isOpen} 
      />

      {/* RSVP Modal */}
      <RSVPModal
        isOpen={isRSVPOpen}
        onClose={() => setIsRSVPOpen(false)}
        couple={couple}
        onSubmitRSVP={onRSVPSubmit}
      />

      {/* Main Content Area */}
      <main className="max-w-[540px] mx-auto bg-[#fffdf8] shadow-2xl min-h-screen border-x border-[#d9d1bf]/50 relative pb-16">
        
        {/* ================= HERO SECTION ================= */}
        <header className="relative min-h-[92vh] flex flex-col items-center justify-between p-6 text-center overflow-hidden bg-[#2d2e16] text-[#fffdf8]">
          {/* Background Video / Picture overlay */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
              poster={data.assets?.mobileFrame}
            >
              <source src={data.assets?.mobileVideo} type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

          {/* Top Monogram Seal */}
          <div className="relative z-10 pt-8 animate-fade-in">
            <div className="w-16 h-16 rounded-full border border-amber-200/40 bg-black/30 backdrop-blur-sm flex items-center justify-center mx-auto shadow-lg">
              <span className="font-serif text-xl tracking-widest text-amber-200 font-bold">
                {couple.brideName?.[0]} & {couple.groomName?.[0]}
              </span>
            </div>
          </div>

          {/* Central Hero Typography */}
          <div className="relative z-10 my-auto py-8 space-y-4">
            {/* Arabic Bismillah */}
            <p className="font-arabic text-2xl md:text-3xl text-amber-200/90 tracking-wide font-normal">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <p className="font-serif text-xs uppercase tracking-[0.3em] text-amber-100/80 font-medium">
              {couple.openingLine || "Together with our families"}
            </p>

            <p className="font-script text-2xl md:text-3xl text-amber-200">
              We invite you to celebrate our
            </p>

            {/* Couple Names */}
            <div className="py-2">
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-wide text-white leading-tight">
                {firstName}
              </h1>
              <span className="font-script text-3xl md:text-4xl text-amber-300 block my-1">
                &
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-wide text-white leading-tight">
                {secondName}
              </h1>
            </div>

            {/* Occasion / Ceremony */}
            <div className="inline-block border-y border-amber-200/40 py-1.5 px-6 my-2">
              <p className="font-serif text-sm md:text-base tracking-[0.25em] uppercase text-amber-100 font-medium">
                {couple.occasion || "Nikah"}
              </p>
            </div>

            {/* Date & Location */}
            <p className="font-date text-xs tracking-widest uppercase text-amber-200/90 font-medium pt-2">
              Saturday • December 26, 2026 • {data.venue?.city || "Panvel"}
            </p>

            {/* Hashtag */}
            {couple.hashtag && (
              <p className="text-xs text-amber-300/80 font-medium tracking-wider">
                {couple.hashtag}
              </p>
            )}
          </div>

          {/* Bottom CTA to Scroll */}
          <div className="relative z-10 pb-6">
            <button
              onClick={scrollToEvents}
              className="inline-flex items-center gap-2 border border-amber-300/50 bg-black/40 backdrop-blur-sm text-amber-200 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-amber-400 hover:text-black transition-all shadow-lg active:scale-95"
            >
              <span>View Events</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* ================= SCRATCH REVEAL ================= */}
        {!hiddenSections.has('scratch') && (
          <section className="py-4">
            <ScratchCard 
              dateText="Saturday, December 26, 2026"
              blessingText="With the grace of Almighty Allah"
            />
          </section>
        )}

        {/* ================= OUR INVITATION NOTE (FLIP) ================= */}
        {!hiddenSections.has('our-invitation') && (
          <section className="py-2">
            <FlipNote story={data.story} couple={couple} />
          </section>
        )}

        {/* ================= WEDDING EVENTS TIMELINE ================= */}
        {!hiddenSections.has('events') && (
          <section id="events-section" className="py-4">
            <EventsTimeline events={data.events} couple={couple} />
          </section>
        )}

        {/* ================= COUNTDOWN TIMER ================= */}
        {!hiddenSections.has('countdown') && (
          <section className="py-4">
            <CountdownTimer targetDate={data.weddingDateTime} />
          </section>
        )}

        {/* ================= THE VENUE ================= */}
        {!hiddenSections.has('venue') && (
          <section className="py-4">
            <VenueCard venue={data.venue} />
          </section>
        )}

        {/* ================= YOUR BLESSINGS / GIFTS ================= */}
        {!hiddenSections.has('wishes') && data.gifts && (
          <section className="my-12 px-6 max-w-lg mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#3f4020] tracking-wide mb-2">
              Your Blessings
            </h2>
            <div className="w-16 h-0.5 bg-[#b3a05e] mx-auto mb-6 opacity-60"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.gifts.map((gift, idx) => (
                <div key={idx} className="rounded-xl border border-[#d9d1bf] bg-white p-5 shadow-sm text-center">
                  <div className="w-8 h-8 rounded-full bg-[#f1e9da] text-[#858640] flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#3f4020] mb-1">
                    {gift.title}
                  </h3>
                  <p className="text-xs text-[#6b675e] leading-relaxed">
                    {gift.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= HOSTS & CONTACT ================= */}
        {!hiddenSections.has('hosts') && data.hosts && (
          <section className="my-12 px-6 max-w-lg mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#3f4020] tracking-wide mb-2">
              Hosts & Contact
            </h2>
            <div className="w-16 h-0.5 bg-[#b3a05e] mx-auto mb-6 opacity-60"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.hosts.groomSide && (
                <div className="rounded-xl border border-[#d9d1bf] bg-white p-4 shadow-sm text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#b3a05e] font-semibold block mb-1">
                    {data.hosts.groomSide.relation}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#3f4020]">
                    {data.hosts.groomSide.person}
                  </h3>
                  {data.hosts.groomSide.phone && (
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <a
                        href={`tel:${data.hosts.groomSide.phone}`}
                        className="inline-flex items-center gap-1 rounded-full border border-[#d9d1bf] bg-[#fbf8f1] px-3 py-1 text-xs text-[#3f4020] hover:bg-[#f1e9da]"
                      >
                        <Phone className="w-3 h-3 text-[#858640]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${data.hosts.groomSide.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs text-emerald-800 hover:bg-emerald-100"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {data.hosts.brideSide && (
                <div className="rounded-xl border border-[#d9d1bf] bg-white p-4 shadow-sm text-center">
                  <span className="text-[10px] uppercase tracking-wider text-[#b3a05e] font-semibold block mb-1">
                    {data.hosts.brideSide.relation}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#3f4020]">
                    {data.hosts.brideSide.person}
                  </h3>
                  {data.hosts.brideSide.subtitle && (
                    <p className="text-[11px] text-[#77736b] mt-0.5">
                      {data.hosts.brideSide.subtitle}
                    </p>
                  )}
                  {data.hosts.brideSide.phone && (
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <a
                        href={`tel:${data.hosts.brideSide.phone}`}
                        className="inline-flex items-center gap-1 rounded-full border border-[#d9d1bf] bg-[#fbf8f1] px-3 py-1 text-xs text-[#3f4020] hover:bg-[#f1e9da]"
                      >
                        <Phone className="w-3 h-3 text-[#858640]" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${data.hosts.brideSide.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs text-emerald-800 hover:bg-emerald-100"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ================= RSVP CTA SECTION ================= */}
        {data.rsvp?.enabled && (
          <section className="my-12 px-6 max-w-lg mx-auto text-center">
            <div className="rounded-2xl border-2 border-dashed border-[#b3a05e] bg-gradient-to-b from-[#fffdf8] to-[#f8f3e8] p-8 shadow-md">
              <h3 className="font-display text-2xl font-bold text-[#3f4020] mb-2">
                Will You Attend?
              </h3>
              <p className="text-xs text-[#6b675e] max-w-xs mx-auto mb-5 leading-relaxed">
                {data.rsvp.customMessage || "We have saved you a seat — kindly let us know if you can join us."}
              </p>
              <button
                onClick={() => setIsRSVPOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#3f4020] text-amber-100 px-6 py-3 text-sm font-semibold shadow-lg hover:bg-[#5a5b28] hover:scale-105 active:scale-95 transition-all"
              >
                <span>RSVP Now</span>
                <Sparkles className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-[#858640] mt-3 font-medium">
                Kindly respond by {data.rsvp.deadline}
              </p>
            </div>
          </section>
        )}

        {/* ================= FOOTER ================= */}
        <footer className="mt-16 pt-8 pb-12 text-center border-t border-[#d9d1bf]/60 px-4">
          <p className="font-serif text-sm italic text-[#77736b] mb-2">
            {data.footer?.message || "Thank you for being a part of our story."}
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#858640] font-semibold tracking-wider uppercase">
            <span>{couple.brideName}</span>
            <span>&</span>
            <span>{couple.groomName}</span>
          </div>
          <p className="text-[10px] text-neutral-400 mt-6 tracking-widest uppercase">
            Designed with SaveOurDate Style
          </p>
        </footer>

      </main>
    </div>
  );
}
