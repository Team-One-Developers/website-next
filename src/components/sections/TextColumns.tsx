import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import cn from "@/utils/cn"
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
                <div className="group bg-t1-darkgray flex w-full flex-col gap-y-4 rounded-lg p-8">
                    <Typography
                        variant="h5"
                        as="div"
                        className={cn("", href && "group-hover:text-primary cursor-pointer")}
                    >
                        {title}
                    </Typography>
                    <Typography className="text-md sm:text-lg">{description}</Typography>
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
                <Typography variant="subtitle" className={cn("", bg === "primary" ? "text-t1-black" : "text-primary")}>
                    {subtitle}
                </Typography>
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
            <Typography variant="h2" className="mt-8">
                {title}
            </Typography>
            {description && <Typography className="mt-12">{description}</Typography>}
            <div className="mt-6 flex flex-wrap gap-8 lg:mt-16 lg:flex-nowrap">
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
