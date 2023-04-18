import { styled } from "@stitches/react"

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  padding: '$5 $6',
  gap: '$5',
  width: '100%',
  height: '72px',
  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',
  borderRadius: '$base',
  backgroundColor: '$gray600',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$purple200'
  }
})

export const Icon = styled('img', {
  width: '32px',
  height: '32px',
})