import React, { useState, useEffect, useRef, useMemo, useLayoutEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';

// Arabic translations for common events
const EVENT_ARABIC_NAMES = {
  mangni: "منگنی",
  nikah: "نِكَاح",
  nikaah: "نِكَاح",
  walima: "وَلِيمَة",
  waleema: "وَلِيمَة",
  mehendi: "مہندی",
  mehndi: "مہندی",
  henna: "مہندی",
  dholki: "ڈھولکی",
  haldi: "ہلدی",
  reception: "استقبال",
  sangeet: "سنگیت"
};

const EVENT_ICONS = {
  mangni: "rings",
  nikah: "moon",
  nikaah: "moon",
  walima: "lantern",
  waleema: "lantern",
  reception: "lantern",
  mehendi: "leaf",
  mehndi: "leaf",
  henna: "leaf",
  haldi: "leaf"
};

// ================= MUSIC TOGGLE =================
export function MusicToggle({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <button
      type="button"
      className={`music-toggle ${isPlaying ? "is-playing" : ""}`}
      onClick={() => {
        const audio = audioRef.current;
        if (audio) {
          if (isPlaying) {
            audio.pause();
          } else {
            audio.play().catch(() => {});
          }
          setIsPlaying(prev => !prev);
        }
      }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      aria-pressed={isPlaying}
    >
      <span className="music-toggle__bar" />
      <span className="music-toggle__bar" />
      <span className="music-toggle__bar" />
    </button>
  );
}

// ================= FADE ANIMATION WRAPPER =================
const motionTags = {
  div: motion.div,
  p: motion.p,
  a: motion.a,
  form: motion.form,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  span: motion.span
};

const fadeStandard = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const fadeCard = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export function Fade({
  as = "div",
  className = "",
  delay = 0,
  show,
  style,
  children,
  ...rest
}) {
  const Component = motionTags[as] || motion[as] || motion.div;
  const isControlled = show !== undefined;
  const variant = className.includes("card") ? fadeCard : fadeStandard;
  const [inView, setInView] = useState(false);

  return (
    <Component
      className={`fade ${(isControlled ? show : inView) ? "in" : ""} ${className}`.trim()}
      style={style}
      initial={variant.hidden}
      {...(isControlled
        ? { animate: show ? variant.visible : variant.hidden }
        : { whileInView: variant.visible })}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay
      }}
      {...(isControlled
        ? {}
        : {
            viewport: { once: true, amount: 0.01, margin: "0px 0px 0px 0px" },
            onViewportEnter: () => setInView(true)
          })}
      {...rest}
    >
      {children}
    </Component>
  );
}

// ================= AMBIENT FLOATING PARTICLES =================
const AMBIENT_DEFAULTS = {
  petals: 11,
  sparkle: 16,
  leaves: 9,
  orbs: 12,
  dust: 14
};

export function AmbientParticles({ variant = "petals", count, seed = 1 }) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const particles = useMemo(() => {
    const total = count ?? AMBIENT_DEFAULTS[variant] ?? 12;
    const prng = { s: (9301 * seed + 49297) % 233280 };
    const random = () => {
      prng.s = (9301 * prng.s + 49297) % 233280;
      return prng.s / 233280;
    };
    return Array.from({ length: total }, (_, i) => ({
      id: i,
      x: 100 * random(),
      y: 100 * random(),
      scale: 0.75 + 1.15 * random(),
      delay: -(16 * random()),
      dur: 8 + 10 * random(),
      driftX: (random() - 0.5) * 140,
      driftY: 30 + 50 * random(),
      spin: (random() - 0.5) * 340,
      opacity: 0.5 + 0.4 * random()
    }));
  }, [variant, count, seed]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin: "15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={ref}
      className={`ambient ambient--${variant} ${isIntersecting ? "is-live" : ""}`.trim()}
      aria-hidden="true"
    >
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            "--s": p.scale,
            "--delay": `${p.delay}s`,
            "--dur": `${p.dur}s`,
            "--dx": `${p.driftX}px`,
            "--dy": `${p.driftY}px`,
            "--spin": `${p.spin}deg`,
            "--o": p.opacity
          }}
        />
      ))}
    </div>
  );
}

// ================= ORNAMENTS & ICONS =================
export function CrescentMoon({ className }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M25 6a14 14 0 1 0 0 28 16 16 0 1 1 0-28z" fill="currentColor" />
      <path d="M31 9.5l1.3 2.8 3 .4-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.4z" fill="currentColor" />
    </svg>
  );
}

export function Divider({ className }) {
  return (
    <img
      src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/divider.png"
      alt=""
      className={className}
      aria-hidden="true"
      draggable="false"
    />
  );
}

export function RingsIcon({ className }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="22" r="10" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="25" cy="22" r="10" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      <path d="M22 8l1.6 3.4 3.4.4-2.5 2.4.6 3.4-3.1-1.7-3.1 1.7.6-3.4-2.5-2.4 3.4-.4z" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 34C11 30 8 21 12 10c11 1 17 8 16 19" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 34c0-9 2-16 8-21" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <path d="M15 20c3-1 6-1 9 1M14 26c3-1 7 0 9 2" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export function LanternIcon({ className }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 3v4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 7h12l-2 4H16z" fill="currentColor" opacity="0.85" />
      <rect x="12.5" y="11" width="15" height="19" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 15v11M14.5 20.5h11" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M16 30h8l-1.3 5h-5.4z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function HeartIcon({ className }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 32s-11-7-11-15.5A6 6 0 0 1 20 12a6 6 0 0 1 11 4.5C31 25 20 32 20 32z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function HandsIcon({ className }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 6c1.2 6.5 1.2 11-1 16.5-2.2 5.5-2.2 9.5 1 13.5 3.2-4 3.2-8 1-13.5-2.2-5.5-2.2-10-1-16.5z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12.5 11c2.2 7.5 2.2 13-1 18.5M27.5 11c-2.2 7.5-2.2 13 1 18.5" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </svg>
  );
}

export function Monogram({ initials = ["A", "B"], className }) {
  return (
    <svg viewBox="0 0 120 70" fill="none" className={className} aria-hidden="true">
      <circle cx="47" cy="35" r="25" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
      <circle cx="73" cy="35" r="25" stroke="currentColor" strokeWidth="1.3" opacity="0.75" />
      <text x="36" y="43" textAnchor="middle" fontFamily="var(--display)" fontSize="24" fill="currentColor">
        {initials[0]}
      </text>
      <text x="84" y="43" textAnchor="middle" fontFamily="var(--display)" fontSize="24" fill="currentColor">
        {initials[1]}
      </text>
    </svg>
  );
}

