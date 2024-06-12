import { DancingFigures } from "@/components/atoms/DancingFigures"
import { Image } from "@/components/atoms/Image"
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
import Video from "@/components/molecules/Video"

const Home = () => {
    return (
        <PageLayout theme={PAGE_THEME.light}>
            <Section>
                <Typography as="h1" variant="h1" className="max-w-[790px] font-medium">
                    WIR <br /> ENTWICKELN <br /> DIE ZUKUNFT <br /> DES WEB.
                </Typography>
            </Section>

            <ChangingWords
                className="mt-24 hidden justify-start p-4 text-t1-darkGray sm:flex"
                variant="description"
                type="section"
                words={["Scroll", "Move Smoothly"]}
            />

            <Hero
                contentNode={
                    <Video src="/videos/landscape-test-video.webm" sizing="cover" muted autoPlay playsInline loop />
                }
                overlayNode={
                    <ChangingWords
                        variant="h1"
                        words={["software", "agile", "human", "team"]}
                        className="text-6xl text-white md:text-8xl lg:text-10xl"
                    />
                }
                overlayPosition="offsetTop"
            />

            <Section>
                <figure className="mb-6 flex h-[129px] w-full justify-center text-primary md:hidden">
                    <DancingFigures />
                </figure>
                <Typography className="font-normal normal-case text-black" variant="h1">
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
