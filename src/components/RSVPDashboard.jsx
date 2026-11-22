import React from 'react';
import { ArrowLeft, Users, CheckCircle, XCircle, Download, UserPlus, MessageCircle, Phone } from 'lucide-react';

export default function RSVPDashboard({ 
  rsvps = [], 
  onBack, 
  onAddSample, 
  couple 
}) {
  const attendingList = rsvps.filter(r => r.attending === 'yes');
  const declinedList = rsvps.filter(r => r.attending === 'no');
  const totalGuestsAttending = attendingList.reduce((acc, curr) => acc + (Number(curr.guestCount) || 1), 0);

  const exportCSV = () => {
    const headers = ['Name', 'Phone', 'Attending', 'Guests Count', 'Message', 'Timestamp'];
    const rows = rsvps.map(r => [
      `"${r.name}"`,
      `"${r.phone || ''}"`,
      `"${r.attending}"`,
      r.guestCount || 1,
      `"${(r.message || '').replace(/"/g, '""')}"`,
      `"${r.timestamp || new Date().toLocaleDateString()}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `RSVPs_${couple.brideName}_${couple.groomName}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-5">
          <div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-neutral-900 mb-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Editor</span>
            </button>
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">
              RSVP Guest Management
            </h1>
            <p className="text-xs text-neutral-500 mt-1">
              Guest responses for {couple.brideName} & {couple.groomName}'s wedding celebrations
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onAddSample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs font-medium text-neutral-700 hover:bg-neutral-100 shadow-sm"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Add Sample RSVP</span>
            </button>

            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#3f4020] px-4 py-2 text-xs font-semibold text-amber-100 hover:bg-[#5a5b28] shadow transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export to CSV</span>
            </button>
          </div>
        </div>

        {/* Analytics KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-neutral-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Responses</span>
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-neutral-900">{rsvps.length}</p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-neutral-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Guests Attending</span>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="text-3xl font-bold text-emerald-600">{totalGuestsAttending}</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">{attendingList.length} invitations accepted</p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-neutral-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Declined</span>
              <XCircle className="w-4 h-4 text-rose-500" />
            </div>
            <p className="text-3xl font-bold text-rose-600">{declinedList.length}</p>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between text-neutral-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Acceptance Rate</span>
              <span className="text-xs font-bold text-[#858640]">Rate</span>
            </div>
            <p className="text-3xl font-bold text-neutral-900">
              {rsvps.length > 0 ? `${Math.round((attendingList.length / rsvps.length) * 100)}%` : '0%'}
            </p>
          </div>
        </div>

        {/* Responses Table */}
        <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
            <h2 className="font-semibold text-neutral-800 text-sm">
              Recent RSVP Submissions
            </h2>
            <span className="text-xs text-neutral-400">
              Updated live
            </span>
          </div>

          {rsvps.length === 0 ? (
            <div className="py-12 text-center text-neutral-400 text-sm">
              <p>No RSVP submissions received yet.</p>
              <button 
                onClick={onAddSample} 
                className="mt-2 text-xs text-[#858640] font-semibold underline hover:text-[#3f4020]"
              >
                Click here to add sample entries
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-neutral-50/80 text-neutral-500 border-b border-neutral-100 uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4 font-medium">Guest Name</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                    <th className="py-3 px-4 font-medium">Party Size</th>
                    <th className="py-3 px-4 font-medium">Contact</th>
                    <th className="py-3 px-4 font-medium">Wishes & Message</th>
                    <th className="py-3 px-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {rsvps.map((r, i) => (
                    <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="py-3 px-4 font-medium text-neutral-900">{r.name}</td>
                      <td className="py-3 px-4">
                        {r.attending === 'yes' ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[11px] font-semibold">
                            <CheckCircle className="w-3 h-3" />
                            <span>Attending</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 text-rose-700 px-2 py-0.5 text-[11px] font-semibold">
                            <XCircle className="w-3 h-3" />
                            <span>Declined</span>
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-neutral-700 font-medium">
                        {r.attending === 'yes' ? `${r.guestCount || 1} guest(s)` : '-'}
                      </td>
                      <td className="py-3 px-4 text-neutral-500">
                        {r.phone ? (
                          <div className="flex items-center gap-1.5">
                            <a href={`tel:${r.phone}`} title="Call">
                              <Phone className="w-3 h-3 hover:text-neutral-800" />
                            </a>
                            <a 
                              href={`https://wa.me/${r.phone.replace(/[^0-9]/g, '')}`} 
                              target="_blank" 
                              rel="noreferrer" 
                              title="WhatsApp"
                              className="text-emerald-600 hover:text-emerald-700"
                            >
                              <MessageCircle className="w-3 h-3" />
                            </a>
                            <span>{r.phone}</span>
                          </div>
                        ) : (
                          <span className="text-neutral-300">-</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-neutral-600 max-w-xs truncate italic">
                        {r.message || <span className="text-neutral-300">None</span>}
                      </td>
                      <td className="py-3 px-4 text-neutral-400">
                        {r.timestamp || 'Today'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
