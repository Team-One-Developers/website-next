import cn from "@/lib/cn"

interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    maxWidthContent?: boolean
}

export const Section = ({ className, children, maxWidthContent = true, ...rest }: SectionProps) => {
    return (
        <section
            className={cn("mx-auto px-4 py-12 md:px-8 md:py-16", maxWidthContent && "max-w-[1920px]", className)}
            {...rest}
        >
            {children}
        </section>
    )
}
