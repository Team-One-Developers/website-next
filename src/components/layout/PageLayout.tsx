import { PageTheme } from "@/types"
import { ReactNode } from "react"
import { PAGE_THEME } from "../../constants"
import { Ticker } from "../molecules/Ticker"
import Footer from "./Footer"
import Header from "./Header"

export const PageLayout = ({
    children,
    theme,
    ticker = true
}: {
    children: ReactNode
    theme?: PageTheme
    ticker?: boolean
    footer?: boolean
}) => {
    const pageTheme = theme ? theme : PAGE_THEME.dark

    return (
        <div data-theme={pageTheme} className="bg-background text-foreground">
            <Header theme={pageTheme} />
            <main className="mb-16">{children}</main>
            {ticker && <Ticker theme={pageTheme} />}
            <Footer />
        </div>
    )
}
