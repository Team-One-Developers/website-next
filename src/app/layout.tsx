import clsx from 'clsx'
import './globals.css'
import localFont from 'next/font/local'

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
        className={clsx(
          ABCD.variable,
          ABCDItalic.variable,
          SpaceGroteskRegular.variable,
          SpaceGroteskLight.variable,
          SpaceGroteskMedium.variable,
          'bg-t1-black'
        )}
      >
        {children}
      </body>
    </html>
  )
}
