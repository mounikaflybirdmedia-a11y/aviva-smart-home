import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Lightbulb,
  ToggleRight,
  Blinds,
  Lock,
  ShieldCheck,
  Mic,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
  Zap,
  Home,
  Check,
} from "lucide-react";
import heroImg from "@/assets/hero-smart-home.jpg";
import lightingImg from "@/assets/service-smart-lighting.jpg";
import switchesImg from "@/assets/service-smart-switches.jpg";
import curtainImg from "@/assets/service-curtain-automation.jpg";
import lockImg from "@/assets/service-smart-door-lock.jpg";
import cctvImg from "@/assets/service-cctv-security.jpg";
import voiceImg from "@/assets/service-voice-control.jpg";
import { whatsappLink } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AvivaSmart — Luxury Smart Home Automation in Hyderabad" },
      { name: "description", content: "Premium home automation in Hyderabad — smart lighting, switches, curtains, locks, CCTV and Alexa/Google voice control. Luxury meets intelligence." },
      { property: "og:title", content: "AvivaSmart — Luxury Smart Home Automation" },
      { property: "og:description", content: "Transform your home with intelligent automation by AvivaSmart, Hyderabad." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Home_,
});

// Logo accent colors for the 6 service icon badges
const serviceAccents = [
  "var(--logo-orange)",   // Smart Lighting  — orange
  "var(--logo-blue)",     // Smart Switches  — blue
  "var(--logo-green)",    // Curtain Auto    — green
  "var(--logo-navy)",     // Smart Door Lock — navy
  "var(--logo-yellow)",   // CCTV            — yellow
  "var(--logo-orange)",   // Voice Control   — orange (cycle)
];

const services = [
  { icon: Lightbulb,  title: "Smart Lighting",    img: lightingImg, desc: "Mood-perfect, energy-efficient lighting that adapts to your day — dim, color, schedule from anywhere." },
  { icon: ToggleRight,title: "Smart Switches",    img: switchesImg, desc: "Retrofit elegant smart switches that work with your existing wiring. Control every point with a tap or voice." },
  { icon: Blinds,     title: "Curtain Automation",img: curtainImg,  desc: "Whisper-quiet motorized curtains. Wake to sunlight, sleep to silence — all on schedule." },
  { icon: Lock,       title: "Smart Door Locks",  img: lockImg,     desc: "Keyless entry with PIN, fingerprint, RFID & app access. Grant guest access remotely, securely." },
  { icon: ShieldCheck,title: "CCTV & Security",   img: cctvImg,     desc: "HD surveillance, motion alerts, cloud storage, and 24/7 live view on your phone." },
  { icon: Mic,        title: "Voice Control",     img: voiceImg,    desc: "Seamlessly integrated with Alexa & Google Home. Just say it — your home listens." },
];

const benefits = [
  { icon: Zap,      title: "Lower Power Bills",    desc: "Smart scheduling and presence detection cut energy waste dramatically.", accent: "var(--logo-orange)" },
  { icon: Home,     title: "Control From Anywhere",desc: "Forgot a light? Lock the door from your office or vacation — one tap away.", accent: "var(--logo-blue)" },
  { icon: Sparkles, title: "Effortless for Guests",desc: "Voice control acts as a friendly guide — no manuals, no fumbling for switches.", accent: "var(--logo-green)" },
];