const EVENT_ICON_COMPONENTS = {
  rings: RingsIcon,
  leaf: LeafIcon,
  moon: CrescentMoon,
  lantern: LanternIcon
};

const BLESSING_ICON_COMPONENTS = {
  heart: HeartIcon,
  hands: HandsIcon
};

// Magnetic hover hook
function useMagnetic(strength = 0.3) {
  const ref = useRef(null);
  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const el = ref.current;
    if (!el || isReduced || !canHover) return;

    const onMove = e => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);
  return ref;
}

// Media layout aspect references
const DESKTOP_ASPECT = { w: 1280, h: 720, fx: 0.5, fy: 0.8 };
const MOBILE_ASPECT = { w: 720, h: 1280, fx: 0.5, fy: 0.745 };

// ================= HERO SECTION =================
export function Hero({
  couple,
  day,
  hero,
  audioRef,
  onOpen,
  showRsvp = true,
  showEvents = true
}) {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const mediaRef = useRef(null);
  const [gateState, setGateState] = useState("closed"); // "closed" | "opening" | "opened"

  const [isDesktop, setIsDesktop] = useState({ matches: false, resolved: false });
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const update = e => setIsDesktop({ matches: e.matches, resolved: true });
    setIsDesktop({ matches: mql.matches, resolved: true });
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const [sealPos, setSealPos] = useState(null);
  const onOpenRef = useRef(onOpen);
  useEffect(() => {
    onOpenRef.current = onOpen;
  });

  const rsvpBtnRef = useMagnetic();
  const eventsBtnRef = useMagnetic();

  const handleLoadedMeta = e => {
    const v = e.currentTarget;
    if (v.paused && !(v.currentTime > 0)) {
      try {
        v.currentTime = 0.01;
      } catch {}
    }
  };

  useEffect(() => {
    if (!isDesktop.resolved) return;
    const v = (isDesktop.matches ? desktopVideoRef : mobileVideoRef).current;
    if (v && v.readyState === 0 && v.networkState !== 2) {
      v.load();
    }
  }, [isDesktop]);

  const handleOpened = useCallback(() => {
    setGateState("opened");
    onOpenRef.current?.();
  }, []);

  useEffect(() => {
    if (gateState !== "opening") return;
    const v = (isDesktop.matches ? desktopVideoRef : mobileVideoRef).current;
    const dur = v && Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 6;
    const t = setTimeout(() => {
      handleOpened();
    }, 1000 * (dur + 4));
    return () => clearTimeout(t);
  }, [gateState, isDesktop, handleOpened]);

  // Compute wax seal focal position matching video perspective
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    const aspect = isDesktop.matches ? DESKTOP_ASPECT : MOBILE_ASPECT;

    const calc = () => {
      const { width: w, height: h } = el.getBoundingClientRect();
      if (!w || !h) return;
      const scale = Math.max(w / aspect.w, h / aspect.h);
      const scaledW = aspect.w * scale;
      const scaledH = aspect.h * scale;
      const originX = (w - scaledW) / 2 + aspect.fx * scaledW;
      const originY = (h - scaledH) / 2 + aspect.fy * scaledH;
      const clampX = Math.min(140, 0.18 * w);
      const clampY = Math.min(160, 0.22 * h);
      setSealPos({
        x: Math.min(Math.max(originX, clampX), w - clampX),
        y: Math.min(Math.max(originY, clampY), h - clampY)
      });
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isDesktop]);

  const isOpened = gateState === "opened";

  const handleSealClick = () => {
    if (gateState !== "closed") return;
    setGateState("opening");

    const confettiPalette = ["#b3a05e", "#d7c995", "#686a31", "#fffdf8"];
    // 3-way celebratory burst
    confetti({
      particleCount: 70,
      spread: 100,
      startVelocity: 40,
      gravity: 0.9,
      origin: { x: 0.5, y: 0.4 },
      colors: confettiPalette,
      scalar: 0.85,
      ticks: 220
    });
    confetti({
      particleCount: 26,
      angle: 60,
      spread: 65,
      startVelocity: 48,
      origin: { x: 0.08, y: 0.55 },
      colors: confettiPalette,
      scalar: 0.9,
      ticks: 200
    });
    confetti({
      particleCount: 26,
      angle: 120,
      spread: 65,
      startVelocity: 48,
      origin: { x: 0.92, y: 0.55 },
      colors: confettiPalette,
      scalar: 0.9,
      ticks: 200
    });

    // Start music
    audioRef?.current?.play().catch(() => {});

    // Play background video
    const video = (isDesktop.matches ? desktopVideoRef : mobileVideoRef).current;
    if (video) {
      video.play().catch(() => {
        handleOpened();
      });
    }
  };

  return (
    <header className={`hero ${isOpened ? "" : "is-closed"}`} id="top">
      {/* Background Media */}
      <div className="hero__media" ref={mediaRef}>
        {(hero.video?.desktop || hero.video?.mobile) && (
          <video
            ref={desktopVideoRef}
            className="hero__video hero__video--desktop"
            src={hero.video.desktop ?? hero.video.mobile}
            poster={hero.frame?.desktop ?? hero.frame?.mobile}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={handleLoadedMeta}
            onEnded={handleOpened}
            onError={handleOpened}
            aria-hidden="true"
          />
        )}
        {(hero.video?.mobile || hero.video?.desktop) && (
          <video
            ref={mobileVideoRef}
            className="hero__video hero__video--mobile"
            src={hero.video.mobile ?? hero.video.desktop}
            poster={hero.frame?.mobile ?? hero.frame?.desktop}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={handleLoadedMeta}
            onEnded={handleOpened}
            onError={handleOpened}
            aria-hidden="true"
          />
        )}
        <img
          className={`hero__frame hero__frame--desktop ${isOpened ? "is-visible" : ""}`}
          src={hero.frame?.desktop ?? hero.frame?.mobile}
          alt=""
          aria-hidden="true"
        />
        <img
          className={`hero__frame hero__frame--mobile ${isOpened ? "is-visible" : ""}`}
          src={hero.frame?.mobile ?? hero.frame?.desktop}
          alt=""
          aria-hidden="true"
        />
        <span className={`hero__scrim ${isOpened ? "is-visible" : ""}`} aria-hidden="true" />
      </div>

      {/* Floating Petals */}
      {isOpened && <AmbientParticles variant="petals" seed={1} count={14} />}

      {/* Wax Seal Gate Button */}
      {!isOpened && (
        <button
          type="button"
          className={`hero__gate ${gateState === "opening" ? "is-opening" : ""}`}
          onClick={handleSealClick}
          disabled={gateState === "opening"}
          aria-label="Break the seal to open the invitation"
        >
          <span
            className="hero__seal-wrap"
            style={sealPos ? { left: `${sealPos.x}px`, top: `${sealPos.y}px` } : undefined}
          >
            <span className="seal-shadow-blob" aria-hidden="true" />
            <span className="seal-glow-core" aria-hidden="true" />
            <span className="seal-glow-rays" aria-hidden="true" />
            <span className="seal-glow-rays seal-glow-rays-2" aria-hidden="true" />
            <span className="seal-glow-ring" aria-hidden="true" />
            <img
              className="hero__seal"
              src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/wax-seal.png"
              alt=""
            />
            <span className="hero__gate-label sr-only">Tap to open</span>
          </span>
        </button>
      )}

      {/* Hero Typography & Actions */}
      <div className={`hero__content ${isOpened ? "is-visible" : ""}`}>
        <Fade as="p" className="hero__bismillah ar" delay={0.02} show={isOpened}>
          {hero.bismillah}
        </Fade>
        <Fade as="p" className="eyebrow" delay={0.06} show={isOpened}>
          {hero.eyebrow}
        </Fade>
        <Fade as="p" className="hero__intro" delay={0.12} show={isOpened}>
          {hero.intro}
        </Fade>
        <Fade as="h1" className="hero__names" delay={0.18} show={isOpened}>
          {couple.nameOrder === "groom-first" ? (
            <>
              <span data-fit-name>{couple.groom}</span>
              <span className="script hero__amp">&</span>
              <span data-fit-name>{couple.bride}</span>
            </>
          ) : (
            <>
              <span data-fit-name>{couple.bride}</span>
              <span className="script hero__amp">&</span>
              <span data-fit-name>{couple.groom}</span>
            </>
          )}
        </Fade>
        <Fade delay={0.24} show={isOpened}>
          <Divider className="hero__rule" />
        </Fade>
        <Fade as="p" className="hero__occasion" delay={0.28} show={isOpened}>
          {hero.occasion}
        </Fade>
        <Fade className="hero__when" delay={0.32} show={isOpened}>
          <span>{day.weekday}</span>
          <span className="hero__dot" />
          <span>{day.date}</span>
          <span className="hero__dot hero__dot--last" />
          <span className="hero__city">{day.city}</span>
        </Fade>
        <Fade className="hero__actions" delay={0.38} show={isOpened}>
          {!showRsvp && !showEvents && (
            <a href="#verse" className="btn btn--fill hero__btn--magnetic">
              View Invitation
            </a>
          )}
          {showRsvp && (
            <a href="#rsvp" className="btn btn--fill hero__btn--magnetic" ref={rsvpBtnRef}>
              RSVP
            </a>
          )}
          {showEvents && (
            <a href="#events" className={`btn ${showRsvp ? "btn--line" : "btn--fill"} hero__btn--magnetic`} ref={eventsBtnRef}>
              View Events
            </a>
          )}
        </Fade>
        <Fade delay={0.44} show={isOpened}>
          <Monogram initials={couple.initials} className="hero__monogram" />
        </Fade>
      </div>

      {/* Decorative Ornaments and Scroll Button */}
      {isOpened && (
        <>
          <Fade className="hero__corner hero__corner--left" delay={0.05} show={isOpened}>
            <img
              src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-left.png"
              alt=""
              aria-hidden="true"
              draggable="false"
            />
          </Fade>
          <Fade className="hero__corner hero__corner--right" delay={0.1} show={isOpened}>
            <img
              src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-right.png"
              alt=""
              aria-hidden="true"
              draggable="false"
            />
          </Fade>
          <Fade className="hero__side hero__side--left" delay={0.15} show={isOpened}>
            <img
              src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/side-floral-left.png"
              alt=""
              aria-hidden="true"
              draggable="false"
            />
          </Fade>
          <Fade className="hero__side hero__side--right" delay={0.2} show={isOpened}>
            <img
              src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/side-floral-right.png"
              alt=""
              aria-hidden="true"
              draggable="false"
            />
          </Fade>
          <Fade as="a" href="#verse" className="hero__scroll" delay={0.46} show={isOpened} aria-label="Scroll down">
            <span>Scroll</span>
            <svg viewBox="0 0 18 11" fill="none" aria-hidden="true">
              <path d="M1 1.5 9 9.5 17 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Fade>
        </>
      )}
    </header>
  );
}

