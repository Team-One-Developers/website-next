/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
      borderRadius: {
        blog: '20px',
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      boxShadow: {
        navLinkShadow: '0px 0px 10px rgba(70,255,173,0.77)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        t1: {
          white: 'var(--t1-white)',
          lightGray: 'var(--t1-lightGray)',
          gray: 'var(--t1-gray)',
          darkGray: 'var(--t1-darkGray)',
          black: 'var(--t1-black)',
          green: 'var(--t1-green)',
          darkGreen: 'var(--t1-darkGreen)',
          transparent: 'var(--t1-transparent)',
        },
        theme: {
          bgColor: 'var(--theme-bgColor)',
          textColor: 'var(--theme-textColor)',
          textHoverColor: 'var(--theme-textHoverColor)',
        },
      },
    },
  },
  plugins: [],
}
