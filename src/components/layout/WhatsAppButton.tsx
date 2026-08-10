import { company } from "@/data/company";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.45)] transition hover:-translate-y-1 hover:scale-105 md:bottom-7 md:left-7"
    >
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16.01 3C9.39 3 4 8.3 4 14.8c0 2.08.56 4.1 1.63 5.88L4 29l8.56-1.58A12.2 12.2 0 0 0 16 26.6c6.62 0 12-5.3 12-11.8C28 8.3 22.63 3 16.01 3Zm0 21.5c-1.8 0-3.56-.47-5.1-1.36l-.37-.21-5.08.94.97-4.9-.24-.39a9.4 9.4 0 0 1-1.47-5.08c0-5.24 4.36-9.5 9.73-9.5 5.36 0 9.72 4.26 9.72 9.5 0 5.24-4.36 9.5-9.72 9.5Zm5.35-7.05c-.29-.15-1.72-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.43-.86-.76-1.45-1.7-1.62-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.66-1.57-.9-2.15-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02.99-1.02 2.42 0 1.43 1.05 2.81 1.19 3 .15.2 2.07 3.3 5.12 4.5.72.3 1.28.48 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35Z" />
    </svg>
  );
}
