import { styled } from "@/styles/stitches.config"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0',
  width: '100%',
  maxWidth: '998px',
  margin: '0 auto',
  borderRadius: '$lg',
})

export const Main = styled('main', {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridGap: '64px',
  maxHeight: 'calc(100vh - 134px)',
  overflowY: 'auto',
  margin: '40px 0 32px',
  padding: '$1',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const LastRatingsWrapper = styled('div', {
  width: '100%'
})

export const TitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Title = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '$2xl',
  color: '$gray100',
})

export const SearchInput = styled('input', {
  width: '100%',
  height: '48px',
  padding: '14px 48px 14px 20px',
  color: '$gray200',
  background: '$gray800',
  border: '1px solid $gray500',
  borderRadius: '$xs',

  '&::placeholder': {
    color: '$gray400',
    fontSize: '$sm',
  },

  '&:focus': {
    outline: 'none',
    border: '1px solid $green200',
  }
})