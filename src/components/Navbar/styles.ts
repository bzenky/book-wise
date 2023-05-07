import { styled } from "@stitches/react"

export const Aside = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '232px',
  width: '90%',
  minHeight: 'calc(100vh - 40px)',
  padding: '24px',
  backgroundImage: 'url(/nav-background.png)',
  borderRadius: '$lg',
  fontSize: '$md'
})

export const NavWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Navigation = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '64px'
})

export const AuthButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  color: '$gray200',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: 'auto',
})