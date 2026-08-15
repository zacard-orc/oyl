export default function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-between py-xl bg-surface relative">
      <div className="container-max mx-auto px-md md:px-xl flex-grow flex flex-col justify-center items-center text-center">
        <div className="mb-lg">
          <span className="material-symbols-outlined text-4xl text-primary-container bg-surface-container rounded-full p-md inline-flex items-center justify-center shadow-sm">
            psychology
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">
          Clarity over Decoration.
        </h2>
        <div className="font-body-lg text-body-lg text-secondary max-w-2xl space-y-md">
          <p>
            We built OYL Notes on a philosophy of functional minimalism. We believe that your workspace should get out of the way, allowing your ideas to take center stage.
          </p>
          <p>
            By stripping away visual noise and leveraging subtle tonal layering, we&apos;ve created a high-focus environment that evokes a sense of organization and effortless productivity.
          </p>
        </div>
      </div>
    </section>
  );
}
