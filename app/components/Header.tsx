import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-md h-14 md:px-xl">
      <div className="flex items-center gap-sm">
        <span className="font-headline-md text-headline-md font-black text-primary">OYL</span>
      </div>
      <div className="flex items-center gap-md">
        <button
          className="flex items-center gap-xs text-on-surface-variant hover:bg-surface-container transition-colors rounded-full px-md py-1 h-10 active:scale-[0.98] border border-outline-variant/50 bg-surface-container-lowest/50"
          aria-label="Switch language"
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 0" }}>
            language
          </span>
          <span className="font-label-md text-label-md">EN</span>
        </button>
        <button
          className="text-on-surface-variant hover:bg-surface-container transition-colors rounded-full p-2 flex items-center justify-center h-10 w-10 active:scale-[0.98]"
          aria-label="Sync"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            sync
          </span>
        </button>
        <button
          className="text-on-surface-variant hover:bg-surface-container transition-colors rounded-full p-2 flex items-center justify-center h-10 w-10 active:scale-[0.98]"
          aria-label="AI Assistant"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
            smart_toy
          </span>
        </button>
        <div className="h-8 w-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden ml-2 flex items-center justify-center">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">person</span>
        </div>
      </div>
    </nav>
  );
}
