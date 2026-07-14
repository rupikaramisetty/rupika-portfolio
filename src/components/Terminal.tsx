import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Line = { prompt: string; output: string[] }

const lines: Line[] = [
  { prompt: 'whoami', output: ['rupika-ramisetty · software-engineer'] },
  { prompt: 'cat focus.txt', output: ['OAuth 2.0 · OIDC · Kafka · Spring Boot · Distributed Systems'] },
  { prompt: 'uptime --impact', output: ['25% faster · 5,000+ TPS · 10M+ req/day'] },
  { prompt: '_', output: [] },
]

function useTypewriter(active: boolean) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active || done) return

    const current = lines[lineIndex]
    if (!current) {
      setDone(true)
      return
    }

    if (charIndex < current.prompt.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => {
        setLineIndex((i) => i + 1)
        setCharIndex(0)
      },
      current.output.length ? 550 : 0,
    )
    return () => clearTimeout(t)
  }, [active, lineIndex, charIndex, done])

  return { lineIndex, charIndex }
}

export default function Terminal() {
  const [active, setActive] = useState(false)
  const { lineIndex, charIndex } = useTypewriter(active)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      onAnimationComplete={() => setActive(true)}
      className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-cyan-500/5 backdrop-blur"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 font-mono text-xs text-slate-500">rupika@portfolio ~ zsh</span>
      </div>

      <div className="min-h-[220px] space-y-3 p-5 text-left font-mono text-[13px] leading-relaxed">
        {lines.slice(0, lineIndex + 1).map((line, i) => {
          const isCurrent = i === lineIndex
          const typed = isCurrent ? line.prompt.slice(0, charIndex) : line.prompt
          const showOutput = !isCurrent || charIndex >= line.prompt.length

          return (
            <div key={i}>
              <p className="text-slate-300">
                <span className="text-cyan-400">➜</span> <span className="text-slate-500">~</span>{' '}
                {typed}
                {isCurrent && charIndex < line.prompt.length && (
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-cyan-400 align-middle" />
                )}
              </p>
              {showOutput &&
                line.output.map((out, j) => (
                  <p key={j} className="pl-5 text-slate-500">
                    {out}
                  </p>
                ))}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
