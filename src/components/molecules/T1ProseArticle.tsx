import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export const T1ProseArticle = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <article
            className={twMerge(
                `max-w-none w-full 
        prose-headings:font-spacegrotesk prose-headings:font-medium prose-headings:leading-110 prose-headings:mb-2 prose-headings:mt-8 prose-headings:text-inherit
        prose-h1:font-normal prose-h1:uppercase prose-h1:text-3xl prose-h1:lg:text-5xl
        prose-h2:text-2xl prose-h2:lg:text-4xl prose-h2:text-inherit 
        prose-h3:text-xl prose-h3:lg:text-3xl
        prose-h4:text-lg prose-h4:lg:text-2xl 
        prose-h5:text-base prose-h5:lg:text-xl 
        prose-h6:text-sm prose-h6:lg:text-lg 
        prose-p:text-base prose-p:font-abcdiatype prose-p:leading-140 prose-p:my-2 prose-p:text-inherit`,
                className
            )}
        >
            {children}
        </article>
    )
}
