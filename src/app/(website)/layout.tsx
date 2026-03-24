import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

export default function WebsiteLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <main className="mt-24">{children}</main>
            <Footer />
        </>
    )
}
