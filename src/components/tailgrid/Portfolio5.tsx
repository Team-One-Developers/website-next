import Typography from "@/components/atoms/Typography"

const Portfolio5 = () => {
    return (
        <section className="pb-5 pt-20 lg:pb-[60px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="mb-[60px] max-w-[510px]">
                            <Typography as="span" variant="subtitle" className="mb-2 block text-primary">
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

                        <PortfolioCard
                            img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-01.jpg"
                            subtitle="Neben Weihnachts- und Urlaubsgeld erhältst Du bei uns erfolgsabhängige Prämien."
                            title="Boni"
                        />
                        <PortfolioCard
                            img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-02.jpg"
                            subtitle="Von internationalen Konferenz-Besuchen bis hin zu regelmäßigen Work-Retreats und Persönlichkeitscoachings, den Möglichkeiten zur individuellen fachlichen wie persönlichen Weiterentwicklung sind bei uns keine Grenzen gesetzt."
                            title="Weiterbildung"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <PortfolioCard
                            img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-03.jpg"
                            subtitle="Wir haben Gefallen daran gefunden dort zu arbeiten wo andere Urlaub machen. Ein bis zweimal jährlich wechseln wir unser Arbeitsumfeld und reisen gemeinsam an spannenden Locations im In- und Ausland."
                            title="Workation"
                        />
                        <PortfolioCard
                            img="https://cdn.tailgrids.com/2.0/image/marketing/images/portfolio/portfolio-05/image-04.jpg"
                            subtitle="Auch wenn wir tolle Büroräumlichkeiten in Stuttgarts Halbhöhenlage haben, unterstützen wir flexible Arbeitszeiten ebenso wie Home-Office."
                            title="Home Office"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio5

const PortfolioCard = ({ img, subtitle, title }: { img: string; subtitle: string; title: string }) => {
    return (
        <div className="mb-[60px] mr-0 lg:mr-4">
            <div className="mb-9 overflow-hidden rounded-xl">
                <img src={img} alt="image" className="w-full" />
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
