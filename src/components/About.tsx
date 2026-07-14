import { profile } from '../data/resume'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">About</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">{profile.summary}</p>
      </div>
    </section>
  )
}
