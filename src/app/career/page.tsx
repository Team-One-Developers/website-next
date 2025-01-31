import { Image } from "@/components/atoms/Image"
import { ImageMask } from "@/components/atoms/ImageMask"
import { Link } from "@/components/atoms/Link"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { CareerElement } from "@/components/molecules/CareerElement"
import { Icon } from "@/components/molecules/Icon"
import { Benefits } from "@/components/organisms/Benefits"
import { PAGE_THEME } from "@/constants"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_CAREERS } from "@/sanity/queries"
import { QUERY_ALL_CAREERSResult } from "@/sanity/types"
import { Metadata } from "next"
import { Fragment } from "react"
import Trophy from "/public/images/optimized/t1d_kai_knoerzer_079_optimized.webp"
import Office from "/public/images/optimized/t1d_nov22_185_optimized.webp"

export const metadata: Metadata = {
    title: "Karriere",
    description:
        "Wir sind immer auf der Suche nach Menschen, die Veränderungen vorantreiben und die Welt von morgen gestalten wollen."
}

const Career = async () => {
    const careers: QUERY_ALL_CAREERSResult = await client.fetch(
        QUERY_ALL_CAREERS,
        {},
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    const publicCareers = careers.filter((career) => career.visibility === "Public")

    const sortedCareers = publicCareers.reduce(
        (acc, career) => {
            const { division } = career
            if (division) {
                acc[division] ??= []
                acc[division].push(career)
            }
            return acc
        },
        {} as Record<string, QUERY_ALL_CAREERSResult>
    )

    return (
        <PageLayout theme={PAGE_THEME.dark}>
            <Section className="pb-0">
                <Typography as="h1" variant="h1">
                    Unser Team <br />- Dein Playground
                </Typography>
            </Section>
            <Section className="-mt-8 md:-mt-32 lg:mt-0 lg:flex lg:gap-8 lg:pt-0">
                <ImageMask className="relative aspect-[0.75] h-full w-2/3 md:mt-8 lg:w-1/2 lg:basis-1/2">
                    <Image
                        priority
                        src={Trophy}
                        alt="A person smiling at the camera holding a trophy"
                        fill
                        placeholder="blur"
                    />
                </ImageMask>
                <section className="mt-16 md:ml-12 lg:basis-[32.5%]">
                    <Icon name="person_small" className="mb-4 text-primary" />
                    <Typography variant="h4" className="mb-8 font-abcdiatype leading-140 text-primary">
                        Wir verstehen uns nicht einfach nur als Arbeitgeber, sondern viel mehr als aktiver Begleiter auf
                        dem Weg zu deinen individuellen Zielen. Unser Anspruch ist es, den Menschen in den Mittelpunkt
                        unseres unternehmerischen Handelns zu stellen – und dabei fangen wir bei uns im Team an.
                    </Typography>
                    <Typography variant="paragraph" className="text-white">
                        Oft sagen wir in Gesprächen „wir sind Playground für den modernen und ambitionierten
                        Softwareentwickler“ – das beschreibt unser Arbeitsumfeld am besten. Wir arbeiten in
                        anspruchsvollen Kundenprojekten mit spannenden Themen und modernen Tech-Stacks und agilem
                        Selbstverständnis. Weiterentwicklung ist für uns ein fester Bestandteil unserer
                        Unternehmensphilosophie: von Trainings und Konferenzbesuchen über eigene Open-Source-Projekte
                        bis hin zum Spin-Off von eigenständiger Produktideen . Alles ein „Kann“ und kein „Muss“, in
                        jedem Fall aber vielseitig und mit unendlich vielen Möglichkeiten.
                    </Typography>
                </section>
            </Section>
            <Section className="md:mt-24 lg:mt-36">
                <Benefits />
            </Section>
            <Section id="jobs">
                <div>
                    <Typography as="h2" variant="h1" className="lg:max-w-[60%]">
                        Aktuelle Jobs:
                    </Typography>
                    <div>
                        {Object.keys(sortedCareers).map((division, index) => {
                            const category = sortedCareers[division]
                            return (
                                <Fragment key={division}>
                                    <Typography
                                        as="h3"
                                        variant="h2"
                                        className="mb-4 mt-12 font-normal text-primary lg:max-w-[60%]"
                                        key={division}
                                    >
                                        {division}
                                    </Typography>
                                    <div>
                                        {category?.map((career, index) => (
                                            <CareerElement
                                                listIndex={index + 1}
                                                key={career.slug?.current}
                                                career={career}
                                            />
                                        ))}
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                </div>
            </Section>
            <Section className="">
                <div className="flex flex-col items-baseline gap-4">
                    <Typography as="h2" variant="h1" className="">
                        Oder suchst du uns?
                    </Typography>
                    <Typography variant="paragraph" className="text-white lg:max-w-[32%]">
                        Um als Developer nicht nur gut zu sein, sondern es auch zu bleiben, ist Initiative und
                        Selbstständigkeit gefragt. Deshalb wissen wir das auch bei unseren Bewerbern zu schätzen. Wenn
                        du der Meinung bist, dass du das perfekte neue Team-Mitglied für Team One Developers bist, dann
                        melde dich einfach initiativ – am besten schon mit aussagekräftigen Bewerbungsunterlagen.
                    </Typography>
                    <Link href="/contact" label="Initiativ bewerben" />
                </div>
            </Section>
            <Section className="mt-12">
                <Image src={Office} alt="Ppeople in an Office" className="rounded-[25px]" placeholder="blur" />
            </Section>
        </PageLayout>
    )
}

export default Career
