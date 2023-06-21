import { FormEvent, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { User } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'
import { NextPageWithLayout } from '@/pages/_app'
import { ProfileResumeCard } from '@/components/ProfileResumeCard'
import { CustomForm, SearchInput } from '@/components/SearchInput'
import { ProfileRatingCard } from '@/components/ProfileRatingCard'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Container, LastRatingsWrapper, Main, Title, TitleWrapper } from './styles'
import { theme } from '@/styles/stitches.config'
import { findMostRepeatedElementArray } from '@/utils/findMostRepeatedElementArray'

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  categories: string[]
}

export interface Ratings {
  book: Book
  book_id: string
  created_at: string
  description: string
  id: string
  rate: number
  user_id: string
}

interface UserProps {
  userData: {
    avatar_url: string
    created_at: string
    email: string
    id: string
    name: string
    ratings: Ratings[]
  }
}

const Profile: NextPageWithLayout = () => {
  const router = useRouter()
  const [ratings, setRatings] = useState<Ratings[]>([])
  const { slug: userId } = router.query

  const { data, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: fetchUserData
  })

  const pagesRead = data?.userData.ratings.reduce((acc, rating) => {
    return acc + rating.book.total_pages
  }, 0)
  const booksRated = data?.userData.ratings.length
  const authorsReadMap = data?.userData.ratings.map(rating => {
    const authors = rating.book.author

    return authors
  })
  const authorsRead = [...new Set(authorsReadMap)].length
  const categoryRead = data?.userData.ratings.flatMap(rating => {
    const categories = rating.book.categories.map(category => category)

    return categories
  })
  const categoryMostRead = findMostRepeatedElementArray(categoryRead ?? [])
  const profileData = {
    avatar_url: data?.userData.avatar_url,
    name: data?.userData.name,
    memberSince: data?.userData.created_at,
    pagesRead,
    booksRated,
    authorsRead,
    categoryMostRead
  }

  async function fetchUserData() {
    const response = await api.get<UserProps>(`/users?id=${userId}`)
      .then(response => response.data)

    setRatings(response?.userData.ratings)

    return response
  }

  function handleSearch(event: FormEvent<CustomForm>) {
    event.preventDefault()
    const searchValue = event.currentTarget.elements.search.value

    if (searchValue) {
      const updatedList = ratings.filter(rating => rating.book.name.toLowerCase().includes(searchValue.toLowerCase()))

      setRatings(updatedList)
    } else {
      setRatings(data!.userData.ratings)
    }
  }

  return (
    <>
      <Head>
        <title>Profile | BookWise</title>
        <meta name="description" content="Welcome to BookWise, this is your profile with some stats." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <TitleWrapper>
          <Title>
            <User size={20} color={String(theme.colors.green100)} />
            Perfil
          </Title>
        </TitleWrapper>

        <Main>
          <LastRatingsWrapper>
            <SearchInput
              placeholder="Buscar livro avaliado"
              handleSearch={handleSearch}
            />

            {ratings.map(rating => {
              return (
                <ProfileRatingCard
                  key={rating.id}
                  rating={rating}
                />
              )
            })}
          </LastRatingsWrapper>

          <ProfileResumeCard profileData={profileData} />
        </Main>
      </Container>
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