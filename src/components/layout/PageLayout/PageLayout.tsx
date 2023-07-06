'use client'

import { ReactNode } from 'react'
import { Ticker } from '../../molecules'
import { Header, ContentWrapper, Footer } from '../'
import { PAGE_THEME } from '../../../constants'
import PagesConfig from '../../../../pages.config'
import { usePathname } from 'next/navigation'

export const PageLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname()

  // if page ha special layout
  if (PagesConfig.unusualPages.some((page) => page.path === path)) {
    // const with config for current page
    const config = PagesConfig.unusualPages.filter(
      (page) => page.path === path
    )[0].config

    const theme = config.theme ? config.theme : PAGE_THEME.dark

    return (
      /* 
        check if prop is undefined (not specifically set, so normally include that component)
        or if prop is true, then also include it (you could just leave the prop out to have the same result, edge case)
      */
      <div data-theme={theme} className="bg-theme-bgColor text-theme-textColor">
        {config.header === undefined || config.header === true ? (
          <Header theme={theme} />
        ) : null}

        <main className="mb-16">{children}</main>

        {config.ticker === undefined || config.ticker === true ? (
          <Ticker theme={theme} />
        ) : null}
        {config.footer === undefined || config.footer === true ? (
          <ContentWrapper>
            <Footer />
          </ContentWrapper>
        ) : null}
      </div>
    )
  }

  // normal PageLayout with everything
  return (
    <div data-theme="dark" className="bg-theme-bgColor text-theme-textColor">
      <Header theme={PAGE_THEME.dark} />
      <main className="mb-16">{children}</main>
      <Ticker theme={PAGE_THEME.dark} />
      <ContentWrapper>
        <Footer />
      </ContentWrapper>
    </div>
  )
}
