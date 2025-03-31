import Typography from "@/components/atoms/Typography"
import { PAGE_THEME } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Service6 = ({ pageTheme }: { pageTheme: PAGE_THEME }) => {
    return (
        <section data-theme={pageTheme} className="bg-background pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[70px]">
                    <div className="w-full px-4 lg:w-8/12">
                        <div className="mb-5 max-w-[625px]">
                            <Typography as="span" variant="subtitle" className="mb-2 block text-primary">
                                team one
                            </Typography>
                            <Typography as="h2" variant="h2" className="text-foreground">
                                We help our clients to build their Dream Projects
                            </Typography>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-4/12">
                        <div className="mb-5 flex lg:justify-end">
                            <Link
                                href="/services"
                                className="group relative border-b-2 border-foreground text-lg font-medium text-foreground hover:border-primary hover:text-primary"
                            >
                                EXPLORE SERVICES
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    <ServiceCard
                        link="/#"
                        image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-01.jpg"
                        title="Development"
                        details="Wir helfen Organisationen bei der Entwicklung von Softwarelösungen. Wir bieten maßgeschneiderte Softwareentwicklung um den spezifischen Anforderungen unserer Kunden gerecht zu werden."
                        button="Mehr Details"
                    />
                    <ServiceCard
                        link="/#"
                        image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-02.jpg"
                        title="AI & DATA"
                        details="Wir bilden Organisation im Bereich technischer und konzeptioneller KI-Kompetenzen aus und unterstützen bei der Identifikation und Umsetzung komplexer KI-Lösungen. 
"
                        button="Mehr Details"
                    />
                    <ServiceCard
                        link="/#"
                        image="https://cdn.tailgrids.com/2.0/image/marketing/images/services/services-06/image-03.jpg"
                        title="Transformation"
                        details="Wir gestalten das nächste Level der Digitalisierung mit messbaren Transformationserfolgen. Strategie, Methode, Umsetzung - ganzheitlich und pragmatisch."
                        button="Mehr Details"
                    />
                </div>
            </div>
        </section>
    )
}

export default Service6

const ServiceCard = ({
    link,
    image,
    button,
    title,
    details
}: {
    link: string
    image: string
    button: string
    title: string
    details: string
}) => {
    return (
        <Link href={link} className="relative w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 bg-foreground hover:bg-primary/90">
                <div className="block w-full">
                    <Image src={image} width={400} height={300} alt="image" className="w-full" />
                </div>
                <div className="p-8 sm:p-11 md:p-8 lg:px-6 xl:p-10 2xl:p-11">
                    <Typography as="h3" variant="h4" className="mb-4 block text-background">
                        {title}
                    </Typography>
                    <Typography
                        as="p"
                        variant="paragraph"
                        className="border-stroke mb-8 border-b pb-8 text-base text-background"
                    >
                        {details}
                    </Typography>
                    <div className="inline-flex items-center text-base text-background">
                        {button}
                        <span className="ml-3">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current"
                            >
                                <path
                                    d="M18 9.5L11.5312 2.9375C11.25 2.65625 10.8125 2.65625 10.5312 2.9375C10.25 3.21875 10.25 3.65625 10.5312 3.9375L15.7812 9.28125H2.5C2.125 9.28125 1.8125 9.59375 1.8125 9.96875C1.8125 10.3438 2.125 10.6875 2.5 10.6875H15.8437L10.5312 16.0938C10.25 16.375 10.25 16.8125 10.5312 17.0938C10.6562 17.2188 10.8437 17.2812 11.0312 17.2812C11.2187 17.2812 11.4062 17.2188 11.5312 17.0625L18 10.5C18.2812 10.2187 18.2812 9.78125 18 9.5Z"
                                    fill=""
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