// ================= SECTION HEADER =================
export function SectionTitle({ eyebrow, title }) {
  return (
    <div className="sectitle">
      <Fade as="p" className="eyebrow">
        {eyebrow}
      </Fade>
      <Fade as="h2" className="title sectitle__h" delay={0.08}>
        {title}
      </Fade>
      <Fade delay={0.14}>
        <Divider className="sectitle__rule" />
      </Fade>
    </div>
  );
}

// ================= QURAN VERSE SECTION =================
export function QuranVerse({ data }) {
  return (
    <section id="verse" className="sec sec--alt sec--geo verse">
      <AmbientParticles variant="sparkle" seed={2} />
      <div className="wrap">
        <Fade className="card card--framed verse__card">
          <span className="verse__quote" aria-hidden="true">
            “
          </span>
          <p className="ar verse__arabic">{data.arabic}</p>
          <p className="verse__translation">{data.translation}</p>
          <p className="verse__ref">{data.reference}</p>
        </Fade>
      </div>
    </section>
  );
}

// ================= SCRATCH & REVEAL SECTION =================
const SCRATCH_CONFETTI_COLORS = ["#b3a05e", "#d7c995", "#858640", "#686a31", "#fbf8f1"];

export function ScratchSurprise({ data, day, couple }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef(null);
  const strokeCounter = useRef(0);
  const hasDrawn = useRef(false);
  const isInitialized = useRef(false);
  const isRevealedRef = useRef(false);

  const [isLifted, setIsLifted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Paint the metallic scratch layer
  const paintCanvas = useCallback(canvas => {
    const ctx = canvas.getContext("2d");
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h) return;

    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#686a31");
    grad.addColorStop(0.35, "#e8dba0");
    grad.addColorStop(0.6, "#b3a05e");
    grad.addColorStop(1, "#d7c995");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Diagonal hatching
    ctx.globalAlpha = 0.2;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    for (let x = -h; x < w; x += 16) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + h, h);
      ctx.stroke();
    }

    // Text labels
    ctx.globalAlpha = 1;
    ctx.fillStyle = "rgba(45, 34, 10, 0.65)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "600 13px Cinzel, Georgia, serif";
    ctx.letterSpacing = "3px";
    ctx.fillText("SCRATCH HERE", w / 2, h / 2 - 12);
    ctx.font = '400 26px "Cormorant Garamond", Georgia, serif';
    ctx.letterSpacing = "0px";
    ctx.fillText("✦", w / 2, h / 2 + 18);
    isInitialized.current = true;
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.getContext("2d").setTransform(dpr, 0, 0, dpr, 0, 0);
    paintCanvas(canvas);
  }, [paintCanvas]);

  useEffect(() => {
    if (isFinished) return;
    resizeCanvas();
    const ro = new ResizeObserver(resizeCanvas);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", resizeCanvas);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas, isFinished]);

  // Burst explosion when threshold reached
  const triggerBurst = useCallback(() => {
    if (isRevealedRef.current) return;
    isRevealedRef.current = true;
    setIsLifted(true);

    const el = containerRef.current;
    if (el && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const rect = el.getBoundingClientRect();
      const originX = Math.min(Math.max(rect.left + rect.width / 2, 20), window.innerWidth - 20);
      const originY = Math.min(Math.max(rect.top + rect.height / 2, 20), window.innerHeight - 20);

      const burstCanvas = document.createElement("canvas");
      burstCanvas.className = "scratch__burst";
      document.body.appendChild(burstCanvas);
      const ctx = burstCanvas.getContext("2d");
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      burstCanvas.width = w * dpr;
      burstCanvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const particles = Array.from({ length: 70 }, () => {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
        const vel = 4 + 8 * Math.random();
        return {
          x: originX,
          y: originY,
          vx: Math.cos(angle) * vel + (Math.random() - 0.5) * 2,
          vy: Math.sin(angle) * vel,
          rw: 5 + 7 * Math.random(),
          rh: 3 + 5 * Math.random(),
          spin: (Math.random() - 0.5) * 0.25,
          rot: Math.random() * Math.PI,
          colour: SCRATCH_CONFETTI_COLORS[(Math.random() * SCRATCH_CONFETTI_COLORS.length) | 0],
          life: 0
        };
      });

      let animId;
      const step = () => {
        ctx.clearRect(0, 0, w, h);
        let active = false;
        for (const p of particles) {
          p.life += 1;
          p.vy += 0.16;
          p.vx *= 0.99;
          p.x += p.vx;
          p.y += p.vy;
          p.rot += p.spin;
          const alpha = Math.max(0, 1 - p.life / 110);
          if (alpha > 0 && p.y <= h + 40) {
            active = true;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = p.colour;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.rw, p.rh, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
          }
        }
        if (active) {
          animId = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(animId);
          burstCanvas.remove();
        }
      };
      step();
    }
    setTimeout(() => setIsFinished(true), 700);
  }, []);

  // Calculate ratio of scratched pixels
  const getScratchedRatio = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isInitialized.current) return 0;
    const ctx = canvas.getContext("2d");
    const { width: w, height: h } = canvas;
    if (!w || !h) return 0;
    const data = ctx.getImageData(0, 0, w, h).data;
    let cleared = 0;
    let total = 0;
    for (let y = 0; y < h; y += 8) {
      for (let x = 0; x < w; x += 8) {
        if (data[(y * w + x) * 4 + 3] < 40) {
          cleared += 1;
        }
        total += 1;
      }
    }
    return total ? cleared / total : 0;
  }, []);

  const scratchAt = useCallback((clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 44;
    ctx.beginPath();
    if (lastPoint.current) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(x, y);
    } else {
      ctx.moveTo(x, y);
      ctx.lineTo(x + 0.1, y + 0.1);
    }
    ctx.stroke();
    lastPoint.current = { x, y };
    hasDrawn.current = true;
  }, []);

  const handlePointerUp = () => {
    isDrawing.current = false;
    lastPoint.current = null;
    if (!isRevealedRef.current && hasDrawn.current && getScratchedRatio() >= 0.42) {
      triggerBurst();
    }
  };

  return (
    <section id="surprise" className="sec sec--geo scratch">
      <AmbientParticles variant="dust" seed={3} />
      <div className="wrap">
        <SectionTitle eyebrow="A Little Surprise" title={data.title} />
        <Fade className="scratch__card">
          <div className="card scratch__stage" ref={containerRef}>
            <div className="scratch__under">
              <p className="scratch__eyebrow">Save the date</p>
              <p className="scratch__day">{day.weekday}</p>
              <p className="scratch__date">{day.date}</p>
              <Divider className="scratch__rule" />
              <p className="script scratch__line">{data.reveal}</p>
              <p className="scratch__hash">{couple.hashtag}</p>
            </div>
            {!isFinished && (
              <canvas
                ref={canvasRef}
                className={`scratch__foil ${isLifted ? "is-lifted" : ""}`.trim()}
                onPointerDown={e => {
                  if (!isRevealedRef.current) {
                    isDrawing.current = true;
                    try {
                      e.currentTarget.setPointerCapture?.(e.pointerId);
                    } catch {}
                    scratchAt(e.clientX, e.clientY);
                  }
                }}
                onPointerMove={e => {
                  if (isDrawing.current && !isRevealedRef.current) {
                    scratchAt(e.clientX, e.clientY);
                    if (++strokeCounter.current % 6 === 0 && getScratchedRatio() >= 0.42) {
                      triggerBurst();
                    }
                  }
                }}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onPointerLeave={handlePointerUp}
              />
            )}
          </div>
        </Fade>
        {!isFinished && (
          <Fade as="p" className="scratch__hint" delay={0.1}>
            {data.hint}
          </Fade>
        )}
      </div>
    </section>
  );
}

