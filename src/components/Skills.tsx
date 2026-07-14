import {
  Code2,
  Server,
  ShieldCheck,
  Database,
  Network,
  Activity,
  TestTube2,
  Bot,
  Cloud,
} from 'lucide-react'
import { skillGroups } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons: Record<string, typeof Code2> = {
  Languages: Code2,
  'Backend & Frameworks': Server,
  'Security & Auth': ShieldCheck,
  'Databases & Persistence': Database,
  'Distributed Systems': Network,
  'Performance & Observability': Activity,
  'Testing & Quality': TestTube2,
  'AI & LLM Tools': Bot,
  'Cloud & DevOps': Cloud,
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white/[0.02] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading index="02" title="Skills" />
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.label] ?? Code2
            return (
              <Reveal key={group.label} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-cyan-400/30">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-cyan-400" />
                    <h3 className="text-sm font-semibold text-slate-100">{group.label}</h3>
                  </div>
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
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
