import { Image } from "@/components/atoms/Image"
import { ImageMask } from "@/components/atoms/ImageMask"
import { Link } from "@/components/atoms/Link"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { CareerElement } from "@/components/molecules/CareerElement"
import { Icon } from "@/components/molecules/Icon"
import { Benefits } from "@/components/organisms/Benefits"
import { allCareers } from "contentlayer/generated"
import { Metadata } from "next"
import Trophy from "/public/images/optimized/t1d_kai_knoerzer_079_optimized.webp"
import Office from "/public/images/optimized/t1d_nov22_185_optimized.webp"

export const metadata: Metadata = {
    title: "Career"
}

const Career = () => {
    const fulltime_jobs = allCareers.filter((c) => c.employmentType === "Festanstellung")
    const workstudy_jobs = allCareers.filter((c) => c.employmentType === "Werkstudent")
    const internship_jobs = allCareers.filter((c) => c.employmentType === "Praktikum")

    return (
        <PageLayout>
            <Section className="pb-0">
                <Typography as="h1" variant="h1" className="py-8">
                    Unser Team <br />- Dein Playground
                </Typography>
            </Section>
            <Section className="lg:pt-0 -mt-8 md:-mt-32 lg:mt-0 lg:flex lg:gap-8">
                <ImageMask className="md:mt-8 lg:basis-[50%] lg:w-1/2 w-2/3 h-full relative aspect-[0.75]">
                    <Image
                        priority
                        src={Trophy}
                        alt="A person smiling at the camera holding a trophy"
                        fill
                        placeholder="blur"
                    />
                </ImageMask>
                <section className="mt-16 md:ml-12 lg:basis-[32.5%]">
                    <Icon name="person_small" className="mb-4" />
                    <Typography variant="h4" className="text-primary mb-8 leading-140">
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
                    <Typography className="mt-24 lg:mt-32 text-white m-0 mb-6" variant="h4">
                        Wir suchen dich:
                    </Typography>
                    <div className="">
                        {fulltime_jobs.map((career, index) => (
                            <CareerElement listIndex={index + 1} key={career.slug} career={career} />
                        ))}
                        {workstudy_jobs.map((career, index) => (
                            <CareerElement
                                listIndex={index + fulltime_jobs.length + 1}
                                key={career.slug}
                                career={career}
                            />
                        ))}
                        {internship_jobs.map((career, index) => (
                            <CareerElement
                                listIndex={index + fulltime_jobs.length + workstudy_jobs.length + 1}
                                key={career.slug}
                                career={career}
                            />
                        ))}
                    </div>
                </div>
            </Section>
            <Section className="">
                <div className="flex flex-col gap-4 items-baseline lg:max-w-[32%]">
                    <Typography variant="h5" className="text-white">
                        Oder suchst du uns?
                    </Typography>
                    <Typography variant="paragraph" className="text-white">
                        Um als Developer nicht nur gut zu sein, sondern es auch zu bleiben, ist Initiative und
                        Selbstständigkeit gefragt. Deshalb wissen wir das auch bei unseren Bewerbern zu schätzen. Wenn
                        du der Meinung bist, dass du das perfekte neue Team-Mitglied für Team One Developers bist, dann
                        melde dich einfach initiativ – am besten schon mit aussagekräftigen Bewerbungsunterlagen.
                    </Typography>
                    <Link href="/contact" label="Initiativ bewerben" />
                </div>
            </Section>
            <Section className="mt-12">
                <Image
                    src={Office}
                    alt="Picture of people in an Office"
                    width={1920}
                    height={800}
                    className="rounded-[25px]"
                    placeholder="blur"
                />
            </Section>
        </PageLayout>
    )
}

export default Career