// ================= 3D FLIP NOTE SECTION =================
export function InvitationFlipNote({ data, couple }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="invite" className="sec invite">
      <div className="wrap">
        <SectionTitle eyebrow="Our Invitation" title={data.greeting} />
        <Fade className="envelop-frame" delay={0.06}>
          <span className="envelop-frame__glow" aria-hidden="true" />
          <img
            src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-left.png"
            alt=""
            className="envelop-frame__corner envelop-frame__corner--left"
            aria-hidden="true"
            draggable="false"
          />
          <img
            src="https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/ornaments/corner-top-right.png"
            alt=""
            className="envelop-frame__corner envelop-frame__corner--right"
            aria-hidden="true"
            draggable="false"
          />
          <button
            type="button"
            className={`invite-flip ${isFlipped ? "is-flipped" : ""}`}
            onClick={() => setIsFlipped(prev => !prev)}
            aria-pressed={isFlipped}
            aria-label={isFlipped ? "Turn the card back over" : "Tap to read our note"}
          >
            <span className="invite-flip__inner">
              {/* Front Face */}
              <span className="invite-flip__face invite-flip__face--front">
                <span className="envelop-frame__seal" aria-hidden="true">
                  <span className="envelop-frame__seal-halo" />
                  <span className="envelop-frame__seal-ring" />
                  <span className="envelop-frame__seal-mono script">
                    {couple.initials[0]}
                    <span className="envelop-frame__seal-amp">&</span>
                    {couple.initials[1]}
                  </span>
                </span>
                <span className="script invite-flip__title">With love</span>
                <span className="invite-flip__hint">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 2.2c-3.6 2-6 5-6 7.8a6 6 0 0 0 12 0c0-2.8-2.4-5.8-6-7.8Z" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M10 6.4v7.2M7 9.4l3-3 3 3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Tap to read our note
                </span>
              </span>

              {/* Back Face */}
              <span className="invite-flip__face invite-flip__face--back">
                <span className="invite__mark script" aria-hidden="true">
                  “
                </span>
                <span className="lede invite__message">{data.message}</span>
                <Divider className="invite__rule" />
                <span className="script invite__sign">{data.signature}</span>
                <span className="invite__names">
                  {couple.nameOrder === "groom-first" ? (
                    <>
                      <span className="invite__name">{couple.groomFull}</span>
                      <span className="invite__names-dot" aria-hidden="true" />
                      <span className="invite__name">{couple.brideFull}</span>
                    </>
                  ) : (
                    <>
                      <span className="invite__name">{couple.brideFull}</span>
                      <span className="invite__names-dot" aria-hidden="true" />
                      <span className="invite__name">{couple.groomFull}</span>
                    </>
                  )}
                </span>
              </span>
            </span>
          </button>
        </Fade>
      </div>
    </section>
  );
}

