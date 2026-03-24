import Button from "@/components/atoms/Button"
import Eyebrow from "@/components/atoms/Eyebrow"
import ContentBlock from "@/components/layout/ContentBlock"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import ImageTeaser from "@/components/sections/ImageTeaser"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Unternehmen",
    description:
        "Team One ist eine Technologie- & Transformations-Beratung mit Fokus auf menschenzentrierte Arbeitsweisen und datengetriebene Geschäftsmodelle."
}

const values = [
    {
        title: "Wir arbeiten mit und für Menschen",
        description: `„Mit und für Menschen arbeiten“ ist für uns keine Selbstverständlichkeit sondern Ausdruck unseres Bewusstseins für die Wichtigkeit jedes Einzelnen - Kollegen, Kunden, Partner oder Nutzer. Wir wollen der beste Arbeitgeber für unsere Mitarbeiter und der beste Umsetzungspartner für unsere Kunden sein. Das gelingt uns nur dann, wenn wir den Einzelbedürfnissen aller Akteure überdurchschnittliche Aufmerksamkeit schenken, achtsam miteinander umgehen und unser Arbeitsumfeld als Nährboden für persönliches Wachstum gestalten.`
    },
    {
        title: "Wir sind kundenzentrisch",
        description:
            "In Anlehnung an die agilen Prinzipien folgen wir dem Gedanken von kundenzentrisch ausgerichteten Organisation, da wir die kontinuierliche Anpassung an Markt- und somit auch an Kundenbedürfnisse als die übergeordnete Maxime für Geschäftserfolg in einer digitalen Welt betrachten."
    },
    {
        title: "Wir folgen agilen Prinzipien",
        description:
            "Wir folgen den Prinzipien des agilen Manifests. Wir halten Agilität für eine notwendige und richtige Antwort auf die Frage, wie sich unsere Kunden bestmöglich innerhalb der sich ständig verändernden Unternehmensumwelt positionieren sollten. Unser Verständnis von technischer Exzellenz, von Kollaboration und Motivation sind ebenfalls zentraler Bestandteil des agilen Manifest sowie von unseren Unternehmenswerten."
    },
    {
        title: "Wir stehen für Qualität und Nachhaltigkeit",
        description: `In allem was wir tun halten wir ein überdurchschnittlich hohes Qualitätsverständnis aufrecht, da wir Qualität als die Grundlage für Nachhaltigkeit und Exzellenz betrachten. Getreu dem Motto „Man ist nie zu klein, um den Unterschied zu machen“, versuchen wir mit gutem Beispiel voran zu gehen und unsere kleine Welt jeden Tag ein bisschen besser zu machen.`
    },
    {
        title: "Wir glauben an Technologie und Innovation",
        description:
            "Wir sind ein Technologie-Unternehmen und glauben an Fortschritt durch Technologie und Innovation. Software ist integraler Bestandteil einer technologisierten Welt und diesen Teil wollen wir unter Berücksichtigung gesellschaftlicher Werte und Normen positiv beeinflussen und aktiv gestalten."
    }
]

const managementTeam = [
    {
        name: "Timo Brückel",
        role: "Founding Partner & CEO",
        image: "/images/people/timo.png"
    },
    {
        name: "Julian Richter",
        role: "Founding Partner & CEO",
        image: "/images/people/julian-card.png"
    },
    {
        name: "Johannes Aehling",
        role: "CEO Team One Inframotive",
        image: "/images/people/johannes-close.png"
    },
    {
        name: "Paul Krauss",
        role: "Partner AI",
        image: "/images/people/paul-closeclose.png"
    }
]

const partners = [
    {
        name: "Fraunhofer",
        description: "AI Research Partner",
        image: ""
    },
    {
        name: "Vercel",
        description:
            "Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges Wachstum ermöglichen.",
        image: ""
    },
    {
        name: "Porsche",
        description:
            "Wir verwandeln komplexe Anforderungen in performante Softwarelösungen, die nachhaltiges Wachstum ermöglichen.",
        image: ""
    }
]

