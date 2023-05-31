import { styled } from "@/styles/stitches.config"

export const SearchWrapper = styled('form', {
  position: 'relative',
  width: '433px',

  '&:focus': {
    '& svg': {
      stroke: '$green200'
    }
  }
})

export const Input = styled('input', {
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

export const Button = styled('button', {
  all: 'unset',
  position: 'absolute',
  top: '50%',
  right: '20px',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})