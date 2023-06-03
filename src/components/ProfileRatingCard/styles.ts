import { styled } from "@/styles/stitches.config"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$8',

  '& > span': {
    color: '$gray300',
    fontSize: '$sm',
  },

  '& + &': {
    marginBottom: '$6',
  }
})

export const Card = styled('div', {
  backgroundColor: '$gray700',
  padding: '$8',
  marginTop: '$2',
  borderRadius: '$base',

  '& > p': {
    marginTop: '$8',
    color: '$gray300',
    lineHeight: '$base',
    fontSize: '$sm',
  }
})

export const Header = styled('div', {
  display: 'flex',
  gap: '$8'
})

export const BookInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& > div': {
    lineHeight: '$base',

    '& > h6': {
      fontWeight: '$bold',
      color: '$gray100',
      fontSize: '$lg',
    },

    '& > span': {
      color: '$gray400',
      fontSize: '$sm',
    }
  }
})

export const RatingWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})