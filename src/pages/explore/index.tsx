import Head from 'next/head'
import { FormEvent, useRef, useState } from 'react'
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
  category: string
  cover_url: string
  created_at: string
  id: string
  name: string
  summary: string
  total_pages: number
}

const Explore: NextPageWithLayout = () => {
  const [focused, setFocused] = useState(false)
  const [booksList, setBooksList] = useState<BookProps[]>([])
  const searchInput = useRef<HTMLInputElement>(null)
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
    if (tag === 'Tudo') {
      if (!activeTagFilters.includes('Tudo')) {
        setActiveTagFilters(filterTags)
      } else {
        setActiveTagFilters([])
      }

      setBooksList(books.data!)
      return
    }

    if (activeTagFilters.includes(tag)) {
      let updatedList: BookProps[]
      const newActiveTagFilters = activeTagFilters.filter(activeTagFilter => activeTagFilter !== tag)

      if (activeTagFilters.length === 1) {
        updatedList = books.data!.filter(book => !newActiveTagFilters.includes(book.category))
      } else {
        updatedList = books.data!.filter(book => newActiveTagFilters.includes(book.category))
      }

      setBooksList(updatedList)
      setActiveTagFilters(newActiveTagFilters)
    } else {
      const newActiveTagFilters = [...activeTagFilters, tag]
      const updatedList = books.data!.filter(book => newActiveTagFilters.includes(book.category))

      setActiveTagFilters(newActiveTagFilters)
      setBooksList(updatedList)
    }
  }

  function handleFocusIconColor() {
    if (focused) return String(theme.colors.green200)

    return String(theme.colors.gray500)
  }

  function handleSearch(event: FormEvent) {
    event.preventDefault()

    const searchValue = searchInput.current?.value

    if (searchValue) {
      const updatedList = books.data!.filter(book => book.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        book.author.toLowerCase().includes(searchValue.toLowerCase()))

      setBooksList(updatedList)
    } else {
      const updatedList = books.data!.filter(book => activeTagFilters.includes(book.category))

      setBooksList(updatedList)
    }
  }

  async function fetchBooks() {
    const response = await api.get<BookProps[]>('/books')
      .then(response => response.data)

    setBooksList(response)
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

          <SearchWrapper onSubmit={(event) => handleSearch(event)}>
            <SearchInput
              ref={searchInput}
              placeholder="Buscar livro ou autor"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />

            <SearchIcon
              size={20}
              color={handleFocusIconColor()}
              onClick={handleSearch}
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
            {booksList.map(book => {
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