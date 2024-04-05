import { InfoIcon } from 'lucide-react'

export function ErrorMessage(props: { message?: string }) {
  const { message } = props
  return (
    <small className="flex items-center gap-x-1 text-xs font-normal text-destructive">
      <InfoIcon className="w-4 h-4" />
      {message}
    </small>
  )
}
