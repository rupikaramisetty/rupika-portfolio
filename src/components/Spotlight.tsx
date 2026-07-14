import { useEffect, useRef } from 'react'

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--x', `${e.clientX}px`)
        el.style.setProperty('--y', `${e.clientY}px`)
      })
    }

    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          'radial-gradient(600px circle at var(--x, 50%) var(--y, 0px), rgba(34,211,238,0.06), transparent 70%)',
      }}
    />
  )
}
