import { SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown_menu'

const THEMES = [
  { code: 'dark', label: 'Dark' },
  { code: 'light', label: 'Light' },
] as const

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<(typeof THEMES)[number]['code']>('dark')

  function toggleTheme(value: typeof theme) {
    setTheme(value)
  }

  useEffect(() => {
    document.querySelector('html')?.setAttribute('class', theme)
  }, [theme])

  return (
    <>
      {createPortal(
        <span className="absolute w-fit h-fit top-4 right-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-black dark:text-white font-semibold">
              <SunIcon className="w- h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {THEMES.map((t) => (
                <DropdownMenuItem key={t.code} onClick={() => toggleTheme(t.code)}>
                  {t.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </span>,
        document.body
      )}
    </>
  )
}
