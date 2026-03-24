import Button from "@/components/atoms/Button"
import ContentBlock from "@/components/layout/ContentBlock"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"

const NotFound = () => {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="relative z-10 grid min-h-[70vh] place-items-center py-24 sm:py-32">
                <ContentBlock>
                    <div className="text-center">
                        <p className="font-gteratext text-primary text-base font-semibold">404</p>
                        <h1 className="font-gteradisplay text-d1 mt-4 font-light text-black">Seite nicht gefunden</h1>
                        <p className="font-gteratext text-small mt-6 text-black/60">
                            Entschuldigung, wir konnten die von Ihnen gesuchte Seite nicht finden.
                        </p>
                        <div className="mt-10 flex items-center justify-center">
                            <Button label="Zurück zur Startseite" href="/" variant="dark" />
                        </div>
                    </div>
                </ContentBlock>
            </main>
        </div>
    )
}

export default NotFound
