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
                        ( WE DEVELOP )
                    </Typography>
                    <Typography as="h2" variant="h1" className="lg:text-6xl">
                        BUSINESS & <br /> PRODUCT STRATEGY
                    </Typography>
                    <Typography className="mt-3.5 text-center" variant="paragraph">
                        Von der digitalen Geschäfts- und Geschäftsfeldstrategie, über die Produktstrategie bis hin zur
                        UX-Strategie beraten wir branchenübergreifend mit unseren Strategie-Experten Startups von Early
                        stage bis Grownup ebenso wie Corporates.
                    </Typography>
                </div>
            </div>
            <div className="mt-8 flex flex-col lg:mt-32">
                <StrategyItem
                    count={1}
                    headline="Strategie&shy;beratung mit Nähe zur Umsetzung"
                    text="Unser Verständnis einer modernen Strategieberatung ist ebenso von
              Agilität geprägt, wie die moderne Softwareentwicklung. Wir
              arbeiten hypothesen- und zahlengetrieben und mit einem scharfen
              Rundumblick für das Ökosystem der jeweiligen Organisation. Agile
              Strategie ist alles nur kein Wiederspruch, vielmehr ist es der
              Ausdruck einer Haltung der eigenen Organisation: der Bereitschaft
              und den Willen sich in kürzester Zeit neuen Markt- &
              Wettbewerbsbedingungen anzupassen sowie effizient und
              zukunftsorientiert zu planen."
                />
                <StrategyItem
                    count={2}
                    headline=" Von der Transformations&shy;strategie bis zur
              Produkt&shy;strategie"
                    text="Einer Studie des Harvard Business Managers zufolge schlagen 67 %
              aller gut formulierten Strategien aufgrund mangelnder
              Umsetzungskompetenz fehl. Das entspricht auch unserer eigenen
              Erfahrung, weshalb modernes strategisches Vorgehen für uns nicht
              von der Realisierung entkoppelt sein darf - ganz besonders wichtig
              für digitale Produkte und Geschäftsmodelle. Wir beteiligen uns
              daher nicht nur an der theoretischen Ausarbeitung sondern auch
              gezielt an der praktischen Umsetzung strategischer
              Digital-Konzepte, von der Transformationsstrategie bis zur
              Produktstrategie."
                />
                <StrategyItem
                    count={3}
                    headline="Unser Spezialgebiet: Digital Organization Design"
                    text=" Im Laufe der vergangenen Jahre haben wir mehrfach den Umbau ebenso
              wie den initialen Aufbau von unterschiedlichen digitalen
              Produktorganisationen begleitet. Daraus hat sich eine einzigartige
              Beratungskompetenz entwickelt. Wir beraten unsere Kunden bei der
              strukturellen Ausgestaltung ganzheitlicher digitaler
              Organisationen ebenso wie bei dem Aufbau hochqualifizierter
              Produktteams. Und auch hier beraten wir umsetzungsgetrieben und
              nicht auf theoretischer Basis: Am Ende entsteht immer ein
              konkretes Bild einer hochperformanten Tech-Organisation oder eines
              einzelnen Bereiches."
                />
            </div>
        </Section>
    )
}
