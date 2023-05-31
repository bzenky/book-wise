import { styled } from "@stitches/react"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0',
  width: '100%',
  maxWidth: '998px',
  margin: '0 auto',
  borderRadius: '$lg',
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

export const FilterTagWrapper = styled('div', {
  marginTop: '40px',
})

export const FilterTag = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '34px',
  padding: '$1 $4',
  border: '1px solid $purple100',
  borderRadius: '$full',
  color: '$purple100',
  background: '$gray800',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&[data-active="true"]': {
    color: '$gray100',
    borderColor: '$purple200',
    backgroundColor: '$purple200',
  }
})

export const Main = styled('div', {
  marginTop: '48px',
  maxHeight: 'calc(100vh - 230px)',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const BookGridContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: '$5',
  gridRowGap: '$5',
})