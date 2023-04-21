import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from '../_app'
import Head from 'next/head'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const Dashboard: NextPageWithLayout = () => {
  const session = useSession()

  return (
    <>
      <Head>
        <title>Dashboard | BookWise</title>
        <meta name="description" content="Welcome to BookWise, take your book and stay wise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{ color: 'white' }}>dash</h1>
      <pre style={{ color: 'white' }}>{JSON.stringify(session.data, null, 2)}</pre>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Desloga
      </button>
    </>
  )
}

Dashboard.getLayout = (page) => {
  return (
    <>
      <DefaultLayout />
      {page}
    </>
  )
}

export default Dashboard