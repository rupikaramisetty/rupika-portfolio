import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GithubIcon } from './BrandIcons'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white/[0.02] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="04" title="Projects" />
        </Reveal>

        <div className="mt-8 space-y-6">
          {projects.map((project, i) => {
            const Card = (
              <div className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-cyan-400/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
                  {project.link && (
                    <span className="flex items-center gap-1 text-xs font-medium text-slate-500 transition-colors group-hover:text-cyan-300">
                      <GithubIcon className="h-3.5 w-3.5" />
                      View repository
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-cyan-400">
                      {tech}
                      {tech !== project.stack[project.stack.length - 1] && (
                        <span className="text-slate-600"> · </span>
                      )}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-slate-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )

            return (
              <Reveal key={project.name} delay={i * 0.08}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
