import { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

type Props = {
  icon: ReactNode
  title: string
  description: string
  total: number
  type: 'number' | 'money'
}

export function StatsItem(props: Props) {
  const { icon, title, description, total, type } = props
  function formatter(value: number) {
    return (type === 'money' ? '$' : '+') + Intl.NumberFormat('en-US').format(value)
  }
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatter(total)}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
