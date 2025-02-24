"use client"
import { Section } from "@/components/layout/Section"
import cn from "@/lib/cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { ReactNode, useState } from "react"

const Navbar8 = () => {
    const [open, setOpen] = useState(false)
    const path = usePathname()

    return (
        <header className="fixed z-[9999] flex w-full items-center bg-background font-spacegrotesk uppercase">
            <Section className="w-full py-0 md:py-0">
                <div className="relative flex w-full items-center justify-between">
                    <div className="w-60 max-w-full">
                        <Link href="/#" className="block w-full py-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="42.67 210.87 509.95 173.53"
                                className={`h-[2.875rem]`}
                                fill="currentColor"
                            >
                                <title>Team One Developers</title>
                                <path d="M239.75 318.35h-1.15c-.53-.96-1.3-1.88-2.3-2.77-1.01-.89-2.29-1.62-3.85-2.2-1.56-.58-3.49-.86-5.8-.86-2.98 0-5.71.72-8.21 2.16-2.5 1.44-4.49 3.53-5.98 6.26-1.49 2.74-2.23 6-2.23 9.79v1.08c0 3.84.76 7.12 2.27 9.83s3.52 4.79 6.01 6.23c2.5 1.44 5.21 2.16 8.14 2.16 3.46 0 6.11-.62 7.96-1.87 1.85-1.25 3.23-2.64 4.14-4.18h1.15v5.04h7.27v-45.46h-7.42v14.79Zm.07 13.25c0 3.84-1.04 6.79-3.13 8.86-2.09 2.06-4.74 3.1-7.96 3.1s-5.8-1.03-7.88-3.1c-2.09-2.06-3.13-5.01-3.13-8.86v-.65c0-3.79 1.04-6.72 3.13-8.78 2.09-2.06 4.72-3.1 7.88-3.1s5.93 1.03 7.99 3.1c2.06 2.06 3.1 4.99 3.1 8.78v.65ZM278.95 314.79c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59.76-9.25 2.27-4.74 3.65-6.23 6.41c-1.49 2.76-2.23 5.99-2.23 9.68v.86c0 3.65.76 6.85 2.27 9.61s3.61 4.9 6.3 6.41c2.69 1.51 5.83 2.27 9.43 2.27 3.21 0 5.86-.5 7.92-1.51 2.06-1.01 3.73-2.26 5-3.74 1.27-1.49 2.24-2.9 2.92-4.25l-6.12-3.17c-.77 1.63-1.86 3.07-3.28 4.32-1.42 1.25-3.52 1.87-6.3 1.87-2.98 0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04 12.85c.38-2.69 1.45-4.79 3.2-6.3 1.75-1.51 4.02-2.27 6.8-2.27s5.04.76 6.77 2.27c1.73 1.51 2.69 3.61 2.88 6.3H259.9ZM306.64 343.55h-1.16l-9.43-30.02h-7.85l11.95 35.49h11.81l11.96-35.49h-7.85l-9.43 30.02zM351.24 314.79c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59.76-9.25 2.27-4.74 3.65-6.23 6.41c-1.49 2.76-2.23 5.99-2.23 9.68v.86c0 3.65.76 6.85 2.27 9.61s3.61 4.9 6.3 6.41c2.69 1.51 5.83 2.27 9.43 2.27 3.21 0 5.86-.5 7.92-1.51 2.06-1.01 3.73-2.26 5-3.74 1.27-1.49 2.24-2.9 2.92-4.25l-6.12-3.17c-.77 1.63-1.86 3.07-3.28 4.32-1.42 1.25-3.52 1.87-6.3 1.87-2.98 0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04 12.85c.38-2.69 1.45-4.79 3.2-6.3 1.75-1.51 4.02-2.27 6.8-2.27s5.04.76 6.77 2.27c1.73 1.51 2.69 3.61 2.88 6.3h-19.66ZM364.88 303.57h7.42v45.45h-7.42zM405.92 314.75c-2.79-1.49-5.95-2.23-9.5-2.23s-6.71.75-9.47 2.23c-2.76 1.49-4.93 3.59-6.52 6.3s-2.38 5.94-2.38 9.68v1.08c0 3.74.79 6.98 2.38 9.72 1.58 2.74 3.75 4.84 6.52 6.3 2.76 1.46 5.92 2.2 9.47 2.2s6.72-.73 9.5-2.2c2.78-1.46 4.97-3.56 6.55-6.3 1.58-2.74 2.38-5.98 2.38-9.72v-1.08c0-3.74-.79-6.97-2.38-9.68s-3.77-4.81-6.55-6.3Zm1.51 16.85c0 3.7-1.02 6.59-3.06 8.68s-4.69 3.13-7.96 3.13-5.84-1.04-7.88-3.13-3.06-4.98-3.06-8.68v-.65c0-3.7 1.02-6.59 3.06-8.68s4.67-3.13 7.88-3.13 5.98 1.04 7.99 3.13c2.02 2.09 3.02 4.98 3.02 8.68v.65ZM449.23 314.68c-2.47-1.44-5.2-2.16-8.17-2.16-3.46 0-6.11.62-7.96 1.87-1.85 1.25-3.23 2.66-4.14 4.25h-1.15v-5.11h-7.27v47.51h7.42V344.2h1.15c.58.96 1.34 1.88 2.3 2.77.96.89 2.23 1.62 3.82 2.2 1.58.58 3.53.86 5.83.86 2.98 0 5.71-.72 8.21-2.16 2.5-1.44 4.49-3.52 5.98-6.23 1.49-2.71 2.23-5.99 2.23-9.83v-1.08c0-3.84-.76-7.12-2.27-9.83s-3.5-4.79-5.98-6.23Zm.76 16.92c0 3.84-1.03 6.79-3.1 8.86-2.06 2.06-4.73 3.1-7.99 3.1s-5.8-1.03-7.88-3.1c-2.09-2.06-3.13-5.01-3.13-8.86v-.65c0-3.79 1.04-6.72 3.13-8.78 2.09-2.06 4.72-3.1 7.88-3.1s5.87 1.03 7.96 3.1c2.09 2.06 3.13 4.99 3.13 8.78v.65ZM220.75 295.96h11.1v-6.26h-8.73c-1.34 0-2.02-.72-2.02-2.16v-20.81h10.58v-6.26H221.1v-8.57h-3.07l-4.35 6.52v30.42c0 2.16.64 3.89 1.91 5.18s2.99 1.94 5.15 1.94ZM244.3 294.71c2.69 1.51 5.83 2.27 9.43 2.27 3.21 0 5.86-.5 7.92-1.51 2.06-1.01 3.73-2.26 5-3.74 1.27-1.49 2.24-2.9 2.92-4.25l-6.12-3.17c-.77 1.63-1.86 3.07-3.28 4.32-1.42 1.25-3.52 1.87-6.3 1.87-2.98 0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3-2.57-1.51-5.56-2.27-8.96-2.27s-6.59.76-9.25 2.27-4.74 3.65-6.23 6.41c-1.49 2.76-2.23 5.99-2.23 9.68v.86c0 3.65.76 6.85 2.27 9.61s3.61 4.9 6.3 6.41Zm2.27-26.42c1.75-1.51 4.02-2.27 6.8-2.27s5.04.76 6.77 2.27c1.73 1.51 2.69 3.61 2.88 6.3h-19.66c.38-2.69 1.45-4.79 3.2-6.3ZM296.45 293.45c.77-.96 1.34-1.8 1.73-2.52h1.08v.22c0 1.49.53 2.66 1.58 3.53 1.06.86 2.42 1.3 4.1 1.3h4.76v-6.19h-2.25c-1.34 0-2.02-.72-2.02-2.16v-14.62c0-4.32-1.32-7.66-3.96-10.01-2.64-2.35-6.26-3.53-10.87-3.53-2.98 0-5.52.48-7.63 1.44-2.11.96-3.8 2.22-5.08 3.78-1.27 1.56-2.2 3.3-2.77 5.22l6.91 2.23c.43-1.92 1.32-3.48 2.66-4.68 1.34-1.2 3.29-1.8 5.83-1.8s4.51.62 5.76 1.87 1.87 2.91 1.87 4.97v2.3h-10.8c-2.59 0-4.91.41-6.95 1.22-2.04.82-3.65 2.03-4.82 3.64-1.18 1.61-1.76 3.64-1.76 6.08s.59 4.44 1.76 6.12c1.18 1.68 2.76 2.95 4.75 3.82 1.99.86 4.26 1.3 6.8 1.3s4.42-.35 5.9-1.04c1.49-.7 2.62-1.52 3.38-2.48Zm-13.32-4.03c-1.25-.96-1.87-2.26-1.87-3.89s.6-2.87 1.8-3.71c1.2-.84 2.78-1.26 4.75-1.26h10.37v.72c0 2.98-.91 5.32-2.74 7.02-1.82 1.7-4.22 2.56-7.2 2.56-2.16 0-3.86-.48-5.11-1.44ZM358.78 261.3c-1.78-.94-3.82-1.4-6.12-1.4-2.88 0-5.1.55-6.66 1.66-1.56 1.1-2.75 2.47-3.56 4.1h-1.15c-.82-1.68-2.03-3.06-3.64-4.14s-3.73-1.62-6.37-1.62-4.56.48-6.05 1.44c-1.49.96-2.57 2.06-3.24 3.31h-1.15v-4.18h-7.27v35.5h7.42V274.8c0-2.78.7-4.92 2.09-6.41 1.39-1.49 3.24-2.23 5.54-2.23 2.16 0 3.83.59 5 1.76 1.17 1.18 1.76 2.84 1.76 5v23.04h7.42v-21.17c0-2.78.7-4.92 2.09-6.41 1.39-1.49 3.24-2.23 5.54-2.23 2.16 0 3.83.59 5 1.76 1.18 1.18 1.76 2.84 1.76 5v23.04h7.42v-23.62c0-2.74-.53-5.03-1.58-6.88-1.06-1.85-2.47-3.24-4.25-4.18ZM422.64 277.68c0-3.74-.79-6.97-2.38-9.68s-3.77-4.81-6.55-6.3c-2.79-1.49-5.95-2.23-9.5-2.23s-6.71.75-9.47 2.23c-2.76 1.49-4.93 3.59-6.52 6.3s-2.38 5.94-2.38 9.68v1.08c0 3.74.79 6.98 2.38 9.72 1.58 2.74 3.75 4.84 6.52 6.3 2.76 1.46 5.92 2.2 9.47 2.2s6.72-.73 9.5-2.2c2.78-1.46 4.97-3.56 6.55-6.3 1.58-2.74 2.38-5.98 2.38-9.72v-1.08Zm-7.42.86c0 3.7-1.02 6.59-3.06 8.68s-4.69 3.13-7.96 3.13-5.84-1.04-7.88-3.13-3.06-4.98-3.06-8.68v-.65c0-3.7 1.02-6.59 3.06-8.68s4.67-3.13 7.88-3.13 5.98 1.04 7.99 3.13c2.02 2.09 3.02 4.98 3.02 8.68v.65ZM451.98 262.17c-2.09-1.2-4.48-1.8-7.16-1.8l-9.97.1h-7.27v35.5H435v-29.13l7.67-.13c2.69 0 4.8.73 6.34 2.2 1.54 1.46 2.3 3.73 2.3 6.8v20.26h7.42v-20.84c0-3.07-.6-5.7-1.8-7.88-1.2-2.18-2.84-3.88-4.93-5.08ZM490.44 261.73c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59.76-9.25 2.27-4.74 3.65-6.23 6.41c-1.49 2.76-2.23 5.99-2.23 9.68v.86c0 3.65.76 6.85 2.27 9.61s3.61 4.9 6.3 6.41c2.69 1.51 5.83 2.27 9.43 2.27 3.21 0 5.86-.5 7.92-1.51 2.06-1.01 3.73-2.26 5-3.74 1.27-1.49 2.24-2.9 2.92-4.25l-6.12-3.17c-.77 1.63-1.86 3.07-3.28 4.32-1.42 1.25-3.52 1.87-6.3 1.87-2.98 0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04 12.85c.38-2.69 1.45-4.79 3.2-6.3 1.75-1.51 4.02-2.27 6.8-2.27s5.04.76 6.77 2.27c1.73 1.51 2.69 3.61 2.88 6.3h-19.66ZM488.51 314.79c-2.57-1.51-5.56-2.27-8.96-2.27s-6.59.76-9.25 2.27-4.74 3.65-6.23 6.41c-1.49 2.76-2.23 5.99-2.23 9.68v.86c0 3.65.76 6.85 2.27 9.61s3.61 4.9 6.3 6.41c2.69 1.51 5.83 2.27 9.43 2.27 3.21 0 5.86-.5 7.92-1.51 2.06-1.01 3.73-2.26 5-3.74 1.27-1.49 2.24-2.9 2.92-4.25l-6.12-3.17c-.77 1.63-1.86 3.07-3.28 4.32-1.42 1.25-3.52 1.87-6.3 1.87-2.98 0-5.46-.92-7.45-2.77-1.99-1.85-3.04-4.33-3.13-7.45h27.29v-2.81c0-3.6-.72-6.74-2.16-9.43-1.44-2.69-3.44-4.79-6.01-6.3Zm-19.04 12.85c.38-2.69 1.45-4.79 3.2-6.3 1.75-1.51 4.02-2.27 6.8-2.27s5.04.76 6.77 2.27c1.73 1.51 2.69 3.61 2.88 6.3h-19.66ZM550.77 333.04c-1.22-1.44-2.89-2.54-5-3.31s-4.44-1.37-6.98-1.8l-2.52-.43c-1.92-.33-3.45-.84-4.57-1.51-1.13-.67-1.69-1.73-1.69-3.17 0-1.34.58-2.39 1.73-3.13s2.74-1.12 4.75-1.12 3.79.44 5.18 1.33c1.39.89 2.3 2.41 2.74 4.57l6.91-1.94c-.77-3.07-2.44-5.51-5-7.31-2.57-1.8-5.84-2.7-9.83-2.7s-7.44.92-9.94 2.77c-2.5 1.85-3.74 4.45-3.74 7.81 0 2.26.58 4.1 1.73 5.54 1.15 1.44 2.71 2.57 4.68 3.38 1.97.82 4.15 1.44 6.55 1.87l2.45.43c2.35.43 4.13.98 5.33 1.66 1.2.67 1.8 1.73 1.8 3.17s-.64 2.62-1.91 3.53c-1.27.91-3.08 1.37-5.44 1.37-1.58 0-3.06-.24-4.43-.72a7.413 7.413 0 0 1-3.42-2.45c-.91-1.15-1.56-2.71-1.94-4.68l-6.91 1.66c.67 4.08 2.5 7.13 5.47 9.14 2.98 2.02 6.72 3.02 11.23 3.02s8.02-.98 10.66-2.95c2.64-1.97 3.96-4.73 3.96-8.28 0-2.4-.61-4.32-1.84-5.76ZM503.96 314.46c-1.25 1.3-1.87 3.02-1.87 5.18v29.38h7.42v-27.94c0-1.44.7-2.16 2.09-2.16h7.32v-6.41h-9.7c-2.25 0-4.01.65-5.26 1.94ZM161.38 228.15c-12.4-11.52-29.08-17.28-50.06-17.28s-37.66 5.76-50.06 17.28c-12.4 11.52-18.59 28.01-18.59 49.46v40.05c0 21.45 6.2 37.94 18.59 49.46 12.4 11.52 29.08 17.28 50.06 17.28s37.66-5.76 50.06-17.28c12.4-11.52 18.59-28.01 18.59-49.46v-40.05c0-21.45-6.2-37.94-18.59-49.46Zm-40.19 39.91-13.68 20.47v2.32h13.68v60.06h-19.5v-82.86H76.5v-16.71h69.89v16.71h-25.2Z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex w-full items-center justify-end">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                className={cn(
                                    open && "navbarTogglerActive",
                                    "absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                                )}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
                            </button>
                            <nav
                                className={`fixed left-0 top-0 z-[9999] h-screen w-screen rounded-lg bg-background py-5 shadow lg:static lg:block lg:h-auto lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none ${
                                    !open && "hidden"
                                } `}
                            >
                                <button
                                    onClick={() => setOpen(false)}
                                    className="font-mediu absolute right-8 top-8 size-16 rounded text-3xl text-foreground hover:bg-foreground/10 lg:hidden"
                                >
                                    X
                                </button>
                                <ul className="lg:height-auto flex size-full flex-col items-center justify-center lg:w-auto lg:max-w-none lg:flex-row lg:items-start lg:justify-start lg:bg-transparent lg:py-0 lg:shadow-none">
                                    <ListItem>
                                        <LinkItem current={path} NavLink="/">
                                            Home
                                        </LinkItem>
                                    </ListItem>
                                    <ListItem>
                                        <LinkItem current={path} dropdown={true} NavLink="/services">
                                            Leistungen
                                        </LinkItem>
                                        <Dropdown>
                                            <DropdownItem
                                                dropdownLink="/services"
                                                dropdownText="Software Engineering"
                                            />
                                            <DropdownItem dropdownLink="/services" dropdownText="AI & Data Analytics" />
                                            <DropdownItem
                                                dropdownLink="/services"
                                                dropdownText="Strategy & Transformation"
                                            />
                                        </Dropdown>
                                    </ListItem>
                                    <ListItem>
                                        <LinkItem current={path} NavLink="/culture">
                                            Kultur
                                        </LinkItem>
                                    </ListItem>
                                    <ListItem>
                                        <LinkItem current={path} NavLink="/blog">
                                            Blog
                                        </LinkItem>
                                    </ListItem>
                                    <ListItem>
                                        <LinkItem current={path} NavLink="/career">
                                            Karriere
                                        </LinkItem>
                                    </ListItem>
                                    <ListItem>
                                        <LinkItem current={path} NavLink="/contact">
                                            Kontakt
                                        </LinkItem>
                                    </ListItem>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </Section>
        </header>
    )
}

export default Navbar8

const ListItem = ({ children }: { children: ReactNode | ReactNode[] }) => {
    const [subMenu, setSubMenu] = useState(true)

    const childWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child) && "props" in child) {
            return React.cloneElement(child as React.ReactElement<any>, {
                subMenu: subMenu,
                setSubMenu: setSubMenu
            })
        }
        return child
    })

    return <li className="submenu-item group relative lg:ml-12">{childWithProps}</li>
}

