import React, { useState } from 'react';
import { 
  ArrowLeft, ClipboardList, RotateCcw, Save, Sparkles, 
  ChevronDown, ChevronUp, Eye, EyeOff, GripVertical, Plus, Trash2, Check
} from 'lucide-react';

export default function SidebarEditor({ 
  data, 
  onChange, 
  onSave, 
  onReset, 
  onOpenRSVPs,
  onPublish
}) {
  const [openSections, setOpenSections] = useState({ hero: true });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isHidden = (id) => data.hiddenSections?.includes(id);

  const toggleHideSection = (id, e) => {
    e.stopPropagation();
    const current = data.hiddenSections || [];
    const next = current.includes(id) 
      ? current.filter(x => x !== id)
      : [...current, id];
    onChange({ ...data, hiddenSections: next });
  };

  const handleCoupleChange = (field, val) => {
    onChange({
      ...data,
      couple: { ...data.couple, [field]: val }
    });
  };

  const handleVenueChange = (field, val) => {
    onChange({
      ...data,
      venue: { ...data.venue, [field]: val }
    });
  };

  const handleEventChange = (index, field, val) => {
    const updatedEvents = [...data.events];
    updatedEvents[index] = { ...updatedEvents[index], [field]: val };
    onChange({ ...data, events: updatedEvents });
  };

  const addEvent = () => {
    const newEvent = {
      id: `event-${Date.now()}`,
      name: "New Ceremony",
      date: "7 February 2027",
      time: "7:00 PM",
      detail: "Celebration",
      location: data.venue?.name || "Venue Hall"
    };
    onChange({ ...data, events: [...data.events, newEvent] });
  };

  const removeEvent = (index) => {
    const updated = data.events.filter((_, i) => i !== index);
    onChange({ ...data, events: updated });
  };

  const handleSaveClick = () => {
    if (onSave) onSave();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  return (
    <aside className="w-full lg:w-[420px] shrink-0 border-r border-neutral-200 bg-white h-full overflow-y-auto p-5 space-y-6">
      {/* Header Bar */}
      <div className="space-y-3 border-b border-neutral-200 pb-4">
        <button 
          type="button" 
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Dashboard</span>
        </button>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h1 className="font-display text-xl font-bold tracking-tight text-neutral-900">
              Edit your site
            </h1>
            <p className="text-[11px] text-neutral-400">0 views</p>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onOpenRSVPs}
              className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50 shadow-sm"
            >
              <ClipboardList className="w-3.5 h-3.5 text-neutral-500" />
              <span>RSVPs</span>
            </button>

            <button
              onClick={onReset}
              className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-50 shadow-sm"
              title="Reset to default values"
            >
              <RotateCcw className="w-3.5 h-3.5 text-neutral-500" />
              <span>Reset</span>
            </button>

            <button
              onClick={handleSaveClick}
              className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-medium shadow-sm transition-all ${
                saveSuccess 
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                  : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {saveSuccess ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Save className="w-3.5 h-3.5 text-neutral-500" />}
              <span>{saveSuccess ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={onPublish}
              className="inline-flex items-center gap-1 rounded-md bg-[#3f4020] px-3 py-1 text-xs font-semibold text-amber-100 shadow-md hover:bg-[#5a5b28] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Publish</span>
            </button>
          </div>
        </div>
      </div>

      {/* Guide Note */}
      <div className="rounded-lg bg-[#fbf8f1] border border-[#d9d1bf]/60 p-3 text-xs text-[#6b675e] leading-relaxed">
        <strong className="text-[#3f4020]">Page sections:</strong> Click a block to edit its content. The eye icon shows or hides it for guests — the hero always stays first.
      </div>

      {/* Accordion Blocks */}
      <div className="space-y-3">
        
        {/* ================= 1. HERO BLOCK ================= */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          <div 
            onClick={() => toggleSection('hero')}
            className="flex items-center justify-between px-3.5 py-2.5 cursor-pointer bg-neutral-50/70 hover:bg-neutral-100/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#858640]"></span>
              <span className="text-sm font-semibold text-neutral-800">Hero (Header)</span>
              <span className="text-[10px] text-neutral-400 bg-neutral-200/60 px-1.5 py-0.5 rounded">Always shown</span>
            </div>
            {openSections.hero ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
          </div>

          {openSections.hero && (
            <div className="p-4 space-y-3.5 border-t border-neutral-100 bg-white text-xs">
              <div>
                <label className="block font-medium text-neutral-700 mb-1">Bride's Name</label>
                <input
                  type="text"
                  value={data.couple?.brideName || ''}
                  onChange={(e) => handleCoupleChange('brideName', e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Groom's Name</label>
                <input
                  type="text"
                  value={data.couple?.groomName || ''}
                  onChange={(e) => handleCoupleChange('groomName', e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="groomFirstToggle"
                  checked={data.couple?.nameOrder === 'groom-first'}
                  onChange={(e) => handleCoupleChange('nameOrder', e.target.checked ? 'groom-first' : 'bride-first')}
                  className="rounded border-neutral-300 text-[#858640] focus:ring-[#858640]"
                />
                <label htmlFor="groomFirstToggle" className="text-xs text-neutral-600 cursor-pointer">
                  Show groom's name first in hero and share title
                </label>
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Ceremony / Subtitle</label>
                <input
                  type="text"
                  value={data.couple?.occasion || 'Nikah'}
                  onChange={(e) => handleCoupleChange('occasion', e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Opening Line</label>
                <input
                  type="text"
                  value={data.couple?.openingLine || 'Together with our families'}
                  onChange={(e) => handleCoupleChange('openingLine', e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Wedding Hashtag</label>
                <input
                  type="text"
                  value={data.couple?.hashtag || ''}
                  onChange={(e) => handleCoupleChange('hashtag', e.target.value)}
                  placeholder="#NehaWedsSohail"
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-medium text-neutral-700 mb-1">Ceremony Starts</label>
                  <input
                    type="text"
                    value={data.ceremonyStart || '6:30 PM'}
                    onChange={(e) => onChange({ ...data, ceremonyStart: e.target.value })}
                    className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-medium text-neutral-700 mb-1">Ceremony Ends</label>
                  <input
                    type="text"
                    value={data.ceremonyEnd || '11:30 PM'}
                    onChange={(e) => onChange({ ...data, ceremonyEnd: e.target.value })}
                    className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ================= 2. SCRATCH & REVEAL ================= */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          <div 
            onClick={() => toggleSection('scratch')}
            className="flex items-center justify-between px-3.5 py-2.5 cursor-pointer bg-neutral-50/70 hover:bg-neutral-100/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <GripVertical className="w-3.5 h-3.5 text-neutral-400 cursor-grab" />
              <span className="text-sm font-semibold text-neutral-800">Scratch & Reveal</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                type="button" 
                onClick={(e) => toggleHideSection('scratch', e)}
                className="text-neutral-400 hover:text-neutral-800"
                title={isHidden('scratch') ? "Section hidden - click to show" : "Section visible - click to hide"}
              >
                {isHidden('scratch') ? <EyeOff className="w-4 h-4 text-red-500" /> : <Eye className="w-4 h-4" />}
              </button>
              {openSections.scratch ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
            </div>
          </div>

          {openSections.scratch && (
            <div className="p-4 space-y-3 border-t border-neutral-100 bg-white text-xs">
              <p className="text-neutral-500">
                Interactive scratch canvas revealing date and blessings when rubbed by guests.
              </p>
            </div>
          )}
        </div>

        {/* ================= 3. OUR INVITATION NOTE ================= */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          <div 
            onClick={() => toggleSection('story')}
            className="flex items-center justify-between px-3.5 py-2.5 cursor-pointer bg-neutral-50/70 hover:bg-neutral-100/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <GripVertical className="w-3.5 h-3.5 text-neutral-400 cursor-grab" />
              <span className="text-sm font-semibold text-neutral-800">Our Invitation (Flip Note)</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                type="button" 
                onClick={(e) => toggleHideSection('our-invitation', e)}
                className="text-neutral-400 hover:text-neutral-800"
                title={isHidden('our-invitation') ? "Section hidden" : "Section visible"}
              >
                {isHidden('our-invitation') ? <EyeOff className="w-4 h-4 text-red-500" /> : <Eye className="w-4 h-4" />}
              </button>
              {openSections.story ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
            </div>
          </div>

          {openSections.story && (
            <div className="p-4 space-y-3 border-t border-neutral-100 bg-white text-xs">
              <div>
                <label className="block font-medium text-neutral-700 mb-1">Personal Note / Message</label>
                <textarea
                  rows={4}
                  value={data.story?.message || ''}
                  onChange={(e) => onChange({ ...data, story: { ...data.story, message: e.target.value } })}
                  className="w-full rounded-md border border-neutral-300 p-2 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* ================= 4. WEDDING EVENTS ================= */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          <div 
            onClick={() => toggleSection('events')}
            className="flex items-center justify-between px-3.5 py-2.5 cursor-pointer bg-neutral-50/70 hover:bg-neutral-100/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <GripVertical className="w-3.5 h-3.5 text-neutral-400 cursor-grab" />
              <span className="text-sm font-semibold text-neutral-800">Wedding Events ({data.events?.length || 0})</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                type="button" 
                onClick={(e) => toggleHideSection('events', e)}
                className="text-neutral-400 hover:text-neutral-800"
                title={isHidden('events') ? "Section hidden" : "Section visible"}
              >
                {isHidden('events') ? <EyeOff className="w-4 h-4 text-red-500" /> : <Eye className="w-4 h-4" />}
              </button>
              {openSections.events ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
            </div>
          </div>

          {openSections.events && (
            <div className="p-4 space-y-4 border-t border-neutral-100 bg-white text-xs">
              {data.events?.map((evt, idx) => (
                <div key={evt.id || idx} className="rounded-lg border border-neutral-200 p-3 bg-neutral-50/50 space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-neutral-700">Event #{idx + 1}</span>
                    <button 
                      type="button" 
                      onClick={() => removeEvent(idx)}
                      className="text-neutral-400 hover:text-red-600 transition-colors"
                      title="Delete event"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-neutral-500">Event Name</label>
                      <input
                        type="text"
                        value={evt.name}
                        onChange={(e) => handleEventChange(idx, 'name', e.target.value)}
                        className="w-full rounded border border-neutral-300 px-2 py-1 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-500">Subtitle / Detail</label>
                      <input
                        type="text"
                        value={evt.detail}
                        onChange={(e) => handleEventChange(idx, 'detail', e.target.value)}
                        className="w-full rounded border border-neutral-300 px-2 py-1 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-neutral-500">Date</label>
                      <input
                        type="text"
                        value={evt.date}
                        onChange={(e) => handleEventChange(idx, 'date', e.target.value)}
                        className="w-full rounded border border-neutral-300 px-2 py-1 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-500">Time</label>
                      <input
                        type="text"
                        value={evt.time}
                        onChange={(e) => handleEventChange(idx, 'time', e.target.value)}
                        className="w-full rounded border border-neutral-300 px-2 py-1 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-neutral-500">Venue / Location</label>
                    <input
                      type="text"
                      value={evt.location}
                      onChange={(e) => handleEventChange(idx, 'location', e.target.value)}
                      className="w-full rounded border border-neutral-300 px-2 py-1 text-xs"
                    />
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addEvent}
                className="w-full py-2 border border-dashed border-[#858640] rounded-lg text-xs font-semibold text-[#858640] hover:bg-[#858640]/5 transition-colors flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Event Ceremony</span>
              </button>
            </div>
          )}
        </div>

        {/* ================= 5. THE VENUE ================= */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          <div 
            onClick={() => toggleSection('venue')}
            className="flex items-center justify-between px-3.5 py-2.5 cursor-pointer bg-neutral-50/70 hover:bg-neutral-100/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <GripVertical className="w-3.5 h-3.5 text-neutral-400 cursor-grab" />
              <span className="text-sm font-semibold text-neutral-800">The Venue</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                type="button" 
                onClick={(e) => toggleHideSection('venue', e)}
                className="text-neutral-400 hover:text-neutral-800"
                title={isHidden('venue') ? "Section hidden" : "Section visible"}
              >
                {isHidden('venue') ? <EyeOff className="w-4 h-4 text-red-500" /> : <Eye className="w-4 h-4" />}
              </button>
              {openSections.venue ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
            </div>
          </div>

          {openSections.venue && (
            <div className="p-4 space-y-3 border-t border-neutral-100 bg-white text-xs">
              <div>
                <label className="block font-medium text-neutral-700 mb-1">Venue Name</label>
                <input
                  type="text"
                  value={data.venue?.name || ''}
                  onChange={(e) => handleVenueChange('name', e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Full Address</label>
                <textarea
                  rows={2}
                  value={data.venue?.address || ''}
                  onChange={(e) => handleVenueChange('address', e.target.value)}
                  className="w-full rounded-md border border-neutral-300 p-2 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Google Maps Link</label>
                <input
                  type="url"
                  value={data.venue?.mapsUrl || ''}
                  onChange={(e) => handleVenueChange('mapsUrl', e.target.value)}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900 focus:border-[#858640] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* ================= 6. RSVP SETTINGS ================= */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
          <div 
            onClick={() => toggleSection('rsvp')}
            className="flex items-center justify-between px-3.5 py-2.5 cursor-pointer bg-neutral-50/70 hover:bg-neutral-100/70 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-semibold text-neutral-800">RSVP Settings</span>
            </div>
            {openSections.rsvp ? <ChevronUp className="w-4 h-4 text-neutral-400" /> : <ChevronDown className="w-4 h-4 text-neutral-400" />}
          </div>

          {openSections.rsvp && (
            <div className="p-4 space-y-3 border-t border-neutral-100 bg-white text-xs">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rsvpEnableToggle"
                  checked={data.rsvp?.enabled ?? true}
                  onChange={(e) => onChange({ ...data, rsvp: { ...data.rsvp, enabled: e.target.checked } })}
                  className="rounded border-neutral-300 text-[#858640]"
                />
                <label htmlFor="rsvpEnableToggle" className="font-medium text-neutral-700 cursor-pointer">
                  Enable guest RSVP form
                </label>
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">RSVP Deadline Date</label>
                <input
                  type="text"
                  value={data.rsvp?.deadline || '20 January 2027'}
                  onChange={(e) => onChange({ ...data, rsvp: { ...data.rsvp, deadline: e.target.value } })}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 mb-1">Custom Message</label>
                <input
                  type="text"
                  value={data.rsvp?.customMessage || ''}
                  onChange={(e) => onChange({ ...data, rsvp: { ...data.rsvp, customMessage: e.target.value } })}
                  className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-900"
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </aside>
  );
}
