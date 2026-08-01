import { hero, site } from '../data/content'
import growingMind from '../assets/growing-mind.svg'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
            {hero.subline}
          </p>
          <a
            href={site.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-rose px-7 py-3.5 font-display font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {hero.cta}
          </a>
          <p className="mt-4 text-sm text-ink/60">{hero.reassurance}</p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm animate-fade-up">
          <img
            src={growingMind}
            alt="Illustration of a head in profile with a small plant growing inside it"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