const LinkItem = ({
    current,
    children,
    NavLink,
    subMenu,
    setSubMenu,
    dropdown = false
}: {
    current: string
    children: React.ReactNode
    NavLink: string
    subMenu?: boolean
    setSubMenu?: React.Dispatch<React.SetStateAction<boolean>>
    dropdown?: boolean
}) => {
    const handleClick = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setSubMenu?.(!subMenu)
    }

    return (
        <Link
            href={NavLink}
            onClick={dropdown ? handleClick : () => {}}
            className={cn(
                "relative flex px-6 py-2 text-5xl font-medium text-foreground hover:underline lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-base",
                current === NavLink && "underline",
                dropdown &&
                    "after:absolute after:-right-2 after:top-1/2 after:mt-[-2px] after:h-4 after:w-4 after:translate-y-[-50%] after:rotate-45 after:border-b-4 after:border-r-4 after:border-current lg:after:right-0 lg:after:h-2 lg:after:w-2 lg:after:border-b-2 lg:after:border-r-2"
            )}
        >
            {children}
        </Link>
    )
}

const Dropdown = ({ children, subMenu }: { children: React.ReactNode; subMenu?: boolean }) => {
    return (
        <div
            className={`relative rounded-lg border-foreground bg-background px-4 transition-all group-hover:opacity-100 lg:invisible lg:absolute lg:top-[115%] lg:w-[250px] lg:border lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${subMenu ? "hidden lg:block" : "flex flex-col items-center lg:block"}`}
        >
            {children}
        </div>
    )
}

const DropdownItem = ({ dropdownLink, dropdownText }: { dropdownLink: string; dropdownText: string }) => {
    return (
        <Link
            href={dropdownLink}
            className="block rounded px-4 py-[10px] text-xl font-medium text-foreground hover:underline lg:text-sm"
        >
            {dropdownText}
        </Link>
    )
}
