import { PageTheme } from "@/types"
import { ReactNode } from "react"
import { Ticker } from "../molecules/Ticker"
import Header from "./Header"

export const PageLayout = ({
    children,
    theme,
    ticker = true,
    tickerTheme = theme
}: {
    children: ReactNode
    theme: PageTheme
    ticker?: boolean
    tickerTheme?: PageTheme
}) => {
    return (
        <div data-theme={theme} className="bg-background text-foreground">
            <Header theme={theme} />
            <main>{children}</main>
            {ticker && <Ticker theme={tickerTheme} themeSameAsPage={theme === tickerTheme} />}
        </div>
    )
}
