import { InfoIcon } from 'lucide-react'

export function ErrorMessage<T = Record<string, { message: string }>>(props: {
  errors: T
  name: keyof T
  message?: string
}) {
  const { message, name, errors } = props
  if (message !== undefined && !(name in (typeof errors as any))) {
    throw new Error(`Error: ${name as string} can't find this field in the form field`)
  }

  return (
    <>
      {errors[name] && (
        <small
          id={`${name as string}-error`}
          className="flex items-center gap-x-1 text-xs font-normal text-destructive"
        >
          <InfoIcon className="w-4 h-4" />
          {message ?? (errors[name] as any)[0]}
        </small>
      )}
    </>
  )
}
