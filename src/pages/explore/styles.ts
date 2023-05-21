import { styled } from "@stitches/react"
import { Search } from "lucide-react"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 0',
  width: '100%',
  maxWidth: '998px',
  maxHeight: 'calc(100vh - 40px)',
  margin: '0 auto',
  borderRadius: '$lg',
})

export const TitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Title = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '$2xl',
  color: '$gray100',
})

export const SearchWrapper = styled('div', {
  position: 'relative',
  width: '433px',

  '&:focus': {
    '& svg': {
      stroke: '$green200'
    }
  }
})

export const SearchInput = styled('input', {
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

export const SearchIcon = styled(Search, {
  position: 'absolute',
  top: '50%',
  right: '20px',
  transform: 'translateY(-50%)',
})