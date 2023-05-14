import Head from 'next/head'
import { NextPageWithLayout } from '../_app'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { RatingCard } from '@/components/RatingCard'
import { RatingCardMinimal } from '@/components/RatingCardMinimal'
import { SectionHeader } from '@/components/SectionHeader'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { LineChart } from 'lucide-react'
import { theme } from '@/styles/stitches.config'
import { AsideWrapper, Container, Main, RatingCardWrapper, RatingWrapper, Title } from './styles'

interface PopularBooksProps {
  author: string
  averageRating: number
  cover_url: string
  created_at: string
  id: string
  name: string
  summary: string
  total_pages: number
}

interface PopularBooksResponse {
  popularBooksWithAverageRating: PopularBooksProps[]
}

const Dashboard: NextPageWithLayout = () => {
  async function fetchPopularBooks() {
    const response = await api.get<PopularBooksResponse>('/books/popular')
      .then(response => response.data)

    return response
  }

  const popularBooks = useQuery({
    queryKey: ['popularBooks'],
    queryFn: fetchPopularBooks
  })

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

          <AsideWrapper>
            <SectionHeader
              text='Livros Populares'
              hasAction
              actionText='Ver todos'
            />

            <RatingCardWrapper>
              {popularBooks.data?.popularBooksWithAverageRating.map((book) => {
                return (
                  <RatingCardMinimal
                    key={book.id}
                    author={book.author}
                    averageRating={book.averageRating}
                    cover={book.cover_url}
                    name={book.name}
                  />
                )
              })}
            </RatingCardWrapper>
          </AsideWrapper>
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