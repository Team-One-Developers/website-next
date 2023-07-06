import { PAGE_THEME } from '@/constants'
import { PageTheme } from '@/types'

type UnusualPage = {
  name: string
  path: string
  config: {
    theme?: PageTheme
    header?: boolean
    ticker?: boolean
    footer?: boolean
  }
}

export const PagesConfig: { unusualPages: UnusualPage[] } = {
  // every page not listed here, will be rendered with Header, Ticker, Footer in DarkMode
  unusualPages: [
    { name: 'Home', path: '/', config: { theme: PAGE_THEME.light } },
    { name: 'Contact', path: '/contact', config: { ticker: false } },
  ],
}

export default PagesConfig
