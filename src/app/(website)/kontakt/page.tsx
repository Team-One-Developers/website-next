import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"

export default function ContactPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero title="Kontakt" />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection title="Lass uns über Software sprechen, die Wachstum schafft." />
                </ContentBlock>
            </main>
        </div>
    )
}
