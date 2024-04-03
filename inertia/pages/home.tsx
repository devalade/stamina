import { Head } from '@inertiajs/react'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />
      <p className="text-center text-5xl font-semibold">Stamina</p>
    </>
  )
}
