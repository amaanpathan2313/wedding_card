/**
 * SaveOurDate — Zaytoon Wedding Invitation & Dashboard
 * Full Vanilla Static Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initModeSwitcher();
  initWaxSealGate();
  initAudio();
  initScratchCard();
  initFlipCard();
  initCountdown();
  initModals();
  initScrollAnimations();
}

/* =========================================================
   1. Mode Switcher (Split Editor / Guest View / Mobile)
   ========================================================= */
function initModeSwitcher() {
  const workspace = document.getElementById('app-workspace');
  const btnSplit = document.getElementById('btn-mode-split');
  const btnGuest = document.getElementById('btn-mode-guest');
  const btnMobile = document.getElementById('btn-mode-mobile');

  function setMode(mode) {
    workspace.classList.remove('guest-mode', 'mobile-mode');
    btnSplit.classList.remove('active');
    btnGuest.classList.remove('active');
    btnMobile.classList.remove('active');

    if (mode === 'guest') {
      workspace.classList.add('guest-mode');
      btnGuest.classList.add('active');
    } else if (mode === 'mobile') {
      workspace.classList.add('mobile-mode');
      btnMobile.classList.add('active');
    } else {
      btnSplit.classList.add('active');
    }
  }

  btnSplit.addEventListener('click', () => setMode('split'));
  btnGuest.addEventListener('click', () => setMode('guest'));
  btnMobile.addEventListener('click', () => setMode('mobile'));
}

/* =========================================================
   2. Wax Seal Gate Tap-to-Open
   ========================================================= */
