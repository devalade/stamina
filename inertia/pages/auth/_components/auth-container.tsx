import React, { PropsWithChildren } from 'react'

export function AuthContainer({ children }: PropsWithChildren) {
  return <div className="flex items-center justify-center h-screen w-full">{children}</div>
}
