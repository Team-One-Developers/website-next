import { ArrowUpIcon } from "@/components/atoms/AnimatedArrowUp"
import { Image } from "@/components/atoms/Image"
import { Link } from "@/components/atoms/Link"
import Typography from "@/components/atoms/Typography"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { Hero } from "@/components/molecules/Hero"
import { Icon } from "@/components/molecules/Icon"
import { ChangingWords } from "@/components/organisms/ChangingWords"
import { Competences } from "@/components/organisms/Competences"
import { ReferencesSlider } from "@/components/organisms/ReferencesSlider"
import { TechStacks } from "@/components/organisms/TechStacks"
import { Metadata } from "next"
import OfficeImg from "/public/images/optimized/t1d_nov22_149_optimized.webp"

export const metadata: Metadata = {
    title: "Services"
}

const Services = () => {
    return (
        <PageLayout>
            <Section className="gap-[15%] lg:flex">
                <Typography className="lg:basis-[35%]" as="h1" variant="h1">
                    Wir schaffen nachhaltige Mehrwerte durch exzellente Software & menschenzentrierte Arbeitsweisen.
                </Typography>

                <div className="mt-16 basis-[32.5%] lg:mt-0">
                    <Icon name="globe" className="mb-4" />
                    <Typography className="mb-8 font-abcdiatype leading-150 text-primary" variant="h4">
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
                        <Typography variant="subtitle" className="mb-6 font-spacegrotesk uppercase text-white">
                            We Develop
                        </Typography>
                        <ChangingWords
                            variant="h1"
                            words={["Software", "Strategy", "UX Design"]}
                            className="text-6xl text-white md:text-8xl lg:text-10xl"
                        />
                    </>
                }
            />
            <ReferencesSlider />
            <TechStacks />
            <Section className="my-16 lg:flex lg:justify-between">
                <div className="w-full lg:w-1/2">
                    <Typography as="h2" variant="h1" className="lg:text-6xl">
                        TRANSFORMATIONSBERATUNG
                    </Typography>
                    <Typography variant="paragraph" className="mt-6">
                        Willkommen im Transformationszeitalter. Transformation stand vor ein paar Jahren längst auf
                        jeder To-Do Liste unterschiedlichster Organisationsgestalter. Sie ist da. Gekommen um zu
                        bleiben. Mehr denn je heißt das Wandel richtig zu verstehen - und zwar als wiederkehrende
                        Chance. <br />
                        Und wer die Chancen von Veränderungen nutzen will, muss Veränderungen treiben statt sich treiben
                        zu lassen. Erfolgreiche Gestalter digitaler Transformationsprojekte verstehen
                        Transformationsvorhaben daher als einen strategischen, kontinuierlichen und gewinnbringenden
                        unternehmerischen Gestaltungsprozess. Neben der strategischen Management- &
                        Transformationsberatung begleiten unsere qualifizierten Berater und Coaches agile
                        Entwicklungsteams in der fachlichen sowie methodischen Umsetzung nachhaltiger Zukunftsprojekte.
                    </Typography>
                </div>
                <div className="mt-12 flex w-full lg:mt-0 lg:w-auto lg:place-self-end lg:pl-8">
                    <div className="flex flex-row justify-start gap-4">
                        <div className="h-full min-w-36">
                            <ArrowUpIcon className="size-36 text-primary" />
                        </div>

                        <div className="flex max-w-xs flex-col gap-4">
                            <Typography className="text-2xl font-normal">
                                WIR STEIGERN DIE WETTBEWERBSFÄHIGKEIT VON UNTERNEHMEN IN EINER DIGITALEN WELT.
                            </Typography>
                            <Link href="/career" label={<Typography>UNSERE STELLENANGEBOTE</Typography>}></Link>
                        </div>
                    </div>
                </div>
            </Section>
            <Competences />
        </PageLayout>
    )
}

export default Services
