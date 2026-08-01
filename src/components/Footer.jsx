import { site, footer } from '../data/content'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl bg-background/10 p-6 text-center text-[15px] leading-relaxed text-background/90">
          {footer.crisisNote}
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="text-background/70">{site.title}</p>
          <a
            href={site.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-rose"
          >
            {footer.profileLinkLabel}
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-background/50">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
