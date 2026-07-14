import { GraduationCap } from 'lucide-react'
import { education } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="05" title="Education" />
        </Reveal>

        <div className="mt-8 space-y-6">
          {education.map((edu, i) => (
            <Reveal key={edu.school} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
                    <GraduationCap className="h-4 w-4 text-cyan-400" />
                    {edu.school}
                  </h3>
                  <span className="font-mono text-xs text-slate-500">{edu.period}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{edu.degree}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {edu.location} · {edu.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
