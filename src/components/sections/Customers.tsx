import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import Image from "next/image"

export default function Customers() {
    return (
        <Section className="bg-t1-black py-24 sm:py-32">
            <div className="mx-auto">
                <Typography variant="h3" className="">
                    EIN AUSZUG UNSERER PARTNER&shy;SCHAFTEN
                </Typography>
                <div className="mt-16 flex flex-wrap items-center justify-between gap-8">
                    <Image
                        src="/images/customers/porscheLogo.svg"
                        alt="Porsche Logo"
                        height={48}
                        width={158}
                        className="h-24 w-1/3 md:w-1/5"
                    />
                    <Image
                        src="/images/customers/mercedesLogo.svg"
                        alt="Mercedes Logo"
                        height={48}
                        width={158}
                        className="h-24 w-1/3 md:w-1/5"
                    />
                    <Image
                        src="/images/customers/dmtechLogo.svg"
                        alt="DM Tech Logo"
                        height={48}
                        width={158}
                        className="h-24 w-1/3 md:w-1/5"
                    />
                    <Image
                        src="/images/customers/recaroLogo.svg"
                        alt="Recaro Logo"
                        height={48}
                        width={158}
                        className="h-24 w-1/3 md:w-1/5"
                    />
                </div>
            </div>
        </Section>
    )
}
