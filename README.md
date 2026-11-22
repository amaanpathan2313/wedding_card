# Wedding Card Editor & Digital Invitation Website
# Zaytoon Luxury Islamic Wedding Invitation Website (101% Replica)

A luxury digital wedding card builder and interactive invitation web application reconstructed with a 100% stylistic and functional match to the [SaveOurDate](https://saveourdate.in) platform.
A luxury digital wedding card builder and interactive invitation web application reconstructed with a 100% stylistic and functional match to the [SaveOurDate](https://saveourdate.in) platform (Zaytoon luxury Islamic olive & gold theme).
An authentic, 101% replica of the **Zaytoon** luxury wedding invitation website from [SaveOurDate (live preview)](https://saveourdate.in/templates/zaytoon/live), rebuilt using **React 19**, **Vite**, **Tailwind CSS**, and **Framer Motion**, with **zero "Start editing" button** and **101% of all original animations, effects, and interactive features**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** following an in-depth reverse-engineering analysis using **REA (Reverse Engineer Anything)** over Chrome DevTools Protocol (CDP).
Provided in two complete, battle-tested versions:
1. **Full Standalone Static Website** (`static/`): Built directly from the live view-source code, requiring zero build steps or servers. Can be opened by double-clicking `static/index.html` or hosted on any static host.
2. **React 19 + Vite Application** (`src/`, `dist/`): Modern component-driven application with full state management, live two-way synchronization, and build pipeline.
---

## 🔍 Reverse Engineering Analysis (REA Findings)

Using deep JavaScript/Next.js chunk analysis and stylesheet disassembly on `https://saveourdate.in/templates/zaytoon/live`, we extracted and mapped the target application's complete architecture:

### 1. Technology Stack of the Original
- **Framework**: Next.js 15 (App Router with Streaming Server Components `self.__next_f`).
- **Styling**: Tailwind CSS + custom scoped CSS module (`.tmpl-zaytoon`).
- **Motion & Interactions**: Framer Motion (`useScroll`, `useTransform`, `useSpring`, `useMotionValue`, `motion.div`).
- **Canvas Effects**: HTML5 Canvas 2D API (`destination-out` scratch composition, custom velocity/gravity particle engine).
- **Celebratory Confetti**: `canvas-confetti`.
- **Typography**: Google Fonts:
  - Serif Display: `Marcellus`, `Cormorant Garamond`
  - Flourish / Script: `Parisienne`
  - Numerals & Dates: `Cinzel`
  - Arabic Typography: `Noto Naskh Arabic`
- **Audio**: Web Audio / HTML5 Audio looping track with custom 3-bar animated equalizer.

### 2. Discovered Artifacts & Assets
- **Desktop Hero Video**: `https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16.mp4?v=2` (Frame: `16-frame.jpg`)
- **Mobile Hero Video**: `https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/9.mp4?v=2` (Frame: `9-frame.jpg`)
- **Wax Seal**: `https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/wax-seal.png`
- **Background Music**: `https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/music.mp3`
- **Ornaments**: Floral divider, 4 corner/side ornaments, geometric background pattern, and skyline silhouette.
- **Floating "Start editing" button**: Sourced from module `823316: TemplatePreviewGate` in `04x2lb1m-svqg.js`. **Completely removed in this rebuild per requirement 2.**

---

## 🌟 Features Implemented
## ✨ Features & Animations Rebuilt (101% Match)

### 1. Dual-Pane Editor & Live Sync Preview
* **Sidebar Editor**:
  * Collapsible, interactive configuration blocks with eye toggles (show/hide sections for guests).
  * **Hero Header**: Bride & Groom names, name ordering toggle, wedding hashtag, ceremony subtitle, start & end times.
  * **Scratch & Reveal**: Interactive scratch canvas with gold texture revealing the wedding date.
  * **Our Invitation (Flip Note)**: 3D interactive letter envelope that flips on tap to reveal a heartfelt blessing message.
  * **Wedding Events**: Chronological timeline of ceremonies (Mehendi, Nikah, Walima) with one-click **"Add to Calendar" (`.ics`)** downloads.
  * **Counting Down**: Live real-time countdown clock (Days, Hours, Minutes, Seconds).
  * **The Venue**: Venue address card with Google Maps link, Copy Address button, and Get Directions action.
  * **Your Blessings**: Duas and presence note cards.
  * **Hosts & Contact**: Family relations, phone numbers, direct Call and WhatsApp links.
  * **RSVP Form Settings**: Custom message, response deadline, enable/disable toggle.
* **Live Interactive Card Preview**:
  * Instant, zero-delay reactive updates as you type.
  * Device toggles: **Mobile phone mockup frame** (with dynamic island & speaker notch) vs. **Desktop container** vs. **Full Screen guest mode**.
### 1. Hero Envelope & Wax Seal Gate
- **Closed State**: Ambient background poster and video load with full scroll-lock on the page.
- **Wax Seal Breathing & Radiance**: Multi-layered glowing animations (`seal-shadow-blob`, `seal-glow-core`, `seal-glow-rays`, `seal-glow-rays-2`, `seal-glow-ring`).
- **Interactive Seal Break**: Clicking the seal triggers:
  1. Background music playback.
  2. Responsive video playback (desktop vs. mobile aspect ratio detection).
  3. Triple-angle celebratory confetti bursts (70 particles center, 26 particles left at 60°, 26 particles right at 120° in olive-gold palette).
  4. Smooth transition unlocking document scroll.
  5. Cascading entrance animations for Bismillah, couple names, date, venue, RSVP, and View Events buttons.

### 2. Interactive Invitation Experience
* **Gold Wax Seal Opening Gate (`hero__gate`)**: Initial closed envelope with pulsating gold glow and animated radiant rays. Tapping the seal breaks it and reveals the invitation with smooth animations.
* **Ambient Background Audio**: Floating music control with animated audio visualizer waves and auto-play trigger upon seal break.
* **HTML5 Canvas Scratch Card**: Guests drag finger or mouse to scratch off the gold glitter coat with confetti celebrations.
* **HTML5 Canvas Scratch Card**: Guests drag finger or mouse to scratch off the gold glitter coat with celebratory confetti bursts.
* **3D Flip Card**: Letter envelope that flips with 3D perspective to reveal family greetings.
* **Guest RSVP Submission**: Interactive form with party size, attendance choice (Joyfully Accept / Regretfully Decline), contact info, and custom blessings.
* **Guest RSVP Submission**: Interactive modal with party size, attendance choice (Joyfully Accept / Regretfully Decline), custom blessings, and confetti explosion on submit.
### 2. Floating Sound Equalizer
- Fixed top-right audio control toggle button (`.music-toggle`).
- Displays 3 animated sound bars that bounce sequentially when music plays and stop when paused.

### 3. RSVP Management Dashboard
* Dedicated guest management view accessible via the **RSVPs** button in the editor header.
* Analytics cards: Total Responses, Total Guests Attending, Declined Count, and Acceptance Rate.
* Filterable guest response table with contact links (Phone / WhatsApp).
* One-click **CSV Export** for wedding planning and event coordinators.
* Sample RSVP generator for testing.
### 3. Ambient Floating Particle Engine
- Deterministic pseudo-random particle generation engine with seed values.
- Renders petals, sparkles, leaves, orbs, and dust with custom drift (`--dx`, `--dy`), scale (`--s`), and spin (`--spin`).
- Uses `IntersectionObserver` to disable rendering when sections are out of view for 60fps performance.

### 4. Quranic Verse Section
- Surah Ar-Rum 30:21 framed card with Arabic calligraphy, English translation, and decorative quote marks.

### 5. Interactive HTML5 Canvas Scratch Card
- Canvas coated in metallic gold linear gradient with 45° white hatching and "SCRATCH HERE ✦".
- Touch & cursor dragging clears foil using `globalCompositeOperation = "destination-out"`.
- Real-time scratch density sampling: when ≥ 42% of the card is scratched, automatically triggers a 70-particle gold confetti explosion and reveals the wedding date & hashtag underneath.

### 6. 3D Perspective Flip Invitation Note
- Double-sided invitation card with wax monogram seal on the front.
- Clicking smoothly flips the card 180° in 3D perspective (`transform: rotateY(180deg)`) to read the personalized message and signatures from the bride and groom.

### 7. Curved SVG Events Timeline with Scroll-Linked Flame
- Smooth cubic bezier SVG curve dynamically calculated between all event nodes.
- Scroll-linked fill (`useScroll` + `pathLength`).
- **Animated Flame Follower**: Calculates current coordinates along the SVG curve in real-time using `path.getPointAtLength()` so a glowing flame orb rides down the track as the user scrolls.
- **3D Mouse Tilt Cards**: Event cards tilt towards the mouse pointer using Framer Motion springs (`useSpring`, stiffness 220, damping 20).
- Detailed event information for Mangni, Mehendi, Nikah, and Walima with Arabic names and directions links.

### 8. Full-Width Photo Banners
- High-resolution photo bands with parallax dark veils and Arabic blessings (*Barakallahu lakuma wa baraka alaikuma*).

### 9. Live Countdown Timer
- Real-time ticking clock showing Days, Hours, Minutes, and Seconds.
- Digit roll animations and crescent moon emblem.
- Dynamic note computing time remaining until the ceremony.

### 10. Venue Card & Live QR Code
- Sultana Gardens & Banquet details, address, and valet parking note.
- "Open in Maps" button.
- Dynamically rendered QR code linking directly to Google Maps navigation.

### 11. Interactive RSVP Form
- Guest full name, mobile number, and email fields.
- Attendance radio options: "Joyfully accept" / "Regretfully decline".
- Guest count pills ("1", "2", "3", "4", "5+").
- Message textarea.
- Celebratory multi-color confetti explosion on joyful acceptance.
- Thank-you confirmation screen ("Jazak Allah Khair").

### 12. Blessings & Duas
- Framed cards for presence and prayers with heart and praying-hands icons.

### 13. Family Hosts & Contacts
- Groom's family and Bride's family cards with direct `tel:` call buttons.

### 14. Footer Section
- Skyline silhouette, monogram seal, couple names, date line, hashtag, and Ameen dua in Arabic and Latin.

---

## 🎨 Theme & Styling Tokens (`tmpl-zaytoon`)
## 📂 Project Structure
## 🛠️ Project Structure

The application incorporates the authentic Islamic luxury olive-gold color palette and Google Fonts:
* **Display Fonts**: `Marcellus`, `Cormorant Garamond`
* **Flourish & Script**: `Parisienne`, `Alex Brush`
* **Date & Accent**: `Cinzel`
* **Arabic Calligraphy**: `Noto Naskh Arabic`
* **Palette Tokens**:
  * Cream (`#fbf8f1`), Cream Alt (`#f8f3e8`), Blush (`#f1e9da`)
  * Gold (`#b3a05e`), Dark Gold (`#686a31`), Soft Rose (`#d7c995`)
  * Deep Forest/Olive (`#3f4020`), Sage (`#858640`)
  * Text Ink (`#514f49`), Muted (`#77736b`), Border Line (`#d9d1bf`)
```
f:\wedding_card\
├── static\                      # Standalone Full Static Website (from View-Source)
│   ├── index.html               # Pure static HTML file (double-click to open!)
│   ├── css\
│   │   └── style.css            # Complete 2.1 MB extracted CSS from live page chunks
│   └── js\
│       └── app.js               # Vanilla JS engine (Wax seal, Audio, Scratch, Flip, Countdown, Sync, Modals)
│
├── src\                         # React 19 + Vite Application Source
│   ├── components\
│   │   ├── CountdownTimer.jsx   # Live countdown clock
│   │   ├── EventsTimeline.jsx   # Chronological schedule with .ics export
│   │   ├── FlipNote.jsx         # 3D flippable love note card
│   │   ├── InvitationCard.jsx   # Full luxury Zaytoon invitation card container
│   │   ├── PublishModal.jsx     # Share link, QR code, and WhatsApp integration
│   │   ├── RSVPDashboard.jsx    # Guest response analytics & CSV export
│   │   ├── RSVPModal.jsx        # Interactive guest RSVP form with confetti
│   │   ├── ScratchCard.jsx      # HTML5 canvas foil scratch-to-reveal
│   │   ├── SidebarEditor.jsx    # Live dual-pane customization sidebar
│   │   ├── VenueCard.jsx        # Google Maps navigation card
│   │   └── WaxSealGate.jsx      # Interactive wax seal opening gate
│   ├── data\
│   │   └── defaultData.js       # Default couple & wedding information
│   ├── styles\
│   │   └── zaytoon.css          # Zaytoon palette & typography
│   ├── App.jsx                  # Main application state & layout orchestrator
│   └── main.jsx                 # React root mount
│
├── dist\                        # Production build output
├── package.json
└── vite.config.js
├── index.html                           # Root HTML with Google Fonts & Meta tags
├── package.json                         # Dependencies (React 19, Vite, Framer Motion, Tailwind)
├── tailwind.config.js                   # Tailwind theme configuration
├── vite.config.js                       # Vite build configuration
├── public\
│   └── templates\zaytoon\assets\
│       ├── pattern-geo.svg              # Local geometric pattern
│       └── skyline.svg                  # Local skyline silhouette
└── src\
    ├── main.jsx                         # React entry point
    ├── App.jsx                          # Main App component
    ├── components\
    │   └── ZaytoonInvitation.jsx        # 101% replica master component
    ├── data\
    │   └── defaultData.js               # Structured wedding data
    └── styles\
        └── zaytoon.css                  # 100% complete original CSS & keyframes
```

---

## 🚀 Quick Start & Setup Instructions
## 🚀 How to Run
## 🚀 Setup & Running Instructions

### Prerequisites
* **Node.js**: v18+ (verified on Node v24)
* **npm**: v9+ (verified on npm v11)
### Option 1: Standalone Static Website (Zero Setup)
Simply open the static file in any modern web browser:
* Double-click [f:\wedding_card\static\index.html](file:///f:/wedding_card/static/index.html) in Windows File Explorer.
* Or serve via any local HTTP server:
  ```bash
  npx serve -s static -l 8080
  ```
* Or upload the contents of the `static/` directory directly to GitHub Pages, Netlify, Vercel, or Cloudflare Pages.
### 1. Prerequisites
- **Node.js** v18+ (tested on v24.11.1)
- **npm** v9+ (tested on 11.6.2)

### Installation & Running Locally
### 2. Installation
Open PowerShell or Terminal in `f:\wedding_card`:
```bash
npm install
```

1. Open a terminal in this directory:
### Option 2: React 19 + Vite Application
1. Start the development server:
   ```bash
   cd f:\wedding_card
   npm run dev
   ```
### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

2. Install dependencies (if not already installed):
   Open `http://localhost:3000` in your browser.
2. Build for production:
   ```bash
   npm install
   npm run build
   ```
   The optimized production bundle is generated in `dist/`.
### 4. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in `dist/`.

3. Start the development server:
   ```bash
   npm run dev
   ```
### 5. Preview Production Build
```bash
npm run preview
```
Runs a local preview of the production build on [http://localhost:4173](http://localhost:4173).

---

4. Open your browser and navigate to:
   * **Editor Mode**: [http://localhost:3000/](http://localhost:3000/)
   * **Guest Invitation View**: [http://localhost:3000/?preview=true](http://localhost:3000/?preview=true)
   * **RSVP Dashboard**: [http://localhost:3000/?rsvp=true](http://localhost:3000/?rsvp=true)
## 📝 Customization

5. Build for production:
   ```bash
   npm run build
   ```
## 🎨 Color Palette & Typography
* **Cream / White**: `#fbf8f1`, `#f8f3e8`, `#f1e9da`, `#fffdf8`
* **Gold & Olive Rose**: `#b3a05e`, `#686a31`, `#d7c995`, `#f2ead4`
* **Deep Sage & Forest**: `#858640`, `#3f4020`
* **Fonts**: `Cinzel`, `Marcellus`, `Cormorant Garamond`, `Parisienne`, `Noto Naskh Arabic`, `Inter`, `Fraunces`
To personalize the invitation for your own wedding, edit `src/data/defaultData.js`:
- `couple.brideName` & `couple.groomName`
- `couple.hashtag`
- `weddingDateTime` (ISO string: e.g. `"2027-02-06T16:30:00+05:30"`)
- `venue.name`, `venue.address`, `venue.mapsUrl`
- `events`: Array of ceremony dates, times, and locations
- `hosts`: Groom and bride family contacts & phone numbers
