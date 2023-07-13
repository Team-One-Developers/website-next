import { ReactNode } from 'react'
import { PageTheme } from '@/types'

import { PAGE_THEME } from '../../constants'
import { Ticker } from '../molecules/Ticker'
import ContentWrapper from './ContentWrapper'
import Footer from './Footer'
import Header from './Header'

export const PageLayout = ({
  children,
  theme,
  ticker = true,
}: {
  children: ReactNode
  theme?: PageTheme
  ticker?: boolean
}) => {
  const pageTheme = theme ? theme : PAGE_THEME.dark

  return (
    <div
      data-theme={pageTheme}
      className="bg-theme-bgColor text-theme-textColor"
    >
      <Header theme={pageTheme} />

      <main className="mb-16">{children}</main>

      {ticker ? <Ticker theme={pageTheme} /> : null}

      <ContentWrapper>
        <Footer />
      </ContentWrapper>
    </div>
  )
}
