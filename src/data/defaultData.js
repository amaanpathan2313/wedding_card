// Wedding invitation data for Neha & Sayed Azhar (Sohail)
export const zaytoonDemoData = {
  templateKey: "zaytoon",
  slug: "zaytoon",
  couple: {
    brideName: "Neha",
    brideParents: "(D/o. Mr. Firozkhan Khurshid Pathan)",
    groomName: "Sayed Azhar (Sohail)",
    groomParents: "(S/o. Mr. Sayed Mazher Hussaini, Neral)",
    hashtag: "#NehaWedsSohail",
    nameOrder: "bride-first"
  },
  weddingDateTime: "2026-12-26T18:30:00+05:30",
  ceremonyStart: "6:30 PM",
  rsvpDeadline: "20 December 2026",
  countdownLabel: "Nikah",
  heroEyebrow: "TOGETHER WITH OUR FAMILIES",
  heroOccasion: "Nikah",
  venue: {
    name: "Samar Park Building",
    address: "Behind New City Hospital, At Parpund Village, Palaspa phata, Old Mumbai - Pune Highway, Panvel 410221",
    city: "Panvel",
    state: "Maharashtra",
    mapsUrl: "https://maps.app.goo.gl/n3sYZW1SMs72EDMY9",
    note: "Valet parking available at venue entrance"
  },
  events: [
    {
      id: "nikah",
      name: "Nikah",
      detail: "The Ceremony",
      date: "26 December 2026",
      time: "6:30 PM",
      location: "Samar Park Building — Parpund goan, palaspa phata Panvel",
      mapsUrl: "https://maps.app.goo.gl/n3sYZW1SMs72EDMY9"
    }
  ],
  gallery: [
    {
      url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-hero.jpg",
      caption: "May Allah bless you both"
    },
    {
      url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",
      caption: "Neha & Sayed Azhar (Sohail) · December 26, 2026"
    },
    {
      url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",
      caption: "Samar Park Building, Panvel"
    }
  ],
  story: {
    greetingLine1: "Dear",
    greetingLine2: "Family & Friends",
    message: "By the grace of Allah, we joyfully invite you to be part of our Nikah celebrations. Your presence, prayers, and blessings would mean the world to us as we begin this new journey together."
  },
  hosts: {
    groomSide: {
      relation: "Bride's Father",
      person: "Firoz Pathan",
      subtitle: "",
      phone: "+91 8691978642"
    },
    brideSide: {
      relation: "Family Member",
      person: "Iqbal Khairat",
      subtitle: "",
      phone: "+91 9167496105"
    }
  },
  gifts: [
    {
      title: "Your Presence",
      text: "Your love, your laughter, and your prayers are gift enough for us."
    },
    {
      title: "Your Duas",
      text: "Please keep us in your prayers as we begin this new chapter, In Sha Allah."
    }
  ],
  footer: {
    message: "Thank you for being a part of our story."
  },
  rsvp: {
    enabled: false, // In the uploaded design only "VIEW EVENTS" is shown on the hero
    deadline: "20 December 2026",
    customMessage: "We have saved you a seat — kindly let us know if you can join us.",
    guestOptions: ["1", "2", "3", "4", "5+"],
    fields: {
      mobile: true,
      email: true,
      guestCount: true,
      message: true
    }
  },
  defaultBackground: {
    type: "video",
    url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16.mp4?v=2",
    frame: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16-frame.jpg"
  },
  heroBackground: {
    url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16.mp4?v=2",
    frame: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16-frame.jpg",
    responsive: {
      mobile: {
        url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/9.mp4?v=2",
        frame: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/9-frame.jpg"
      }
    }
  },
  music: {
    url: "/wedding_card_song.mp3"
  },
  hiddenSections: ["contact"],
  sectionOrder: [
    "scratchReveal",
    "envelop",
    "timeline",
    "countdown",
    "venue",
    "gifts",
    "hosts",
    "footer"
  ]
};

export const initialInvitationData = zaytoonDemoData;
export default zaytoonDemoData;
