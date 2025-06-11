"use client"

import cn from "@/utils/cn"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface NavigationItem {
    name: string
    href: string
    children?: {
        name: string
        href: string
    }[]
}

const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    {
        name: "Leistungen",
        href: "/services"
        // children: [
        //     { name: "Software Engineering", href: "/services/software-engineering" },
        //     { name: "AI & Data Analytics", href: "/services/ai-data-analytics" },
        //     { name: "Digital Strategy & Transformation", href: "/services/digital-strategy-transformation" }
        // ]
    },
    { name: "Karriere", href: "/career" },
    { name: "Kultur", href: "/culture" },
    { name: "Blog", href: "/blog" },
    { name: "kontakt", href: "/contact" }
]

export default function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="font-spacegrotesk bg-t1-black/70 fixed top-0 left-0 z-50 w-full backdrop-blur-3xl">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 2xl:px-0">
                <div className="flex lg:flex-1">
                    <Link href="/" className="text-t1-white -m-1.5 p-1.5">
                        <span className="sr-only">Team One Company Logo</span>

                        <Image
                            src="/images/logos/team-one-logo.svg"
                            alt="Team One Logo"
                            height={130}
                            width={300}
                            className="text-t1-white h-12 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="text-t1-white -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <div key={item.name} className="group relative">
                            <Link
                                href={item.href}
                                className={cn(
                                    // p-3 & -m-3 for some more clickable area without changing the size
                                    "text-t1-white hover:text-primary -m-3 p-3 text-lg/6 font-semibold uppercase",
                                    (pathname === item.href || (item.href !== "/" && pathname.includes(item.href))) &&
                                        "underline"
                                )}
                            >
                                {item.name}
                            </Link>
                            {item.children && (
                                <div className="bg-t1-black shadow-t1-white absolute left-0 z-10 mt-2 hidden w-52 group-hover:block">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            href={child.href}
                                            className="text-t1-white hover:text-primary font-spacegrotesk block px-4 py-2 text-sm uppercase"
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                            {/* {pathname === item.href ? (
                                <div className="border-primary absolute top-0 -mt-7 h-0.5 w-full border-t-4" />
                            ) : null} */}
                        </div>
                    ))}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="bg-t1-black fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Team One Company Logo</span>

                            <Image
                                src="/images/logos/t1-only-dark.svg"
                                alt="Team One Logo"
                                height={86}
                                width={164}
                                className="h-12 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-t1-white -m-2.5 rounded-md p-2.5"
                        >
                            <span className="sr-only">Menü schließen</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="divide-t1-white/10 -my-6 divide-y">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "text-t1-white hover:text-primary font-spacegrotesk -mx-3 block rounded-lg px-3 py-2 text-lg/7 font-semibold uppercase",
                                            (pathname === item.href ||
                                                (item.href !== "/" && pathname.includes(item.href))) &&
                                                "underline"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
