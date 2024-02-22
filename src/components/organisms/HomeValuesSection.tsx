"use client"

import { useInView } from "react-intersection-observer"
import { Image } from "../atoms/Image"
import { ImageMask } from "../atoms/ImageMask"
import { CenteredSectionContainer } from "../layout/CenteredSectionContainer"
import { Section } from "../layout/Section"
import Icon from "../molecules/Icon"
import { CtaSection } from "./CtaSection"
import Smiling from "/public/images/optimized/t1d_kai_knoerzer_055_optimized.webp"

export const HomeValuesSection = () => {
    // Triggers Zoom Animation for second Image
    const [careerPictureRef, careerPictureInView] = useInView({
        threshold: 0.45
    })

    return (
        <Section>
            <CenteredSectionContainer
                className="-mt-4 pt-0"
                left={
                    <ImageMask ref={careerPictureRef} className="w-full ">
                        <figure
                            style={{
                                transition: "500ms",
                                transform: careerPictureInView ? "scale(1.1)" : ""
                            }}
                            className="relative aspect-[0.75]"
                        >
                            <Image
                                src={Smiling}
                                alt="Picture of a men posing, smiling at the camera"
                                fill
                                placeholder="blur"
                            />
                        </figure>
                    </ImageMask>
                }
                right={
                    <CtaSection
                        subtitleText="CAREER @ T1D"
                        headlineText="Nur wer Werte vertritt, kann Werte schaffen."
                        contentText={
                            "Team One Developers ist für uns nicht nur ein Name, sondern ein Versprechen: Das Versprechen den Unterschied zu machen, nicht nur Standard sondern die beste Wahl zu sein. Für unsere Partner und ganz besonders für unsere Kollegen."
                        }
                        headlineVariant="h1"
                        headlineClassName="mb-[2.875rem] uppercase font-normal"
                        contentVariant="paragraph"
                        linkLabel="Karriere"
                        link="/career"
                        icon={<Icon name="globe" className="mr-2 brightness-0" />}
                    />
                }
                rightComponentClass="md:w-[85%]"
            />
        </Section>
    )
}
