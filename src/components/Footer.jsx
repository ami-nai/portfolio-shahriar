import BookingCalendar from './BookingCalendar'
import ContactForm from './ContactForm'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-8 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
        <div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            Book a meeting<span className="text-grey">.</span>
          </h2>
          <p className="mb-8 text-grey">
            Grab a slot that suits you — {profile.availability}
          </p>
          <BookingCalendar />
        </div>

        <div>
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
            Contact us<span className="text-grey">.</span>
          </h2>
          <p className="mb-8 text-grey">
            Or drop me a line at{' '}
            <a
              href={`mailto:${profile.email}`}
              className="font-semibold text-ink underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </p>
          <ContactForm />
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-grey md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}