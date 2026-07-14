import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { profile, skillGroups, experience, projects, education } from '../data/resume'

type Line = { prompt: string; output: string[] }

const bootLines: Line[] = [
  { prompt: 'whoami', output: ['rupika-ramisetty · software-engineer'] },
  { prompt: 'cat focus.txt', output: ['OAuth 2.0 · OIDC · Kafka · Spring Boot · Distributed Systems'] },
  { prompt: 'uptime --impact', output: ['25% faster · 5,000+ TPS · 10M+ req/day'] },
]

function useBootSequence(active: boolean) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active || done) return

    const current = bootLines[lineIndex]
    if (!current) {
      setDone(true)
      return
    }

    if (charIndex < current.prompt.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 30)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setLineIndex((i) => i + 1)
      setCharIndex(0)
    }, 500)
    return () => clearTimeout(t)
  }, [active, lineIndex, charIndex, done])

  return { lineIndex, charIndex, done }
}

function KeyValue({ label, value }: { label: string; value: ReactNode }) {
  return (
    <p className="flex gap-2">
      <span className="w-16 flex-none text-slate-500">{label}</span>
      <span className="text-slate-300">{value}</span>
    </p>
  )
}

const link = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noreferrer" className="text-cyan-400 underline underline-offset-2">
    {label}
  </a>
)

type Command = { description: string; run: () => ReactNode[] }

const commands: Record<string, Command> = {
  help: {
    description: 'list available commands',
    run: () =>
      Object.entries(commands).map(([key, cmd]) => (
        <p key={key}>
          <span className="inline-block w-32 text-cyan-300">{key}</span>
          <span className="text-slate-500">{cmd.description}</span>
        </p>
      )),
  },
  about: {
    description: "what I'm about",
    run: () => [profile.summary, '', '→ more in the About section below'],
  },
  skills: {
    description: 'the toolbox',
    run: () => [
      ...skillGroups.map((g) => `${g.label}: ${g.items.join(', ')}`),
      '',
      '→ full breakdown in the Skills section below',
    ],
  },
  experience: {
    description: 'where I have shipped',
    run: () => [
      ...experience.flatMap((job) => [
        `${job.role} · ${job.company}  (${job.period})`,
        `  ${job.highlight}`,
      ]),
      '',
      '→ full history in the Experience section below',
    ],
  },
  projects: {
    description: 'things I have built',
    run: () => [
      ...projects.map((p) => `${p.name} — ${p.stack.join(', ')}`),
      '',
      '→ details in the Projects section below',
    ],
  },
  education: {
    description: 'school',
    run: () => education.map((e) => `${e.school} — ${e.degree} (${e.period})`),
  },
  contact: {
    description: 'reach me',
    run: () => [
      <KeyValue key="email" label="email" value={link(`mailto:${profile.email}`, profile.email)} />,
      <KeyValue key="phone" label="phone" value={profile.phone} />,
      <KeyValue key="linkedin" label="linkedin" value={link(profile.linkedin, 'linkedin.com/in/rupikaaaaa')} />,
      <KeyValue key="github" label="github" value={link(profile.github, 'github.com/rupikaramisetty')} />,
    ],
  },
  resume: {
    description: 'download the PDF',
    run: () => {
      window.open('/resume.pdf', '_blank')
      return ['Opening resume.pdf in a new tab...']
    },
  },
  whoami: {
    description: 'identity check',
    run: () => [`${profile.name.toLowerCase().replace(/\s+/g, '-')} · ${profile.location.toLowerCase()}`],
  },
  ls: {
    description: 'list sections',
    run: () => ['about.md  skills.json  experience.log  projects/  education.txt  contact.sh  resume.pdf'],
  },
  clear: {
    description: 'wipe the session',
    run: () => [],
  },
  'sudo hire-me': {
    description: 'elevated privileges',
    run: () => {
      setTimeout(() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 900)
      return ['Permission granted.', 'Redirecting to #contact ...']
    },
  },
}

const hints = ['help', 'about', 'skills', 'projects', 'resume', 'contact']

type HistoryEntry = { command: string; output: ReactNode[] }

