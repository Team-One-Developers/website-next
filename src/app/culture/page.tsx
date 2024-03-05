import { DancingFigures } from "@/components/atoms/DancingFigures"
import { Image } from "@/components/atoms/Image"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { Hero } from "@/components/molecules/Hero"
import { CultureBlock } from "@/components/organisms/CultureBlock"
import { Values } from "@/components/organisms/Values"
import { Metadata } from "next"
import HeroBG from "/public/images/optimized/t1d_nov22_153_optimized.webp"

export const metadata: Metadata = {
    title: "Kultur",
    description: "Wir machen das, wovon alle sprechen: Wir stellen den Menschen in den Mittelpunkt."
}

const Culture = () => {
    return (
        <PageLayout>
            <Section className="relative">
                <Typography as="h1" variant="h1" className="lg:max-w-[calc(50%-2rem)]">
                    WIR MACHEN DAS, WOVON ALLE SPRECHEN: WIR STELLEN DEN MENSCHEN IN DEN MITTELPUNKT.
                </Typography>
                <DancingFigures className="absolute z-10 mt-20 h-[227px] w-[245px] text-primary xs:left-1/2 xs:translate-x-[-50%] xs:translate-y-[-10%] md:left-3/4 md:top-[42.5%] lg:top-[60%] lg:h-[411px] lg:w-[462px]" />
            </Section>
            <Hero
                className="mt-64"
                imageNode={<Image src={HeroBG} alt="Two guys working on a laptop" fill placeholder="blur" />}
                overlayNode={null}
            />
            <Section>
                <CultureBlock />
            </Section>
            <Section>
                <Values />
            </Section>
        </PageLayout>
    )
}

export default Culture
