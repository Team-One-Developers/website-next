"use client"

import { useInView } from "react-intersection-observer"
import { Image } from "../atoms/Image"
import { ImageMask } from "../atoms/ImageMask"
import { Section } from "../layout/Section"
import Icon from "../molecules/Icon"
import { CtaSection } from "./CtaSection"
import PosingLaptop from "/public/images/optimized/t1d_kai_knoerzer_011_edited_optimized.webp"

export const HomeHumanSection = () => {
    // Triggers Zoom Animation for first image
    const [culturePictureRef, culturePictureInView] = useInView({
        threshold: 0.48425
    })

    return (
        <Section className="bg-primary pt-32 sm:pt-48 xl:pt-72" style={{ transition: "500ms" }}>
            <div className="lg:flex lg:justify-between lg:gap-8">
                <CtaSection
                    className="basis-[37%] lg:grow-0"
                    subtitleText="CULTURE @ T1D"
                    headlineText="Wir sind menschen&shy;zentriert."
                    contentText='Wir glauben an Fortschritt durch Technologie, an Nachhaltigkeit durch Qualität sowie an die Prinzipien des agilen Manifests. Und vor allem glauben wir an die "Zielgruppe Mensch", die im Mittelpunkt unseres Handelns stehen muss.'
                    linkLabel="Unsere Kultur"
                    link="/culture"
                    linkColor="black"
                    headlineVariant="h1"
                    headlineClassName="mb-4 uppercase font-normal"
                    contentVariant="paragraph"
                    icon={<Icon name="person_small" className="mr-2 brightness-0" />}
                />
                <ImageMask
                    ref={culturePictureRef}
                    className="relative aspect-[0.75] w-full lg:mt-[-100px] lg:max-w-[50%]"
                >
                    <figure
                        className="size-full"
                        style={{
                            transition: "500ms",
                            transform: culturePictureInView ? "scale(1.05)" : ""
                        }}
                    >
                        <Image
                            src={PosingLaptop}
                            alt="Picture of a men posing with a laptop."
                            fill
                            placeholder="blur"
                        />
                    </figure>
                </ImageMask>
            </div>
        </Section>
    )
}
