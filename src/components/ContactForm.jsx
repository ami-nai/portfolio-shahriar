import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex h-full min-h-[16rem] items-center justify-center rounded-2xl border border-line bg-bg p-8">
        <p className="text-lg font-semibold text-ink">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-grey">
          Name
        </span>
        <input
          required
          type="text"
          placeholder="Your name"
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-faint focus:border-ink focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-grey">
          Email
        </span>
        <input
          required
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-faint focus:border-ink focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.15em] text-grey">
          Message
        </span>
        <textarea
          required
          rows="4"
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-faint focus:border-ink focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="mt-1 rounded-xl bg-ink px-6 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-bg transition-all duration-300 hover:scale-[1.02] hover:bg-grey"
      >
        Send message
      </button>
    </form>
  )
}