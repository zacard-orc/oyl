"use client";

import { useI18n } from "../i18n/i18n-context";

export default function DownloadSection() {
  const { t } = useI18n();
  const githubUrl = "https://github.com/zacard-orc/oyl/releases/";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-xl relative bg-surface-container-lowest/50">
      <div className="container-max mx-auto px-md md:px-xl">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            {t("download.title")}
          </h2>
          <p className="font-body-md text-body-md text-secondary mt-sm">
            {t("download.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
          {/* macOS Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer"
          >
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                laptop_mac
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {t("download.platforms.macOS.name")}
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                {t("download.platforms.macOS.description")}
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              {t(`download.platforms.macOS.action`)}{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>

          {/* Windows Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer"
          >
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                desktop_windows
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {t("download.platforms.Windows.name")}
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                {t("download.platforms.Windows.description")}
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              {t(`download.platforms.Windows.action`)}{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>

          {/* iOS Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer"
          >
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                phone_iphone
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {t("download.platforms.iOS.name")}
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                {t("download.platforms.iOS.description")}
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              {t(`download.platforms.iOS.action`)}{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>

          {/* Android Card */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-xl p-lg flex flex-col items-start gap-md hover:border-primary-container transition-colors group cursor-pointer"
          >
            <div className="h-12 w-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>
                android
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {t("download.platforms.Android.name")}
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-xs">
                {t("download.platforms.Android.description")}
              </p>
            </div>
            <span className="font-label-md text-label-md text-primary mt-auto flex items-center gap-xs">
              {t(`download.platforms.Android.action`)}{" "}
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
