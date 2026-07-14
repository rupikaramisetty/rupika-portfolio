import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Experience
        </h2>

        <div className="mt-8 space-y-10 border-l border-white/10 pl-6">
          {experience.map((job) => (
            <div key={job.company} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-cyan-400" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-100">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-slate-500">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
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
