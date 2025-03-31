import { Link } from "@/components/atoms/Link"
import Typography from "@/components/atoms/Typography"
import { PAGE_THEME } from "@/constants"
import Image from "next/image"

const Cta7 = ({ pageTheme }: { pageTheme: PAGE_THEME }) => {
    return (
        <>
            <section data-theme={pageTheme} className="relative z-10 bg-background">
                <div className="left-0 top-0 h-full lg:absolute lg:w-1/2">
                    <Image
                        src="/images/optimized/t1d_nov22_185_optimized.webp"
                        alt="image"
                        height={400}
                        width={600}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap lg:justify-end">
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="py-20 lg:px-0 lg:py-[120px] xl:px-10 2xl:px-20">
                                <Typography as="span" className="mb-4 block text-primary">
                                    We are AI
                                </Typography>
                                <Typography as="h2" variant="h2" className="mb-6 text-foreground">
                                    KI & Automatisierung
                                </Typography>
                                <Typography className="mb-10 text-foreground lg:mb-12">
                                    Team One unterstützt Kunden aus Industrie, Handel und Mittelstand bei der
                                    Identifikation und Umsetzung von gewinnbringenden Anwendungsfällen im Bereich der
                                    künstlichen Intelligenz
                                </Typography>
                                <Link href="/services" label="Mehr Informationen" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <span className="absolute right-4 top-4 z-[-1]">
                        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <circle
                                    cx="1.39737"
                                    cy="62.6026"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 62.6026)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.39737"
                                    cy="25.9913"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 25.9913)"
                                    fill="white"
                                />
                                <circle
                                    cx="13.6943"
                                    cy="62.6026"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 62.6026)"
                                    fill="white"
                                />
                                <circle
                                    cx="13.6943"
                                    cy="25.9913"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 25.9913)"
                                    fill="white"
                                />
                                <circle
                                    cx="25.9911"
                                    cy="62.6026"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 62.6026)"
                                    fill="white"
                                />
                                <circle
                                    cx="25.9911"
                                    cy="25.9913"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 25.9913)"
                                    fill="white"
                                />
                                <circle
                                    cx="38.288"
                                    cy="62.6026"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 62.6026)"
                                    fill="white"
                                />
                                <circle
                                    cx="38.288"
                                    cy="25.9913"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 25.9913)"
                                    fill="white"
                                />
                                <circle
                                    cx="50.5849"
                                    cy="62.6021"
                                    r="1.39737"
                                    transform="rotate(-90 50.5849 62.6021)"
                                    fill="white"
                                />
                                <circle
                                    cx="62.7216"
                                    cy="62.6021"
                                    r="1.39737"
                                    transform="rotate(-90 62.7216 62.6021)"
                                    fill="white"
                                />
                                <circle
                                    cx="50.5849"
                                    cy="25.9911"
                                    r="1.39737"
                                    transform="rotate(-90 50.5849 25.9911)"
                                    fill="white"
                                />
                                <circle
                                    cx="62.7216"
                                    cy="25.9911"
                                    r="1.39737"
                                    transform="rotate(-90 62.7216 25.9911)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.39737"
                                    cy="50.3058"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 50.3058)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.39737"
                                    cy="13.6942"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 13.6942)"
                                    fill="white"
                                />
                                <circle
                                    cx="13.6943"
                                    cy="50.3058"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 50.3058)"
                                    fill="white"
                                />
                                <circle
                                    cx="13.6943"
                                    cy="13.6944"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 13.6944)"
                                    fill="white"
                                />
                                <circle
                                    cx="25.9911"
                                    cy="50.3058"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 50.3058)"
                                    fill="white"
                                />
                                <circle
                                    cx="25.9911"
                                    cy="13.6944"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 13.6944)"
                                    fill="white"
                                />
                                <circle
                                    cx="38.288"
                                    cy="50.3058"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 50.3058)"
                                    fill="white"
                                />
                                <circle
                                    cx="38.288"
                                    cy="13.6944"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 13.6944)"
                                    fill="white"
                                />
                                <circle
                                    cx="50.5849"
                                    cy="50.3058"
                                    r="1.39737"
                                    transform="rotate(-90 50.5849 50.3058)"
                                    fill="white"
                                />
                                <circle
                                    cx="62.7216"
                                    cy="50.3058"
                                    r="1.39737"
                                    transform="rotate(-90 62.7216 50.3058)"
                                    fill="white"
                                />
                                <circle
                                    cx="50.5849"
                                    cy="13.6942"
                                    r="1.39737"
                                    transform="rotate(-90 50.5849 13.6942)"
                                    fill="white"
                                />
                                <circle
                                    cx="62.7216"
                                    cy="13.6942"
                                    r="1.39737"
                                    transform="rotate(-90 62.7216 13.6942)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.39737"
                                    cy="38.0086"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 38.0086)"
                                    fill="white"
                                />
                                <circle
                                    cx="1.39737"
                                    cy="1.3973"
                                    r="1.39737"
                                    transform="rotate(-90 1.39737 1.3973)"
                                    fill="white"
                                />
                                <circle
                                    cx="13.6943"
                                    cy="38.0086"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 38.0086)"
                                    fill="white"
                                />
                                <circle
                                    cx="13.6943"
                                    cy="1.3973"
                                    r="1.39737"
                                    transform="rotate(-90 13.6943 1.3973)"
                                    fill="white"
                                />
                                <circle
                                    cx="25.9911"
                                    cy="38.0086"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 38.0086)"
                                    fill="white"
                                />
                                <circle
                                    cx="25.9911"
                                    cy="1.3973"
                                    r="1.39737"
                                    transform="rotate(-90 25.9911 1.3973)"
                                    fill="white"
                                />
                                <circle
                                    cx="38.288"
                                    cy="38.0086"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 38.0086)"
                                    fill="white"
                                />
                                <circle
                                    cx="38.288"
                                    cy="1.3973"
                                    r="1.39737"
                                    transform="rotate(-90 38.288 1.3973)"
                                    fill="white"
                                />
                                <circle
                                    cx="50.5849"
                                    cy="38.0089"
                                    r="1.39737"
                                    transform="rotate(-90 50.5849 38.0089)"
                                    fill="white"
                                />
                                <circle
                                    cx="62.7216"
                                    cy="38.0089"
                                    r="1.39737"
                                    transform="rotate(-90 62.7216 38.0089)"
                                    fill="white"
                                />
                                <circle
                                    cx="50.5849"
                                    cy="1.39755"
                                    r="1.39737"
                                    transform="rotate(-90 50.5849 1.39755)"
                                    fill="white"
                                />
                                <circle
                                    cx="62.7216"
                                    cy="1.39755"
                                    r="1.39737"
                                    transform="rotate(-90 62.7216 1.39755)"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </span>
                </div>
            </section>
        </>
    )
}

export default Cta7
