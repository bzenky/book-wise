import { styled } from "@/styles/stitches.config"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
  padding: '$8',
  marginBottom: '$4',
  backgroundColor: '$gray700',
  borderRadius: '$base',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',

  '& > strong': {
    display: 'flex',
    flex: 1,
    fontWeight: '$bold',
    fontSize: '$md',
    color: '$gray100',
  }
})

export const RatingStarWrapper = styled('div', {
  display: 'flex',
  gap: '$1',
})

export const TextFieldWrapper = styled('div', {
  position: 'relative',

  '& > span': {
    position: 'absolute',
    bottom: '$2',
    right: '$2',
    fontSize: '$xs',
    color: '$neutral700',
  }
})

export const TextField = styled('textarea', {
  width: '100%',
  minHeight: '164px',
  padding: '14px 20px',
  borderRadius: '$xs',
  border: '1px solid $gray500',
  backgroundColor: '$gray800',
  color: '$gray200',
  lineHeight: '$base',
  resize: 'none',

  '&:focus': {
    outline: 'none',
    borderColor: '$green200',
  }
})

export const ActionWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const ActionButton = styled('button', {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$2',
  borderRadius: '$base',
  backgroundColor: '$gray600',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:not(:disabled):hover': {
    backgroundColor: '$gray500',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  }
})