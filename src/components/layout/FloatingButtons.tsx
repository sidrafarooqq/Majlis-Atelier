import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        aria-label="Call"
        className="grid h-12 w-12 place-items-center rounded-full bg-gold text-primary-foreground shadow-luxury transition-transform hover:scale-110 md:h-14 md:w-14"
      >
        <Phone size={20} />
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="pulse-whatsapp grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:scale-110 md:h-14 md:w-14"
      >
        {/* WhatsApp glyph */}
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden>
          <path d="M19.11 17.39c-.29-.15-1.72-.85-1.99-.94-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34zm-5.36 7.27h-.01a10.06 10.06 0 0 1-5.12-1.4l-.37-.22-3.8 1 1.02-3.71-.24-.38a10.06 10.06 0 1 1 8.52 4.71zm8.55-18.6A12.06 12.06 0 0 0 3.4 21.34L2 26.6l5.39-1.41a12.06 12.06 0 0 0 5.77 1.47h.01a12.06 12.06 0 0 0 12.06-12.06c0-3.22-1.26-6.25-3.54-8.54z" />
        </svg>
      </a>
    </div>
  );
}
