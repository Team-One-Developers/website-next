import Section from "@/components/layout/Section"
import Image from "next/image"
import Link from "next/link"

const logos = [
    {
        image: "/images/customers/magazine/sap.png",
        alt: "SAP Logo"
    },
    {
        image: "/images/customers/magazine/payback.png",
        alt: "Payback Logo"
    },
    {
        image: "/images/customers/magazine/shopware.png",
        alt: "Shopware Logo"
    },
    {
        image: "/images/customers/magazine/vtex.png",
        alt: "VTEX Logo"
    },
    {
        image: "/images/customers/magazine/contentsquare.png",
        alt: "Contentsquare Logo"
    },
    {
        image: "/images/customers/magazine/otto.png",
        alt: "Otto Logo"
    },
    {
        image: "/images/customers/magazine/spryker.png",
        alt: "Spryker Logo"
    }
]

export const Magazine = () => {
    return (
        <Section className="bg-t1-white py-24 md:py-48">
            <div className="bg-primary relative flex w-full flex-wrap gap-4 gap-y-42 overflow-visible p-16">
                <Image
                    src={"/images/culture/magazine.png"}
                    alt="Magazine"
                    width={800}
                    height={800}
                    className="w-full lg:absolute lg:-top-12 lg:-left-12 lg:w-[50%] xl:-top-36 xl:-left-36 xl:w-[60%]"
                />
                <div className="hidden h-1 w-[45%] lg:block" />
                <div className="flex w-full flex-col gap-y-6 lg:w-1/2">
                    <h3 className="font-spacegrotesk text-t1-black text-4xl font-extrabold uppercase md:text-5xl">
                        UNSERE AI-INSIGHTS AUS DER PRAXIS
                    </h3>
                    <p className="text-t1-black font-abcd text-lg">
                        In unserem Interview-Format sprechen wir mit über 40 Branchenführern, Entscheider:innen,
                        Tech-Verantwortlichen und Strateg:innen, die KI nicht nur beobachten, sondern einsetzen. Welche
                        Use Cases funktionieren wirklich? Wo liegen operative Hürden? Und wie verändert GenAI das
                        Tagesgeschäft im Commerce, Marketing und Produkt?
                    </p>
                    <Link
                        href="/downloads&q=magazine"
                        className="group text-t1-black font-semibold transition-all duration-300"
                    >
                        Download PDF
                        <span aria-hidden="true" className="ml-2 transition-all duration-300 group-hover:ml-3">
                            &rarr;
                        </span>
                    </Link>
                </div>
                <div className="lg:flex-nowra flex w-full flex-wrap justify-between gap-8 lg:gap-4">
                    {logos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo.image}
                            alt={logo.alt}
                            width={150}
                            height={150}
                            className="w-1/3 object-contain lg:w-1/8"
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default Magazine
