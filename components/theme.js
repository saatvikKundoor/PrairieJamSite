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
    text: palette.black,         // E.g., a deep charcoal/sepia instead of pure black
    background: palette.snow,    // E.g., warm cream or soft parchment
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
    // Elegant, readable serifs for that bookish feel
    body: 'Georgia, Cambria, "Times New Roman", Times, serif',
    heading: '"Playfair Display", "Lora", Georgia, serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", monospace'
  },
  lineHeights: {
    body: 1.6,       // Slightly wider line height for comfortable, book-like reading
    heading: 1.25,
    tight: 1.1
  },
  fontWeights: {
    body: '400',
    medium: '600',
    mediumbold: '700',
    bold: '800'
  },
  letterSpacings: {
    heading: '-0.02em', // Less aggressive negative spacing fits serifs better
    caps: '0.08em'      // Slightly wider tracking for capitalized labels
  },
  sizes: {
    superslim: 512,
    slim: 640,
    narrow: 768,
    container: 1024,
    wide: 1536
  },
  radii: {
    default: 4,      // Slightly sharper, traditional book-binding corners
    extra: 8,
    circle: 99999
  },
  shadows: {
    // Softer, more organic shadows to mimic natural light on paper
    card: '0 2px 12px rgba(45, 38, 32, 0.08)', 
    sheet: '0 8px 24px rgba(45, 38, 32, 0.05)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'bold',
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
      fontWeight: 'bold',
      lineHeight: 'heading'
    },
    card: {
      bg: 'cards',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      border: '1px solid',
      borderColor: 'muted' // Optional: adds a subtle page-like border
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
      textDecoration: 'underline', // Classic editorial look
      textDecorationThickness: '1px',
      textUnderlineOffset: '3px',
      transition: 'color .15s ease-in-out',
      ':hover, :focus': {
        color: 'alt',
        textDecorationColor: 'currentColor'
      }
    },
    p: {
      fontFamily: 'body', // Changed from 'mono' to 'body' for proper reading layout
      fontSize: [2, 3],   // Slightly larger body text works beautifully with serifs
      lineHeight: 'body',
      mb: 3
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: 'default' // Images look nice with a slight paper-edge radius
    },
    navitem: {
      cursor: 'pointer',
      borderRadius: 'default',
      fontFamily: 'heading', // Use heading font for a literary navigation style
      fontWeight: 'medium',
      fontSize: 2,
      lineHeight: 'body',
      textDecoration: 'none',
      py: 1,
      px: [2, 3],
      mx: [null, 1],
      transition: 'all .125s ease-in-out',
      ':focus, :hover, :active': {
        bg: 'sunken',
        color: 'primary'
      }
    }
  }
})

export default theme
