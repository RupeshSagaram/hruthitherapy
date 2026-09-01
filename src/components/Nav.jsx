import { useState } from 'react'
import { site, nav } from '../data/content'

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-semibold text-ink">
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[17px] text-ink transition-colors hover:text-rose"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose px-5 py-2.5 font-display font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {nav.cta}
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M7 7l12 12M19 7L7 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M4 8h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 13h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="flex flex-col gap-4 px-6 pb-6 md:hidden"
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[17px] text-ink transition-colors hover:text-rose"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose px-5 py-2.5 text-center font-display font-semibold text-ink transition-opacity hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}

export default Nav
