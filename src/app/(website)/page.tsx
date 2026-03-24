import ContentBlock from "@/components/layout/ContentBlock"
import ContactSection from "@/components/sections/ContactSection"
import EventsSection from "@/components/sections/EventsSection"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import ServicesOverview from "@/components/sections/ServicesOverview"
import StatementSection from "@/components/sections/StatementSection"
import { StoryCard } from "@/components/sections/SuccessStoriesGrid"
import { storyList } from "@/data/stories"

const Home = () => {
    return (
        <div className="relative">
            {/* Green wavy gradient backdrop — parallax blobs */}
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock className="md:py-36">
                    <Hero
                        title={"Tech-driven\nBusiness Transformation"}
                        description="Team One ist Technologie-Beratungspartner für digitale Produkte, skalierbare Architekturen und KI-gestützte Geschäftsmodelle – mit Tech-Expertise, die in echten Projekten wirkt. Strategisch, datengetrieben, umsetzungsstark."
                        eyebrows={["Strategy", "Data & AI", "Software Engineering"]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <StatementSection
                        eyebrowLabel="Was uns antreibt"
                        text="Wir steigern die Wettbewerbsfähigkeit von Unternehmen in einer digitalen Welt."
                    />
                </ContentBlock>

                <ContentBlock>
                    <ServicesOverview />
                </ContentBlock>

                <ContentBlock greenBg>
                    <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {storyList.map((story, i) => (
                            <StoryCard key={`${story.href}-${i}`} {...story} />
                        ))}
                    </div>
                </ContentBlock>

                {/*
                    TODO ADJUST CONTENT WITH PAUL
                    */}
                <ContentBlock>
                    <ImageTeaser
                        title="Unsere Werte sind unser Kompass."
                        description="Nachhaltigkeit, Transparenz und partnerschaftliche Zusammenarbeit – das sind die Grundpfeiler unserer Arbeit."
                        buttonLabel="Mehr über uns"
                        buttonHref="/unternehmen"
                        image="/new/images/image-1.jpg"
                    />
                </ContentBlock>

                {/*
                    TODO ADJUST CONTENT WITH PAUL

                    EVENTS & INSIGHTS 2 times this module
                    */}
                <ContentBlock>
                    <EventsSection
                        eyebrowLabel="Offerings"
                        title="Events"
                        description="Erleben Sie uns live: als Speaker auf führenden Branchenveranstaltungen und in inspirierenden Webinaren."
                        buttonLabel="Alle Events"
                        buttonHref="/veranstaltungen"
                        events={[
                            {
                                title: "KI in der Unternehmenspraxis",
                                description:
                                    "Wie Unternehmen KI-Projekte von der Idee in die Produktion bringen – und was dabei wirklich zählt.",
                                dateLocation: "15. März 2026 • Stuttgart",
                                speakerName: "Andreas Zander",
                                speakerRole: "Managing Director",
                                speakerImage: "/new/images/image-2.jpg",
                                speakerBadge: "Speaker",
                                href: "/veranstaltungen/ki-praxis"
                            },
                            {
                                title: "Platform Engineering Summit",
                                description:
                                    "Best Practices für Internal Developer Platforms: von der Architektur zur Adoption.",
                                dateLocation: "22. April 2026 • Berlin",
                                speakerName: "Team One",
                                speakerRole: "Engineering",
                                speakerImage: "/new/images/image-3.jpg",
                                href: "/veranstaltungen/platform-engineering"
                            }
                        ]}
                    />
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser
                        title="Wir steigern die Wettbewerbsfähigkeit von Unternehmen in einer digitalen Welt."
                        description="Von Enterprise Software Engineering über Operational AI Implementierung bis hin zur Strategieberatung - wir sind ein spezialisiertes Tech-Powerhouse für komplexe und nachhaltige Technologie- und Geschäftstransformation."
                        buttonLabel="Unsere Leistungen"
                        buttonHref="/leistungen"
                        image="/new/images/kaprun-2.jpg"
                    />
                </ContentBlock>

                <ContentBlock>
                    <ContactSection title="What's next? Let's talk." />
                </ContentBlock>
            </main>
        </div>
    )
}
export default Home
