import { twMerge } from "tailwind-merge"

interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    maxWidthContent?: boolean
}

export const Section = ({ className, children, maxWidthContent = true, ...rest }: SectionProps) => {
    return (
        <section
            className={twMerge("py-12 px-4 md:py-16 md:px-8 mx-auto", maxWidthContent && "max-w-[1920px]", className)}
            {...rest}
        >
            {children}
        </section>
    )
}
