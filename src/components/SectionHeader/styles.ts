import { styled } from "@stitches/react"

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& > span': {
    color: '$gray100',
    fontSize: '$sm',
  },

  '& > button': {
    all: 'unset',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    padding: '$1 $2',
    height: '34px',
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$purple100',
    borderRadius: '$xs',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      background: 'rgba(131, 129, 217, 0.06)',
    }
  }
})