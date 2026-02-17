import FooterNew from "@/components/layout/FooterNew"
import HeaderNew from "@/components/layout/HeaderNew"

export default function WebsiteLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <HeaderNew />
            <main className="mt-24">{children}</main>
            <FooterNew />
        </>
    )
}
