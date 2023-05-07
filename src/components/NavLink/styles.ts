import { styled } from "@/styles/stitches.config"
import Link from "next/link"

export const CustomLink = styled(Link, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  color: '$gray400',
  fontSize: '$md',
  textDecoration: 'none',
  height: '42px',
  transition: 'color 0.2s ease-in-out',

  svg: {
    transition: 'stroke  0.2s ease-in-out',
  },

  '&:hover': {
    color: '$gray100',

    svg: {
      stroke: '$gray100',
    }
  },

  '&[data-active="true"]': {
    color: '$gray100',
    fontWeight: 'bold',

    svg: {
      stroke: '$gray100',
    },

    '&:before': {
      position: 'absolute',
      content: '',
      top: '50%',
      left: '-16px',
      transform: 'translateY(-50%)',
      width: '4px',
      height: '24px',
      background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
      borderRadius: '$full'
    }
  }
})