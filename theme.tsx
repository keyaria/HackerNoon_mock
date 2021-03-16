import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})


const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  fontSizes: {
    body: "IBM Plex Mono, monospace",
    heading: "IBM Plex Mono, monospace"
  },
  breakpoints,
})

export default theme
