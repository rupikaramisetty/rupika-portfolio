import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Experience
        </h2>

        <div className="mt-8 space-y-6">
          {experience.map((job) => (
            <div
              key={job.company}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-100">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-slate-500">{job.period}</span>
              </div>

              <p className="mt-2 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {job.highlight}
              </p>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-slate-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
