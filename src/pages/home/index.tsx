import Head from 'next/head'
import { SocialLoginButton } from '@/components/SocialLoginButton'
import { ButtonWrapper, HeroImage, HomeWrapper, SocialLoginContainer, SocialLoginWrapper, TextWrapper } from '@/styles/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login | BookWise</title>
        <meta name="description" content="Welcome to BookWise, please login with your account our stay as a guest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeWrapper>
        <HeroImage src='/bookWiseCard.png' alt="Book Wise Card" />
        <SocialLoginWrapper>
          <SocialLoginContainer>
            <TextWrapper>
              <h2>Boas Vindas</h2>
              <span>Faça seu login ou acesse como visitante.</span>
            </TextWrapper>

            <ButtonWrapper>
              <SocialLoginButton provider='google' />
              <SocialLoginButton provider='github' />
              <SocialLoginButton />
            </ButtonWrapper>
          </SocialLoginContainer>
        </SocialLoginWrapper>
      </HomeWrapper >
    </>
  )
}
