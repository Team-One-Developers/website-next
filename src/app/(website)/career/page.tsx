import ContentBlock from "@/components/layout/ContentBlock"
import BenefitsGrid from "@/components/sections/BenefitsGrid"
import ContactSectionNew from "@/components/sections/ContactSectionNew"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import HeroNew from "@/components/sections/HeroNew"
import ImageMarquee from "@/components/sections/ImageMarquee"
import ImageTeaser from "@/components/sections/ImageTeaserNew"
import JobAccordion from "@/components/sections/JobAccordion"
import ServiceDetailSection from "@/components/sections/ServiceDetailSection"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_PUBLIC_CAREERS } from "@/sanity/queries"
import { Career } from "@/sanity/types"

function groupCareersByDivision(careers: Career[]) {
    const groups = new Map<string, Career[]>()

    for (const career of careers) {
        if (!career.division || !career.slug?.current) continue
        const existing = groups.get(career.division) || []
        existing.push(career)
        groups.set(career.division, existing)
    }

    return Array.from(groups.entries()).map(([division, items]) => ({
        label: division,
        count: items.length,
        jobs: items.map((c) => ({
            title: c.title,
            type: `${c.employmentType}, ${c.schedule}`,
            href: `/career/job/${c.slug!.current!}`
        }))
    }))
}

