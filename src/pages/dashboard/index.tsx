import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { NextPageWithLayout } from '../_app'
import { Navbar } from '@/components/Navbar'
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

      <Navbar />

      <main>
        conteudo
      </main>

      <aside>
        sidebar
      </aside>
    </>
  )
}

Dashboard.getLayout = (page) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Dashboard