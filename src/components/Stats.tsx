import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { stats } from '../data/resume'

function StatCard({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  const match = value.match(/^([\d,]+)(.*)$/)
  const target = match ? parseInt(match[1].replace(/,/g, ''), 10) : null
  const suffix = match ? match[2] : ''

  useEffect(() => {
    if (!inView || target === null) return
    const controls = animate(0, target, {
      duration: 1.2,
      delay: index * 0.1,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    })
    return () => controls.stop()
  }, [inView, target, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-950/95 px-4 py-6 text-center"
    >
      <p className="text-2xl font-bold text-cyan-300 md:text-3xl">
        {target !== null ? `${display}${suffix}` : value}
      </p>
      <p className="mt-1 text-xs text-slate-400 md:text-sm">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
      {stats.map((stat, i) => (
        <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
      ))}
    </div>
  )
}
