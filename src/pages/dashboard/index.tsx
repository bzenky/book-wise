import Head from 'next/head'
import { useRouter } from 'next/router'
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
  ratings: RatingProps[]
  id: string
  name: string
}

interface UserProps {
  avatar_url: string
  name: string
}

interface BookProps {
  author: string
  averageRating: number
  ratings: RatingProps[]
  countRating: number
  category: string
  cover_url: string
  created_at: string
  id: string
  name: string
  summary: string
  total_pages: number
}

interface PopularBooksResponseProps {
  popularBooksWithAverageRating: PopularBooksProps[]
}

export interface RatingProps {
  author: string
  id: string
  rate: number
  created_at: string
  description: string
  user_id: string
  user: UserProps
  book: BookProps
}

interface LastRatingsResponseProps {
  ratings: RatingProps[]
}

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter()

  async function fetchLatestRatings() {
    const response = await api.get<LastRatingsResponseProps>('/ratings/latest')
      .then(response => response.data)

    return response
  }

  async function fetchPopularBooks() {
    const response = await api.get<PopularBooksResponseProps>('/books/popular')
      .then(response => response.data)

    return response
  }

  const latestRatings = useQuery({
    queryKey: ['latestRatings'],
    queryFn: fetchLatestRatings
  })

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
              {latestRatings.data?.ratings.map((rating) => {
                return (
                  <RatingCard
                    key={rating.id}
                    rating={rating}
                  />
                )
              })}
            </RatingCardWrapper>
          </RatingWrapper>

          <AsideWrapper>
            <SectionHeader
              text='Livros Populares'
              hasAction
              actionText='Ver todos'
              actionFunction={() => router.push('/explore')}
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
                    variant='small'
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