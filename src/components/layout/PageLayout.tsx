import Breadcrumb5 from "@/components/tailgrid/Breadcrumb5"
import Navbar8 from "@/components/tailgrid/Navbar8"
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
            <Navbar8 />
            <main className="mt-[86px]">
                <Breadcrumb5 />
                {children}
            </main>
            {ticker && <Ticker theme={tickerTheme} themeSameAsPage={theme === tickerTheme} />}
        </div>
    )
}
