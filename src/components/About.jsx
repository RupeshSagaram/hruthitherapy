import { about } from '../data/content'
import { photoSrc } from '../lib/photo'
import Blob from './Blob'
import ChipGroup from './ChipGroup'

function About() {
  return (
    <section id="about" className="bg-lilac/10">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="relative mx-auto aspect-square w-full max-w-xs animate-fade-up">
          <Blob className="absolute inset-0 h-full w-full scale-150 text-rose/60" />
          {photoSrc ? (
            <img
              src={photoSrc}
              alt={about.photoAlt}
              className="relative h-full w-full rounded-3xl object-cover shadow-lg"
            />
          ) : (
            <div
              role="img"
              aria-label={about.photoAlt}
              className="relative flex h-full w-full items-center justify-center rounded-3xl bg-powder text-center text-ink/50 shadow-lg"
            >
              Photo coming soon
            </div>
          )}
        </div>

        <div className="animate-fade-up">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            {about.heading}
          </h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-relaxed text-ink/80">
              {paragraph}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-8">
            <ChipGroup label="Languages" items={about.languages} />
            <ChipGroup label="Mode of therapy" items={about.modes} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
