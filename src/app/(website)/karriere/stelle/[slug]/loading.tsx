import ContentBlock from "@/components/layout/ContentBlock"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"

export default function Loading() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />
            <main className="relative z-10 py-32">
                <ContentBlock>
                    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6">
                        <div className="border-primary h-10 w-10 animate-spin rounded-full border-4 border-t-transparent" />
                        <p className="text-small text-black/60">Wird geladen…</p>
                    </div>
                </ContentBlock>
            </main>
        </div>
    )
}
