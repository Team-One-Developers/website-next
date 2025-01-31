import { PageLayout } from "@/components/layout/PageLayout"
import { Ticker } from "@/components/molecules/Ticker"
import Contact11 from "@/components/tailgrid/Contact11"
import Contact5Special from "@/components/tailgrid/Contact5Special"
import { PAGE_THEME } from "@/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Kontaktiere uns telefonisch oder per E-Mail."
}

const Contact = () => {
    return (
        <PageLayout theme={PAGE_THEME.dark} ticker={false}>
            <Contact11 />
            <Contact5Special />
            {/* <Section>
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
                            Stafflenbergstraße 44 <br />
                            70184 Stuttgart
                        </Typography>
                        <ExternalLink href="mailto:info@teamonedevelopers.de" name="info@teamonedevelopers.de" />
                        <ExternalLink href="tel:+4971125298690" name="+49 711 252 98 690" />
                    </div>
                </section>
            </Section> */}

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
