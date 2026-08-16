import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-8 bg-ink py-20 text-bg md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 flex items-baseline justify-between">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Experience<span className="text-grey">.</span>
          </h2>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-bg/50">
            ( 03 )
          </span>
        </div>

        <div className="divide-y divide-bg/10">
          {experience.map((job) => (
            <article key={job.role} className="grid gap-4 py-10 md:grid-cols-[1fr_auto] md:gap-10">
              <div>
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                  {job.role}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-bg/50">
                  {job.company}
                </p>
              </div>
              <p className="max-w-2xl leading-relaxed text-bg/80 md:text-lg">
                {job.description}
              </p>
              <span className="text-sm font-medium tabular-nums tracking-[0.15em] text-bg/50 md:col-start-2 md:row-start-1 md:text-right">
                {job.period}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}