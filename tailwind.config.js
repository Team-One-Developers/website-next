/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // override fontsizes to remove added lineheights that usually come with these classes as we use a shitton of special lineheighs
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontFamily: {
      ABCDiatypeRegular: ['var(--font-ABCD)'],
      ABCDiatypeRegularItalic: ['var(--font-ABCDItalic)'],
      SpaceGroteskLight: ['var(--font-SpaceGroteskLight)'],
      SpaceGroteskRegular: ['var(--font-SpaceGroteskRegular)'],
      SpaceGroteskMedium: ['var(--font-SpaceGroteskMedium)'],
    },
    screens: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      lineHeight: {
        84: '84%',
        95: '95%',
        97: '97%',
        110: '110%',
        115: '115%',
        130: '130%',
        144: '144%',
        150: '150%',
      },
      letterSpacing: {
        bitTighter: '-0.01em',
        aBitTighter: '-0.005em',
      },
      borderRadius: {
        blog: '20px',
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      boxShadow: {
        navLinkShadow: '0px 0px 10px rgba(70,255,173,0.77)',
      },
      colors: {
        t1: {
          lightGray: 'var(--t1-lightGray)',
          gray: 'var(--t1-gray)',
          darkGray: 'var(--t1-darkGray)',
          black: 'var(--t1-black)',
          green: 'var(--primary)',
          darkGreen: 'var(--t1-darkGreen)',
          transparent: 'var(--t1-transparent)',
        },
        background: 'var(--theme-background)',
        primary: {
          DEFAULT: 'var(--theme-primary)',
          foreground: 'var(--theme-primary-foreground)',
        },
        foreground: {
          DEFAULT: 'var(--theme-foreground)',
          hover: 'var(--theme-foreground-hover)',
        },
      },
      backgroundImage: (theme) => ({
        header_gradient:
          'linear-gradient(var(--theme-background) -20%, transparent 87%, transparent 98%, transparent 100%);',
      }),
    },
  },
  plugins: [
    function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
