import { skillGroups } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white/[0.02] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Skills
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-100">{group.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
