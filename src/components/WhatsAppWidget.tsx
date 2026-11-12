export default function WhatsAppWidget() {
  return (
    <aside className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 group">
      <a
        aria-label="Chat with Dr. Piyush on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none ring-2 ring-white/60"
        href="https://wa.me/919876754000?text=Hello%20Dr.%20Piyush%20%26%20Dental%20Artistry%2C%20I%20would%20like%20to%20book%20an%20appointment"
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* Pulsing Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white" />
        </span>
        {/* WhatsApp Icon */}
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.49 0-2.96-.4-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.37c0-4.52 3.68-8.19 8.2-8.19 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.68 8.2-8.2 8.2zm4.49-6.13c-.25-.12-1.46-.72-1.69-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.41-.41-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.16-.47-.29z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-16 px-3.5 py-1.5 bg-on-surface text-surface rounded-lg font-sans text-[12px] leading-[16px] font-semibold tracking-[0.06em] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg hidden sm:block">
          Chat with Dr. Piyush on WhatsApp
        </span>
      </a>
    </aside>
  );
}