function Home_() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New enquiry from ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/919866123084?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
          {/* Deep navy overlay tinted to logo palette */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.065 240 / 0.95) 0%, oklch(0.18 0.08 242 / 0.72) 60%, oklch(0.16 0.065 238 / 0.45) 100%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--logo-orange)" }} />
              Hyderabad's premium smart home studio
            </div>

            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Luxury meets{" "}
              <span style={{ background: "linear-gradient(135deg, var(--logo-orange), var(--logo-yellow))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                intelligence
              </span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
              We design and install elegant home automation systems — lighting, curtains, locks, security and voice — that make your home effortless, efficient, and unforgettable.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-orange)] transition hover:scale-[1.02]"
                style={{ background: "var(--gradient-orange)" }}
              >
                Chat on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.30)" }}
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--logo-orange)" }} /> Alexa & Google Ready</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--logo-green)" }} /> Energy Efficient</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: "var(--logo-blue)" }} /> Lifetime Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--logo-blue)" }}>What we craft</div>
          <h2 className="font-display text-4xl font-semibold text-foreground md:text-5xl">A complete intelligent home, beautifully integrated.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Every service is configurable through Alexa, Google Home, and our app. Tap any card to chat on WhatsApp.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <a
              key={s.title}
              href={whatsappLink(s.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-2 hover:shadow-[var(--shadow-luxe)]"
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, oklch(0.18 0.055 240 / 0.7) 0%, transparent 60%)" }} />
                {/* Colored icon badge */}
                <div
                  className="absolute bottom-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
                  style={{ backgroundColor: serviceAccents[i] }}
                >
                  <s.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: "var(--whatsapp)" }}>
                  Enquire on WhatsApp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Hover glow using logo colour */}
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundColor: serviceAccents[i] }}
              />
            </a>
          ))}
        </div>
      </section>

      {/* ── WHY AVIVASMART ───────────────────────────────────────── */}
      <section id="why" className="relative overflow-hidden py-24 md:py-32" style={{ background: "var(--gradient-hero)" }}>
        {/* subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="relative mx-auto max-w-7xl px-6 text-white">
          <div className="mb-16 max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--logo-orange)" }}>Why AvivaSmart</div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Built for the way you actually live.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: b.accent }}>
                  <b.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-white/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--logo-blue)" }}>Get in touch</div>
            <h2 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Let's design your smart home.</h2>
            <p className="mt-4 text-lg text-muted-foreground">Tell us a little about your space. We'll come back with a tailored plan within 24 hours.</p>

            <div className="mt-10 space-y-5">
              {[
                { href: "tel:+919866123084", icon: Phone, label: "Call us", value: "+91 98661 23084", accent: "var(--logo-orange)" },
                { href: "mailto:hello@avivasmart.in", icon: Mail, label: "Email", value: "hello@avivasmart.in", accent: "var(--logo-blue)" },
                { href: undefined, icon: MapPin, label: "Studio", value: "Hyderabad, Telangana", accent: "var(--logo-green)" },
              ].map((item) => {
                const Inner = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white" style={{ backgroundColor: item.accent }}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="text-lg font-semibold text-foreground">{item.value}</div>
                    </div>
                  </>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="flex items-start gap-4 group hover:[&>div:last-child>div:last-child]:underline">{Inner}</a>
                ) : (
                  <div key={item.label} className="flex items-start gap-4">{Inner}</div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="AvivaSmart Hyderabad"
                src="https://www.google.com/maps?q=Hyderabad,Telangana&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-luxe)] md:p-10" style={{ background: "var(--gradient-card)" }}>
            {/* Multicolor top stripe matching logo segments */}
            <div className="mb-6 h-1 w-full rounded-full" style={{ background: "linear-gradient(90deg, var(--logo-orange) 0%, var(--logo-blue) 33%, var(--logo-green) 66%, var(--logo-yellow) 100%)" }} />

            <h3 className="font-display text-2xl font-semibold text-foreground">Request a consultation</h3>
            <p className="mt-1 text-sm text-muted-foreground">We'll continue the conversation on WhatsApp.</p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Full name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="Vishal Surapally" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} type="tel" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="+91 ..." />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Tell us about your home</label>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className="mt-1.5 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/20" placeholder="Villa in Jubilee Hills, 4BHK, interested in lighting + curtains..." />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-blue)] transition hover:opacity-95"
                style={{ background: "var(--gradient-blue)" }}
              >
                Send via WhatsApp <ArrowRight className="h-4 w-4" />
              </button>
              {sent && <p className="text-center text-sm" style={{ color: "var(--whatsapp)" }}>Opening WhatsApp… we'll reply shortly.</p>}
            </div>
          </form>

        </div>
      </section>
    </div>
  );
}
