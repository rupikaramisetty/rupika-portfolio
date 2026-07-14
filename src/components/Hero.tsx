import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { profile } from '../data/resume'
import Stats from './Stats'
import Terminal from './Terminal'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-24 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),_transparent_60%)]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="text-center lg:text-left">
          <motion.p
            variants={item}
            className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-cyan-400"
          >
            {profile.location} · Available for hire
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-bold tracking-tight text-slate-50 md:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-xl font-medium text-slate-300 md:text-2xl">
            {profile.title}
          </motion.p>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-slate-400 md:mx-0 md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#experience"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              View experience
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex justify-center lg:justify-end">
          <Terminal />
        </motion.div>
      </motion.div>

      <div className="mx-auto mt-16 max-w-4xl">
        <Stats />
      </div>
    </section>
  )
}
