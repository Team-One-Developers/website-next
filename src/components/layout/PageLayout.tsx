import { PageTheme } from "@/types"
import { ReactNode } from "react"
import { Ticker } from "../molecules/Ticker"
import Header from "./Header"

export const PageLayout = ({
    children,
    theme,
    ticker = true
}: {
    children: ReactNode
    theme: PageTheme
    ticker?: boolean
}) => {
    return (
        <div data-theme={theme} className="bg-background text-foreground">
            <Header theme={theme} />
            <main className="mb-16">{children}</main>
            {ticker && <Ticker theme={theme} />}
        </div>
    )
}
