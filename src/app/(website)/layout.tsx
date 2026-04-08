import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"

export default function WebsiteLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
            >
                Zum Inhalt springen
            </a>
            <Header />
            <main id="main-content" className="mt-24">
                {children}
            </main>
            <Footer />
        </>
    )
}
