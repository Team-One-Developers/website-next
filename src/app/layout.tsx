import { twJoin } from 'tailwind-merge'

import '../styles/global.css'

import localFont from 'next/font/local'

// do it this way to prevent Error: Cant access lexical declaration before initialitazion
import { Cookie } from '../components/layout/Cookie'

const ABCD = localFont({
  src: '../fonts/abc-diatype-regular.woff2',
  display: 'swap',
  variable: '--font-ABCD',
})

const ABCDItalic = localFont({
  src: '../fonts/abc-diatype-regular-italic.woff2',
  display: 'swap',
  variable: '--font-ABCDItalic',
})

const SpaceGroteskRegular = localFont({
  src: '../fonts/SpaceGrotesk-Regular.ttf',
  display: 'swap',
  variable: '--font-SpaceGroteskRegular',
})

const SpaceGroteskLight = localFont({
  src: '../fonts/SpaceGrotesk-Light.ttf',
  display: 'swap',
  variable: '--font-SpaceGroteskLight',
})

const SpaceGroteskMedium = localFont({
  src: '../fonts/SpaceGrotesk-Medium.ttf',
  display: 'swap',
  variable: '--font-SpaceGroteskMedium',
})

export const metadata = {
  title: 'Team One Developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={twJoin(
          ABCD.variable,
          ABCDItalic.variable,
          SpaceGroteskRegular.variable,
          SpaceGroteskLight.variable,
          SpaceGroteskMedium.variable,
          'bg-t1-black'
        )}
      >
        {children}
        <Cookie />
      </body>
    </html>
  )
}
