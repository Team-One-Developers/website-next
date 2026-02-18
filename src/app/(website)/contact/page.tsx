import ContentBlock from "@/components/layout/ContentBlock"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"

export default function ContactPage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <HeroNew title="Kontakt" />
                </ContentBlock>

                <ContentBlock>
                    <ContactSectionNew
                        title="Lass uns über Software sprechen, die Wachstum schafft."
                        contact={{
                            name: "Klaus Kleber",
                            role: "Director Business Development",
                            imageUrl: "/images/culture/paul.png",
                            phone: "+49 182 9983882",
                            email: "hello@team-one.com"
                        }}
                    />
                </ContentBlock>
            </main>
        </div>
    )
}
