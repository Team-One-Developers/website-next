import { PageTheme } from "@/types"
import { ReactNode, Suspense } from "react"
import { PAGE_THEME } from "../../constants"
import { Ticker } from "../molecules/Ticker"
import Footer from "./Footer"
import Header from "./Header"
import { WebsiteCarbonBadge, WebsiteCarbonBadgeSkeleton } from "../molecules/WebsiteCarbonBadge"

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
            <Footer theme={pageTheme}>
                <Suspense fallback={<WebsiteCarbonBadgeSkeleton />}>
                    <WebsiteCarbonBadge dark={theme == PAGE_THEME.dark ? true : false}></WebsiteCarbonBadge>
                </Suspense>
            </Footer>
        </div>
    )
}
