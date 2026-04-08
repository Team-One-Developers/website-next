import Image from "next/image"
import Link from "next/link"

const navigation = {
    leistungen: [
        { name: "Software Engineering", href: "/leistungen/software-engineering" },
        { name: "Operational AI", href: "/leistungen/operational-ai" },
        { name: "Strategie-Beratung", href: "/leistungen/strategie-beratung" },
        { name: "Car-IT Technologies", href: "/leistungen/car-it-technologies" }
    ],
    referenzen: [
        { name: "Vertriebsplattform", href: "/referenzen/vertriebsplattform" },
        { name: "Finanzenkonfigurator", href: "/referenzen/finanzenkonfigurator" },
        { name: "KI-Kundenservice", href: "/referenzen/ki-kundenservice" },
        { name: "Plattformstrategie", href: "/referenzen/axelspringer" }
    ],
    unternehmen: [
        { name: "Unternehmen", href: "/unternehmen" },
        { name: "Einblicke", href: "/einblicke" },
        { name: "Karriere", href: "/karriere" },
        { name: "Kontakt", href: "/kontakt" },
        { name: "Datenschutz", href: "/datenschutz" },
        { name: "Impressum", href: "/impressum" }
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

export default function Footer() {
    return (
        <footer className="relative overflow-hidden pt-(--footer-spacing)">
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
                        maskImage: "url(/logos/team-one-mask.svg)",
                        WebkitMaskImage: "url(/logos/team-one-mask.svg)",
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center"
                    }}
                >
                    <Image src="/images/green-gradient.png" alt="" fill className="object-cover" priority={false} />
                    <div className="bg-primary absolute inset-0 mix-blend-multiply" aria-hidden="true" />
                </div>

                {/* Navigation columns */}
                <nav
                    aria-label="Footer navigation"
                    className="sm:gap-grid-gutter grid grid-cols-1 gap-16 pt-(--footer-spacing) sm:grid-cols-2 md:grid-cols-4"
                >
                    <FooterColumn title="Leistungen" links={navigation.leistungen} />
                    <FooterColumn title="Referenzen" links={navigation.referenzen} />
                    <FooterColumn title="Unternehmen" links={navigation.unternehmen} />
                    <div className="gap-lg flex flex-col">
                        <p className="text-xxsmall text-[#9d9d9d]">Partner</p>
                        <Image src="/logos/vercel.png" alt="Vercel" width={160} height={40} className="w-56" />
                        <Image
                            src="/logos/aca/Member_of_ACA_Logo_2-line_hor_Icon_dark.svg"
                            alt="Member of ACA"
                            width={200}
                            height={100}
                            className="w-64"
                        />
                    </div>
                </nav>

                {/* Bottom bar */}
                <div className="pb-grid-gutter flex flex-col gap-10 pt-(--footer-spacing) min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:justify-between sm:gap-6">
                    {/* Phone + Mail — stacked on mobile, row at sm, dissolves into parent at 1000px */}
                    <div className="flex flex-col gap-4 min-[1000px]:contents sm:flex-row sm:items-center sm:justify-between">
                        <a href="tel:+491829983882" className="flex items-center gap-2 hover:underline">
                            <Image src="/logos/phone.svg" alt="" width={32} height={32} className="size-6 md:size-8" />
                            <span className="text-small md:text-medium text-black">+49 182 9983882</span>
                        </a>
                        <a href="mailto:hello@team-one.com" className="flex items-center gap-2 hover:underline">
                            <Image src="/logos/mail.svg" alt="" width={32} height={32} className="size-6 md:size-8" />
                            <span className="text-small md:text-medium text-black">hello@team-one.com</span>
                        </a>
                    </div>

                    {/* Social icons */}
                    <div className="gap-xl flex items-center">
                        <Link
                            href="https://www.youtube.com/@team-one"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                        >
                            <Image
                                src="/logos/youtube.svg"
                                alt=""
                                width={32}
                                height={32}
                                className="size-6 md:size-8"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/team-one-developers"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Image
                                src="/logos/linkedin.svg"
                                alt=""
                                width={32}
                                height={32}
                                className="size-6 md:size-8"
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/teamonedevelopers/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Image
                                src="/logos/instagram.svg"
                                alt=""
                                width={32}
                                height={32}
                                className="size-6 md:size-8"
                            />
                        </Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-small md:text-medium text-black">© {new Date().getFullYear()} Team One</p>
                </div>
            </div>
        </footer>
    )
}
