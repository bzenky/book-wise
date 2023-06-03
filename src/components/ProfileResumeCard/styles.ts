import { styled } from "@stitches/react"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$8',
  borderLeft: '1px solid $gray700'
})

export const UserPersonalInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5'
})

export const UserNameInfoWrapper = styled('div', {
  textAlign: 'center',
  lineHeight: '1.6',

  '& > h3': {
    fontSize: '$xl',
    fontWeight: '$bold',
    color: '$gray100'
  },

  '& > span': {
    fontSize: '$sm',
    color: '$gray400'
  }
})

export const Divider = styled('div', {
  width: '32px',
  height: '4px',
  background: '$gradient-horizontal',
  borderRadius: '$full'
})

export const ProfileDataWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$5 0',
  gap: '$10'
})

export const InfoWrapper = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  gap: '$5',
})

export const InfoDataWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '1.6',

  '& > h6': {
    fontSize: '$base',
    fontWeight: '$bold',
    color: '$gray200'
  },

  '& > span': {
    fontSize: '$sm',
    color: '$gray300'
  }
})