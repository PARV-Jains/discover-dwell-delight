import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Coffee,
  Package,
  Users,
  Store,
  QrCode,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Check,
  Menu,
  X,
  Zap,
  Heart,
  Eye,
  Repeat,
} from "lucide-react";
import { InnovyaShelf } from "@/components/InnovyaShelf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Innovya Solutions — Turn Waiting Time Into Discovery Time" },
      {
        name: "description",
        content:
          "Innovya installs curated product-discovery shelves inside cafés and restaurants — transforming waiting moments into memorable brand experiences.",
      },
      { property: "og:title", content: "Innovya Solutions — Discover More in Every Moment" },
      {
        property: "og:description",
        content:
          "Compact, beautifully designed product shelves that turn café waiting time into discovery time.",
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { label: "The Idea", href: "#idea" },
  { label: "How It Works", href: "#how" },
  { label: "For Cafés", href: "#cafes" },
  { label: "For Brands", href: "#brands" },
  { label: "Our Vision", href: "#vision" },
  { label: "Partner With Us", href: "#partner" },
];

function Landing() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left grad-hero"
      />
      <Nav />
      <Hero />
      <WaitingProblem />
      <Transformation />
      <ShelfReveal />
      <HowItWorks />
      <Environments />
      <CafeBenefits />
      <Ecosystem />
      <CustomerJourney />
      <ForBrands />
      <NetworkVision />
      <WhyInnovya />
      <PartnershipTimeline />
      <PartnerForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl grad-hero text-white shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg font-display font-bold tracking-tight">innovya</span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="opacity-80 hover:opacity-100 transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <MagneticButton href="#partner">Bring Innovya to Your Café</MagneticButton>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full glass"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden glass mx-4 mb-3 rounded-2xl p-4 shadow-soft"
          >
            <div className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-1">
                  {n.label}
                </a>
              ))}
              <a
                href="#partner"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full grad-hero px-4 py-2.5 text-center text-white font-semibold"
              >
                Bring Innovya to Your Café
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MagneticButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={
        variant === "solid"
          ? "inline-flex items-center gap-2 rounded-full grad-hero px-5 py-3 text-sm font-semibold text-white shadow-glow"
          : "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-background transition"
      }
    >
      {children} <ArrowRight className="h-4 w-4" />
    </motion.a>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 0.15], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);
  return (
    <section id="top" className="relative min-h-[100svh] pt-28 md:pt-36 overflow-hidden">
      {/* Background café blobs */}
      <motion.div style={{ y: yBg }} aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full grad-warm opacity-30 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[520px] w-[520px] rounded-full grad-cool opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full grad-candy opacity-25 blur-3xl" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 md:grid-cols-2 md:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--brand-purple)]" />
            Retail media for the real world
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[13vw] leading-[0.9] font-black tracking-tighter md:text-7xl lg:text-8xl"
          >
            Turn <span className="text-grad-hero">Waiting Time</span> Into{" "}
            <span className="italic font-display">Discovery Time.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            A beautifully designed product-discovery shelf for cafés and restaurants —
            created to entertain customers, showcase exciting brands, and transform
            everyday waiting moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#partner">Partner With Innovya</MagneticButton>
            <MagneticButton href="#how" variant="ghost">
              See How It Works
            </MagneticButton>
          </motion.div>
          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>Discover</span>
            <span>·</span>
            <span>Explore</span>
            <span>·</span>
            <span>Experience</span>
            <span>·</span>
            <span>Engage</span>
          </div>
        </div>

        <motion.div style={{ scale }} className="relative">
          <InnovyaShelf />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Waiting Problem ---------------- */
const WAIT_SCENES = [
  { icon: Coffee, title: "Waiting for a table", tag: "Lobby" },
  { icon: Package, title: "Waiting for an order", tag: "Counter" },
  { icon: Coffee, title: "Waiting for coffee", tag: "Barista" },
  { icon: Users, title: "Waiting for friends", tag: "Lounge" },
  { icon: Store, title: "Waiting at the counter", tag: "Bill" },
];
function WaitingProblem() {
  return (
    <section id="idea" className="relative bg-[color:var(--ink)] text-[color:var(--cream)] py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl text-4xl font-black leading-[1] md:text-7xl"
        >
          Waiting happens everywhere.{" "}
          <span className="text-[color:var(--brand-yellow)]">Engagement rarely does.</span>
        </motion.h2>
        <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
          Customers spend several minutes each visit with nothing meaningful to engage
          with. Most cafés leave that time unused.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {WAIT_SCENES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                {s.tag}
              </span>
              <s.icon className="mt-6 h-8 w-8 text-[color:var(--brand-orange)]" />
              <h3 className="mt-8 text-lg font-semibold">{s.title}</h3>
              <div className="mt-6 flex items-center justify-between text-xs text-white/40">
                <span>0:00</span>
                <div className="mx-2 h-px flex-1 bg-white/10" />
                <span>07:32</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl text-3xl font-black leading-tight md:text-5xl"
        >
          Innovya transforms these unused minutes into{" "}
          <span className="text-grad-hero">memorable discovery moments.</span>
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- Transformation slider ---------------- */
function Transformation() {
  const [pct, setPct] = useState(55);
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="max-w-3xl text-4xl font-black leading-[1] md:text-6xl">
            The <span className="text-grad-hero">transformation</span> of an ordinary corner.
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Drag to reveal what happens when Innovya arrives.
          </p>
        </div>

        <div className="relative mt-14 aspect-[16/10] w-full overflow-hidden rounded-[36px] shadow-soft select-none">
          {/* After (colorful) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.94 0.05 85), oklch(0.9 0.08 55))",
            }}
          >
            <div className="absolute inset-0 opacity-90">
              <div className="absolute bottom-10 left-10 right-10 h-24 rounded-2xl bg-white/60 shadow-soft" />
              <div className="absolute bottom-16 left-16 flex gap-3">
                {["var(--brand-pink)","var(--brand-yellow)","var(--brand-blue)","var(--brand-lime)","var(--brand-purple)"].map((c,i)=>(
                  <div key={i} className="h-16 w-10 rounded-lg" style={{background:c}} />
                ))}
              </div>
              <div className="absolute right-10 top-10 rounded-full grad-hero px-4 py-2 text-xs font-bold text-white">
                After Innovya
              </div>
              <p className="absolute left-10 top-10 max-w-xs text-sm font-medium text-[color:var(--ink)]">
                Waiting becomes interactive, enjoyable, and memorable.
              </p>
            </div>
          </div>
          {/* Before (dull) — clipped */}
          <div
            className="absolute inset-0 bg-[color:var(--ink)] text-white"
            style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
          >
            <div className="absolute inset-0 opacity-90">
              <div className="absolute bottom-10 left-10 right-10 h-24 rounded-2xl border border-white/10" />
              <div className="absolute right-10 top-10 rounded-full bg-white/10 px-4 py-2 text-xs font-bold">
                Before Innovya
              </div>
              <p className="absolute left-10 top-10 max-w-xs text-sm text-white/60">
                Waiting feels passive, repetitive, forgettable.
              </p>
              <div className="absolute bottom-40 left-20 h-16 w-8 rounded-md bg-white/10" />
            </div>
          </div>
          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.9)] pointer-events-none"
            style={{ left: `calc(${pct}% - 1.5px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-white text-[color:var(--ink)] shadow-glow pointer-events-none"
            style={{ left: `calc(${pct}% - 28px)` }}
          >
            <Repeat className="h-5 w-5" />
          </div>
          <input
            aria-label="Reveal Innovya"
            type="range"
            min={0}
            max={100}
            value={pct}
            onChange={(e) => setPct(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Shelf Reveal ---------------- */
const SHELF_LABELS = [
  "Compact Footprint",
  "Premium Design",
  "Easy Placement",
  "Curated Products",
  "Minimal Staff Involvement",
];
function ShelfReveal() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--ink)] text-white py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-0">
        <div className="absolute -top-20 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full grad-hero opacity-30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <span className="rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.25em]">
            The Shelf
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-[1] md:text-7xl">
            Meet the shelf that makes{" "}
            <span className="text-grad-hero">waiting interesting.</span>
          </h2>
        </div>
        <div className="relative mt-16 grid gap-8 md:grid-cols-[1fr_1.2fr_1fr] items-center">
          <div className="space-y-4">
            {SHELF_LABELS.slice(0, 3).map((l) => (
              <ShelfLabel key={l} text={l} />
            ))}
          </div>
          <div className="relative">
            <InnovyaShelf compact />
          </div>
          <div className="space-y-4 md:text-right">
            {SHELF_LABELS.slice(3).map((l) => (
              <ShelfLabel key={l} text={l} right />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function ShelfLabel({ text, right }: { text: string; right?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: right ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium backdrop-blur ${
        right ? "flex-row-reverse" : ""
      }`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg grad-hero">
        <Check className="h-4 w-4 text-white" />
      </span>
      {text}
    </motion.div>
  );
}

/* ---------------- How It Works ---------------- */
const STEPS = [
  { n: "01", title: "We Install", body: "Innovya places a compact display shelf inside your café or restaurant.", grad: "grad-cool", icon: Store },
  { n: "02", title: "We Curate", body: "Products are selected and arranged to create an appealing discovery experience.", grad: "grad-warm", icon: Package },
  { n: "03", title: "Customers Explore", body: "Visitors discover and interact with products while they wait.", grad: "grad-candy", icon: Eye },
  { n: "04", title: "Everyone Benefits", body: "Cafés grow engagement, brands gain visibility, customers enjoy waiting.", grad: "grad-fresh", icon: Heart },
];
function HowItWorks() {
  return (
    <section id="how" className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black leading-[1] md:text-6xl">
            Simple to install. Easy to manage.{" "}
            <span className="text-grad-hero">Enjoyable to experience.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-[28px] p-7 text-white shadow-soft min-h-[340px] flex flex-col justify-between ${s.grad}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-[0.2em]">{s.n}</span>
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black">{s.title}</h3>
                <p className="mt-3 text-white/90">{s.body}</p>
              </div>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Environments carousel ---------------- */
const ENVIRONMENTS = [
  { name: "Premium coffee shop", tint: "var(--brand-orange)" },
  { name: "Casual student café", tint: "var(--brand-lime)" },
  { name: "Fine-dining waiting area", tint: "var(--brand-purple)" },
  { name: "Quick-service restaurant", tint: "var(--brand-yellow)" },
  { name: "Dessert café", tint: "var(--brand-pink)" },
  { name: "Coworking café", tint: "var(--brand-blue)" },
  { name: "Boutique bakery", tint: "var(--brand-orange)" },
  { name: "Restaurant reception", tint: "var(--brand-purple)" },
];
function Environments() {
  return (
    <section id="cafes" className="py-28 md:py-40 bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="max-w-3xl text-4xl font-black leading-[1] md:text-6xl">
            Built to <span className="text-grad-hero">belong</span> in your space.
          </h2>
          <p className="max-w-sm text-muted-foreground">One concept. Endless placements.</p>
        </div>
      </div>
      <div className="mt-14 relative overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max px-6">
          {[...ENVIRONMENTS, ...ENVIRONMENTS].map((e, i) => (
            <div
              key={i}
              className="relative h-[340px] w-[280px] shrink-0 rounded-[28px] p-6 text-white overflow-hidden shadow-soft"
              style={{
                background: `linear-gradient(160deg, ${e.tint}, color-mix(in oklab, ${e.tint} 55%, black))`,
              }}
            >
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/15 backdrop-blur p-4 border border-white/25">
                <span className="text-xs uppercase tracking-widest opacity-80">Innovya inside</span>
                <h3 className="mt-1 text-lg font-bold">{e.name}</h3>
              </div>
              <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-white/25 backdrop-blur grid place-items-center">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="absolute left-6 top-16 h-24 w-16 rounded-xl bg-white/20 backdrop-blur" />
              <div className="absolute left-24 top-24 h-14 w-14 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Café Benefits ---------------- */
const CAFE_BENEFITS = [
  { icon: Heart, title: "Better Customer Experience", body: "Make waiting more enjoyable and engaging.", color: "var(--brand-pink)" },
  { icon: Sparkles, title: "More Memorable Visits", body: "Give customers something interesting to talk about.", color: "var(--brand-purple)" },
  { icon: Zap, title: "Brand-Led Footfall", body: "Participate in promotional campaigns and activations.", color: "var(--brand-orange)" },
  { icon: Package, title: "Minimal Space Required", body: "The shelf fits comfortably into compact environments.", color: "var(--brand-blue)" },
  { icon: Check, title: "No Operational Burden", body: "Innovya manages the concept — no extra work for staff.", color: "var(--brand-lime)" },
  { icon: Store, title: "Stronger Brand Perception", body: "Position your café as modern and customer-focused.", color: "var(--brand-yellow)" },
];
function CafeBenefits() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-3xl text-4xl font-black leading-[1] md:text-6xl">
          A small addition with a <span className="text-grad-hero">meaningful impact.</span>
        </h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAFE_BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <span
                className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-glow"
                style={{ background: `linear-gradient(160deg, ${b.color}, color-mix(in oklab, ${b.color} 50%, black))` }}
              >
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.body}</p>
              <div
                className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full opacity-0 group-hover:opacity-40 blur-2xl transition"
                style={{ background: b.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ecosystem ---------------- */
function Ecosystem() {
  const nodes = [
    { label: "Cafés & Restaurants", angle: -90, color: "var(--brand-orange)" },
    { label: "Customers", angle: 30, color: "var(--brand-pink)" },
    { label: "Brands", angle: 150, color: "var(--brand-blue)" },
  ];
  return (
    <section className="bg-[color:var(--ink)] text-white py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[1] md:text-6xl">
          A win for cafés. A discovery for customers.{" "}
          <span className="text-grad-hero">A platform for brands.</span>
        </h2>
        <div className="relative mx-auto mt-20 aspect-square w-full max-w-[560px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="-100 -100 200 200">
            {nodes.map((n, i) => {
              const a = (n.angle * Math.PI) / 180;
              const x = Math.cos(a) * 78;
              const y = Math.sin(a) * 78;
              return (
                <motion.line
                  key={i}
                  x1={0}
                  y1={0}
                  x2={x}
                  y2={y}
                  stroke="url(#g)"
                  strokeWidth={0.6}
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                />
              );
            })}
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.7" />
                <stop offset="1" stopColor="#fff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="grid h-28 w-28 place-items-center rounded-full grad-hero text-white shadow-glow font-display font-bold">
              innovya
            </div>
          </div>
          {nodes.map((n, i) => {
            const a = (n.angle * Math.PI) / 180;
            const x = 50 + (Math.cos(a) * 78) / 2;
            const y = 50 + (Math.sin(a) * 78) / 2;
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.15 }}
                className="absolute w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 text-center text-sm font-bold shadow-glow"
                style={{ left: `${x}%`, top: `${y}%`, background: n.color, color: "white" }}
              >
                {n.label}
              </motion.div>
            );
          })}
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 text-left md:grid-cols-3">
          <EcoList
            title="Cafés"
            items={["Better waiting experience","Higher engagement","Modern brand perception","Promotional opportunities"]}
          />
          <EcoList
            title="Customers"
            items={["Discover new products","Try new experiences","Enjoy waiting time","Interact with brands offline"]}
          />
          <EcoList
            title="Brands"
            items={["Product visibility","Real-world discovery","Customer interaction","Presence in high-footfall venues"]}
          />
        </div>
      </div>
    </section>
  );
}
function EcoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-yellow)]" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Customer Journey ---------------- */
const JOURNEY = [
  { n: 1, title: "Notice", body: "The customer spots the shelf.", floating: "Curiosity" },
  { n: 2, title: "Explore", body: "They browse the curated products.", floating: "Interaction" },
  { n: 3, title: "Pick Up", body: "They handle something that catches their eye.", floating: "Discovery" },
  { n: 4, title: "Scan", body: "A QR code opens the brand's story.", floating: "Recall" },
  { n: 5, title: "Remember", body: "They share, save, or come back to buy.", floating: "Return" },
];
function CustomerJourney() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-3xl text-4xl font-black leading-[1] md:text-6xl">
          See it. Pick it up. <span className="text-grad-hero">Discover something new.</span>
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-5">
          {JOURNEY.map((j, i) => (
            <motion.div
              key={j.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl bg-card p-6 border border-border shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="text-6xl font-black text-grad-hero leading-none">{j.n}</span>
                {j.n === 4 && <QrCode className="h-8 w-8 text-muted-foreground" />}
              </div>
              <h3 className="mt-6 text-xl font-bold">{j.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{j.body}</p>
              <span className="mt-6 inline-block rounded-full grad-hero px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {j.floating}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- For Brands ---------------- */
const BRAND_CARDS = [
  { title: "Product Discovery", body: "Let customers experience products outside traditional shelves." },
  { title: "Physical Visibility", body: "Place brands inside cafés and restaurants with relevant audiences." },
  { title: "Brand Activations", body: "Support promotional campaigns and experiential marketing." },
  { title: "Customer Interaction", body: "Create meaningful offline touchpoints with potential customers." },
  { title: "Local Market Presence", body: "Build visibility across selected café and restaurant locations." },
];
function ForBrands() {
  return (
    <section id="brands" className="bg-white py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <span className="rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              For Brands
            </span>
            <h2 className="mt-6 text-4xl font-black leading-[1] md:text-6xl">
              Real products. Real spaces.{" "}
              <span className="text-grad-hero">Real customer attention.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Reach consumers where they naturally pause — inside the cafés and
              restaurants they already love.
            </p>
            {/* Stylised city map */}
            <div className="relative mt-10 aspect-[4/3] rounded-3xl border border-border bg-secondary p-6 overflow-hidden">
              <svg viewBox="0 0 400 300" className="h-full w-full">
                <defs>
                  <linearGradient id="ln" x1="0" x2="1">
                    <stop offset="0" stopColor="var(--brand-purple)" />
                    <stop offset="1" stopColor="var(--brand-orange)" />
                  </linearGradient>
                </defs>
                {[
                  [60, 80],[140, 60],[220, 100],[300, 70],[340, 160],
                  [280, 220],[190, 200],[110, 230],[60, 170],[240, 40],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="10" fill="url(#ln)" opacity="0.15" />
                    <circle cx={x} cy={y} r="4" fill="url(#ln)" />
                    <motion.circle
                      cx={x} cy={y} r="4" fill="url(#ln)"
                      animate={{ r: [4, 14, 4], opacity: [0.9, 0, 0.9] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </g>
                ))}
                <path
                  d="M60 80 L140 60 L220 100 L300 70 L340 160 L280 220 L190 200 L110 230 L60 170"
                  fill="none" stroke="url(#ln)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5"
                />
              </svg>
              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-muted-foreground">
                Innovya network · concept illustration
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {BRAND_CARDS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <span className="text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Network Vision ---------------- */
function NetworkVision() {
  return (
    <section id="vision" className="relative overflow-hidden py-28 md:py-40 bg-[color:var(--ink)] text-white">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--brand-purple), transparent 40%), radial-gradient(circle at 80% 30%, var(--brand-blue), transparent 40%), radial-gradient(circle at 50% 80%, var(--brand-orange), transparent 45%)",
        }} />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-4xl text-4xl font-black leading-[1] md:text-7xl">
          One shelf today.{" "}
          <span className="text-grad-hero">A discovery network tomorrow.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
          Innovya is building a network of high-engagement physical spaces where
          products can be discovered naturally during everyday moments.
        </p>
        <div className="mt-14 grid gap-4 md:grid-cols-4 text-sm">
          {["Brands", "Innovya Network", "Cafés & Restaurants", "Customers"].map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                Node {i + 1}
              </span>
              <div className="mt-3 text-xl font-bold">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Innovya ---------------- */
const WHY = [
  "Compact and thoughtful setup",
  "Customer-first experience",
  "Curated product displays",
  "Minimal café involvement",
  "Brand collaboration opportunities",
  "Flexible placement",
  "Modern, attractive design",
  "Simple partnership process",
];
function WhyInnovya() {
  return (
    <section className="bg-[color:var(--ink)] text-white py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-end">
          <h2 className="text-4xl font-black leading-[1] md:text-6xl">
            You focus on hospitality.{" "}
            <span className="text-grad-hero">We create the discovery experience.</span>
          </h2>
          <p className="text-white/70 max-w-sm md:justify-self-end">
            No complicated operations. No disruption. Just a more engaging
            customer experience.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <motion.div
              key={w}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 hover:border-white/40 transition"
            >
              <span className="text-xs uppercase tracking-widest text-white/40">
                0{i + 1}
              </span>
              <p className="mt-3 text-lg font-semibold">{w}</p>
              <div className="pointer-events-none absolute -bottom-14 -right-14 h-32 w-32 rounded-full grad-hero opacity-0 blur-2xl group-hover:opacity-60 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partnership Timeline ---------------- */
const TIMELINE = [
  { t: "Connect", body: "The café or restaurant expresses interest." },
  { t: "Space Review", body: "Innovya identifies the ideal shelf placement." },
  { t: "Setup", body: "The shelf is installed and prepared." },
  { t: "Curation", body: "Relevant products are displayed." },
  { t: "Launch", body: "Customers begin exploring the Innovya experience." },
  { t: "Ongoing", body: "Innovya maintains and updates the experience." },
];
function PartnershipTimeline() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-3xl text-4xl font-black leading-[1] md:text-6xl">
          From first conversation to <span className="text-grad-hero">shelf installation.</span>
        </h2>
        <div className="relative mt-14">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] grad-hero opacity-30 md:-translate-x-1/2" />
          <ol className="space-y-8">
            {TIMELINE.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 items-center gap-6 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:col-start-2" : ""
                }`}
              >
                <div className="pl-12 md:pl-0 md:px-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-purple)]">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                </div>
                <span className="absolute left-4 md:left-1/2 top-2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full grad-hero text-white font-bold text-sm shadow-glow">
                  {i + 1}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partner Form ---------------- */
function PartnerForm() {
  const [sent, setSent] = useState(false);
  return (
    <section id="partner" className="py-28 md:py-40 bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
              Partner With Us
            </span>
            <h2 className="mt-6 text-4xl font-black leading-[1] md:text-6xl">
              Give your customers something{" "}
              <span className="text-grad-hero">new to discover.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Bring Innovya Solutions to your café or restaurant and turn everyday
              waiting moments into colourful product-discovery experiences.
            </p>
            <div className="mt-8 flex gap-3">
              <MagneticButton href="#partner">Become a Partner</MagneticButton>
              <MagneticButton href="#partner" variant="ghost">
                Schedule a Meeting
              </MagneticButton>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-[32px] border border-border bg-secondary/60 p-6 md:p-8 shadow-soft"
          >
            {sent ? (
              <div className="grid place-items-center py-16 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full grad-hero text-white shadow-glow">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Thanks — we'll be in touch.</h3>
                <p className="mt-2 text-muted-foreground">
                  Our partnerships team will reach out within 2 business days.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Café / Restaurant" name="venue" required />
                <Field label="City" name="city" required />
                <Field label="Area / Location" name="area" />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Type of Venue" name="type" placeholder="Coffee shop, bakery…" />
                <Field label="Daily Footfall" name="footfall" placeholder="Approx." />
                <Field label="Preferred Meeting Time" name="time" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--brand-purple)]"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full grad-hero px-6 py-4 text-sm font-bold text-white shadow-glow hover:opacity-95"
                >
                  Send Partnership Enquiry <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}{required && <span className="text-[color:var(--brand-pink)]"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none focus:border-[color:var(--brand-purple)]"
      />
    </div>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 grad-hero text-white">
      <div aria-hidden className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-white/30 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-black/20 blur-3xl animate-float-alt" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 text-center">
        <h2 className="text-5xl font-black leading-[0.95] md:text-8xl">
          Let's make waiting <em className="italic font-display">worth it.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/90 md:text-lg">
          Join Innovya Solutions and create a more engaging experience for every
          customer who walks through your doors.
        </p>
        <div className="mt-10 flex justify-center">
          <motion.a
            href="#partner"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[color:var(--ink)] shadow-glow"
          >
            Partner With Innovya <ArrowRight className="h-5 w-5" />
          </motion.a>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 text-left md:grid-cols-4 text-sm">
          {[
            { icon: Mail, label: "hello@innovya.co" },
            { icon: Phone, label: "+91 00000 00000" },
            { icon: Instagram, label: "@innovya" },
            { icon: MapPin, label: "Bengaluru, IN" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl glass-dark p-4 flex items-center gap-3">
              <c.icon className="h-4 w-4" /> {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-white/80 py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl grad-hero text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-bold text-white">innovya</span>
          </div>
          <p className="mt-4 text-sm max-w-xs">
            Innovya Solutions — Discover More in Every Moment.
          </p>
        </div>
        <FooterCol title="Explore" links={NAV} />
        <FooterCol title="Company" links={[
          { label: "About", href: "#idea" },
          { label: "Vision", href: "#vision" },
          { label: "Partners", href: "#partner" },
        ]} />
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Connect</h4>
          <div className="mt-4 flex gap-3">
            {[Instagram, Linkedin, Mail].map((I, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-white hover:text-[color:var(--ink)] transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-5 md:px-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
        <span>© {new Date().getFullYear()} Innovya Solutions. All rights reserved.</span>
        <span>Discover · Explore · Experience · Engage</span>
      </div>
    </footer>
  );
}
function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-widest text-white">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}><a href={l.href} className="hover:text-white transition">{l.label}</a></li>
        ))}
      </ul>
    </div>
  );
}
