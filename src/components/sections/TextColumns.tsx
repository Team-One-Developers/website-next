import Section from "@/components/layout/Section"
import cn from "@/lib/cn"
import Link from "next/link"
import React from "react"

export interface TextColumnsProps {
    title: string
    subtitle: string
    description?: string
    link: {
        href: string
        label: string
    }
    columns: {
        title: string
        description: string
        href?: string
    }[]
    divider?: boolean
    bg?: "dark" | "primary"
}

export const TextColumns = ({ title, subtitle, description, link, columns, divider = true, bg }: TextColumnsProps) => {
    const Divider = () => {
        return <div className="border-t1-white hidden scale-y-80 border-l opacity-50 lg:block"></div>
    }

    const Block = ({ title, description, href }: { title: string; description: string; href?: string }) => {
        const Content = () => {
            return (
                <div className="group flex w-full flex-col gap-y-4">
                    <h3
                        className={cn(
                            "font-spacegrotesk text-xl font-extrabold uppercase",
                            href && "group-hover:text-primary cursor-pointer"
                        )}
                    >
                        {title}
                    </h3>
                    <p className="">{description}</p>
                </div>
            )
        }

        return href ? (
            <Link href={href}>
                <Content />
            </Link>
        ) : (
            <Content />
        )
    }

    return (
        <Section
            className={cn(
                "bg-t1-black py-16 lg:py-36",
                bg === "primary" ? "bg-primary text-t1-black" : "bg-t1-black text-t1-white"
            )}
        >
            <div className="flex w-full justify-between">
                <p className={cn("text-lg", bg === "primary" ? "text-t1-black" : "text-primary")}>{subtitle}</p>
                <div className="">
                    <Link
                        href={link.href}
                        className={cn("", bg === "primary" ? "hover:font-semibold" : "hover:text-primary")}
                    >
                        {link.label}
                        <span aria-hidden="true" className="ml-2">
                            →
                        </span>
                    </Link>
                </div>
            </div>
            <h2 className="font-spacegrotesk mt-8 text-3xl font-bold uppercase sm:text-5xl">{title}</h2>
            {description && <p className="mt-12">{description}</p>}
            <div className="mt-24 flex flex-wrap gap-8 lg:mt-36 lg:flex-nowrap">
                {columns.map((column, index) => (
                    <React.Fragment key={index}>
                        <Block title={column.title} description={column.description} href={column.href} />
                        {divider && index < columns.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </div>
        </Section>
    )
}

export default TextColumns
