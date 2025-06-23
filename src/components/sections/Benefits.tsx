import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import Image from "next/image"

const Benefits = () => {
    return (
        <Section className="pt-20 pb-5 lg:pt-[120px] lg:pb-[60px]">
            <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-1/2">
                    <div className="mb-[60px] max-w-[510px]">
                        <Typography as="span" variant="subtitle" className="text-primary mb-2 block">
                            Portfolio
                        </Typography>
                        <Typography as="h2" variant="h2" className="mb-3">
                            Benefits
                        </Typography>
                        <p className="text-body-color text-base">
                            There are many variations of passages of Lorem Ipsum available but the majority have
                            suffered alteration in some form.
                        </p>
                    </div>

                    <BenefitsCard
                        img="/images/culture/coding.webp"
                        subtitle="Neben Weihnachts- und Urlaubsgeld erhältst Du bei uns erfolgsabhängige Prämien."
                        title="Boni"
                    />
                    <BenefitsCard
                        img="/images/culture/magazine.png"
                        subtitle="Von internationalen Konferenz-Besuchen bis hin zu regelmäßigen Work-Retreats und Persönlichkeitscoachings, den Möglichkeiten zur individuellen fachlichen wie persönlichen Weiterentwicklung sind bei uns keine Grenzen gesetzt."
                        title="Weiterbildung"
                    />
                </div>
                <div className="w-full px-4 lg:w-1/2">
                    <BenefitsCard
                        img="/images/culture/coffetalk.webp"
                        subtitle="Wir haben Gefallen daran gefunden dort zu arbeiten wo andere Urlaub machen. Ein bis zweimal jährlich wechseln wir unser Arbeitsumfeld und reisen gemeinsam an spannenden Locations im In- und Ausland."
                        title="Workation"
                    />
                    <BenefitsCard
                        img="/images/culture/officelife.webp"
                        subtitle="Auch wenn wir tolle Büroräumlichkeiten in Stuttgarts Halbhöhenlage haben, unterstützen wir flexible Arbeitszeiten ebenso wie Home-Office."
                        title="Home Office"
                    />
                </div>
            </div>
        </Section>
    )
}

export default Benefits

const BenefitsCard = ({ img, subtitle, title }: { img: string; subtitle: string; title: string }) => {
    return (
        <div className="mr-0 mb-[60px] lg:mr-4">
            <div className="mb-9 overflow-hidden rounded-xl">
                <Image src={img} alt="image" className="w-full" width={510} height={340} />
            </div>
            <div className="content">
                <div className="mb-4 flex items-center">
                    <Typography as="span">{subtitle}</Typography>
                </div>
                <Typography as="h3" variant="h4">
                    {title}
                </Typography>
            </div>
        </div>
    )
}
