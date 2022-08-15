import { Logo } from './Logo'

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-blue-500 border-b border-gray-600">
      <Logo />
    </header>
  )
}