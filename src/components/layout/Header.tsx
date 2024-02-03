"use client"

import { SiteMetadata } from "@/data"
import { PageTheme } from "@/types"
import { default as NextLink } from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { twJoin } from "tailwind-merge"
import { Button } from "../atoms/Button"
import { Link } from "../atoms/Link"
import { Logo } from "../atoms/Logo"
import { Section } from "../layout/Section"

export const Header = ({ theme }: { theme: PageTheme }) => {
    const [burgerNavigationOpened, setBurgerNavigationOpened] = useState(false)

    const pathname = usePathname()

    useEffect(() => {
        if (burgerNavigationOpened) {
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [burgerNavigationOpened])

    return (
        <header className="sticky top-0 z-50">
            <div
                className="absolute -z-10 size-full backdrop-blur-sm"
                style={{ mask: "linear-gradient(#1d1d1d 80%, transparent)" }}
            />
            <Section className="py-0 md:py-0">
                <div className="flex justify-between pt-[1.625rem] lg:items-center">
                    <NextLink href="/">
                        <Logo theme={theme} />
                    </NextLink>

                    <div className="lg:hidden">
                        <Button
                            className="text-[14px] leading-[14px]"
                            onClick={() => {
                                setBurgerNavigationOpened(true)
                            }}
                        >
                            MENU
                        </Button>

                        {burgerNavigationOpened && (
                            <div className="fixed inset-0 z-[60] flex justify-end">
                                <div className="z-[90000] m-0 size-full overflow-hidden bg-t1-darkGray px-4 pt-[1.625rem] md:px-8">
                                    <div className="flex h-full flex-col justify-between">
                                        <div className="flex grow flex-col">
                                            <Button
                                                className="w-auto self-end text-[14px] leading-[14px]"
                                                onClick={() => {
                                                    setBurgerNavigationOpened(false)
                                                }}
                                            >
                                                CLOSE
                                            </Button>
                                            <nav className="pt-8 font-spacegrotesk">
                                                {SiteMetadata.menuLinks.map((linkObj, index) => {
                                                    return (
                                                        <Link
                                                            className={twJoin(
                                                                "md:w-full text-3xl bg-t1-darkGray uppercase hover:text-primary active:text-primary transition",
                                                                pathname === linkObj.link
                                                                    ? "text-primary"
                                                                    : "text-white"
                                                            )}
                                                            color="primary"
                                                            key={index}
                                                            href={`${linkObj.link}`}
                                                            label={linkObj.name}
                                                            aria-label={`Navigationslink ${linkObj.name}`}
                                                        />
                                                    )
                                                })}
                                            </nav>
                                        </div>

                                        <div className="self-end p-8 text-white">
                                            <p>kontakt@t1dev.de</p>
                                            <p>+49 711 252 98 690</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <nav className="z-40 hidden gap-2 lg:flex">
                        {SiteMetadata.menuLinks.map((linkObj, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={linkObj.link}
                                    label={linkObj.name}
                                    className={twJoin(
                                        "text-[14px] leading-[14px] active:bg-t1-darkGray active:text-primary transition",
                                        pathname === linkObj.link
                                            ? "bg-t1-darkGray text-primary"
                                            : "bg-primary text-t1-darkGray"
                                    )}
                                />
                            )
                        })}
                    </nav>
                </div>
            </Section>
        </header>
    )
}

export default Header
