import { Image } from "@/components/atoms/Image"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { Hero } from "@/components/molecules/Hero"
import { Icon } from "@/components/molecules/Icon"
import { ChangingWords } from "@/components/organisms/ChangingWords"
import { Competences } from "@/components/organisms/Competences"
import { ReferencesSlider } from "@/components/organisms/ReferencesSlider"
import { TechStacks } from "@/components/organisms/TechStacks"
import { UxDesign } from "@/components/organisms/UxDesign"
import { UxDesignMobile } from "@/components/organisms/UxDesignMobile"
import { Metadata } from "next"
import OfficeImg from "/public/images/optimized/t1d_nov22_149_optimized.webp"

export const metadata: Metadata = {
    title: "Services"
}

const Services = () => {
    return (
        <PageLayout>
            <Section className="lg:flex gap-[15%]">
                <Typography className="lg:basis-[35%]" as="h1" variant="h1">
                    Wir schaffen nachhaltige Mehrwerte durch exzellente Software & menschenzentrierte Arbeitsweisen.
                </Typography>

                <div className="mt-16 lg:mt-0 basis-[32.5%]">
                    <Icon name="globe" className="mb-4" />
                    <Typography className="mb-8 text-primary font-abcdiatype leading-150" variant="h4">
                        Digitale Geschäftsmodelle, digitale Kunden und remote-first Teams erfordern modernere Methoden,
                        Technologien und Geisteshaltungen als die klassische Welt. Als Software-Beratung befähigen wir
                        unsere Kunden, im digitalen Wettbewerb erfolgreich zu sein - strategisch, technologisch und
                        methodisch.
                    </Typography>
                    <Typography className=" text-white" variant="paragraph">
                        Wir kombinieren umfassendes Fachwissen mit der Begeisterung für neue Technologien, um
                        innovative, hochmoderne, stabile und skalierbare Enterprise Plattformen zu bauen. Vom Startup
                        bis hin zum multinationalen Konzern.
                    </Typography>
                </div>
            </Section>

            <Hero
                className="mt-[4.5rem] lg:mt-[11rem]"
                imageNode={<Image src={OfficeImg} alt="People working in an office" fill placeholder="blur" />}
                overlayNode={
                    <>
                        <Typography variant="subtitle" className="mb-6 text-white">
                            We Develop
                        </Typography>
                        <ChangingWords
                            variant="h1"
                            words={["Software", "Strategy", "UX Design"]}
                            className="text-white text-6xl md:text-8xl lg:text-10xl"
                        />
                    </>
                }
            />
            <ReferencesSlider />
            <TechStacks />
            <Competences />
            <UxDesign className="xl:block hidden" />
            <UxDesignMobile className="xl:hidden block" />
        </PageLayout>
    )
}

export default Services
