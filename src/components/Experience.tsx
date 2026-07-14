import { Building2 } from 'lucide-react'
import { experience } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="03" title="Experience" />
        </Reveal>

        <div className="mt-8 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-cyan-400/30">
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-7xl font-bold text-white/[0.03] transition-colors group-hover:text-cyan-400/[0.06]">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
                    <Building2 className="h-4 w-4 text-cyan-400" />
                    {job.role} · {job.company}
                  </h3>
                  <span className="font-mono text-xs text-slate-500">{job.period}</span>
                </div>

                <p className="relative mt-3 inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {job.highlight}
                </p>

                <ul className="relative mt-4 space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-slate-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
