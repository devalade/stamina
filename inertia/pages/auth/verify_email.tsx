import { Head, Link, useForm } from '@inertiajs/react'
import { Auth_container } from './_components/auth_container'
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'

export default function VerifyEmailPage() {
  const { post, processing } = useForm({})
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    post('/email/verify')
  }

  return (
    <Auth_container>
      <Head title="Email verification" />

      <Card className="mx-auto w-full max-w-lg border-none bg-transparent">
        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Thanks for signing up! Before getting started, could you verify your email address by
          clicking on the link we just emailed to you? If you didn't receive the email, we will
          gladly send you another.
        </div>

        {/*{status === 'verification-link-sent' && (*/}
        {/*  <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">*/}
        {/*    A new verification link has been sent to the email address you provided during registration.*/}
        {/*  </div>*/}
        {/*)}*/}

        <form onSubmit={onSubmit}>
          <div className="mt-4 flex items-center justify-between">
            <Button disabled={processing}>Resend Verification Email</Button>

            <Link
              href="/logout"
              method="post"
              as="button"
              className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            >
              Log Out
            </Link>
          </div>
        </form>
      </Card>
    </Auth_container>
  )
}
