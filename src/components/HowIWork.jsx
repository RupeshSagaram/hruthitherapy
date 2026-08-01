import { howIWork } from '../data/content'

function HowIWork() {
  return (
    <section id="how-i-work" className="bg-powder/10">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="animate-fade-up text-center font-display text-3xl font-semibold text-ink md:text-4xl">
          {howIWork.heading}
        </h2>
        <p className="mt-3 animate-fade-up text-center text-lg text-ink/70">
          {howIWork.intro}
        </p>

        <div className="mt-10 flex flex-col gap-5">
          {howIWork.approaches.map((approach, index) => (
            <div
              key={approach.title}
              className="animate-fade-up flex gap-5 rounded-3xl bg-background/80 p-6 shadow-sm"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose font-display font-semibold text-ink"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {approach.title}
                </h3>
                <p className="mt-1.5 text-[17px] leading-relaxed text-ink/80">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork
