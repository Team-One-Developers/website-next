import Link from "next/link"
import { Section } from "../components/layout/Section"

const NotFound = () => {
    return (
        <Section>
            <main className="relative grid min-h-screen w-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div
                    aria-hidden="true"
                    className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#21352b] to-[#46ffad] opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
                <div className="text-center">
                    <p className="text-primary text-base font-semibold">404</p>
                    <h1 className="font-spacegrotesk text-t1-white mt-4 text-5xl font-semibold tracking-tight text-balance uppercase sm:text-7xl">
                        Seite nicht gefunden
                    </h1>
                    <p className="text-t1-white/90 mt-6 text-lg font-medium text-pretty sm:text-xl/8">
                        Entschuldigung, wir konnten die von Ihnen gesuchte Seite nicht finden.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="bg-primary text-t1-black font-spacegrotesk hover:bg-primary/90 focus-visible:outline-primary rounded-xs px-3.5 py-2.5 text-sm font-semibold uppercase focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Zurück zur Startseite
                        </Link>
                        {/* <a href="#" className="text-sm font-semibold text-gray-900">
                            Kontakt <span aria-hidden="true">&rarr;</span>
                        </a> */}
                    </div>
                </div>
            </main>
        </Section>
    )
}

export default NotFound
