import { profile } from '../data/resume'
import Stats from './Stats'

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('')

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-24 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_60%)]"
      />
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-lg font-semibold text-cyan-300">
          {initials}
        </div>

        <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          {profile.location}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-50 md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-slate-300 md:text-2xl">{profile.title}</p>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-400 md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105"
          >
            Get in touch
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
          >
            View experience
          </a>
        </div>

        <div className="mt-14">
          <Stats />
        </div>
      </div>
    </section>
  )
}
