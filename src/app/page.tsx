import { DancingFigures } from "@/components/atoms/DancingFigures"
import { Image } from "@/components/atoms/Image"
import { StructuredData } from "@/components/atoms/StructuredData"
import { Typography } from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { Companies } from "@/components/molecules/Companies"
import { Hero } from "@/components/molecules/Hero"
import { AnimatedTeaser } from "@/components/organisms/AnimatedTeaser"
import { ChangingWords } from "@/components/organisms/ChangingWords"
import { CtaSection } from "@/components/organisms/CtaSection"
import { HomeHumanSection } from "@/components/organisms/HomeHumanSection"
import { HomeValuesSection } from "@/components/organisms/HomeValuesSection"
import { PAGE_THEME } from "@/constants"
import HeroIMG from "/public/images/optimized/hero_optimized.webp"

const Home = () => {
    const structuredData = {
        "@type": "Organization",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Stuttgart",
            addressRegion: "BW",
            postalCode: "70174",
            streetAddress: "Hospitalstraße 35"
        },
        email: "kontak@t1dev.de",
        legalName: "Team One Developers GmbH",
        slogan: "Wir entwickeln die Zukunft des Web"
    }

    return (
        <PageLayout theme={PAGE_THEME.light}>
            <StructuredData data={structuredData} />
            <Section className="">
                <Typography as="h1" variant="h1" className="max-w-[790px] tracking-aBitTighter font-medium">
                    WIR <br /> ENTWICKELN <br /> DIE ZUKUNFT <br /> DES WEB.
                </Typography>
            </Section>

            <ChangingWords
                className="justify-start hidden p-4 text-t1-darkGray sm:mt-24 sm:flex"
                variant="description"
                type="section"
                words={["Scroll", "Move Smoothly"]}
            />

            <Hero
                imageNode={<Image priority src={HeroIMG} alt="Picture of a man at a laptop" fill placeholder="blur" />}
                overlayNode={
                    <ChangingWords
                        variant="h1"
                        words={["software", "agile", "human", "team"]}
                        className="text-white text-6xl md:text-8xl lg:text-10xl"
                    />
                }
                overlayPosition="offsetTop"
            />

            <Section>
                <figure className="mb-6 flex h-[129px] w-full justify-center text-primary md:hidden">
                    <DancingFigures />
                </figure>
                <Typography className="text-black normal-case font-normal" variant="h1">
                    Wir sind Technologie-Experten und verstehen uns als integrativer Entwicklungs- & Beratungspartner in
                    komplexen Softwareprojekten.{" "}
                    <DancingFigures className="hidden h-16 px-4 py-0 align-middle text-primary md:inline" />
                    Mit jahrelanger Expertise in den Bereichen Softwareentwicklung, Strategie sowie UX/UI Design.
                </Typography>
                <CtaSection
                    className="mt-16 lg:max-w-[25%]"
                    contentText="Wir helfen Organisationen dabei, sich nachhaltig zu modernen digitalen Unternehmen zu wandeln. Immer mit dem Ziel, qualitativ hochwertige, skalierbare und durchdachte Software zu entwickeln, welche messbaren Mehrwert für unsere Kunden schafft."
                    contentVariant="paragraph"
                    headlineVariant="h2"
                    link={"/services"}
                    linkLabel="Unsere Leistungen"
                />
            </Section>

            <AnimatedTeaser className="mt-16" />

            <div className="bg-primary">
                <Section className="bg-primary pt-32 sm:pt-8 md:pt-0">
                    <Companies />
                </Section>

                <HomeHumanSection />
            </div>

            <HomeValuesSection />
        </PageLayout>
    )
}

export default Home