export default async function CareerPage() {
    const allCareers = await client.fetch(QUERY_ALL_PUBLIC_CAREERS)
    const jobCategories = groupCareersByDivision(allCareers)

    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                {/* Hero */}
                <ContentBlock>
                    <HeroNew
                        title="Career"
                        eyebrows={["Alle Jobs", "Events", "Life at T1", "Benefits", "Bewerbungsprozess"]}
                        description="Arbeite in einem Expert:innen-Team an Projekten, die mit Software, Daten und KI echten Mehrwert schaffen. Bei uns stehen Menschen im Mittelpunkt – wir bieten ein unterstützendes, inklusives Umfeld und flexible Arbeitsmodelle."
                    />
                </ContentBlock>

                {/* Image Teaser */}
                <ContentBlock>
                    <ImageTeaser
                        title="Vertrauen durch Empathie"
                        description="Empathie ist für uns der Schlüssel zu echter Zusammenarbeit. Wir begegnen unseren Kund:innen mit Offenheit und Verständnis – und schaffen so Beziehungen, die auf Vertrauen und gegenseitigem Respekt beruhen."
                        buttonLabel="Mehr erfahren"
                        buttonVariant="light"
                        image="/images/culture/officelife.webp"
                        author={{
                            name: "by Hannah",
                            role: "Marketing & Organisation",
                            avatarUrl: "/images/culture/paul.png"
                        }}
                    />
                </ContentBlock>

                {/* Open Positions */}
                <ContentBlock>
                    <JobAccordion title="Open Position" categories={jobCategories} />
                </ContentBlock>

                {/* Benefits */}
                <ContentBlock>
                    <BenefitsGrid
                        benefits={[
                            {
                                title: "Bonus",
                                description:
                                    "Neben Weihnachts- und Urlaubsgeld erhältst Du bei uns erfolgsabhängige Prämien.",
                                iconUrl: "/new/images/verwinkelt.svg"
                            },
                            {
                                title: "Home Office",
                                description:
                                    "Auch wenn wir tolle Büroräumlichkeiten in Stuttgarts Halbhöhenlage haben, unterstützen wir flexible Arbeitszeiten ebenso wie Home Office.",
                                iconUrl: "/new/images/verwinkelt.svg"
                            },
                            {
                                title: "Weiterbildung",
                                description:
                                    "Von internationalen Konferenz-Besuchen bis hin zu regelmäßigen Work-Retreats und Persönlichkeitscoachings, den Möglichkeiten zur individuellen fachlichen wie persönlichen Weiterentwicklung sind bei uns keine Grenzen gesetzt.",
                                iconUrl: "/new/images/verwinkelt.svg"
                            },
                            {
                                title: "Worktation",
                                description:
                                    "Wir haben Gefallen daran gefunden dort zu arbeiten wo andere Urlaub machen. Ein bis zweimal jährlich wechseln wir unser Arbeitsumfeld und reisen gemeinsam an spannenden Locations im In- und Ausland.",
                                iconUrl: "/new/images/verwinkelt.svg"
                            },
                            {
                                title: "Jobrad",
                                description:
                                    "Bei uns erhältst Du attraktive Konditionen für dein Jobrad durch unser hauseigenes und selbst-finanziertes Firmenradprogramm.",
                                iconUrl: "/new/images/verwinkelt.svg"
                            },
                            {
                                title: "Wellness",
                                description:
                                    "Alternativ hast Du die Möglichkeit über unseren Fitness-Partner Wellpass in 10.000 hochwertigen Sport- und Gesundheitseinrichtungen in ganz Deutschland zu trainieren.",
                                iconUrl: "/new/images/verwinkelt.svg"
                            },
                            {
                                title: "Hardware",
                                description:
                                    "Du erhältst bei uns natürlich alles was Du zum Arbeiten brauchst. Du wählst dabei deine Arbeitsmittel selbst aus damit Du vom Start weg bestmöglich arbeitsfähig bist.",
                                iconUrl: "/new/images/verwinkelt.svg"
                            }
                        ]}
                        cta={{
                            title: "Werde jetzt ein Teil unseres Teams",
                            description:
                                "Wir freuen uns auf ein persönliches Gespräch mit Ihnen. Kontaktieren Sie uns einfach.",
                            buttonLabel: "Jetzt bewerben",
                            buttonHref: "/contact"
                        }}
                    />
                </ContentBlock>

                {/* Recruitment Process */}
                <ContentBlock className="relative">
                    <div className="bg-primary-soft absolute inset-x-0 inset-y-0 -mx-[calc((100vw-100%)/2)] rounded-4xl" />
                    <ServiceDetailSection
                        sectionTitle={"Recruitment\nProcess"}
                        eyebrowLabel="Bewerbungsprozess"
                        navItems={["Interview invitation", "The interview", "Test task", "Now you're one of us!"]}
                        items={[
                            {
                                title: "Interview Invitation",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität.",
                                image: "/new/images/image-4.jpg"
                            },
                            {
                                title: "The Interview",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität.",
                                image: "/new/images/image-5.jpg"
                            },
                            {
                                title: "Test Task",
                                description:
                                    "Wir entwickeln skalierbare, modulare Plattformen und Anwendungen für komplexe Enterprise-Ökosysteme. Unsere Lösungen verbinden Daten, Prozesse und Nutzererlebnisse zu performanten, zukunftsfähigen Systemen. Dabei setzen wir auf moderne Architekturprinzipien, API-first-Design und nachhaltige Softwarequalität.",
                                image: "/new/images/image-6.jpg"
                            }
                        ]}
                        className="relative py-20"
                    />
                </ContentBlock>

                {/* Image Teaser 2 */}
                <ContentBlock>
                    <ImageTeaser
                        title="Vertrauen durch Empathie"
                        description="Empathie ist für uns der Schlüssel zu echter Zusammenarbeit. Wir begegnen unseren Kund:innen mit Offenheit und Verständnis – und schaffen so Beziehungen, die auf Vertrauen und gegenseitigem Respekt beruhen."
                        buttonLabel="Mehr erfahren"
                        buttonVariant="light"
                        image="/images/culture/coding.webp"
                        author={{
                            name: "by Hannah",
                            role: "Marketing & Organisation",
                            avatarUrl: "/images/culture/paul.png"
                        }}
                    />
                </ContentBlock>

                {/* Image Gallery Marquee */}
                <ImageMarquee
                    images={[
                        { src: "/new/images/image-1.jpg", alt: "Team One Kultur", width: 355, height: 375 },
                        { src: "/new/images/image-2.jpg", alt: "Team One Zusammenarbeit", width: 500, height: 375 },
                        { src: "/new/images/image-3.jpg", alt: "Team One Office", width: 390, height: 375 },
                        { src: "/images/culture/coffetalk.webp", alt: "Team One Austausch", width: 355, height: 375 }
                    ]}
                />

                {/* Contact */}
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
