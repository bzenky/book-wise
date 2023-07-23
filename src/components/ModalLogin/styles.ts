import { styled } from "@stitches/react"
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from "@/styles/stitches.config"

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

export const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 13,
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  padding: '56px 72px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '40px',

  backgroundColor: '$gray800',
  boxShadow: 'hsl(206 22 % 7 % / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20 %)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '94%',
  maxWidth: '640px',
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 13,

  '& > strong': {
    color: '$gray200',
    fontWeight: '$bold',
    fontSize: '$md'
  }
})

export const ActionWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})