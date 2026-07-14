import { stats } from '../data/resume'

export default function Stats() {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-slate-950/95 px-4 py-6 text-center">
          <p className="text-2xl font-bold text-cyan-300 md:text-3xl">{stat.value}</p>
          <p className="mt-1 text-xs text-slate-400 md:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
