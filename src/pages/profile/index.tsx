import Head from 'next/head'
import { NextPageWithLayout } from '../_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Profile | BookWise</title>
        <meta name="description" content="Welcome to BookWise, take your book and stay wise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        conteudo
      </main>

      <aside>
        sidebar
      </aside>
    </>
  )
}

Profile.getLayout = (page) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Profile