import { styled } from "@stitches/react"

export const HomeWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '$5',
})

export const HeroImage = styled('img', {
  maxHeight: 'calc(100vh - 40px)',
})

export const SocialLoginWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%'
})

export const SocialLoginContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '372px',
})

export const TextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$10',
  width: '100%',

  '& > h2': {
    fontSize: '$2xl',
    fontWeight: '$bold',
    color: '$gray100'
  },

  '& > span': {
    color: '$gray200'
  }
})

export const ButtonWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  maxWidth: '372px',
  width: '100%',
})
