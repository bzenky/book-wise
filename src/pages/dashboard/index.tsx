import Head from 'next/head'
import { NextPageWithLayout } from '../_app'
import { RatingCard } from '@/components/RatingCard'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { LineChart } from 'lucide-react'
import { theme } from '@/styles/stitches.config'
import { Container, Title } from './styles'

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard | BookWise</title>
        <meta name="description" content="Welcome to BookWise, take your book and stay wise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>

        <main>
          <Title>
            <LineChart size={20} color={String(theme.colors.green100)} />
            Início
          </Title>

          <span>Avaliações mais recentes</span>

          <RatingCard />
          <RatingCard />
          <RatingCard />
          <RatingCard />
        </main>

        <aside>
          sidebar
        </aside>

      </Container>
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