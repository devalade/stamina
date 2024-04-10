import { PropsWithChildren } from 'react'
import { ThemeSwitcher } from '~/components/theme_switcher'
export function AuthContainer({ children }: PropsWithChildren) {
  return (
    <div className="bg-root relative flex items-center justify-center h-screen w-full">
      <ThemeSwitcher />
      {children}
    </div>
  )
}
