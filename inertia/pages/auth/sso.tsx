import { Head, Link, useForm } from '@inertiajs/react'
import { AuthContainer } from './_components/auth-container'
import { Button, buttonVariants } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { ErrorMessage } from '~/components/error_message'
import GithubIcon from '~/components/icons/github_icon'
import GoogleIcon from '~/components/icons/google_icon'

export default function SignInPage() {
  const form = useForm({
    email: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/sso')
  }

  return (
    <AuthContainer>
      <Head title="Signle Sign-On" />

      <Card className="mx-auto w-full max-w-lg border-none bg-transparent">
        <CardHeader className="mb-8">
          <CardTitle className=" mt-8 text-center sm:text-left text-xl tracking-[-0.16px] text-slate-12 font-bold text-slate-200">
            Sign in with SSO
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
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
          <p className="text-xs text-slate-11 font-normal mt-4">
            By signing in, you agree to our{' '}
            <Link className="text-blue-500 hover:underline" href="/legal/terms-of-service">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link className="text-blue-500 hover:underline" href="/legal/privacy-policy">
              Privacy Policy
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </AuthContainer>
  )
}
