import { skills } from '../data'

function Pills({ hidden = false }) {
  return (
    <div className="flex w-max items-center gap-4 pr-4" aria-hidden={hidden}>
      {skills.map((skill) => (
        <span
          key={skill}
          className="whitespace-nowrap rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink md:text-base"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default function SkillsMarquee() {
  return (
    <section id="skills" className="scroll-mt-8 py-20 md:py-24">
      <div className="mx-auto mb-10 flex max-w-6xl items-baseline justify-between px-6 md:px-10">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Skills<span className="text-grey">.</span>
        </h2>
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-grey">
          ( 01 )
        </span>
      </div>
      <div className="overflow-hidden py-2">
        <div className="marquee-track flex w-max">
          <Pills />
          <Pills hidden />
        </div>
      </div>
    </section>
  )
}