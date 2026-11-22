import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function RSVPModal({ isOpen, onClose, couple, onSubmitRSVP }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes', // 'yes' | 'no'
    guestCount: 1,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (onSubmitRSVP) {
      onSubmitRSVP(formData);
    }

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#b3a05e', '#858640', '#3f4020', '#ffffff']
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl border border-[#d9d1bf] bg-[#fffdf8] p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Close RSVP form"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-display text-2xl font-bold text-[#3f4020]">
              Thank You!
            </h3>
            <p className="text-sm text-[#6b675e]">
              Your response has been saved. We are thrilled to celebrate with you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center pb-2 border-b border-[#d9d1bf]/60">
              <HeartHandshake className="w-8 h-8 text-[#858640] mx-auto mb-1" />
              <h3 className="font-display text-2xl font-semibold text-[#3f4020]">
                RSVP
              </h3>
              <p className="text-xs text-[#77736b] mt-0.5">
                Kindly respond to celebrate with {couple.brideName} & {couple.groomName}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#514f49] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Amaan Dev"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-[#d9d1bf] bg-white px-3.5 py-2 text-sm text-[#3f4020] placeholder:text-neutral-400 focus:border-[#858640] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#514f49] mb-1">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-[#d9d1bf] bg-white px-3.5 py-2 text-sm text-[#3f4020] placeholder:text-neutral-400 focus:border-[#858640] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#514f49] mb-1">
                Will you be attending?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'yes' })}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    formData.attending === 'yes'
                      ? 'border-[#858640] bg-[#858640] text-white shadow-sm'
                      : 'border-[#d9d1bf] bg-white text-[#514f49]'
                  }`}
                >
                  Joyfully Accept 🎉
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'no' })}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                    formData.attending === 'no'
                      ? 'border-[#ed8068] bg-[#ed8068] text-white shadow-sm'
                      : 'border-[#d9d1bf] bg-white text-[#514f49]'
                  }`}
                >
                  Regretfully Decline
                </button>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <div>
                <label className="block text-xs font-semibold text-[#514f49] mb-1">
                  Number of Guests Attending
                </label>
                <select
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                  className="w-full rounded-lg border border-[#d9d1bf] bg-white px-3.5 py-2 text-sm text-[#3f4020] focus:border-[#858640] focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#514f49] mb-1">
                Wishes / Message for Couple
              </label>
              <textarea
                rows={2}
                placeholder="Congratulations on your Nikah! Wishing you endless happiness..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-[#d9d1bf] bg-white px-3.5 py-2 text-sm text-[#3f4020] placeholder:text-neutral-400 focus:border-[#858640] focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#3f4020] text-amber-100 py-2.5 text-sm font-semibold shadow hover:bg-[#5a5b28] transition-colors mt-2"
            >
              <Send className="w-4 h-4" />
              <span>Send RSVP</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
