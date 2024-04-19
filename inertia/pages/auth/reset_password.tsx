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
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/forgot-password')
  }

  return (
    <AuthContainer>
      <Head title="Reset password" />

      <Card className="mx-auto w-full max-w-lg border-none bg-transparent">
        <CardHeader className="mb-8">
          <CardTitle className=" mt-8 text-center sm:text-left text-xl tracking-[-0.16px] text-slate-12 font-bold text-slate-200">
            Reset your passowrd
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">New Password</Label>
              <Input
                id="email"
                type="password"
                placeholder="••••••••••••"
                required
                disabled={form.processing}
                value={form.data.email}
                onChange={(e) => form.setData('email', e.target.value)}
              />
              {form.errors.email && <ErrorMessage message={form.errors.email} />}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="confirmPassword"
                placeholder="••••••••••••"
                required
                disabled={form.processing}
                value={form.data.email}
                onChange={(e) => form.setData('email', e.target.value)}
              />
              {form.errors.email && <ErrorMessage message={form.errors.email} />}
            </div>

            <Button isLoading={form.processing} type="submit">
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthContainer>
  )
}
