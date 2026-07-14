import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} {profile.name}. Built with React &amp; TypeScript.
    </footer>
  )
}