export default function Terminal() {
  const [bootActive, setBootActive] = useState(false)
  const { lineIndex, charIndex, done: bootDone } = useBootSequence(bootActive)

  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [input, setInput] = useState('')
  const [pastCommands, setPastCommands] = useState<string[]>([])
  const [historyPointer, setHistoryPointer] = useState<number | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history, lineIndex, charIndex])

  function execute(raw: string) {
    const trimmed = raw.trim()
    if (!trimmed) return

    setPastCommands((prev) => [...prev, trimmed])
    setHistoryPointer(null)

    const key = trimmed.toLowerCase()
    if (key === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const match = commands[key]
    const output = match
      ? match.run()
      : [`command not found: ${trimmed}`, `type 'help' to see available commands`]

    setHistory((prev) => [...prev, { command: trimmed, output }])
    setInput('')
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      execute(input)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const prefix = input.trim().toLowerCase()
      if (!prefix) return
      const match = Object.keys(commands).find((k) => k.startsWith(prefix))
      if (match) setInput(match)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!pastCommands.length) return
      const nextPointer = historyPointer === null ? pastCommands.length - 1 : Math.max(0, historyPointer - 1)
      setHistoryPointer(nextPointer)
      setInput(pastCommands[nextPointer])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyPointer === null) return
      const nextPointer = historyPointer + 1
      if (nextPointer >= pastCommands.length) {
        setHistoryPointer(null)
        setInput('')
      } else {
        setHistoryPointer(nextPointer)
        setInput(pastCommands[nextPointer])
      }
    }
  }

  const suggestions =
    input.trim() && bootDone
      ? Object.keys(commands).filter(
          (k) => k.startsWith(input.trim().toLowerCase()) && k !== input.trim().toLowerCase(),
        )
      : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      onAnimationComplete={() => setBootActive(true)}
      onClick={() => inputRef.current?.focus()}
      className="w-full max-w-md cursor-text overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-cyan-500/5 backdrop-blur"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 font-mono text-xs text-slate-500">rupika@portfolio ~ zsh</span>
        {bootDone && (
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-green-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            interactive
          </span>
        )}
      </div>

      <div
        ref={scrollRef}
        className="max-h-[280px] space-y-3 overflow-y-auto p-5 text-left font-mono text-[13px] leading-relaxed"
      >
        {bootLines.slice(0, lineIndex + (bootDone ? 1 : 0)).map((line, i) => (
          <div key={i}>
            <p className="text-slate-300">
              <span className="text-cyan-400">➜</span> <span className="text-slate-500">~</span> {line.prompt}
            </p>
            {line.output.map((out, j) => (
              <p key={j} className="pl-5 text-slate-500">
                {out}
              </p>
            ))}
          </div>
        ))}

        {!bootDone && bootLines[lineIndex] && (
          <p className="text-slate-300">
            <span className="text-cyan-400">➜</span> <span className="text-slate-500">~</span>{' '}
            {bootLines[lineIndex].prompt.slice(0, charIndex)}
            {charIndex < bootLines[lineIndex].prompt.length && (
              <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-cyan-400 align-middle" />
            )}
          </p>
        )}

        {bootDone &&
          history.map((entry, i) => (
            <div key={i}>
              <p className="text-slate-300">
                <span className="text-cyan-400">➜</span> <span className="text-slate-500">~</span> {entry.command}
              </p>
              <div className="space-y-0.5 pl-5 text-slate-500">
                {entry.output.map((out, j) => (
                  <div key={j}>{out || ' '}</div>
                ))}
              </div>
            </div>
          ))}

        {bootDone && (
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-cyan-400">➜</span> <span className="text-slate-500">~</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              placeholder="type a command..."
              className="flex-1 bg-transparent text-slate-100 caret-cyan-400 outline-none placeholder:text-slate-600"
            />
          </div>
        )}

        {suggestions.length > 0 && (
          <p className="pl-5 text-xs text-slate-600">suggestions: {suggestions.join(', ')}</p>
        )}
      </div>

      {bootDone && (
        <div className="flex flex-wrap gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-3">
          {hints.map((hint) => (
            <button
              key={hint}
              type="button"
              onClick={() => execute(hint)}
              className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {hint}
            </button>
          ))}
        </div>
      )}
    </motion.div>
  )
}
