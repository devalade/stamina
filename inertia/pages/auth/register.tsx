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
    lastName: '',
    firstName: '',
    email: '',
    password: '',
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    form.post('/register')
  }

  return (
    <AuthContainer>
      <Head title="Sign up" />

      <Card className="mx-auto w-full max-w-lg border-none bg-transparent">
        <CardHeader className="mb-8">
          <CardTitle className=" mt-8 text-center sm:text-left text-xl tracking-[-0.16px] text-slate-12 font-bold text-slate-200">
            Create Stamina account
          </CardTitle>
          <CardDescription className="mb-8 text-center sm:text-left text-base text-slate-400 font-normal">
            Already have an account?{' '}
            <Link href="/register" className="text-blue-500">
              Log in
            </Link>{' '}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName">Firstname</Label>
              <Input
                id="firstName"
                placeholder="John"
                required
                disabled={form.processing}
                value={form.data.firstName}
                onChange={(e) => form.setData('firstName', e.target.value)}
              />
              {form.errors.firstName && <ErrorMessage message={form.errors.firstName} />}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="lastName">Lastname</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                required
                disabled={form.processing}
                value={form.data.lastName}
                onChange={(e) => form.setData('lastName', e.target.value)}
              />
              {form.errors.lastName && <ErrorMessage message={form.errors.lastName} />}
            </div>

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
              Register
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
              Sign up with GitHub
            </Link>
            <Link
              href=""
              className={buttonVariants({ variant: 'outline', className: 'block w-full gap-x-2' })}
            >
              <GoogleIcon className="w-6 h-6" />
              Sign up with Google
            </Link>
          </div>

          <p className="text-xs text-slate-11 font-normal mt-4">
            By signing up, you agree to our{' '}
            <Link
              className="text-blue-500 hover:underline"
              target="_blank"
              href="/legal/terms-of-service"
            >
              terms
            </Link>
            ,{' '}
            <Link
              className="text-blue-500 hover:underline"
              target="_blank"
              href="/legal/acceptable-use"
            >
              acceptable use
            </Link>
            , and{' '}
            <Link
              className="text-blue-500 hover:underline"
              target="_blank"
              href="/legal/privacy-policy"
            >
              privacy policy
            </Link>
            .
          </p>
        </CardContent>
      </Card>
    </AuthContainer>
  )
}
