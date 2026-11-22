// Authentic data for Zaytoon template matching saveourdate.in/templates/zaytoon/live
export const zaytoonDemoData = {
  templateKey: "zaytoon",
  slug: "zaytoon",
  couple: {
    brideName: "Sana",
    groomName: "Zaid",
    hashtag: "#ZaidWedsSana",
    nameOrder: "groom-first"
  },
  weddingDateTime: "2027-02-06T16:30:00+05:30",
  ceremonyStart: "4:30 PM",
  rsvpDeadline: "20 January 2027",
  countdownLabel: "Nikah",
  heroEyebrow: "Together with our families",
  heroOccasion: "Nikah & Walima",
  venue: {
    name: "Sultana Gardens & Banquet",
    address: "22 Nizam Colony, Banjara Hills, Hyderabad, Telangana",
    city: "Hyderabad",
    state: "Telangana",
    mapsUrl: "https://maps.google.com/?q=Sultana+Gardens+Banquet+Hyderabad",
    note: "Valet parking available at the main gate"
  },
  events: [
    {
      id: "mangni",
      name: "Mangni",
      detail: "Engagement",
      date: "4 February 2027",
      time: "6:30 PM",
      location: "Khan Residence, Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Khan+Residence+Hyderabad"
    },
    {
      id: "mehendi",
      name: "Mehendi",
      detail: "Henna Evening",
      date: "5 February 2027",
      time: "5:30 PM",
      location: "Sultana Gardens & Banquet — Lawn",
      mapsUrl: "https://maps.google.com/?q=Sultana+Gardens+Banquet+Hyderabad"
    },
    {
      id: "nikah",
      name: "Nikah",
      detail: "The Ceremony",
      date: "6 February 2027",
      time: "4:30 PM",
      location: "Sultana Gardens & Banquet — Main Hall",
      mapsUrl: "https://maps.google.com/?q=Sultana+Gardens+Banquet+Hyderabad"
    },
    {
      id: "walima",
      name: "Walima",
      detail: "Reception",
      date: "6 February 2027",
      time: "8:30 PM",
      location: "Sultana Gardens & Banquet — Grand Lawn",
      mapsUrl: "https://maps.google.com/?q=Sultana+Gardens+Banquet+Hyderabad"
    }
  ],
  gallery: [
    {
      url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-hero.jpg",
      caption: "May Allah bless you both"
    },
    {
      url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",
      caption: "Zaid & Sana · February 6, 2027"
    },
    {
      url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",
      caption: "Sultana Gardens & Banquet"
    }
  ],
  story: {
    greetingLine1: "Dear",
    greetingLine2: "Family & Friends",
    message: "By the grace of Allah, we joyfully invite you to be part of our Nikah and Walima celebrations. Your presence, prayers, and blessings would mean the world to us as we begin this new journey together."
  },
  hosts: {
    groomSide: {
      relation: "Groom's Family",
      person: "Zaid Ahmed Qureshi",
      subtitle: "S/o Mr. Farhan Qureshi & Mrs. Nilofer Qureshi",
      phone: "+91 98123 45678"
    },
    brideSide: {
      relation: "Bride's Family",
      person: "Sana Fatima Ali",
      subtitle: "D/o Mr. Imtiaz Ali & Mrs. Shabana Ali",
      phone: "+91 98765 12345"
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
    enabled: true,
    deadline: "20 January 2027",
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
    url: "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/music.mp3"
  },
  hiddenSections: [],
  sectionOrder: [
    "scratchReveal",
    "envelop",
    "timeline",
    "countdown",
    "venue",
    "contact",
    "gifts",
    "hosts",
    "footer"
  ]
};

export const initialInvitationData = zaytoonDemoData;
export default zaytoonDemoData;
