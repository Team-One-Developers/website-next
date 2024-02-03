import { Image } from "@/components/atoms/Image"
import { ImageMask } from "@/components/atoms/ImageMask"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { ExternalLink } from "@/components/molecules/ExternalLink"
import { Ticker } from "@/components/molecules/Ticker"
import { PAGE_THEME } from "@/constants"
import { Metadata } from "next"
import TRex from "/public/images/optimized/dinosaur_call_optimized.webp"

export const metadata: Metadata = {
    title: "Contact"
}

const Contact = () => {
    return (
        <PageLayout ticker={false}>
            <Section>
                <Typography as="h1" variant="h1">
                    Die Eins ist man <br /> niemals alleine.
                </Typography>
                <section className="mb-40 mt-20 flex flex-wrap items-center gap-16">
                    <div className="relative min-w-[260px] max-w-[460px] grow">
                        <ImageMask>
                            <Image
                                src={TRex}
                                alt="A person in a T-Rex costume with an inflated cell phone is standing in an office. They are pretending to be on a call."
                                width={460}
                                height={580}
                                placeholder="blur"
                            />
                        </ImageMask>
                    </div>
                    <div className={"flex grow-[2] flex-col gap-8 p-4"}>
                        <Typography className="-mt-3 mb-0 font-normal leading-140" variant="h3">
                            Team One Developers GmbH <br />
                            Hospitalstraße 35 <br />
                            70174 Stuttgart
                        </Typography>
                        <ExternalLink href="mailto:kontakt@t1dev.de" name="kontakt@t1dev.de" />
                        <ExternalLink href="tel:+4971125298690" name="+49 711 252 98 690" />
                    </div>
                </section>
            </Section>
            <Ticker
                theme={PAGE_THEME.dark}
                text="Get In Touch"
                speed={300}
                textClassName="text-primary"
                includeLogo={false}
                className="mb-[100px] md:mb-[200px]"
            />
        </PageLayout>
    )
}

export default Contact
