import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeSwitcher } from '~/components/theme_switcher'
export function AuthContainer({ children }: PropsWithChildren) {
  return (
    <div className="bg-background relative flex items-center justify-center h-screen w-full">
      <Toaster />
      <ThemeSwitcher />
      {children}
    </div>
  )
}
