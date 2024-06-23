import { Head, Link, useForm } from '@inertiajs/react'
import { Auth_container } from './_components/auth_container'
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
    password: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post(window.location.href)
  }

  return (
    <Auth_container>
      <Head title="Sign in" />

      <Card className="mx-auto w-full max-w-lg border-none bg-transparent">
        <CardHeader className="mb-8">
          <CardTitle className=" mt-8 text-center sm:text-left text-xl tracking-[-0.16px] text-slate-12 font-bold text-slate-200">
            Sign in tp Stamina
          </CardTitle>
          <CardDescription className="mb-8 text-center sm:text-left text-base text-slate-400 font-normal">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-500">
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
              <ErrorMessage errors={form.errors} name="email" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-blue-500 text-sm">
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                disabled={form.processing}
                value={form.data.password}
                onChange={(e) => form.setData('password', e.target.value)}
              />
              {form.errors.password && <ErrorMessage errors={form.errors} name="password" />}
            </div>
            <Button id="loginButton" type="submit" className="w-full">
              Sign In
            </Button>
            <div className="mb-6 mt-6 flex items-center justify-center">
              <div
                aria-hidden="true"
                className="h-px w-full bg-primary-foreground"
                data-orientation="horizontal"
                role="separator"
              ></div>
              <span className="mx-4 text-xs text-primary font-normal">OR</span>
              <div
                aria-hidden="true"
                className="h-px w-full bg-primary-foreground"
                data-orientation="horizontal"
                role="separator"
              ></div>
            </div>
          </form>
          <div className="flex items-center gap-x-4">
            <Link
              href=""
              className={buttonVariants({
                variant: 'outline',
                className: 'block w-full gap-x-2',
              })}
            >
              <GithubIcon className="w-6 h-6 " />
              Login with GitHub
            </Link>
            <Link
              href=""
              className={buttonVariants({ variant: 'outline', className: 'block w-full gap-x-2' })}
            >
              <GoogleIcon className="w-6 h-6" />
              Login with Google
            </Link>
          </div>
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
    </Auth_container>
  )
}
