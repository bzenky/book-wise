import { styled } from "@/styles/stitches.config"

export const Card = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$4 $5',
  gap: '$5',
  width: '100%',
  height: '130px',
  backgroundColor: '$gray700',
  borderRadius: '$base',
})

export const BookCover = styled('img', {
  width: '64px',
  height: '94px',
  borderRadius: '$xs'
})

export const BookInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '98px'
})

export const BookInfo = styled('div', {
  lineHeight: '$short',

  '& > h5': {
    fontWeight: '$bold',
    color: '$gray100',
    fontSize: '$md',

    display: '-webkit-box',
    whiteSpace: 'normal',
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  '& > span': {
    fontWeight: '$regular',
    color: '$gray400',
    fontSize: '$sm',
  }
})

export const RatingWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})