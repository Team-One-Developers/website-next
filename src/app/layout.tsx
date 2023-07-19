import { twJoin } from 'tailwind-merge'

import '../styles/global.css'

import { Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

// do it this way to prevent Error: Cant access lexical declaration before initialitazion
import { Cookie } from '../components/layout/Cookie'

const ABCD = localFont({
  src: [
    {
      path: '../fonts/abc-diatype-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/abc-diatype-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-ABCD',
  display: 'swap',
})

const SpaceFrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-SpaceGrotesk',
  display: 'swap',
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
        className={twJoin(ABCD.variable, SpaceFrotesk.variable, 'bg-black')}
      >
        {children}
        <Cookie />
      </body>
    </html>
  )
}
