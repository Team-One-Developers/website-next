/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        t1: {
          white: '#FFFFFF',
          lightGray: '#f2f2f2',
          grey: '#585858',
          darkGrey: '#1D1D1D',
          black: '#000000',

          green: '#46FFAD',
          darkerGreen: '#21352B',
          transparent: 'transparent',
        },
      },
    },
  },
  plugins: [],
};
