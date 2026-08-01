import { areas } from '../data/content'

const tints = ['bg-rose/15', 'bg-lilac/15', 'bg-powder/15']

function Areas() {
  return (
    <section id="areas" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <h2 className="animate-fade-up text-center font-display text-3xl font-semibold text-ink md:text-4xl">
        {areas.heading}
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {areas.items.map((item, index) => (
          <div
            key={item.title}
            className={`animate-fade-up rounded-3xl p-6 shadow-sm ${tints[index % tints.length]}`}
          >
            <h3 className="font-display text-lg font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-[17px] leading-relaxed text-ink/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Areas
