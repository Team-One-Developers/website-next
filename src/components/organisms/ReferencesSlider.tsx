import { StaticImageData } from "next/image"
import { Image } from "../atoms/Image"
import { ImageMask } from "../atoms/ImageMask"
import Typography from "../atoms/Typography"
import { Section } from "../layout/Section"
import SpringerImg from "/public/images/optimized/axel-springer_optimized.webp"
import FinanceImg from "/public/images/optimized/finance_0_optimized.webp"
import MercedesImg from "/public/images/optimized/mercedes-benz_optimized.webp"
import FahrtenbuchImg from "/public/images/optimized/nate-johnston-obOin8-m5sw-unspla_optimized.webp"
import RecaroImg from "/public/images/optimized/recaro_optimized.webp"
import TaycanImg from "/public/images/optimized/taycan_optimized.webp"

interface ReferencesSliderEntryProps {
    imageSrc: StaticImageData
    technologyList?: Array<string>
    headline: string
    infoText: string
}

export const ReferencesSlider = () => {
    return (
        <div className="bg-muted">
            <Section>
                <div className="flex justify-center pb-8 pt-0 font-medium md:pt-[75px]">
                    <Typography className="text-black" variant="subtitle">
                        REFERENZEN
                    </Typography>
                </div>
                <ul className="flex snap-x scroll-pl-4 gap-6 overflow-scroll px-4 md:py-12">
                    <ReferencesSliderEntry
                        imageSrc={FinanceImg}
                        headline="AUTOMOTIVE FINANCIAL SERVICES PLATTFORM"
                        infoText="Gemeinsam mit unserem Kunden stellen wir uns der Herausforderung
					Online-Finanzierungen von Premium-Fahrzeugen zur bestmöglichsten
					Kundenerfahrung zu machen. Neben der Online-Integration der
					bestehenden Finanzierungs- und Leasingprodukte für Endkunden steht
					auch die Entwicklung einer globalen Händlerapplikation im Fokus."
                        technologyList={["TypeScript", "React", "Node.js", "AWS"]}
                    />
                    <ReferencesSliderEntry
                        imageSrc={TaycanImg}
                        headline="PORSCHE ONLINE VERTRIEBS&shy;PLATTFORM"
                        infoText="„Porsche-Enthusiasten die bestmögliche Such- und Kauferfahrung
						zu bieten“. Nicht weniger war und ist unser Anspruch im Rahmen
						der Entwicklung der Porsche Vertriebsplattform für Neu- und
						Gebrauchtfahrzeuge."
                        technologyList={["TypeScript", "React", "Node.js", "AWS", "GraphQL"]}
                    />
                    <ReferencesSliderEntry
                        imageSrc={RecaroImg}
                        headline="RECARO PEER REVIEW COACHING"
                        infoText="Code-Reviews sind ein zentrales Element in unserem
					Programmier-Alltag. Doch wie gestaltet sich ein effektives
					Mehr-Augen-Prinzip? Wie gibt man Feedback und wie erzeugt man
					einen offenen Raum für Verbesserung? Gemeinsam mit RECARO sind
					wir unter anderem diesen Fragen im Rahmen unseres Peer Review
					Coachings auf den Grund gegangen."
                    />
                    <ReferencesSliderEntry
                        imageSrc={SpringerImg}
                        headline="AXEL SPRINGER POI SERVICE CMS"
                        infoText="Im Rahmen eines innovativen Spin-Offs der Axel Springer SE
					entwickelten wir neben der Produktstrategie einen MVP für die
					Echtzeit-Verwaltung von POI Daten sowie einer rollenbasierten
					Zugriffskontrolle."
                        technologyList={["TypeScript", "React", "Node.js", "GraphQL", "AWS"]}
                    />
                    <ReferencesSliderEntry
                        imageSrc={FahrtenbuchImg}
                        headline="CONSULTING COMPANY DIGITALES FAHRTENBUCH"
                        infoText="Für die Automotive-Kunden eines großen Beratungshauses unterstützen wir bei der Produktentwicklung eines digitalen Fahrtenbuches für Flottenfahrer. Durch die Verwendung von plattform-agnostischen Technologien maximieren wir die Flexibilität zur Integration in unterschiedliche Flottenökosysteme."
                        technologyList={["Java", "Quarkus", "Camel"]}
                    />
                    <ReferencesSliderEntry
                        imageSrc={MercedesImg}
                        headline="Mercedes-Benz DIGITAL SERVICE STRATEGY"
                        infoText="Gemeinsam mit Mercedes-Benz haben wir eine innovative Serviceportfolio-Strategie entwickelt, die nicht nur vollkommen neue Umsatzpotentiale eröffnet, sondern auch echte Probleme von Kunden und Partnern löst. Von der Geschäftsfeldanalyse bis hin zur Businesscaseerstellung und dem MVP-Scoping gelang es uns Strategie & Umsetzung nahtlos zu verknüpfen."
                    />
                </ul>
            </Section>
        </div>
    )
}

const ReferencesSliderEntry = (props: ReferencesSliderEntryProps) => {
    const { imageSrc, technologyList, headline, infoText } = props
    return (
        <li className="shrink-0 grow-0 basis-[90%] snap-start pr-4 sm:pr-12 md:basis-3/4 md:pb-20 md:pr-20 xl:pb-40 xl:pr-28">
            <figure className="flex h-full flex-col gap-8 xl:flex-row">
                <ImageMask className="relative aspect-[0.8] max-h-[320px] sm:max-h-[400px] md:max-h-[480px] xl:max-h-none xl:max-w-[650px] xl:basis-[55%]">
                    <Image src={imageSrc} alt={headline} fill placeholder="blur" />
                </ImageMask>
                <figcaption className="flex flex-col justify-center xl:shrink-0 xl:grow-0 xl:basis-[45%]">
                    <Typography as="h2" variant="h1" className="text-black">
                        {headline}
                    </Typography>
                    <ul className="mt-2 flex flex-wrap justify-between gap-2 text-black lg:gap-6">
                        {technologyList?.map((technology) => (
                            <Typography as="li" variant="subtitle" className="uppercase" key={technology}>
                                {technology}
                            </Typography>
                        ))}
                    </ul>
                    <Typography className="mt-8 text-black" variant="paragraph">
                        {infoText}
                    </Typography>
                </figcaption>
            </figure>
        </li>
    )
}
