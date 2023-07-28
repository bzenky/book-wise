import { styled } from "@/styles/stitches.config"

export const Card = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$4 $5',
  gap: '$5',
  width: '100%',
  backgroundColor: '$gray700',
  border: '2px solid $gray700',
  borderRadius: '$base',

  '&:hover': {
    borderColor: '$gray500',
  },

  variants: {
    modal: {
      true: {
        cursor: 'pointer',
      },
      false: {
        cursor: 'default',
      }
    }
  }
})

export const BookCover = styled('img', {
  width: '108px',
  height: '152px',
  borderRadius: '$xs',

  '&[data-variant="small"]': {
    width: '64px',
    height: '94px',
  }
})

export const BookInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
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