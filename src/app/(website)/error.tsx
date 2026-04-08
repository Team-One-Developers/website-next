"use client"

import Button from "@/components/atoms/Button"
import ContentBlock from "@/components/layout/ContentBlock"

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="relative">
            <main className="relative z-10 grid min-h-[70vh] place-items-center py-24 sm:py-32">
                <ContentBlock>
                    <div className="text-center">
                        <p className="font-gteratext text-primary text-base font-semibold">Fehler</p>
                        <h1 className="font-gteradisplay text-d1 mt-4 font-light text-black">
                            Etwas ist schiefgelaufen
                        </h1>
                        <p className="font-gteratext text-small mt-6 text-black/60">
                            Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-4">
                            <Button label="Erneut versuchen" onClick={() => reset()} variant="primary" />
                            <Button label="Zur Startseite" href="/" variant="outline" />
                        </div>
                    </div>
                </ContentBlock>
            </main>
        </div>
    )
}
