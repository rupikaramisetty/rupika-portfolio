import { Mail, Phone } from 'lucide-react'
import { profile } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 px-6 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <SectionHeading index="06" title="Contact" center />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-2xl font-semibold text-slate-100 md:text-3xl">
            Let's build something reliable together.
          </p>
          <p className="mt-3 text-slate-400">
            Open to backend engineering, frontend engineering, distributed systems, and FullStack
            Engineer roles.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
          </div>

          {(profile.linkedin || profile.github) && (
            <div className="mt-6 flex justify-center gap-6 text-sm text-slate-400">
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-300"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-300"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
