import { useEffect, useState } from 'react'
import { projects } from '../data'

const slots = [0, 1, 2]

const POSITIONS = [
  { left: '50%', transform: 'translate(-50%, 0) rotate(-1.5deg) scale(1)', z: 30 },
  { left: '20%', transform: 'translate(-50%, 1.75rem) rotate(-8deg) scale(0.94)', z: 20 },
  { left: '78%', transform: 'translate(-50%, -1.5rem) rotate(7deg) scale(0.94)', z: 10 },
]

function Phone({ p, slot }) {
  const pos = POSITIONS[slot]
  const theme = `linear-gradient(165deg, ${p.theme[0]}, ${p.theme[1]})`
  return (
    <article
      className="absolute top-8 h-[22rem] w-40 sm:h-[26rem] sm:w-48 md:top-10 md:h-[30rem] md:w-56"
      style={{
        left: pos.left,
        transform: pos.transform,
        zIndex: pos.z,
        transition:
          'left 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDelay: `${slot * 90}ms`,
      }}
    >
      <div className="h-full w-full rounded-[2rem] border-[8px] border-ink bg-ink shadow-2xl md:rounded-[2.5rem] md:border-[10px]">
        <div
          className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] md:rounded-[1.9rem]"
          style={{ background: theme }}
        >
          <span className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink/70" />

          <div className="flex items-center justify-between px-4 pt-3 text-[10px] font-semibold text-ink/70">
            <span className="tabular-nums">9:41</span>
            <span className="flex items-center gap-1">
              <span className="flex items-end gap-px">
                <span className="h-1 w-0.5 rounded-sm bg-ink/50" />
                <span className="h-1.5 w-0.5 rounded-sm bg-ink/50" />
                <span className="h-2 w-0.5 rounded-sm bg-ink/50" />
                <span className="h-2.5 w-0.5 rounded-sm bg-ink" />
              </span>
              <span className="relative h-2 w-3.5 rounded-[3px] border border-ink/40">
                <span className="absolute inset-[1.5px] right-[3px] rounded-[1px] bg-ink" />
              </span>
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between px-4">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-ink/10 text-sm font-extrabold shadow-sm"
              style={{ background: theme, color: '#1a1a1a' }}
            >
              {p.title[0]}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/50">
              {p.category}
            </span>
          </div>

          <div className="mt-4 px-4">
            <h3 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              {p.title}
            </h3>
            <p className="mt-1.5 line-clamp-3 text-[11px] leading-relaxed text-ink/70 md:text-xs">
              {p.intro}
            </p>
          </div>

          <div className="mt-auto px-4 pb-4">
            <div className="flex items-center justify-between border-t border-ink/10 pt-3 text-[10px] font-semibold">
              <span className="tabular-nums text-ink/50">{p.year}</span>
              <span className="rounded-full bg-ink/10 px-2 py-0.5 text-ink/70">
                {p.stack[0]}
              </span>
            </div>
            <div className="mt-2 flex gap-2">
              <a
                href={p.link}
                className="flex-1 rounded-lg bg-ink py-1.5 text-center text-[10px] font-bold text-bg"
              >
                Open app
              </a>
              <a
                href={p.code}
                className="flex-1 rounded-lg border border-ink/20 py-1.5 text-center text-[10px] font-bold text-ink"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsDeck() {
  const [active, setActive] = useState(0)
  const [hovering, setHovering] = useState(false)
  const total = projects.length

  const prev = () => setActive((a) => (a - 1 + total) % total)
  const next = () => setActive((a) => (a + 1) % total)

  useEffect(() => {
    if (hovering) return
    const id = setInterval(() => setActive((a) => (a + 1) % total), 4500)
    return () => clearInterval(id)
  }, [hovering, total])

  return (
    <section id="projects" className="scroll-mt-8 bg-surface py-20 md:py-28">
      <div className="mx-auto mb-12 flex max-w-6xl items-baseline justify-between px-6 md:px-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Apps<span className="text-grey">.</span>
        </h2>
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-grey">
          ( 02 )
        </span>
      </div>

      <div
        className="flex justify-center px-6"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="relative h-[26rem] w-full max-w-3xl sm:h-[30rem] md:h-[34rem]">
          {slots.map((slot) => (
            <Phone key={slot} p={projects[(active + slot) % total]} slot={slot} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-8">
        <button
          onClick={prev}
          aria-label="Previous project"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg text-lg transition-all duration-300 hover:scale-105 hover:border-ink hover:bg-ink hover:text-bg"
        >
          ←
        </button>
        <p className="min-w-[4.5rem] text-center text-sm font-semibold tabular-nums tracking-[0.15em] text-grey">
          {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
        <button
          onClick={next}
          aria-label="Next project"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg text-lg transition-all duration-300 hover:scale-105 hover:border-ink hover:bg-ink hover:text-bg"
        >
          →
        </button>
      </div>
    </section>
  )
}