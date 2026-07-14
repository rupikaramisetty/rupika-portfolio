import { education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Education
        </h2>

        <div className="mt-8 space-y-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-100">{edu.school}</h3>
                <span className="text-sm text-slate-500">{edu.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{edu.degree}</p>
              <p className="mt-1 text-sm text-slate-500">
                {edu.location} · {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
