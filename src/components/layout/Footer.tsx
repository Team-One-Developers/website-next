"use client"

import { SiteMetadata } from "@/data"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { twJoin } from "tailwind-merge"
import { Icon } from "../molecules/Icon"
import { Section } from "./Section"

export const Footer = () => {
    const pathname = usePathname()

    const navigationSectionHeaderCSS =
        "font-spacegrotesk uppercase font-medium leading-3 pb-2 text-[11px] opacity-50 mt-4 md:mt-0"

    const navigationLinkCSS = (link: string) =>
        twJoin(
            "font-abcdiatype font-normal text-base block leading-140 mb-2 ease-linear duration-150 last:mb-0",
            pathname === link
                ? "text-foreground-hover"
                : "text-foreground active:text-foreground-hover hover:text-foreground-hover"
        )

    const externalLinkCSS =
        "font-abcdiatype font-normal text-base leading-140 block text-foreground ease-linear duration-150 hover:text-foreground-hover"

    return (
        <footer>
            <Section className="pb-0 md:pb-0">
                <div className="block pb-8 md:grid md:grid-flow-row  md:grid-cols-[2.5fr_1fr_1fr_1fr] md:grid-rows-[1fr_1fr] md:gap-x-3 md:gap-y-5 md:text-left">
                    <div className="md:row-span-2 md:mb-0 md:self-end md:justify-self-start">
                        <h2 className={navigationSectionHeaderCSS}>
                            &copy; 2024 Team One Developers. All Rights Reserved.
                        </h2>
                    </div>

                    <div className="row-span-2">
                        <h2 className={navigationSectionHeaderCSS}>Pages</h2>

                        <div>
                            {SiteMetadata.menuLinks.map((linkObj, index) => {
                                return (
                                    <Link
                                        className={twJoin(
                                            navigationLinkCSS(linkObj.link),
                                            "inline-block p-0 pr-2 md:block"
                                        )}
                                        href={`${linkObj.link}`}
                                        key={index}
                                    >
                                        {linkObj.name}
                                    </Link>
                                )
                            })}
                            <Link
                                className={twJoin(navigationLinkCSS("/legal-notice"), "inline-block p-0 pr-2 md:block")}
                                href="/legal-notice"
                            >
                                Impressum
                            </Link>
                            <Link
                                className={twJoin(navigationLinkCSS("/privacy"), "inline-block p-0 pr-2 md:block")}
                                href="/privacy"
                            >
                                Datenschutz
                            </Link>
                        </div>
                    </div>

                    <div className="">
                        <h2 className={navigationSectionHeaderCSS}>Address</h2>
                        <a
                            className={externalLinkCSS}
                            href="https://g.page/team-one-developers-gmbh?share"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Team One Developers GmbH <br />
                            Hospitalstraße 35 <br />
                            70174 Stuttgart
                        </a>
                    </div>

                    <div className="col-start-3 md:self-end">
                        <h2 className={navigationSectionHeaderCSS}>GPS</h2>
                        <a
                            className={twJoin(externalLinkCSS, "flex flex-col")}
                            href="https://g.page/team-one-developers-gmbh?share"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>{`N 48° 46' 33.25`}</span>
                            <span>{`E 9° 10' 15.91`}</span>
                        </a>
                    </div>

                    <div className="col-start-4 row-start-1">
                        <h2 className={navigationSectionHeaderCSS}>Mail</h2>
                        <a className={externalLinkCSS} href="mailto:kontakt@t1dev.de" target="_blank" rel="noreferrer">
                            kontakt@t1dev.de
                        </a>

                        <h2 className={twJoin(navigationSectionHeaderCSS, "md:mt-4")}>Phone</h2>
                        <a className={externalLinkCSS} href="tel:+4971125298690" target="_blank" rel="noreferrer">
                            +49 711 252 98 690
                        </a>
                    </div>

                    <div className="mt-4 flex gap-2 md:mb-[3px] md:mt-0 md:self-end">
                        <a
                            href="https://www.instagram.com/teamonedevelopers/"
                            target="_blank"
                            aria-label="Instagram"
                            rel="noreferrer"
                        >
                            <Icon name="instagram" className="text-foreground hover:text-foreground-hover" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/team-one-developers/"
                            target="_blank"
                            aria-label="LinkedIn"
                            rel="noreferrer"
                        >
                            <Icon name="linkedin" className="text-foreground hover:text-foreground-hover" />
                        </a>
                    </div>
                </div>
            </Section>
        </footer>
    )
}

export default Footer
