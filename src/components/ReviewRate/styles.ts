import { styled } from "@/styles/stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
  padding: '$1'
})

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
})