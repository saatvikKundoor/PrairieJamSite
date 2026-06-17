import base from '@rebass/preset'
import { merge } from 'lodash'

export const breakpoints = [32, 48, 64].map(w => `${w}em`)

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

export const fontSizes = [14, 16, 20, 24, 32, 48, 64, 96, 128]


export const palette = {
  // Base Backgrounds (Warm Dark Theme Foundations)
  darker: '#11100d',
  dark: '#1a1814',
  darkless: '#26231e',

  // Recalibrated Warm Greyscale
  black: '#1c1a17',
  steel: '#38342e',
  slate: '#5c564c',
  muted: '#8c8375',
  smoke: '#e6e2da',
  snow: '#faf8f5',
  white: '#ffffff',

  // Brand Palette (Cream & Gold Premium Aesthetic)
  primary: '#D6BB87',          // Muted Gold / Primary Accent
  primaryWash: '#FFFDD0',      // Soft Cream / Primary Surface
  primaryDark: '#A88F5C',      // Deep Gold for text readability/hover states
  
  // Secondary / Supporting (Deep Espresso/Navy for sophisticated contrast)
  alt: '#2C3E50',
  altDark: '#1A252F',
  altLight: '#34495E',
  altWash: '#EAECEE',

  // Functional / Semantic Colors (Adjusted for warmth)
  success: '#4A7c59',          // Sage-leaning Success Green
  error: '#C94A4A',            // Terracotta-leaning Error Red
  warning: '#DE9E36',          // Warm Amber Warning
  info: '#4A7BB0'              // Muted Slate Blue Info
}


const theme = merge(base, {
  breakpoints,
  space,
  fontSizes,
  initialColorMode: 'light',
  colors: {
    ...palette,
    text: palette.black,
    background: palette.snow,
    cards: palette.white,
    muted: palette.muted,
    sunken: palette.smoke,
    bannerBG: palette.alt,
    bannerColor: palette.white,
    bannerColorAlt: palette.white,
    coolBg: palette.cool,
    modes: {
      dark: {
        text: palette.white,
        background: palette.dark,
        cards: palette.darkless,
        sunken: palette.black,
        primaryWash: '#3f3822',
        bannerBG: palette.darkless,
        bannerColor: palette.coolWash,
        bannerColorAlt: palette.white,
        coolBg: palette.dark
      }
    }
  },
  fonts: {
    body:
      'Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
    heading: 'inherit',
    mono: 'Menlo, monospace'
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
    tight: 0.875
  },
  fontWeights: {
    body: '400',
    medium: '700',
    mediumbold: '800',
    bold: '900'
  },
  letterSpacings: {
    heading: '-0.05em',
    caps: '0.05em'
  },
  sizes: {
    superslim: 512,
    slim: 640,
    narrow: 768,
    container: 1024,
    wide: 1536
  },
  radii: {
    default: 6,
    extra: 9,
    circle: 99999
  },
  shadows: {
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    sheet: '0 8px 32px rgba(0, 0, 0, 0.0625)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  },
  variants: {
    container: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto',
      px: 3
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    },
    card: {
      bg: 'cards',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card'
    },
    sheet: {
      bg: 'cards',
      borderRadius: 'extra',
      boxShadow: 'sheet',
      overflow: 'hidden'
    },
    avatar: {
      borderRadius: 'circle',
      objectFit: 'cover',
      objectPosition: 'center',
      flexShrink: 0
    }
  },
  styles: {
    a: {
      color: 'primary',
      cursor: 'pointer',
      ':hover, :focus': {
        color: 'alt'
      }
    },
    p: {
      fontFamily: 'mono'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    navitem: {
      cursor: 'pointer',
      borderRadius: 'circle',
      fontWeight: 'medium',
      fontSize: 2,
      lineHeight: 'body',
      textDecoration: 'none',
      py: 1,
      px: [2, 3],
      mx: [null, 1],
      transition: 'background .125s ease-in-out',
      ':focus, :hover, :active': {
        bg: 'sunken'
      }
    }
  }
})

export default theme
