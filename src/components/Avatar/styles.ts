import { styled } from "@stitches/react"
import * as Avatar from '@radix-ui/react-avatar'

export const AvatarContainer = styled('div', {
  position: 'relative',
  borderRadius: '100%',

  '&:before': {
    position: 'absolute',
    content: '',
    top: '50%',
    left: '50%',
    width: 'calc(100% + 2px)',
    height: 'calc(100% + 2px)',
    transform: 'translate(-50%, -50%)',
    borderRadius: 'inherit',
    zIndex: 1,
    background: 'linear-gradient(to bottom, #7FD1CC, #9694F5)',
  },
})

export const AvatarRoot = styled(Avatar.Root, {
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  userSelect: 'none',
  width: '52px',
  height: '52px',
  borderRadius: '100%',

  variants: {
    size: {
      sm: {
        width: '32px',
        height: '32px',
      },
      base: {
        width: '72px',
        height: '72px',
      },
    },
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray500',
  fontSize: 16,
  fontWeight: 500,
})