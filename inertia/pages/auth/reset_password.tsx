import { Head, useForm } from '@inertiajs/react'
import { AuthContainer } from './_components/auth_container'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { ErrorMessage } from '~/components/error_message'

export default function SignInPage() {
  const form = useForm({
    newPassword: '',
    confirmPassword: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post(window.location.href)
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
                value={form.data.newPassword}
                onChange={(e) => form.setData('newPassword', e.target.value)}
              />
              <ErrorMessage errors={form.errors} name="newPassword" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••••••"
                required
                disabled={form.processing}
                value={form.data.confirmPassword}
                onChange={(e) => form.setData('confirmPassword', e.target.value)}
              />
              <ErrorMessage errors={form.errors} name="confirmPassword" />
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