export default function CulturePage() {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <main className="gap-vertical-inner relative z-10 flex flex-col">
                {/* Hero */}
                <ContentBlock>
                    <Hero title="Unternehmen" eyebrows={["Das sind wir", "Unsere Werte", "Management"]} />
                </ContentBlock>

                {/* Hero Image */}
                <ContentBlock>
                    <ImageTeaser
                        image="/images/office-interior.jpg"
                        alt="Team One Office"
                        showOverlay={false}
                        priority
                    />
                </ContentBlock>

                {/* Content Block — two-column text */}
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col lg:flex-row">
                        <div className="flex-1">
                            <p className="font-gteradisplay text-h2 text-black">
                                Team One ist eine Technologie- & Transformations-Beratung mit Fokus auf
                                menschenzentrierte Arbeitsweisen.
                                <br />
                                Als Early Adopter zentraler technologischer und methodischer Frameworks agieren wir als
                                integrativer Beratungs- und Implementierungspartner für datengetriebene
                                Geschäftsmodelle.
                                <br />
                            </p>
                        </div>
                        <div className="gap-lg flex flex-1 flex-col">
                            <div className="text-large text-black">
                                Unsere Beratungsleistungen gliedern sich in vier Geschäftsbereiche:
                            </div>
                            <div className="flex flex-col gap-2">
                                <Eyebrow label="Software Engineering" size="small" />
                                <Eyebrow label="Operational AI Engineering" size="small" />
                                <Eyebrow label="Strategieberatung" size="small" />
                                <Eyebrow label="Car-IT Technologies" size="small" />
                            </div>
                            <Button label="Zu unseren Leistungen" variant="primary" href="/leistungen" />
                        </div>
                    </section>
                </ContentBlock>

                {/* Values Section */}
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col">
                        <h2 className="font-gteradisplay text-h2 text-black">Unsere Werte</h2>
                        <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {values.slice(0, 3).map((value, i) => (
                                <ValueCard
                                    key={value.title}
                                    title={value.title}
                                    description={value.description}
                                    number={i + 1}
                                />
                            ))}
                        </div>
                        <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {values.slice(3).map((value, i) => (
                                <ValueCard
                                    key={value.title}
                                    title={value.title}
                                    description={value.description}
                                    number={i + 4}
                                />
                            ))}
                        </div>
                    </section>
                </ContentBlock>

                {/* Management Section */}
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col">
                        <h2 className="font-gteradisplay text-h2 text-black">Management</h2>
                        <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {managementTeam.map((person) => (
                                <div
                                    key={person.name}
                                    className="relative flex aspect-3/4 flex-col items-start justify-end overflow-hidden rounded-lg p-2"
                                >
                                    <Image src={person.image} alt={person.name} fill className="object-cover" />
                                    {/* Name badge */}
                                    <div className="bg-background-soft px-padding-md py-padding-md relative flex w-full items-center rounded-lg backdrop-blur-lg">
                                        <div className="flex flex-col">
                                            <span className="font-gteratext text-small text-white">{person.name}</span>
                                            <span className="font-gteratext text-xxsmall text-white-soft">
                                                {person.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </ContentBlock>

                <ContentBlock>
                    <ImageTeaser
                        title="Werde Teil unseres Teams"
                        description="Du brennst für Software, AI und Innovationen? Team One bietet einen attraktiven Playground für ambitionierte Tech-Minds - im Bereich Softwareengineering, AI-Engineering, Strategieberatung oder im Bereich Fahrzeugarchitektur."
                        buttonLabel="Karriere"
                        buttonVariant="primary"
                        buttonHref="/karriere"
                        image="/images/team-collaboration.jpg"
                    />
                </ContentBlock>

                {/* Business Partner Section
                <ContentBlock>
                    <section className="gap-grid-gutter flex flex-col">
                        <h2 className="font-gteradisplay text-h2 text-black">Business Partner</h2>
                        <div className="gap-grid-gutter grid grid-cols-2 lg:grid-cols-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-3/4 rounded-lg bg-[#67766f]/60" />
                            ))}
                        </div>
                    </section>
                </ContentBlock> */}

                {/* Partnerschaft Section
                <ContentBlock>
                    <section className="gap-grid-gutter-small flex flex-col">
                        <div className="gap-lg flex flex-col">
                            <h2 className="font-gteradisplay text-h2 text-black">Partnerschaft</h2>
                            <div className="gap-grid-gutter flex flex-col lg:flex-row lg:items-center">
                                <p className="text-large flex-1 text-black">
                                    Erfahren Sie mehr über kommende Veranstaltungen, lesen Sie inspirierendes Fachwissen
                                    oder tauchen in unserem Blog tief in Themen ein. Abonnieren Sie unseren Newsletter
                                    für regelmäßige Updates.
                                </p>
                                <div className="flex-1" />
                            </div>
                        </div>
                        <div className="gap-grid-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {partners.map((partner) => (
                                <div key={partner.name} className="gap-lg flex flex-col">
                                    <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-[#f8f8f8]">
                                        {partner.image && (
                                            <Image
                                                src={partner.image}
                                                alt={partner.name}
                                                width={440}
                                                height={330}
                                                className="h-full w-full object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="gap-sm px-padding-lg flex flex-col">
                                        <h3 className="font-gteradisplay text-h4 text-black">{partner.name}</h3>
                                        <p className="text-xsmall text-black/60">{partner.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </ContentBlock> */}
            </main>
        </div>
    )
}

function ValueCard({ title, description, number }: { title: string; description: string; number: number }) {
    return (
        <div className="gap-lg flex flex-col">
            <span className="bg-primary text-small flex size-10 items-center justify-center rounded-full font-medium text-black">
                {number}
            </span>
            <div className="gap-xs flex flex-col">
                <h3 className="font-gteradisplay text-h3 max-w-115 text-black">{title}</h3>
                <p className="text-small max-w-115 text-black">{description}</p>
            </div>
        </div>
    )
}
