import { keyframes, styled } from "@/styles/stitches.config"
import * as Dialog from '@radix-ui/react-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { right: '-50%' },
  '100%': { right: '0%' },
});

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 10,
})

export const Content = styled(Dialog.Content, {
  backgroundColor: '$gray800',
  boxShadow: 'hsl(206 22 % 7 % / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20 %)',
  position: 'fixed',
  top: '0',
  right: '0',
  transformX: 'translate(50%)',
  width: '100vw',
  maxWidth: '640px',
  height: '100vh',
  padding: '64px 48px 0',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 11,
})

export const Close = styled(Dialog.Close, {
  all: 'unset',
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '32px',
  height: '32px',
  background: 'transparent',
  cursor: 'pointer',
})

export const BookCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '564px',
  padding: '24px 32px 16px 32px',
  background: '$gray700',
  borderRadius: '$base',

  '& > header': {
    display: 'flex',
    gap: '32px',
  }
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookTitleWrapper = styled('div', {
  lineHeight: '$base',

  '& > h2': {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$lg',
  },

  '& > span': {
    color: '$gray300',
    fontSize: '$md'
  }
})

export const RatingWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '& > div': {
    display: 'flex',
    gap: '$1',
  },

  '& > span': {
    color: '$gray400',
    fontSize: '$md'
  }
})

export const Footer = styled('div', {
  display: 'flex',
  gap: '24px',
  marginTop: '40px',
  borderTop: '1px solid $gray600',
  padding: '24px 4px'
})

export const FooterItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  lineHeight: '$short',

  '& > div': {
    display: 'flex',
    flexDirection: 'column',

    '& > h6': {
      fontSize: '$sm',
      fontWeight: '$regular',
      color: '$gray300',
    },

    '& > span': {
      color: '$gray200',
      fontSize: '$md',
      fontWeight: '$bold',
    }
  }
})

export const RatingTitleWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '46px 0 24px',

  '& > h3': {
    fontSize: '$sm',
    fontWeight: '$regular',
    color: '$gray200',
  },

  '& > button': {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 8px',
    fontWeight: '$bold',
    color: '$purple100',
    cursor: 'pointer',
  }
})