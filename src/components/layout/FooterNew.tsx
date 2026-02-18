import Image from "next/image"
import Link from "next/link"

const navigation = {
    leistungen: [
        { name: "Software Engineering", href: "/services/software-engineering" },
        { name: "AI & Data Engineering", href: "/services/ai-data-analytics" },
        { name: "Business Consulting", href: "/services/business-consulting" },
        { name: "Car IT Technologies", href: "/services/car-it-technologies" }
    ],
    erfolge: [
        { name: "MB Service Strategy", href: "/customers" },
        { name: "Porsche Sales Plattform", href: "/customers" },
        { name: "Recaro Review Coach", href: "/customers" }
    ],
    kultur: [
        { name: "Menschen", href: "/culture" },
        { name: "Kundenzentriert", href: "/culture" },
        { name: "Agiles Vorgehen", href: "/culture" },
        { name: "Qualität und Nachhaltigkeit", href: "/culture" },
        { name: "Technologie und Innovation", href: "/culture" }
    ],
    career: [
        { name: "Jobs", href: "/career" },
        { name: "Hybrides Arbeiten", href: "/career" },
        { name: "Vorteile", href: "/career" }
    ],
    blog: [
        { name: "Datenschutz", href: "/privacy" },
        { name: "Impressum", href: "/legal-notice" },
        { name: "Kontakt", href: "/contact" }
    ]
}

function FooterColumn({ title, links }: { title: string; links: { name: string; href: string }[] }) {
    return (
        <div className="gap-lg flex flex-col">
            <p className="text-xxsmall text-[#9d9d9d]">{title}</p>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-small text-black transition-colors hover:text-black/70"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    )
}

export default function FooterNew() {
    return (
        <footer className="pt-grid-safezone relative overflow-hidden">
            {/* Green gradient — extends outward beyond content width */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                aria-hidden="true"
                style={{
                    background:
                        "linear-gradient(to top, rgba(70,255,173,0.6) 0%, rgba(70,255,173,0.3) 40%, transparent 70%)"
                }}
            />

            {/* Content wrapper */}
            <div className="px-grid-safezone relative z-10 mx-auto w-full max-w-(--max-content-width)">
                {/* Masked hero image — "team one" text mask */}
                <div
                    className="relative w-full"
                    style={{
                        aspectRatio: "1476 / 234",
                        maskImage: "url(/new/team-one-mask.svg)",
                        WebkitMaskImage: "url(/new/team-one-mask.svg)",
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center"
                    }}
                >
                    <Image src="/new/images/image-5.jpg" alt="" fill className="object-cover" priority={false} />
                </div>

                {/* Navigation columns */}
                <div className="gap-grid-gutter pt-grid-safezone grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <FooterColumn title="Leistungen" links={navigation.leistungen} />
                    <FooterColumn title="Erfolge" links={navigation.erfolge} />
                    <FooterColumn title="Kultur" links={navigation.kultur} />
                    <FooterColumn title="Career" links={navigation.career} />
                    <FooterColumn title="Blog" links={navigation.blog} />
                </div>

                {/* Bottom bar */}
                <div className="pb-grid-gutter pt-grid-safezone flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
                    {/* Contact info */}
                    <div className="md:gap-xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <a href="tel:+491829983882" className="flex items-center gap-2 hover:underline">
                            <Image
                                src="/new/logos/phone.svg"
                                alt=""
                                width={32}
                                height={32}
                                className="size-6 md:size-8"
                            />
                            <span className="text-small md:text-medium text-black">+49 182 9983882</span>
                        </a>
                        <a href="mailto:hello@team-one.com" className="flex items-center gap-2 hover:underline">
                            <Image
                                src="/new/logos/mail.svg"
                                alt=""
                                width={32}
                                height={32}
                                className="size-6 md:size-8"
                            />
                            <span className="text-small md:text-medium text-black">hello@team-one.com</span>
                        </a>
                    </div>

                    {/* Social icons + Copyright — stacked on tiny, same row below tablet, inline above */}
                    <div className="xs:flex-row xs:items-center xs:justify-between flex flex-col gap-4 md:contents">
                        <div className="gap-xl flex items-center">
                            <Link href="https://www.youtube.com/@team-one" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/new/logos/youtube.svg"
                                    alt="YouTube"
                                    width={32}
                                    height={32}
                                    className="size-6 md:size-8"
                                />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/team-one-developers"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/new/logos/linkedin.svg"
                                    alt="LinkedIn"
                                    width={32}
                                    height={32}
                                    className="size-6 md:size-8"
                                />
                            </Link>
                            <Link
                                href="https://www.instagram.com/teamonedevelopers/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src="/new/logos/instagram.svg"
                                    alt="Instagram"
                                    width={32}
                                    height={32}
                                    className="size-6 md:size-8"
                                />
                            </Link>
                        </div>
                        <p className="text-small md:text-medium text-black md:ml-auto">
                            © {new Date().getFullYear()} Team One
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
