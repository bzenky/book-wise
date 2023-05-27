import Head from 'next/head'
import { useState } from 'react'
import { NextPageWithLayout } from '../_app'
import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'
import { api } from '@/lib/axios'
import { RatingCardMinimal } from '@/components/RatingCardMinimal'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { theme } from '@/styles/stitches.config'
import { BookGridContainer, Container, FilterTag, FilterTagWrapper, Main, SearchIcon, SearchInput, SearchWrapper, Title, TitleWrapper } from './styles'

interface BookProps {
  author: string
  averageRating: number
  cover_url: string
  created_at: string
  id: string
  name: string
  summary: string
  total_pages: number
}

const Explore: NextPageWithLayout = () => {
  const [focused, setFocused] = useState(false)
  const tags = ['Tudo', 'Computação', 'Educação', 'Fantasia', 'Ficção Científica', 'Horror', 'HQs', 'Suspense']

  function handleFocusIconColor() {
    if (focused) return String(theme.colors.green200)

    return String(theme.colors.gray500)
  }

  async function fetchBooks() {
    const response = await api.get<BookProps[]>('/books')
      .then(response => response.data)

    return response
  }

  const books = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks
  })

  return (
    <>
      <Head>
        <title>Explore | BookWise</title>
        <meta name="description" content="Explore our books in BookWise, take your book and leave your feedback." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <TitleWrapper>
          <Title>
            <Compass size={20} color={String(theme.colors.green100)} />
            Explorar
          </Title>

          <SearchWrapper>
            <SearchInput
              placeholder="Buscar livro ou autor"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />

            <SearchIcon
              size={20}
              color={handleFocusIconColor()}
            />
          </SearchWrapper>
        </TitleWrapper>

        <FilterTagWrapper>
          {tags.map(tag => {
            return (
              <FilterTag key={tag}>
                {tag}
              </FilterTag>
            )
          })}
        </FilterTagWrapper>

        <Main>
          <BookGridContainer>
            {books.data?.map(book => {
              return (
                <RatingCardMinimal
                  key={book.id}
                  author={book.author}
                  averageRating={book.averageRating}
                  cover={book.cover_url}
                  name={book.name}
                  variant='base'
                />
              )
            })}
          </BookGridContainer>
        </Main>
      </Container>
    </>
  )
}

Explore.getLayout = (page) => {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}

export default Explore