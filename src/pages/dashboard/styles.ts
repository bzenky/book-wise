import { styled } from "@stitches/react"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0',
  width: '100%',
  maxWidth: '998px',
  maxHeight: 'calc(100vh - 40px)',
  margin: '0 auto',
  borderRadius: '$lg',
})

export const Title = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '24px',
  fontSize: '$2xl',
  color: '$gray100',
})

export const RatingCardWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  margin: '$4 0',
  width: '100%',
})

export const Main = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  maxHeight: 'calc(100% - 16px)',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const RatingWrapper = styled('div', {
  maxWidth: '608px',
})

export const AsideWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '324px',
  width: '100%',
})