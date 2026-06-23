import { createFileRoute, Link } from "@tanstack/react-router";
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
  Instagram,
  Facebook,
  ArrowRight,
  Check,
  Sparkles,
  Home,
} from "lucide-react";
import logoAsset from "@/assets/avivasmart-logo.png.asset.json";
import heroImg from "@/assets/hero-smart-home.jpg";
import { whatsappLink } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AvivaSmart — Smart Home Automation in Hyderabad" },
      { name: "description", content: "Meet AvivaSmart, owned by Vishal Surapally. Premium home automation company in Hyderabad offering smart lighting, switches, curtains, locks, CCTV and voice control." },
      { property: "og:title", content: "About AvivaSmart — Smart Home Automation" },
      { property: "og:description", content: "Premium home automation in Hyderabad. Luxury meets intelligence." },
    ],
  }),
  component: AboutPage,
});

const highlights = [
  { icon: Home, title: "Hyderabad Born", desc: "Designed for Indian homes and Hyderabad lifestyles — from apartments to villas." },
  { icon: Sparkles, title: "End-to-End Service", desc: "Consultation, design, installation and lifetime support under one roof." },
  { icon: Check, title: "Trusted Quality", desc: "Only reliable, elegant products that look beautiful and work flawlessly." },
];

const services = [
  "Smart Lighting",
  "Smart Switches",
  "Curtain Automation",
  "Smart Door Locks",
  "CCTV & Security",
  "Voice Control — Alexa & Google Home",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 260 / 0.92) 0%, oklch(0.18 0.04 260 / 0.65) 60%, oklch(0.18 0.04 260 / 0.4) 100%)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} /> About us
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl">
              Making homes <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>smarter</span> in Hyderabad.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
              AvivaSmart is a premium home automation company owned by Vishal Surapally. We design intelligent, elegant systems that make everyday living effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "var(--secondary)" }}>Our story</div>
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">Luxury, intelligence, and simplicity — for every home.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              At AvivaSmart, we believe technology should disappear into the background of your life. Our systems adapt to you: lights that set the mood, curtains that open with the sunrise, doors that unlock as you arrive, and a home that responds to your voice.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Led by Vishal Surapally and based in Hyderabad, we bring personalized smart-home solutions to apartments, villas and commercial spaces across the city.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:opacity-90"
                style={{ background: "var(--gradient-hero)" }}
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                hash="services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent"
              >
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-luxe)]" style={{ background: "var(--gradient-card)" }}>
            <div className="flex items-center gap-4 border-b border-border pb-6">
              <img src={logoAsset.url} alt="AvivaSmart" className="h-14 w-14 object-contain" />
              <div>
                <div className="font-display text-xl font-semibold text-foreground">AvivaSmart</div>
                <div className="text-sm text-muted-foreground">Owned by Vishal Surapally</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]" style={{ background: "var(--gradient-card)" }}>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: "var(--gradient-hero)" }}>
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact mini */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="rounded-3xl p-8 text-white md:p-12" style={{ background: "var(--gradient-hero)" }}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready to make your home smarter?</h2>
              <p className="mt-4 text-lg text-white/80">Reach out and we'll help you plan a tailored smart-home experience.</p>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <a href="tel:+919866123084" className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-lg font-semibold">+91 98661 23084</div>
              </a>
              <a href="mailto:hello@avivasmart.in" className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-lg font-semibold">hello@avivasmart.in</div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="text-lg font-semibold">Hyderabad, Telangana</div>
              </div>
              <div className="mt-2 flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:bg-white/20">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:bg-white/20">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
