export default function Footer() {
  return (
    <footer className="border-t border-outline-variant mt-xl pt-lg pb-md px-md md:px-xl w-full">
      <div className="container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="flex items-center gap-sm">
          <span className="font-headline-sm text-headline-sm font-black text-primary">OYL</span>
          <span className="text-secondary font-label-md text-label-md">© 2024</span>
        </div>
        <div className="flex gap-md font-label-md text-label-md text-secondary">
          <a className="hover:text-primary transition-colors" href="/privacy">Privacy</a>
          <a className="hover:text-primary transition-colors" href="/terms">Terms</a>
          <a className="hover:text-primary transition-colors" href="/contact">Contact</a>
        </div>
        <div className="flex gap-sm">
          <a
            className="text-secondary hover:text-primary transition-colors h-8 w-8 flex items-center justify-center rounded-full hover:bg-surface-container"
            href="#"
            aria-label="Share on social media"
          >
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
