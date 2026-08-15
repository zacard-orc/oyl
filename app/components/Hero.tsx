export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-14 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida/AP1WRLv1I0Z7Gm5HABxsB3rrcYsCFrw5BS98pGT65CwSuqqYQuCZNtzNBZkdC9kKoWnoCUDyQRcGFiW1Y4O8W1HemvGRB-zNMo7zwJE-ZHpZLzAujzC1zqbKIiUhwRickMj6GQFe-Q6V5mDRjQgaNqWD4Kk90VrKx2PL0lkFYWAv2hnfBsa9bafOK9ihTV_0lgi6m9t4qIy-sfo9hitF_y1Ltnv7-CrHtfGsH1-q2B8Rf93kE_w-LdCwsFg1eWA')`,
          opacity: 0.8,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 container-max mx-auto px-md md:px-xl flex flex-col items-center text-center">
        <div className="glass-card rounded-xl p-lg md:p-xl flex flex-col items-center gap-md max-w-3xl">
          <h1 className="font-headline-lg text-headline-lg md:text-[56px] md:leading-[64px] tracking-tight text-on-surface">
            AI-Powered Workspace for Every Asset.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-xl text-center">
            The ultimate hub for your LLM workflows, images, videos, attachments, and 3D assets. Reimagined for clarity and focus.
          </p>
          <button className="mt-sm bg-primary-container hover:bg-primary-fixed-dim text-on-primary-container font-label-md text-label-md px-xl py-sm rounded-full transition-colors active:scale-95 shadow-sm border border-primary/10">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
