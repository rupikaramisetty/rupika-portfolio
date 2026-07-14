export default function SectionHeading({
  index,
  title,
  center = false,
}: {
  index: string
  title: string
  center?: boolean
}) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="font-mono text-sm text-cyan-400/70">{index}</span>
      <span className="h-px flex-none w-8 bg-cyan-400/40" />
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{title}</h2>
    </div>
  )
}
