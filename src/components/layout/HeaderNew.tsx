"use client"

import ButtonNew from "@/components/atoms/ButtonNew"
import Eyebrow from "@/components/atoms/Eyebrow"
import { LogoNoText } from "@/components/atoms/LogoNoText"
import cn from "@/utils/cn"
import { Dialog, DialogPanel } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface FlyoutItem {
    name: string
    href: string
}

interface NavigationItem {
    name: string
    href: string
    flyout?: {
        items: FlyoutItem[]
        image?: string
    }
}

const navigation: NavigationItem[] = [
    {
        name: "Offerings",
        href: "/services",
        flyout: {
            items: [{ name: "Software Engineering", href: "/services/software-engineering" }],
            image: "/images/culture/coding.webp"
        }
    },
    {
        name: "Success Stories",
        href: "/customers",
        flyout: {
            items: [{ name: "Porsche", href: "/customers/porsche" }],
            image: "/images/customers/porsche-cropped.jpg"
        }
    },
    { name: "Values", href: "/culture" },
    {
        name: "Insights",
        href: "/blog",
        flyout: {
            items: [
                { name: "Blog", href: "/blog" },
                { name: "Events", href: "/events" },
                { name: "Insights", href: "/insights" }
            ]
        }
    },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" }
]

export default function HeaderNew() {
    const pathname = usePathname()
    const [flyoutOpen, setFlyoutOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [expandedItem, setExpandedItem] = useState<string | null>(null)

    return (
        <>
            {/* Fullscreen blur backdrop when flyout is open */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-black/5 backdrop-blur-sm transition-opacity duration-200",
                    flyoutOpen ? "opacity-100" : "pointer-events-none opacity-0"
                )}
            />

            <header className="fixed top-0 left-0 z-50 w-full">
                {/* Background blur overlay */}
                <div className="absolute inset-0 -z-10 backdrop-blur-[20px]" />

                <nav className="px-grid-safezone mx-auto flex max-w-(--max-content-width) items-center justify-between py-(--radius-xlarge)">
                    {/* Logo */}
                    <div className="flex flex-1 items-center">
                        <Link href="/" className="text-black">
                            <LogoNoText className="h-16 w-auto fill-current" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links - hidden below 1300px */}
                    <div className="hidden shrink-0 items-center lg:flex">
                        <div className="font-gteratext text-small flex items-center gap-[69px] text-black">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative"
                                    onMouseEnter={() => item.flyout && setFlyoutOpen(true)}
                                    onMouseLeave={() => item.flyout && setFlyoutOpen(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "transition-colors duration-200 hover:text-black/70 hover:underline",
                                            (pathname === item.href ||
                                                (item.href !== "/" && pathname.includes(item.href))) &&
                                                "font-medium underline"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                    {/* Flyout menu */}
                                    {item.flyout && (
                                        <div className="absolute left-0 hidden pt-2 group-hover:block">
                                            <div className="flex items-stretch gap-0 rounded-lg bg-black p-2 backdrop-blur-lg">
                                                {/* Menu items */}
                                                <div
                                                    className={cn(
                                                        "gap-xs p-padding-xl flex shrink-0 flex-col justify-start",
                                                        !item.flyout.image && "pr-50"
                                                    )}
                                                >
                                                    {item.flyout.items.map((flyoutItem) => (
                                                        <Link
                                                            key={flyoutItem.href}
                                                            href={flyoutItem.href}
                                                            className="font-gteratext text-small hover:text-primary py-0.5 whitespace-nowrap text-white transition-colors"
                                                        >
                                                            {flyoutItem.name}
                                                        </Link>
                                                    ))}
                                                </div>

                                                {/* Image */}
                                                {item.flyout.image && (
                                                    <div className="relative w-[340px] shrink-0 overflow-hidden rounded-lg">
                                                        <Image
                                                            src={item.flyout.image}
                                                            alt={item.name}
                                                            width={340}
                                                            height={255}
                                                            className="aspect-4/3 h-full w-full object-cover"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile burger button - visible below 1300px */}
                    <div className="flex items-center lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 6H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3 12H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3 18H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Right side controls */}
                    {/* This section is hidden until actually implemented */}
                    <div className="gap-padding-md hidden flex-1 items-center justify-end">
                        {/* Search Button */}
                        <button
                            type="button"
                            className="gap-padding-md px-padding-md py-padding-sm flex items-center rounded-sm bg-black/9 backdrop-blur-[20px] transition-colors hover:bg-black/15"
                            onClick={() => {
                                // Search functionality will be added later
                                console.log("Search clicked")
                            }}
                        >
                            {/* Search Icon */}
                            <div className="relative size-12">
                                <svg
                                    className="absolute inset-[12.5%]"
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 27C21.6274 27 27 21.6274 27 15C27 8.37258 21.6274 3 15 3C8.37258 3 3 8.37258 3 15C3 21.6274 8.37258 27 15 27Z"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M33 33L23.7 23.7"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Keyboard Shortcut Display */}
                            <div className="flex items-center gap-0.5">
                                {/* Command/Ctrl symbol */}
                                <div className="flex items-center rounded-[5px] border border-[#88ffca] bg-[#84ffc8] px-1 py-[5px]">
                                    <span className="font-gteradisplay text-xxsmall text-black">⌘</span>
                                </div>
                                {/* K key */}
                                <div className="flex items-center rounded-[5px] border border-[#88ffca] bg-[#84ffc8] px-1 py-[5px]">
                                    <span className="font-gteradisplay text-xxsmall text-black">K</span>
                                </div>
                            </div>
                        </button>

                        {/* Language Selector */}
                        <button
                            type="button"
                            className="py-padding-sm flex items-center gap-2 rounded-sm bg-black/9 pr-2.5 pl-3.5 backdrop-blur-[20px] transition-colors hover:bg-black/15"
                            onClick={() => {
                                // Language selector functionality will be added later
                                console.log("Language selector clicked")
                            }}
                        >
                            {/* German Flag */}
                            <div className="relative size-4 overflow-hidden rounded-full">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg"
                                    alt="German Flag"
                                    width={16}
                                    height={16}
                                    className="object-cover"
                                />
                            </div>
                            {/* Language Code */}
                            <span className="font-gteratext text-[14px] text-black">DE</span>
                            {/* Dropdown Arrow */}
                            <div className="relative size-6">
                                <svg
                                    className="absolute inset-[41.67%_29.17%_37.5%_29.17%]"
                                    width="10"
                                    height="5"
                                    viewBox="0 0 10 5"
                                    fill="none"
                                >
                                    <path d="M0 0L5 5L10 0H0Z" fill="black" />
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div className="hidden flex-1 lg:block" />
                </nav>
            </header>

            {/* Mobile menu */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                {/* Backdrop */}
                <div className="fixed inset-0 z-50 bg-black/5 backdrop-blur-sm" />

                <DialogPanel
                    className={cn(
                        "bg-t1-darkgreen fixed inset-y-0 right-0 z-60 flex w-full flex-col overflow-y-auto transition-transform duration-300",
                        "md:max-w-[448px]"
                    )}
                >
                    {/* Top: Logo + Close */}
                    <div className="px-padding-xl py-padding-2xl flex items-center justify-between">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white">
                            <LogoNoText className="h-16 w-auto fill-current" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 6L6 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items - centered */}
                    <div className="flex flex-1 flex-col items-center justify-center gap-12.25">
                        {navigation.map((item) => {
                            const isActive =
                                pathname === item.href || (item.href !== "/" && pathname.includes(item.href))

                            return (
                                <div key={item.name} className="flex flex-col items-center">
                                    {item.flyout ? (
                                        <>
                                            <div className="gap-xs flex items-center">
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <Eyebrow
                                                        label={item.name}
                                                        size="medium"
                                                        showDot={false}
                                                        className={cn(
                                                            "py-0 transition-colors duration-200",
                                                            isActive ? "[&>span]:text-primary" : "[&>span]:text-white"
                                                        )}
                                                    />
                                                </Link>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setExpandedItem(expandedItem === item.name ? null : item.name)
                                                    }
                                                    className="cursor-pointer"
                                                >
                                                <svg
                                                    width="12"
                                                    height="8"
                                                    viewBox="0 0 12 8"
                                                    fill="none"
                                                    className={cn(
                                                        "transition-transform duration-200",
                                                        isActive ? "text-primary" : "text-white",
                                                        expandedItem === item.name && "rotate-180"
                                                    )}
                                                >
                                                    <path
                                                        d="M1 1.5L6 6.5L11 1.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                </button>
                                            </div>

                                            {/* Flyout sub-items */}
                                            <div
                                                className={cn(
                                                    "grid transition-[grid-template-rows] duration-200",
                                                    expandedItem === item.name ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                                )}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="gap-sm pt-md flex flex-col items-center">
                                                        {item.flyout.items.map((sub) => (
                                                            <Link
                                                                key={sub.href}
                                                                href={sub.href}
                                                                className={cn(
                                                                    "font-gteratext text-small transition-colors duration-200",
                                                                    pathname === sub.href
                                                                        ? "text-primary"
                                                                        : "text-white/60 hover:text-white"
                                                                )}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                            <Eyebrow
                                                label={item.name}
                                                size="medium"
                                                showDot={false}
                                                className={cn(
                                                    "py-0 transition-colors duration-200",
                                                    isActive ? "[&>span]:text-primary" : "[&>span]:text-white"
                                                )}
                                            />
                                        </Link>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="px-padding-xl pb-padding-2xl">
                        <div className="px-padding-xl py-padding-lg flex items-center gap-5 rounded-xl bg-[#014527] backdrop-blur-[17px]">
                            <p className="font-gteratext flex-1 text-[17px] leading-6.5 text-white">
                                Need a Quick Consultation?
                            </p>
                            <ButtonNew
                                label="Get in Touch"
                                href="/contact"
                                variant="primary"
                                className="rounded-[5px]"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    )
}
