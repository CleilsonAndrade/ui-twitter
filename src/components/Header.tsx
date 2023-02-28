import { Sparkle } from 'phosphor-react'
import './Header.css'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="timeline-header">
      {title}
      <Sparkle />
    </div>
  )
}