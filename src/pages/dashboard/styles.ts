import { styled } from "@stitches/react"

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  width: '100%',
  borderRadius: '$lg',
  minHeight: '100vh',
})

export const Title = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '$2xl',
  color: '$gray100',
})