function initWaxSealGate() {
  const gateBtn = document.querySelector('.hero__gate');
  const heroHeader = document.querySelector('.hero');
  const heroContent = document.querySelector('.hero__content');

  if (!gateBtn || !heroHeader) return;

  gateBtn.addEventListener('click', () => {
    // Exact original opening classes
    gateBtn.classList.add('is-opening');

    setTimeout(() => {
      heroHeader.classList.remove('is-closed');
      if (heroContent) {
        heroContent.classList.add('is-visible');
        const fades = heroContent.querySelectorAll('.fade');
        fades.forEach((el, idx) => {
          el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`;
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      }

      // Start music
      playAudio();

      setTimeout(() => {
        gateBtn.style.display = 'none';
      }, 750);
    }, 300);
  });
}

/* =========================================================
   3. Audio Engine
   ========================================================= */
let isPlaying = false;
let audioEl = null;

function initAudio() {
  audioEl = document.querySelector('audio');
  const btnTopSound = document.getElementById('btn-toggle-sound');
  const btnFloating = document.getElementById('btn-floating-audio');
  const soundLabel = document.getElementById('sound-label');

  if (!audioEl) {
    audioEl = new Audio('https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/music.mp3');
    audioEl.loop = true;
  }

  function toggleAudio() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  if (btnTopSound) btnTopSound.addEventListener('click', toggleAudio);
  if (btnFloating) btnFloating.addEventListener('click', toggleAudio);
}

function playAudio() {
  if (!audioEl) return;
  audioEl.play().then(() => {
    isPlaying = true;
    updateAudioUI(true);
  }).catch((err) => {
    console.log('Audio autoplay blocked or user interaction required', err);
  });
}

function pauseAudio() {
  if (!audioEl) return;
  audioEl.pause();
  isPlaying = false;
  updateAudioUI(false);
}

function updateAudioUI(playing) {
  const btnFloating = document.getElementById('btn-floating-audio');
  const soundLabel = document.getElementById('sound-label');

  if (btnFloating) {
    if (playing) {
      btnFloating.classList.add('playing');
    } else {
      btnFloating.classList.remove('playing');
    }
  }

  if (soundLabel) {
    soundLabel.textContent = playing ? 'Mute' : 'Music';
  }
}

/* =========================================================
   4. Canvas Scratch Card
   ========================================================= */
function initScratchCard() {
  const canvas = document.querySelector('.scratch__foil');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let isDrawing = false;
  let scratched = false;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * (window.devicePixelRatio || 1);
    canvas.height = rect.height * (window.devicePixelRatio || 1);
    ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    paintFoil(rect.width, rect.height);
  }

  function paintFoil(w, h) {
    // Elegant metallic champagne-gold gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#c7b370');
    grad.addColorStop(0.35, '#ebdcae');
    grad.addColorStop(0.65, '#a48e4b');
    grad.addColorStop(1, '#d8c892');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Decorative foil pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
    for (let i = 0; i < 50; i++) {
      const rx = (i * 37) % w;
      const ry = (i * 53) % h;
      ctx.beginPath();
      ctx.arc(rx, ry, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Centered label text on foil
    ctx.font = '600 13px "Cinzel", Georgia, serif';
    ctx.fillStyle = '#4a3d1c';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2px';
    ctx.fillText('✨ SCRATCH HERE TO REVEAL ✨', w / 2, h / 2);
  }

  function scratch(e) {
    if (!isDrawing || scratched) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    checkScratchCompletion();
  }

  function checkScratchCompletion() {
    if (scratched) return;
    // Sample pixels every 20 strokes
    const w = canvas.width;
    const h = canvas.height;
    const pixels = ctx.getImageData(0, 0, w, h).data;
    let transparent = 0;
    const step = 64; // Sample step

    for (let i = 3; i < pixels.length; i += 4 * step) {
      if (pixels[i] === 0) transparent++;
    }

    const totalSampled = pixels.length / (4 * step);
    if (transparent / totalSampled > 0.42) {
      scratched = true;
      canvas.classList.add('scratched');
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5 }
        });
      }
    }
  }

  // Pointer & Touch Events
  canvas.addEventListener('mousedown', (e) => { isDrawing = true; scratch(e); });
  window.addEventListener('mousemove', scratch);
  window.addEventListener('mouseup', () => { isDrawing = false; });

  canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }, { passive: true });
  window.addEventListener('touchmove', scratch, { passive: true });
  window.addEventListener('touchend', () => { isDrawing = false; });

  setTimeout(resizeCanvas, 100);
  window.addEventListener('resize', resizeCanvas);
}

/* =========================================================
   5. 3D Flip Love Letter
   ========================================================= */
function initFlipCard() {
  const flipBtn = document.querySelector('.invite-flip');
  if (!flipBtn) return;

  flipBtn.addEventListener('click', (e) => {
    e.preventDefault();
    flipBtn.classList.toggle('is-flipped');
    const isFlipped = flipBtn.classList.contains('is-flipped');
    flipBtn.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
  });
}

/* =========================================================
   6. Real-Time Countdown Timer
   ========================================================= */
let targetTime = new Date('2026-12-26T18:30:00').getTime();

function initCountdown() {
  function update() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const boxes = document.querySelectorAll('.countdown__box');
    if (boxes.length >= 4) {
      updateDigits(boxes[0], days);
      updateDigits(boxes[1], hours);
      updateDigits(boxes[2], minutes);
      updateDigits(boxes[3], seconds);
    }
  }

  function updateDigits(box, val) {
    const s = String(val).padStart(2, '0');
    const digits = box.querySelectorAll('.countdown__digit');
    if (digits.length === 2) {
      digits[0].textContent = s[0];
      digits[1].textContent = s[1];
    }
  }

  update();
  setInterval(update, 1000);
}

function updateCountdownTarget() {
  const inp = document.getElementById('inp-target-datetime');
  if (inp && inp.value) {
    targetTime = new Date(inp.value).getTime();
  }
}

/* =========================================================
   7. Live Two-Way Editor Synchronization
   ========================================================= */
window.syncCard = function() {
  const bride = document.getElementById('inp-bride')?.value || 'Neha';
  const groom = document.getElementById('inp-groom')?.value || 'Sayed Azhar (Sohail)';
  const hashtag = document.getElementById('inp-hash')?.value || '#NehaWedsSohail';
  const occasion = document.getElementById('inp-occasion')?.value || 'Nikah';
  const dateStr = document.getElementById('inp-date-str')?.value || 'December 26, 2026';
  const dayStr = document.getElementById('inp-day-str')?.value || 'Saturday';
  const cityStr = document.getElementById('inp-city-str')?.value || 'Panvel';
  const venueName = document.getElementById('inp-venue-name')?.value || 'Samar Park Building';
  const venueAddr = document.getElementById('inp-venue-addr')?.value || '';
  const storyMsg = document.getElementById('inp-story-msg')?.value || '';

  // 1. Hero Names
  const heroBride = document.getElementById('card-hero-bride');
  const heroGroom = document.getElementById('card-hero-groom');
  if (heroBride) heroBride.textContent = bride;
  if (heroGroom) heroGroom.textContent = groom;

  // 2. Hero Occasion & Date
  const heroOccasion = document.getElementById('card-hero-occasion');
  const heroDay = document.getElementById('card-hero-day');
  const heroDate = document.getElementById('card-hero-date');
  const heroCity = document.getElementById('card-hero-city');
  if (heroOccasion) heroOccasion.textContent = occasion;
  if (heroDay) heroDay.textContent = dayStr;
  if (heroDate) heroDate.textContent = dateStr;
  if (heroCity) heroCity.textContent = cityStr;

  // 3. Scratch Card Details
  const scratchDate = document.getElementById('card-scratch-date');
  const scratchDay = document.getElementById('card-scratch-day');
  const scratchHash = document.getElementById('card-scratch-hash');
  if (scratchDate) scratchDate.textContent = dateStr;
  if (scratchDay) scratchDay.textContent = dayStr;
  if (scratchHash) scratchHash.textContent = hashtag;

  // 4. Flip Letter Details
  const inviteBride = document.getElementById('card-invite-bride');
  const inviteGroom = document.getElementById('card-invite-groom');
  const inviteMsg = document.querySelector('.invite__message');
  if (inviteBride) inviteBride.textContent = bride;
  if (inviteGroom) inviteGroom.textContent = groom;
  if (inviteMsg && storyMsg) inviteMsg.textContent = storyMsg;

  // 5. Venue Details
  const cardVenueName = document.getElementById('card-venue-name');
  const cardVenueAddr = document.getElementById('card-venue-address');
  if (cardVenueName) cardVenueName.textContent = venueName;
  if (cardVenueAddr) cardVenueAddr.textContent = venueAddr;

  // 6. Footer Details
  const footerHash = document.getElementById('card-footer-hash');
  const footerNames = document.getElementById('card-footer-names');
  if (footerHash) footerHash.textContent = hashtag;
  if (footerNames) footerNames.innerHTML = `${bride} <span class="script">&amp;</span> ${groom}`;
};

window.toggleSection = function(id) {
  const card = document.getElementById(id);
  if (card) {
    card.classList.toggle('open');
  }
};

/* =========================================================
   8. Modals (RSVP & Publish)
   ========================================================= */
function initModals() {
  const btnOpenRsvp = document.getElementById('btn-open-rsvp-modal');
  const btnPublish = document.getElementById('btn-publish-site');

  if (btnOpenRsvp) {
    btnOpenRsvp.addEventListener('click', () => openModal('rsvp-modal'));
  }

  if (btnPublish) {
    btnPublish.addEventListener('click', () => openModal('publish-modal'));
  }
}

window.openModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
};

window.closeModal = function(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
};

window.handleRsvpSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('rsvp-name').value;
  const count = document.getElementById('rsvp-count').value;
  const notes = document.getElementById('rsvp-notes').value;
  const attending = document.querySelector('input[name="attending"]:checked')?.value || 'yes';

  // Save to localStorage
  const savedRsvps = JSON.parse(localStorage.getItem('saved_rsvps') || '[]');
  savedRsvps.push({ name, attending, count, notes, timestamp: new Date().toISOString() });
  localStorage.setItem('saved_rsvps', JSON.stringify(savedRsvps));

  // Confetti explosion
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.6 }
    });
  }

  document.getElementById('rsvp-form').style.display = 'none';
  document.getElementById('rsvp-success').style.display = 'block';

  setTimeout(() => {
    closeModal('rsvp-modal');
    setTimeout(() => {
      document.getElementById('rsvp-form').reset();
      document.getElementById('rsvp-form').style.display = 'block';
      document.getElementById('rsvp-success').style.display = 'none';
    }, 400);
  }, 2500);
};

window.copyShareLink = function() {
  const link = document.getElementById('share-link-text')?.textContent || window.location.href;
  navigator.clipboard.writeText(link).then(() => {
    alert('Invitation link copied to clipboard!');
  });
};

/* =========================================================
   9. Scroll Fade-In Observer
   ========================================================= */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)';
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade, .events__row, .events__node, .venue__card, .scratch__card, .countdown__panel').forEach(el => {
    observer.observe(el);
  });
}
