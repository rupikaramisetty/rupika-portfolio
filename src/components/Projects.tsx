import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white/[0.02] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Projects
        </h2>

        <div className="mt-8 space-y-6">
          {projects.map((project) => {
            const Card = (
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-cyan-400/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
                  {project.link && (
                    <span className="text-xs font-medium text-slate-500">View repository →</span>
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
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-slate-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )

            return project.link ? (
              <a key={project.name} href={project.link} target="_blank" rel="noreferrer">
                {Card}
              </a>
            ) : (
              <div key={project.name}>{Card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
