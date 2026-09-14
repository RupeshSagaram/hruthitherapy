import { contact } from '../data/content'

function Contact() {
  return (
    <section id="contact" className="bg-lilac/10">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center md:py-24">
        <h2 className="animate-fade-up font-display text-3xl font-semibold text-ink md:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-3 animate-fade-up text-lg text-ink/70">{contact.intro}</p>

        <div className="mt-10 animate-fade-up space-y-6 rounded-3xl bg-background/80 p-8 shadow-sm md:p-10">
          <div>
            <p className="text-sm font-semibold tracking-wide text-ink/50 uppercase">
              {contact.phoneLabel}
            </p>
            <a
              href={contact.phoneHref}
              className="mt-1 inline-block text-lg text-ink transition-colors hover:text-rose"
            >
              {contact.phone}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-ink/50 uppercase">
              {contact.emailLabel}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-1 inline-block text-lg text-ink transition-colors hover:text-rose"
            >
              {contact.email}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-ink/50 uppercase">
              {contact.linkedinLabel}
            </p>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-lg text-ink transition-colors hover:text-rose"
            >
              {contact.linkedinDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
