import { MessageCircle } from "lucide-react";

const PHONE = "919866123084";

export function whatsappLink(service?: string) {
  const msg = service
    ? `Hi AvivaSmart, I'm interested in your ${service} service. Could you share more details?`
    : `Hi AvivaSmart, I'd like to know more about your smart home services.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[var(--shadow-gold)] transition-transform hover:scale-110"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ backgroundColor: "var(--whatsapp)" }} />
    </a>
  );
}
