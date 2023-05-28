import Head from 'next/head'
import { useState } from 'react'
import { NextPageWithLayout } from '../_app'
import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'
import { useKeenSlider } from 'keen-slider/react'
import { api } from '@/lib/axios'
import { RatingCardMinimal } from '@/components/RatingCardMinimal'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { theme } from '@/styles/stitches.config'
import { filterTags } from '@/utils/filterTags'
import 'keen-slider/keen-slider.min.css'
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
  const [activeTagFilters, setActiveTagFilters] = useState<string[]>([])
  const [sliderRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 7.5,
      spacing: 12
    },
    dragSpeed: 3,
  })

  function handleTagFilter(tag: string) {
    if (activeTagFilters.includes(tag)) {
      const newActiveTagFilters = activeTagFilters.filter(activeTagFilter => activeTagFilter !== tag)

      setActiveTagFilters(newActiveTagFilters)
    } else {
      setActiveTagFilters([...activeTagFilters, tag])
    }
  }

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

        <FilterTagWrapper className="keen-slider" ref={sliderRef}>
          {filterTags.map(tag => {
            return (
              <FilterTag
                key={tag}
                data-active={activeTagFilters.includes(tag)}
                onClick={() => handleTagFilter(tag)}
                className="keen-slider__slide"
              >
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