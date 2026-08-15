"use client";

import { useI18n } from "../i18n/i18n-context";

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex flex-col justify-between py-xl relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(/img/log2.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="container-max mx-auto px-md md:px-xl flex-grow flex flex-col justify-center items-center text-center relative z-10">
        <div className="mb-lg">
          <span className="material-symbols-outlined text-4xl text-primary-container bg-surface-container rounded-full p-md inline-flex items-center justify-center shadow-sm">
            psychology
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
          {t("about.title")}
        </h2>
        <div className="font-body-lg text-body-lg text-secondary max-w-2xl space-y-md">
          <p>
            {t("about.paragraph1")}
          </p>
          <p>
            {t("about.paragraph2")}
          </p>
        </div>
      </div>
    </section>
  );
}
