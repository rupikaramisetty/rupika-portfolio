import { profile } from '../data/resume'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{profile.summary}</p>
        </Reveal>
      </div>
    </section>
  )
}
