import { Head, Link, useForm } from '@inertiajs/react'
import { AuthContainer } from './_components/auth-container'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { ErrorMessage } from '~/components/error_message'

export default function SignInPage() {
  const form = useForm({
    email: '',
    password: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/sign-in')
  }

  return (
    <AuthContainer>
      <Head title="Sign up" />

      <Card className="mx-auto w-full max-w-lg border-none bg-transparent">
        <CardHeader className='mb-8'>
          <CardTitle className=" mt-8 text-center sm:text-left text-xl tracking-[-0.16px] text-slate-12 font-bold text-slate-200">
            Sign in tp Stamina
          </CardTitle>
          <CardDescription className="mb-8 text-center sm:text-left text-base text-slate-400 font-normal">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-blue-500">
              Sign up
            </Link>{' '}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                disabled={form.processing}
                value={form.data.email}
                onChange={(e) => form.setData('email', e.target.value)}
              />
              {form.errors.email && <ErrorMessage message={form.errors.email} />}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                disabled={form.processing}
                value={form.data.password}
                onChange={(e) => form.setData('password', e.target.value)}
              />
              {form.errors.password && <ErrorMessage message={form.errors.password} />}
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <Button variant="outline" className="w-full">
              Sign in with GitHub
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthContainer>
  )
}
