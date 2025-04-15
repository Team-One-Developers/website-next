import cn from "@/lib/cn"

interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    maxWidthContent?: boolean
}

export const Section = ({ className, children, maxWidthContent = true, ...rest }: SectionProps) => {
    return (
        <section className={cn("mx-auto py-12 md:py-16", maxWidthContent && "container", className)} {...rest}>
            {children}
        </section>
    )
}
