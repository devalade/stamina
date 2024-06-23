import { Head } from '@inertiajs/react'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Sidebar } from '~/components/layouts/sidebar'
import { Header } from '~/components/layouts/header'
import { ReactNode } from 'react'

export function DashboardStats() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Sales</CardTitle>
        <CreditCard className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+12,234</div>
        <p className="text-xs text-muted-foreground">+19% from last month</p>
      </CardContent>
    </Card>
  )
}

export function StatsItem({
  icon,
  title,
  description,
  total,
  type,
}: {
  icon: ReactNode
  title: string
  description: string
  total: number
  type: 'number' | 'money'
}) {
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

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          {/*Header*/}
          <Header breadcrumbs={[{ title: 'Dashboard', link: '' }]} />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <StatsItem
                title="Total Revenue"
                description="+20.1% from last month"
                total={45231.89}
                type="money"
                icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
              />
              <StatsItem
                title="Subscriptions"
                description="+20.1% from last month"
                total={2350}
                type="number"
                icon={<Users className="h-4 w-4 text-muted-foreground" />}
              />
              <StatsItem
                title="Active Now"
                description="+19% from last month"
                total={12234}
                type="number"
                icon={<CreditCard className="h-4 w-4 text-muted-foreground" />}
              />
              <StatsItem
                title="Transactions"
                description="+201 since last hour"
                total={573}
                type="number"
                icon={<Activity className="h-4 w-4 text-muted-foreground" />}
              />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
