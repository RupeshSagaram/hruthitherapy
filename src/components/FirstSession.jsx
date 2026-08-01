import { firstSession } from '../data/content'

function FirstSession() {
  return (
    <section id="first-session" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2 className="animate-fade-up text-center font-display text-3xl font-semibold text-ink md:text-4xl">
        {firstSession.heading}
      </h2>
      <p className="mx-auto mt-3 max-w-xl animate-fade-up text-center text-lg text-ink/70">
        {firstSession.intro}
      </p>

      <div className="relative mt-14">
        <div
          aria-hidden="true"
          className="absolute top-6 left-[16.6%] right-[16.6%] hidden h-px bg-ink/15 md:block"
        />
        <div className="relative grid gap-10 md:grid-cols-3">
          {firstSession.steps.map((step, index) => (
            <div key={step.title} className="animate-fade-up text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose font-display text-lg font-semibold text-ink">
                {index + 1}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-[17px] leading-relaxed text-ink/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FirstSession
