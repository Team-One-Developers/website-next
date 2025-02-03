import cn from "@/lib/cn"
import { PageTheme } from "@/types"
import { ReactNode } from "react"
import { Ticker } from "../molecules/Ticker"
import Footer from "./Footer"
import Header from "./Header"

export const PageLayout = ({
    children,
    theme,
    ticker = true,
    footer = true
}: {
    children: ReactNode
    theme: PageTheme
    ticker?: boolean
    footer?: boolean
}) => {
    return (
        <div data-theme={theme} className="bg-background text-foreground">
            <Header theme={theme} />
            <main className={cn(footer && "mb-16")}>{children}</main>
            {ticker && <Ticker theme={theme} />}
            {footer && <Footer />}
        </div>
    )
}
