import Head from 'next/head'
import { User } from 'lucide-react'
import { NextPageWithLayout } from '@/pages/_app'
import { ProfileResumeCard } from '@/components/ProfileResumeCard'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { theme } from '@/styles/stitches.config'
import { Container, LastRatingsWrapper, Main, Title, TitleWrapper } from './styles'
import { SearchInput } from '@/components/SearchInput'
import { ProfileRatingCard } from '@/components/ProfileRatingCard'

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Profile | BookWise</title>
        <meta name="description" content="Welcome to BookWise, take your book and stay wise." />
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
              handleSearch={() => { }}
            />

            <ProfileRatingCard />
            <ProfileRatingCard />
            <ProfileRatingCard />
          </LastRatingsWrapper>

          <ProfileResumeCard />
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