// ================= PHOTO BAND BANNER =================
export function PhotoBand({ src, alt = "", quote, sub, tall = false }) {
  if (!src) return null;
  return (
    <Fade className={`band ${tall ? "band--tall" : ""}`.trim()}>
      <img className="band__img" src={src} alt={alt} loading="lazy" />
      {(quote || sub) && (
        <div className="band__veil">
          {quote && <p className="band__quote ar">{quote}</p>}
          {sub && <p className="band__sub">{sub}</p>}
        </div>
      )}
    </Fade>
  );
}

// ================= EVENTS TIMELINE ROW =================
const TIMELINE_ACCENTS = ["var(--rose)", "var(--sage)", "var(--coral)", "var(--rose-dark)"];

export function EventRow({ event, index, total, scrollYProgress, nodeRef, accent }) {
  const IconComponent = EVENT_ICON_COMPONENTS[event.icon] || RingsIcon;
  const progressRatio = total > 1 ? index / (total - 1) : 0;
  const litProgress = useTransform(scrollYProgress, [progressRatio - 0.1, progressRatio], [0, 1]);

  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springRotX = useSpring(rotX, { stiffness: 220, damping: 20 });
  const springRotY = useSpring(rotY, { stiffness: 220, damping: 20 });

  return (
    <motion.div
      className={`events__row ${index % 2 === 0 ? "events__row--left" : "events__row--right"}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.94 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={nodeRef}
        className="events__node"
        style={{ "--lit": litProgress, "--accent": accent }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.12 }}
      >
        <IconComponent className="events__node-icon" />
      </motion.div>
      <motion.div
        className="card events__card"
        style={{ "--accent": accent, "--lit": litProgress, rotateX: springRotX, rotateY: springRotY }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const dx = (e.clientX - rect.left) / rect.width - 0.5;
          const dy = (e.clientY - rect.top) / rect.height - 0.5;
          rotY.set(8 * dx);
          rotX.set(-(8 * dy));
        }}
        onMouseLeave={() => {
          rotX.set(0);
          rotY.set(0);
        }}
      >
        <p className="events__when">
          <span className="events__index">{String(index + 1).padStart(2, "0")}</span>
          {event.date} · {event.time}
        </p>
        <p className="ar events__arabic">{event.arabic}</p>
        <h3 className="events__name">{event.name}</h3>
        <p className="events__subtitle">{event.subtitle}</p>
        <p className="events__place">{event.place}</p>
        {event.mapsUrl && (
          <a className="events__map-link" href={event.mapsUrl} target="_blank" rel="noreferrer">
            Get Directions
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

// ================= EVENTS TIMELINE SECTION =================
export function EventsTimeline({ events, heading }) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const nodeRefs = useRef([]);
  const pathLengthRef = useRef(0);
  const [nodePositions, setNodePositions] = useState([]);
  const [dim, setDim] = useState({ w: 760, h: 900 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 55%"]
  });
  const trackFillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useLayoutEffect(() => {
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const coords = nodeRefs.current.map(n => {
        if (!n) return null;
        const r = n.getBoundingClientRect();
        return {
          x: r.left - rect.left + r.width / 2,
          y: r.top - rect.top + r.height / 2
        };
      });
      if (coords.every(Boolean) && rect.width > 0) {
        setDim({ w: rect.width, h: rect.height });
        setNodePositions(coords);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [events]);

  const svgPathData = useMemo(() => {
    if (nodePositions.length < 2) return "";
    let d = `M ${nodePositions[0].x} ${nodePositions[0].y}`;
    for (let i = 1; i < nodePositions.length; i++) {
      const prev = nodePositions[i - 1];
      const curr = nodePositions[i];
      const midY = (prev.y + curr.y) / 2;
      const sign = i % 2 === 0 ? 1 : -1;
      d += ` C ${prev.x + 22 * sign} ${midY}, ${curr.x + 22 * sign} ${midY}, ${curr.x} ${curr.y}`;
    }
    return d;
  }, [nodePositions]);

  const flameX = useMotionValue(0);
  const flameY = useMotionValue(0);

  useEffect(() => {
    if (!pathRef.current) return;
    pathLengthRef.current = pathRef.current.getTotalLength();
    const p = scrollYProgress.get();
    const point = pathRef.current.getPointAtLength(Math.min(1, Math.max(0, p)) * pathLengthRef.current);
    flameX.set(point.x);
    flameY.set(point.y);
  }, [svgPathData, scrollYProgress, flameX, flameY]);

  useEffect(() => {
    return scrollYProgress.on("change", p => {
      const path = pathRef.current;
      if (!path || !pathLengthRef.current) return;
      const point = path.getPointAtLength(Math.min(1, Math.max(0, p)) * pathLengthRef.current);
      flameX.set(point.x);
      flameY.set(point.y);
    });
  }, [scrollYProgress, flameX, flameY]);

  return (
    <section id="events" className="sec sec--alt sec--geo events">
      <div className="wrap">
        <SectionTitle eyebrow={heading.eyebrow} title={heading.title} />
        <div className="events__list" ref={containerRef}>
          <div className="events__track" />
          <motion.div className="events__track-fill" style={{ height: trackFillHeight }} />
          {svgPathData && (
            <svg className="events__path-svg" viewBox={`0 0 ${dim.w} ${dim.h}`} aria-hidden="true">
              <path ref={pathRef} d={svgPathData} className="events__path-bg" />
              <motion.path d={svgPathData} className="events__path-fill" style={{ pathLength: scrollYProgress }} />
              <motion.g style={{ x: flameX, y: flameY }}>
                <circle r="12" className="events__flame-halo" />
                <circle r="4.5" className="events__flame-core" />
              </motion.g>
            </svg>
          )}
          {events.map((evt, idx) => (
            <EventRow
              key={evt.id}
              event={evt}
              index={idx}
              total={events.length}
              scrollYProgress={scrollYProgress}
              accent={TIMELINE_ACCENTS[idx % TIMELINE_ACCENTS.length]}
              nodeRef={el => (nodeRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= LIVE COUNTDOWN TIMER =================
const pad2 = num => String(num).padStart(2, "0");

function calcCountdown(targetIso) {
  const diff = new Date(targetIso).getTime() - Date.now();
  const safe = Math.max(0, diff);
  return {
    done: diff <= 0,
    days: pad2(Math.floor(safe / 864e5)),
    hours: pad2(Math.floor((safe / 36e5) % 24)),
    minutes: pad2(Math.floor((safe / 6e4) % 60)),
    seconds: pad2(Math.floor((safe / 1e3) % 60))
  };
}

export function CountdownTimer({ day }) {
  const [timer, setTimer] = useState({ done: false, days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    setTimer(calcCountdown(day.iso));
    const interval = setInterval(() => setTimer(calcCountdown(day.iso)), 1000);
    return () => clearInterval(interval);
  }, [day.iso]);

  const units = [
    { key: "days", label: "Days", value: timer.days },
    { key: "hours", label: "Hours", value: timer.hours },
    { key: "minutes", label: "Minutes", value: timer.minutes },
    { key: "seconds", label: "Seconds", value: timer.seconds }
  ];

  return (
    <section id="countdown" className="sec countdown">
      <AmbientParticles variant="orbs" seed={6} />
      <div className="wrap">
        <SectionTitle eyebrow="Save The Date" title={timer.done ? "The day is here" : "Counting Down"} />
        <Fade className="countdown__panel">
          <CrescentMoon className="countdown__crescent" />
          <div className="countdown__row">
            {units.map((u, i) => (
              <div key={u.key} className="countdown__box" style={{ "--stagger": i }}>
                <span className="countdown__num">
                  {u.value.split("").map((digit, di) => (
                    <span key={`${di}-${digit}`} className="countdown__digit">
                      {digit}
                    </span>
                  ))}
                </span>
                <span className="countdown__label">{u.label}</span>
              </div>
            ))}
          </div>
          <Divider className="countdown__rule" />
          <p className="countdown__note">
            Until our {day.countdownLabel} on {day.weekday}, {day.date} at {day.nikahTime}
          </p>
          <p className="ar countdown__dua">إِنْ شَاءَ اللَّٰه</p>
        </Fade>
      </div>
    </section>
  );
}

// ================= VENUE CARD SECTION =================
export function VenueSection({ data, photo }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=8&color=4A3330&bgcolor=FFFFFF&data=${encodeURIComponent(
    data.mapsUrl
  )}`;

  return (
    <section id="venue" className="sec sec--alt sec--geo venue">
      <AmbientParticles variant="orbs" seed={7} />
      <div className="wrap">
        <SectionTitle eyebrow="Where To Find Us" title="The Venue" />
        <Fade className="card venue__card">
          {photo && (
            <img
              className="venue__photo"
              src={photo}
              alt={`${data.name} — the venue`}
              loading="lazy"
              onError={e => (e.currentTarget.style.display = "none")}
            />
          )}
          <div className="venue__body">
            <div className="venue__info">
              <h3 className="venue__name">{data.name}</h3>
              <p className="venue__address">{data.address}</p>
              {data.note && (
                <p className="venue__note">
                  <span className="venue__note-dot" />
                  {data.note}
                </p>
              )}
              <a className="btn btn--fill venue__btn" href={data.mapsUrl} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </div>
            <figure className="venue__qr">
              <img
                src={qrUrl}
                alt={`QR code linking to ${data.name} on Google Maps`}
                width={120}
                height={120}
                loading="lazy"
              />
              <figcaption>Scan for directions</figcaption>
            </figure>
          </div>
        </Fade>
      </div>
    </section>
  );
}

// ================= RSVP SECTION =================
const INITIAL_RSVP_FORM = {
  name: "",
  phone: "",
  email: "",
  attending: "",
  guests: "1",
  message: "",
  website: ""
};

export function RSVPSection({ data }) {
  const [form, setForm] = useState(INITIAL_RSVP_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = field => e => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (field === "attending") setErrorMsg("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (!form.attending) {
      setErrorMsg("Please let us know whether you can join us.");
      return;
    }
    // Bot trap check
    if (form.website) return;

    setErrorMsg("");
    setSubmitted(true);
  };

  const isDeclining = form.attending === "no";

  useEffect(() => {
    if (submitted && !isDeclining) {
      confetti({
        particleCount: 90,
        spread: 100,
        startVelocity: 38,
        origin: { x: 0.5, y: 0.4 },
        colors: ["#b3a05e", "#d7c995", "#858640", "#ed8068"]
      });
    }
  }, [submitted, isDeclining]);

  return (
    <section id="rsvp" className="sec rsvp">
      <AmbientParticles variant="dust" seed={8} />
      <div className="wrap">
        <SectionTitle eyebrow="Kindly Respond" title="Will You Join Us?" />
        <Fade as="p" className="lede rsvp__intro">
          {data.message}
          {data.deadline ? (
            <>
              {" "}
              Please reply by <strong>{data.deadline}</strong>.
            </>
          ) : null}
        </Fade>

        {submitted ? (
          <Fade className="card card--framed rsvp__card rsvp__done" show={true}>
            <span className="rsvp__tick" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M11 20.5 17.5 27 29 14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3 className="rsvp__done-title">
              {isDeclining ? "Thank you for letting us know" : "Jazak Allah Khair"}
            </h3>
            <p className="rsvp__done-text">
              {isDeclining
                ? "You will be missed on the day — please keep us in your duas."
                : "Your response has been noted. We cannot wait to celebrate with you, In Sha Allah."}
            </p>
            <button
              type="button"
              className="rsvp__again"
              onClick={() => {
                setForm(INITIAL_RSVP_FORM);
                setErrorMsg("");
                setSubmitted(false);
              }}
            >
              Send another response
            </button>
          </Fade>
        ) : (
          <Fade as="form" className="card rsvp__card" onSubmit={handleSubmit}>
            <div className="rsvp__row">
              <label className="rsvp__field">
                <span>Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </label>
              <label className="rsvp__field">
                <span>Mobile Number</span>
                <input
                  type="tel"
                  required
                  placeholder="+91 00000 00000"
                  value={form.phone}
                  onChange={handleChange("phone")}
                />
              </label>
            </div>

            <label className="rsvp__field">
              <span>Email Address</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange("email")}
              />
            </label>

            <fieldset className="rsvp__group">
              <legend>Will you attend?</legend>
              <div className="rsvp__options">
                {[
                  { v: "yes", label: "Joyfully accept" },
                  { v: "no", label: "Regretfully decline" }
                ].map(opt => (
                  <label
                    key={opt.v}
                    className={`rsvp__option ${form.attending === opt.v ? "is-on" : ""}`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value={opt.v}
                      checked={form.attending === opt.v}
                      onChange={handleChange("attending")}
                    />
                    <span className="rsvp__radio" />
                    {opt.label}
                  </label>
                ))}
              </div>
              {errorMsg && (
                <p className="rsvp__error" role="alert">
                  {errorMsg}
                </p>
              )}
            </fieldset>

            <fieldset className="rsvp__group">
              <legend>Number of guests (including you)</legend>
              <div className="rsvp__pills">
                {data.guestOptions.map(num => (
                  <label
                    key={num}
                    className={`rsvp__pill ${form.guests === num ? "is-on" : ""}`}
                  >
                    <input
                      type="radio"
                      name="guests"
                      value={num}
                      checked={form.guests === num}
                      onChange={handleChange("guests")}
                    />
                    {num}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="rsvp__field">
              <span>Message for the couple (optional)</span>
              <textarea
                rows="3"
                placeholder="Leave your wishes here..."
                value={form.message}
                onChange={handleChange("message")}
              />
            </label>

            {/* Honeypot trap for bots */}
            <div className="rsvp__trap" aria-hidden="true" style={{ display: 'none' }}>
              <label htmlFor="rsvp-website">Website</label>
              <input
                id="rsvp-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={handleChange("website")}
              />
            </div>

            <button type="submit" className="btn btn--fill rsvp__submit">
              Send RSVP
            </button>
          </Fade>
        )}
      </div>
    </section>
  );
}

// ================= BLESSINGS / GIFTS SECTION =================
export function BlessingsSection({ data }) {
  return (
    <section id="blessings" className="sec sec--alt sec--geo blessings">
      <AmbientParticles variant="petals" seed={9} />
      <div className="wrap">
        <SectionTitle eyebrow="With Love" title="Your Blessings" />
        <Fade as="p" className="lede blessings__intro">
          {data.intro}
        </Fade>
        <div className="blessings__grid">
          {data.items.map((item, idx) => {
            const Icon = BLESSING_ICON_COMPONENTS[item.icon] || HeartIcon;
            return (
              <Fade key={item.title} className="card card--framed blessings__card" delay={0.1 * idx}>
                <span className="blessings__badge">
                  <Icon className="blessings__icon" />
                </span>
                <h3 className="blessings__title">{item.title}</h3>
                <p className="blessings__text">{item.text}</p>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ================= HOSTS & CONTACT SECTION =================
export function HostsSection({ data }) {
  const gridClass = data.length <= 1 ? "contact__grid contact__grid--single" : data.length === 2 ? "contact__grid" : "contact__grid contact__grid--many";

  return (
    <section id="contact" className="sec contact">
      <AmbientParticles variant="leaves" seed={10} />
      <div className="wrap">
        <SectionTitle eyebrow="Get In Touch" title="Hosts & Contact" />
        <div className={gridClass}>
          {data.map((host, idx) => (
            <Fade key={host.key} className="card card--framed contact__card" delay={0.1 * idx}>
              <p className="contact__label">{host.label}</p>
              <h3 className="contact__person">{host.person}</h3>
              <p className="contact__parents">{host.parents}</p>
              {host.phones.map(ph => (
                <a key={ph} className="btn btn--line contact__phone" href={`tel:${ph.replace(/\s/g, "")}`}>
                  {ph}
                </a>
              ))}
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================= FOOTER SECTION =================
export function Footer({ couple, data }) {
  return (
    <footer className="footer">
      <AmbientParticles variant="sparkle" seed={11} />
      <span className="footer__skyline" aria-hidden="true" />
      <div className="wrap footer__inner">
        <Fade>
          <Monogram initials={couple.initials} className="footer__monogram" />
        </Fade>
        <Fade as="h2" className="footer__names" delay={0.08}>
          {couple.nameOrder === "groom-first" ? (
            <>
              {couple.groom} <span className="script">&</span> {couple.bride}
            </>
          ) : (
            <>
              {couple.bride} <span className="script">&</span> {couple.groom}
            </>
          )}
        </Fade>
        <Fade delay={0.14}>
          <Divider className="footer__rule" />
        </Fade>
        <Fade as="p" className="footer__message" delay={0.18}>
          {data.message}
        </Fade>
        <Fade className="footer__dua" delay={0.24}>
          <span className="ar footer__dua-ar">{data.duaArabic}</span>
          <span className="footer__dua-latin">{data.dua}</span>
        </Fade>
        <Fade className="footer__meta" delay={0.3}>
          <span className="footer__hash">{couple.hashtag}</span>
          <span className="footer__meta-dot" />
          <span>{data.dateLine}</span>
        </Fade>
      </div>
    </footer>
  );
}

// ================= MASTER ZAYTOON INVITATION =================
export default function ZaytoonInvitation({ data }) {
  const audioRef = useRef(null);
  const [hasOpened, setHasOpened] = useState(false);

  // Normalize model data
  const processed = useMemo(() => {
    const groomName = data.couple.groomName;
    const brideName = data.couple.brideName;
    const order = data.couple.nameOrder ?? "groom-first";
    const [first, second] = order === "groom-first" ? [groomName, brideName] : [brideName, groomName];
    const weddingDate = new Date(data.weddingDateTime);
    const fullDate = weddingDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const gallery = data.gallery ?? [];

    return {
      photos: {
        venueCard: gallery[2]?.url || "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",
        bandOne: {
          src: gallery[0]?.url || "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-hero.jpg",
          quote: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا",
          sub: gallery[0]?.caption || "May Allah bless you both"
        },
        bandTwo: {
          src: gallery[1]?.url || "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/bg-venue.jpg",
          quote: "",
          sub: gallery[1]?.caption || `${groomName} & ${brideName} · ${fullDate}`
        }
      },
      couple: {
        groom: groomName,
        bride: brideName,
        groomFull: groomName,
        brideFull: brideName,
        nameOrder: order,
        hashtag: data.couple.hashtag ?? `#${groomName}Weds${brideName}`,
        initials: [first?.trim()?.[0]?.toUpperCase() ?? "A", second?.trim()?.[0]?.toUpperCase() ?? "B"]
      },
      day: {
        weekday: weddingDate.toLocaleDateString("en-US", { weekday: "long" }),
        date: fullDate,
        dateShort: `${weddingDate.getDate()} · ${weddingDate.getMonth() + 1} · ${weddingDate.getFullYear()}`,
        nikahTime: data.ceremonyStart ?? weddingDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
        city: data.venue.city ?? "",
        iso: data.weddingDateTime,
        countdownLabel: data.countdownLabel ?? "Nikah"
      },
      hero: {
        bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        eyebrow: data.heroEyebrow?.trim() || "Together with our families",
        intro: "We invite you to celebrate our",
        occasion: data.heroOccasion ?? "Nikah & Walima",
        video: {
          desktop: data.heroBackground?.url ?? "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16.mp4?v=2",
          mobile: data.heroBackground?.responsive?.mobile?.url ?? data.heroBackground?.url ?? "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/9.mp4?v=2"
        },
        frame: {
          desktop: data.heroBackground?.frame ?? "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/16-frame.jpg",
          mobile: data.heroBackground?.responsive?.mobile?.frame ?? data.heroBackground?.frame ?? "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/assets/9-frame.jpg"
        }
      },
      verse: {
        arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوٓا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
        translation: "And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy.",
        reference: "Surah Ar-Rum · 30:21"
      },
      invite: {
        greeting: [data.story?.greetingLine1, data.story?.greetingLine2].filter(Boolean).join(" ") || "Dear Family & Friends",
        message: data.story?.message ?? "",
        signature: "With love,"
      },
      eventsHeading: {
        eyebrow: "Celebrating Together",
        title: "Wedding Events"
      },
      events: data.events.map(e => {
        const key = (e.name ?? "").trim().toLowerCase().split(/[\s·—-]+/)[0];
        return {
          id: e.id,
          name: e.name,
          arabic: EVENT_ARABIC_NAMES[key] ?? "",
          subtitle: e.detail ?? "",
          date: e.date,
          time: e.time ?? "",
          place: e.location ?? "",
          mapsUrl: e.mapsUrl ?? "",
          icon: EVENT_ICONS[key] ?? "rings"
        };
      }),
      venue: {
        name: data.venue.name,
        address: data.venue.address,
        mapsUrl: data.venue.mapsUrl ?? "",
        note: data.venue.note ?? ""
      },
      scratch: {
        title: "Scratch & Reveal",
        hint: "Rub the foil with your finger or cursor",
        reveal: "We cannot wait to see you there"
      },
      rsvp: {
        enabled: data.rsvp?.enabled ?? true,
        deadline: data.rsvp?.deadline ?? data.rsvpDeadline ?? "",
        message: data.rsvp?.customMessage ?? "We have saved you a seat — kindly let us know if you can join us.",
        guestOptions: ["1", "2", "3", "4", "5+"]
      },
      blessings: {
        intro: "Your presence and your duas are the greatest gift we could ask for. If you would still like to send something, a small note is all we ask.",
        items: (data.gifts ?? []).map((g, i) => ({
          title: g.title,
          text: g.text,
          icon: i % 2 === 0 ? "heart" : "hands"
        }))
      },
      contact: [
        {
          key: "groom",
          label: data.hosts?.groomSide?.relation || "Groom's Family",
          person: data.hosts?.groomSide?.person || "",
          parents: data.hosts?.groomSide?.subtitle || "",
          phones: [data.hosts?.groomSide?.phone].filter(Boolean)
        },
        {
          key: "bride",
          label: data.hosts?.brideSide?.relation || "Bride's Family",
          person: data.hosts?.brideSide?.person || "",
          parents: data.hosts?.brideSide?.subtitle || "",
          phones: [data.hosts?.brideSide?.phone].filter(Boolean)
        }
      ],
      footer: {
        message: data.footer?.message ?? "Thank you for being a part of our story.",
        duaArabic: "آمِين",
        dua: "Ameen",
        dateLine: [fullDate, data.venue.name, data.venue.city].filter(Boolean).join(" · ")
      }
    };
  }, [data]);

  // Set document title
  useEffect(() => {
    const [t1, t2] = processed.couple.nameOrder === "groom-first"
      ? [processed.couple.groom, processed.couple.bride]
      : [processed.couple.bride, processed.couple.groom];
    document.title = `${t1} & ${t2} — Wedding Invitation`;
  }, [processed]);

  // Scroll lock while gate is closed
  useEffect(() => {
    if (!hasOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasOpened]);

  return (
    <div className="tmpl-zaytoon">
      {/* Background Audio Source */}
      <audio
        ref={audioRef}
        src={data.music?.url || "https://pub-717179bab2d447a1a4a8b832b13d0e04.r2.dev/template-assets/zaytoon/music.mp3"}
        loop
        preload="auto"
      />

      {/* Music Playing Indicator Toggle Button */}
      {hasOpened && <MusicToggle audioRef={audioRef} />}

      <a href="#top" className="skip-link">
        Skip to content
      </a>

      <main>
        {/* HERO SECTION */}
        <Hero
          couple={processed.couple}
          day={processed.day}
          hero={processed.hero}
          audioRef={audioRef}
          onOpen={() => setHasOpened(true)}
          showRsvp={processed.rsvp.enabled && !data.hiddenSections?.includes("contact") && !data.hiddenSections?.includes("rsvp")}
          showEvents={!data.hiddenSections?.includes("timeline")}
        />

        {/* QURAN VERSE */}
        <QuranVerse data={processed.verse} />

        {/* SCRATCH & REVEAL SURPRISE */}
        <ScratchSurprise data={processed.scratch} day={processed.day} couple={processed.couple} />

        {/* 3D FLIP INVITATION NOTE */}
        <InvitationFlipNote data={processed.invite} couple={processed.couple} />

        {/* PHOTO BANNER 1 */}
        <PhotoBand {...processed.photos.bandOne} />

        {/* EVENTS TIMELINE */}
        <EventsTimeline events={processed.events} heading={processed.eventsHeading} />

        {/* COUNTDOWN TIMER */}
        <CountdownTimer day={processed.day} />

        {/* VENUE CARD */}
        <VenueSection data={processed.venue} photo={processed.photos.venueCard} />

        {/* RSVP FORM */}
        {processed.rsvp.enabled && <RSVPSection data={processed.rsvp} />}

        {/* PHOTO BANNER 2 */}
        <PhotoBand {...processed.photos.bandTwo} />

        {/* BLESSINGS & DUA GIFTS */}
        <BlessingsSection data={processed.blessings} />

        {/* HOSTS & CONTACT */}
        <HostsSection data={processed.contact} />

        {/* FOOTER */}
        <Footer couple={processed.couple} data={processed.footer} />
      </main>
    </div>
  );
}
