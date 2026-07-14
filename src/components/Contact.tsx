import { profile } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Contact
        </h2>
        <p className="mt-4 text-2xl font-semibold text-slate-100 md:text-3xl">
          Let's build something reliable together.
        </p>
        <p className="mt-3 text-slate-400">
          Open to backend engineering, distributed systems, and platform security roles.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
          >
            {profile.phone}
          </a>
        </div>

        {(profile.linkedin || profile.github) && (
          <div className="mt-6 flex justify-center gap-6 text-sm text-slate-400">
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                LinkedIn
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
