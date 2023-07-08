import { globalCss } from "./stitches.config"

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollbarWidth: 'auto',
    scrollbarColor: '#d7d4d8 #ffffff',
    fontFamily: '$default',

    '&::-webkit-scrollbar': {
      width: '14px'
    },

    '&::-webkit-scrollbar-track': {
      background: '#505050'
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#202024',
      borderRadius: '10px',
      border: '2px solid #505050',
    }
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: "$gray800"
  }
})