import Head from 'next/head'
import { useState } from 'react'
import { NextPageWithLayout } from '../_app'
import { RatingCardMinimal } from '@/components/RatingCardMinimal'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Compass } from 'lucide-react'
import { theme } from '@/styles/stitches.config'
import { BookGridContainer, Container, FilterTag, FilterTagWrapper, SearchIcon, SearchInput, SearchWrapper, Title, TitleWrapper } from './styles'

const Explore: NextPageWithLayout = () => {
  const [focused, setFocused] = useState(false)

  function handleFocusIconColor() {
    if (focused) return String(theme.colors.green200)

    return String(theme.colors.gray500)
  }

  return (
    <>
      <Head>
        <title>Explore | BookWise</title>
        <meta name="description" content="Welcome to BookWise, take your book and stay wise." />
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
          <FilterTag data-active={true}>
            Tudo
          </FilterTag>
          <FilterTag>
            Computação
          </FilterTag>
          <FilterTag>
            Educação
          </FilterTag>
          <FilterTag>
            Fantasia
          </FilterTag>
          <FilterTag>
            Ficção Científica
          </FilterTag>
          <FilterTag>
            Horror
          </FilterTag>
          <FilterTag>
            HQs
          </FilterTag>
          <FilterTag>
            Suspense
          </FilterTag>
        </FilterTagWrapper>

        <BookGridContainer>
          <RatingCardMinimal
            key='xxt'
            author='John Wayne'
            averageRating={4.5}
            cover='https://m.media-amazon.com/images/I/91TDPDzWPVL._AC_SL1500_.jpg'
            name='The Book of John'
            variant='base'
          />
          <RatingCardMinimal
            key='xxt'
            author='John Wayne'
            averageRating={4.5}
            cover='https://m.media-amazon.com/images/I/91TDPDzWPVL._AC_SL1500_.jpg'
            name='The Book of John'
            variant='base'
          />
          <RatingCardMinimal
            key='xxt'
            author='John Wayne'
            averageRating={4.5}
            cover='https://m.media-amazon.com/images/I/91TDPDzWPVL._AC_SL1500_.jpg'
            name='The Book of John'
            variant='base'
          />
          <RatingCardMinimal
            key='xxt'
            author='John Wayne'
            averageRating={4.5}
            cover='https://m.media-amazon.com/images/I/91TDPDzWPVL._AC_SL1500_.jpg'
            name='The Book of John'
            variant='base'
          />
          <RatingCardMinimal
            key='xxt'
            author='John Wayne'
            averageRating={4.5}
            cover='https://m.media-amazon.com/images/I/91TDPDzWPVL._AC_SL1500_.jpg'
            name='The Book of John'
            variant='base'
          />
          <RatingCardMinimal
            key='xxt'
            author='John Wayne'
            averageRating={4.5}
            cover='https://m.media-amazon.com/images/I/91TDPDzWPVL._AC_SL1500_.jpg'
            name='The Book of John'
            variant='base'
          />
        </BookGridContainer>
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