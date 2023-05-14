import { styled } from "@/styles/stitches.config"

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  backgroundColor: '$gray700',
  width: '608px',
  height: '280px',
  borderRadius: '$base',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const UserWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4'
})

export const InfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '& > h3': {
    color: '$gray100',
    fontWeight: '$regular',
    fontSize: '$md'
  },

  '& > span': {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '$sm'
  }
})

export const RatingWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})

export const ReviewWrapper = styled('div', {
  display: 'flex',
  gap: '$5',
  marginTop: '$8'
})

export const ReviewContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  '& > p': {
    color: '$gray300',
    lineHeight: '$base',
    fontSize: '$sm',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    display: '-webkit-box',
    whiteSpace: 'normal',
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical"
  }
})

export const BookInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '$base',

  '& > h4': {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$md'
  },

  '& > span': {
    color: '$gray400',
    fontWeight: '$regular',
    fontSize: '$sm'
  }
})

export const BookCover = styled('img', {
  width: '108px',
  height: '152px',
  borderRadius: '$base'
})