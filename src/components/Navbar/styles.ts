import { styled } from "@stitches/react"
import Link from "next/link"

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
  fontWeight: 'bold',
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

export const NavLink = styled(Link, {
  color: '$gray400',
  fontSize: '$md',
  textDecoration: 'none',
  height: '42px'
})

export const LogoutButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  color: '$gray200',
  cursor: 'pointer',
  marginTop: 'auto'
})