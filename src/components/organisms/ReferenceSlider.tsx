import Image from 'next/image'
import { FONT_CONFIGS } from '@/constants'
import { twJoin } from 'tailwind-merge'

import Copy from '../atoms/Copy'
import { Heading } from '../atoms/Heading'
import { TopLine } from '../atoms/Topline'
import ContentWrapper from '../layout/ContentWrapper'

interface ReferenceSliderEntryProps {
  imageSrc: string
  technologyList?: Array<string>
  headline: string
  infoText: string
}

export const ReferencesSlider = () => {
  return (
    <div className="bg-background">
      <ContentWrapper>
        <div className="flex justify-center bg-background pt-[75px] pb-8 font-medium">
          <TopLine colorClassName="text-t1-black" opacity={1} textSize="l">
            REFERENZEN
          </TopLine>
        </div>
        <ul className="flex overflow-scroll gap-6 bg-background py-12 px-4 scroll-pl-4 snap-x">
          <ReferencesSliderEntry
            imageSrc="/images/references/cropped/porsche_sculpture.webp"
            headline="AUTOMOTIVE FINANCIAL SERVICES PLATTFORM"
            infoText="Gemeinsam mit unserem Kunden stellen wir uns der Herausforderung
					Online-Finanzierungen von Premium-Fahrzeugen zur bestmöglichsten
					Kundenerfahrung zu machen. Neben der Online-Integration der
					bestehenden Finanzierungs- und Leasingprodukte für Endkunden steht
					auch die Entwicklung einer globalen Händlerapplikation im Fokus."
            technologyList={['TypeScript', 'React', 'Node.js', 'AWS']}
          />
          <ReferencesSliderEntry
            imageSrc="/images/references/cropped/porsche_front.webp"
            headline="PORSCHE ONLINE VERTRIEBS&shy;PLATTFORM"
            infoText="„Porsche-Enthusiasten die bestmögliche Such- und Kauferfahrung
						zu bieten“. Nicht weniger war und ist unser Anspruch im Rahmen
						der Entwicklung der Porsche Vertriebsplattform für Neu- und
						Gebrauchtfahrzeuge."
            technologyList={[
              'TypeScript',
              'React',
              'Node.js',
              'AWS',
              'GraphQL',
            ]}
          />
          <ReferencesSliderEntry
            imageSrc="/images/references/cropped/recaro_seat.webp"
            headline="RECARO PEER REVIEW COACHING"
            infoText="Code-Reviews sind ein zentrales Element in unserem
					Programmier-Alltag. Doch wie gestaltet sich ein effektives
					Mehr-Augen-Prinzip? Wie gibt man Feedback und wie erzeugt man
					einen offenen Raum für Verbesserung? Gemeinsam mit RECARO sind
					wir unter anderem diesen Fragen im Rahmen unseres Peer Review
					Coachings auf den Grund gegangen."
          />
          <ReferencesSliderEntry
            imageSrc="/images/references/cropped/fancy_building.webp"
            headline="AXEL SPRINGER POI SERVICE CMS"
            infoText="Im Rahmen eines innovativen Spin-Offs der Axel Springer SE
					entwickelten wir neben der Produktstrategie einen MVP für die
					Echtzeit-Verwaltung von POI Daten sowie einer rollenbasierten
					Zugriffskontrolle."
            technologyList={[
              'TypeScript',
              'React',
              'Node.js',
              'GraphQL',
              'AWS',
            ]}
          />
          <ReferencesSliderEntry
            imageSrc="/images/references/cropped/porsche_interior.webp"
            headline="CONSULTING COMPANY DIGITALES FAHRTENBUCH"
            infoText="Für die Automotive-Kunden eines großen Beratungshauses unterstützen wir bei der Produktentwicklung eines digitalen Fahrtenbuches für Flottenfahrer. Durch die Verwendung von plattform-agnostischen Technologien maximieren wir die Flexibilität zur Integration in unterschiedliche Flottenökosysteme."
            technologyList={['Java', 'Quarkus', 'Camel']}
          />
          <ReferencesSliderEntry
            imageSrc="/images/references/cropped/mercedes_suv.webp"
            headline="Mercedes-Benz DIGITAL SERVICE STRATEGY"
            infoText="Gemeinsam mit Mercedes-Benz haben wir eine innovative Serviceportfolio-Strategie entwickelt, die nicht nur vollkommen neue Umsatzpotentiale eröffnet, sondern auch auch echte Probleme von Kunden und Partnern löst. Von der Geschäftsfeldanalyse bis hin zur Businesscaseerstellung und dem MVP-Scoping gelang es uns Strategie & Umsetzung nahtlos zu verknüpfen."
          />
        </ul>
      </ContentWrapper>
    </div>
  )
}

const ReferencesSliderEntry = (props: ReferenceSliderEntryProps) => {
  const { imageSrc, technologyList, headline, infoText } = props
  return (
    <li className="grow-0 shrink-0 basis-[85%] snap-start md:basis-[75%] md:pb-20 xl:pb-40">
      <figure className="flex gap-8 flex-col h-full xl:flex-row">
        <div className="relative max-h-[320px] aspect-[0.8] sm:max-h-[400px] md:max-h-[480px] xl:max-h-none xl:max-w-[650px] xl:basis-[55%]">
          <Image src={imageSrc} alt="" fill style={{ objectFit: 'contain' }} />
        </div>
        <figcaption className="flex flex-col justify-center xl:grow-0 xl:shrink-0 xl:basis-[45%]">
          <Heading
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h2_medium}
            colorClassName="text-t1-black"
          >
            {headline}
          </Heading>
          <ul className="flex gap-4 mt-2 text-t1-black">
            {technologyList?.map((technology) => (
              <li
                className={twJoin('uppercase', FONT_CONFIGS.desktop_topline)}
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
          <Copy
            className="mt-8 md:pr-20 xl:pr-28 text-t1-black"
            textSize="sm"
            fontDefaults={FONT_CONFIGS.desktop_copy_small}
          >
            {infoText}
          </Copy>
        </figcaption>
      </figure>
    </li>
  )
}
