import React, { useState } from 'react';
import { X, Copy, Check, Share2, QrCode } from 'lucide-react';

export default function PublishModal({ isOpen, onClose, data }) {
  const [copied, setCopied] = useState(false);
  const inviteUrl = `${window.location.origin}/?preview=true`;

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappText = encodeURIComponent(
    `Wedding Invitation: You are warmly invited to celebrate the Nikah of ${data.couple?.brideName} & ${data.couple?.groomName}! View our digital card and RSVP here: ${inviteUrl}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl text-center space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors"
          aria-label="Close publish modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-amber-50 border border-amber-200 text-[#858640] flex items-center justify-center mx-auto shadow-inner">
          <Share2 className="w-6 h-6" />
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold text-neutral-900">
            Your Invitation is Ready!
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Share this personalized link with your family & friends on WhatsApp, SMS, or Social Media.
          </p>
        </div>

        {/* Link Box */}
        <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-left">
          <input
            type="text"
            readOnly
            value={inviteUrl}
            className="flex-1 bg-transparent text-xs text-neutral-700 outline-none font-mono truncate"
          />
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-neutral-800 transition-colors shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-2">
          <a
            href={`https://wa.me/?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white py-2.5 text-xs font-semibold shadow hover:bg-emerald-700 transition-colors"
          >
            <span>Share via WhatsApp</span>
          </a>

          <button
            onClick={() => {
              window.open(inviteUrl, '_blank');
              onClose();
            }}
            className="w-full flex items-center justify-center gap-1.5 rounded-xl border border-neutral-300 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
          >
            <span>Open Guest Invitation in New Tab</span>
          </button>
        </div>
      </div>
    </div>
  );
}
