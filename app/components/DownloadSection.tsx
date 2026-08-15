export default function DownloadSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-xl relative bg-surface-container-lowest/50">
      <div className="container-max mx-auto px-md md:px-xl">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Available on all your devices.
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-sm">
            Seamless sync across your entire ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
          {/* macOS Card */}
          <div className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                laptop_mac
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                macOS
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                Native app optimized for Apple Silicon.
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              Download{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </div>

          {/* Windows Card */}
          <div className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                desktop_windows
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Windows
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                Fast, fluid experience for Windows 11.
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              Download{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </div>

          {/* iOS Card */}
          <div className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                phone_iphone
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                iOS
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                Capture thoughts on the go.
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              App Store{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </div>

          {/* Android Card */}
          <div className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                android
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Android
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                Material Design tailored for your device.
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              Google Play{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
