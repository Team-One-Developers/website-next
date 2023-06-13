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
          white: 'var(--t1-white)',
          lightGray: 'var(--t1-lightGray)',
          grey: 'var(--t1-grey)',
          darkGrey: 'var(--t1-darkGrey)',
          black: 'var(--t1-black)',
          green: 'var(--t1-green)',
          darkerGreen: 'var(--t1-darkerGreen))',
          transparent: 'var(--t1-transparent)',
        },
      },
    },
  },
  plugins: [],
};
