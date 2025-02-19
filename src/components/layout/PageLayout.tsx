import { HeaderCombined } from "@/components/tailgrid/HeaderCombined"
import { PageTheme } from "@/types"
import { ReactNode } from "react"
import { Ticker } from "../molecules/Ticker"

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
        <div data-theme={theme} className="relative w-full bg-background text-foreground">
            <HeaderCombined />
            <main>{children}</main>
            {ticker && <Ticker theme={tickerTheme} themeSameAsPage={theme === tickerTheme} />}
        </div>
    )
}
