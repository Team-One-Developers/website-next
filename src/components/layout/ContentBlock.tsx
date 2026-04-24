import cn from "@/utils/cn"

interface ContentBlockProps {
    children: React.ReactNode
    className?: string
    greenBg?: boolean
    id?: string
}

export default function ContentBlock({ children, className, greenBg, id }: ContentBlockProps) {
    const content = (
        <div
            id={!greenBg ? id : undefined}
            className={cn("px-grid-safezone mx-auto w-full max-w-(--max-content-width)", className)}
        >
            {children}
        </div>
    )

    if (greenBg) {
        return (
            <div id={id} className="flex justify-center">
                <div className="bg-primary-soft w-full py-20 xl:max-w-500 xl:rounded-3xl">{content}</div>
            </div>
        )
    }

    return content
}
