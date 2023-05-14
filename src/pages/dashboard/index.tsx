import Head from 'next/head'
import { NextPageWithLayout } from '../_app'
import { RatingCard } from '@/components/RatingCard'
import { SectionHeader } from '@/components/SectionHeader'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { LineChart } from 'lucide-react'
import { theme } from '@/styles/stitches.config'
import { Container, Main, RatingCardWrapper, RatingWrapper, Title } from './styles'

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
        <Title>
          <LineChart size={20} color={String(theme.colors.green100)} />
          Início
        </Title>

        <Main>
          <RatingWrapper>
            <SectionHeader text='Avaliações recentes' />

            <RatingCardWrapper>
              <RatingCard />
              <RatingCard />
              <RatingCard />
              <RatingCard />
            </RatingCardWrapper>
          </RatingWrapper>

          <aside style={{ background: '#e7e7e7' }}>
            sidebar
          </aside>
        </Main>
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