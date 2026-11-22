import React, { useState } from 'react';
import ZaytoonInvitation from './components/ZaytoonInvitation';
import { zaytoonDemoData } from './data/defaultData';

export default function App() {
  const [data] = useState(zaytoonDemoData);

  return (
    <div className="w-full min-h-screen bg-[#fbf8f1]">
      <ZaytoonInvitation data={data} />
    </div>
  );
}
