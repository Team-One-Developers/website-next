import { twJoin } from 'tailwind-merge'

import { Heading } from '../atoms/Heading'
import Typography from '../atoms/Typography'
import ContentWrapper from '../layout/ContentWrapper'

export const Competences = () => {
  const StrategyItem = ({
    count,
    headline,
    text,
  }: {
    count: number
    headline: string
    text: string
  }) => {
    return (
      <div
        className={twJoin(
          'group p-8 lg:flex-row lg:gap-8  flex flex-col rounded-lg hover:text-t1-darkGray hover:bg-t1-green bg-t1-darkGray mb-4 text-t1-white '
        )}
      >
        <span className="font-SpaceGroteskRegular font-medium not-italic text-xs leading-110 tracking-aBitTighter uppercase min-w-[7%]">
          ( 0{count} / 03 )
        </span>
        <Typography
          as="h3"
          variant="h3"
          className="font-SpaceGroteskMedium md:text-[2rem] mt-[14px] font-medium lg:mt-0  group-hover:text-inherit lg:max-w-[440px] w-full"
        >
          {headline}
        </Typography>
        <Typography variant="text_sm" className="mt-[14px] lg:mt-0">
          {text}
        </Typography>
      </div>
    )
  }

  return (
    <ContentWrapper>
      <section className="bg-t1-black mt-8 lg:mt-52">
        <div className="flex flex-col items-center">
          <div className="text-center lg:w-1/2">
            <Typography
              className="mb-5 uppercase text-t1-green"
              variant="subtitle"
            >
              ( WE DEVELOP )
            </Typography>
            <Typography as="h2" variant="h2_bold">
              BUSINESS & <br /> PRODUCT STRATEGY
            </Typography>
            <Typography className="text-center mt-3.5" variant="text_sm">
              Von der digitalen Geschäfts- und Geschäftsfeldstrategie, über die
              Produktstrategie bis hin zur UX-Strategie beraten wir
              branchenübergreifend mit unseren Strategie-Experten Startups von
              Early stage bis Grownup ebenso wie Corporates.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col mt-8 lg:mt-32">
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
      </section>
    </ContentWrapper>
  )
}
