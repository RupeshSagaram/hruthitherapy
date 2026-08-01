import { about, contact, site } from '../data/content'
import ChipGroup from './ChipGroup'

function Contact() {
  return (
    <section id="contact" className="bg-rose/10">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center md:py-24">
        <h2 className="animate-fade-up font-display text-3xl font-semibold text-ink md:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-3 animate-fade-up text-lg text-ink/70">{contact.intro}</p>

        <div className="mt-10 animate-fade-up rounded-3xl bg-background/80 p-8 shadow-sm md:p-10">
          <p className="font-display text-lg font-semibold text-ink">
            {contact.hoursLabel}
          </p>
          <p className="mt-1 text-[17px] text-ink/80">{contact.hours}</p>

          <div className="mt-6 flex justify-center">
            <ChipGroup label="Mode of therapy" items={about.modes} />
          </div>

          <a
            href={site.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-rose px-7 py-3.5 font-display font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {contact.cta}
          </a>

          {/*
            TODO: once the client provides an email address, add it here, e.g.:
            <p className="mt-4 text-sm text-ink/60">
              Or email <a href="mailto:REPLACE_ME" className="underline">REPLACE_ME</a>
            </p>
          */}
        </div>
      </div>
    </section>
  )
}

export default Contact
