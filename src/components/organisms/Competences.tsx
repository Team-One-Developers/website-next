import { twJoin } from "tailwind-merge"
import Typography from "../atoms/Typography"
import { Section } from "../layout/Section"

export const Competences = () => {
    const StrategyItem = ({ count, headline, text }: { count: number; headline: string; text: string }) => {
        return (
            <div
                className={twJoin(
                    "group p-8 lg:flex-row lg:gap-8  flex flex-col rounded-lg hover:text-t1-darkGray hover:bg-primary bg-t1-darkGray mb-4 text-white "
                )}
            >
                <span className="tracking-aBitTighter min-w-[7%] font-spacegrotesk text-xs font-medium uppercase not-italic leading-110">
                    ( 0{count} / 03 )
                </span>
                <Typography
                    as="h3"
                    variant="h3"
                    className="mt-[14px] w-full font-spacegrotesk uppercase group-hover:text-inherit lg:mt-0 lg:max-w-[440px]"
                >
                    {headline}
                </Typography>
                <Typography variant="paragraph" className="mt-[14px] basis-[90%] lg:mt-0">
                    {text}
                </Typography>
            </div>
        )
    }

    return (
        <Section className="bg-black">
            <div className="flex flex-col items-center">
                <div className="text-center lg:w-1/2">
                    <Typography className="mb-5 uppercase text-primary" variant="description">
                        ( UNSERE EXPERTISE )
                    </Typography>
                    <Typography as="h2" variant="h1" className="lg:text-6xl">
                        VON NEW WORK <br /> BIS NEW BUSINESS
                    </Typography>
                    <Typography className="mt-3.5 text-center" variant="paragraph">
                        Wir sind spezialisierter Beratungspartner für digitale Transformationsprojekte. Neben der
                        strategischen Transformationsberatung begleiten wir mit hochqualifizierten Beratern und Coaches
                        agile Entwicklungsteams in der fachlichen sowie methodischen Umsetzung.
                    </Typography>
                </div>
            </div>
            <div className="mt-8 flex flex-col lg:mt-32">
                <StrategyItem
                    count={1}
                    headline="ORGANISATIONS- ENTWICKLUNG"
                    text="Wir analysieren und bewerten Transformationspotentiale in Ihrer Organisation. Wir erstellen Bedarfs- &
                    Situationsanalysen, entwerfen passende Transformationskonzepte und beraten Organisationsgestalter
                    nachhaltig, ehrlich und immer mit einem klaren Fokus auf die Unternehmensziele."
                />
                <StrategyItem
                    count={2}
                    headline="AGILITÄT"
                    text="Agile Vorgehensweisen helfen Organisationen dabei, flexibel in stetig volatileren Marktbedingungen
					wettbewerbsfähig zu bleiben. Wir unterstützen Teams, Abteilungen oder ganze Resorts bei der Einführung und
					Weiterentwicklung von agilen Methoden mit erfahrenen Coaches und Trainern."
                />
                <StrategyItem
                    count={3}
                    headline="DIGITAL BUSINESS STRATEGY"
                    text="Mit jahrelanger Expertise in der strategischen und inhaltlichen Ausgestaltung digitaler Produkte beraten wir
					Organisationen bei der Planung und Umsetzung innovativer Digitalportfolios. Von der strategischen
					Angebotsgestaltung bis hin zur fachlichen Umsetzung digitaler Produkte unterstützen wir digitale
					Geschäftsinitiativen in allen Phasen des Produktlebenszykluses."
                />
            </div>
        </Section>
    )
}
