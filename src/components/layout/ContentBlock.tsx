import cn from "@/utils/cn"

export default function ContentBlock({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={cn("px-grid-safezone mx-auto w-full max-w-(--max-content-width)", className)}>{children}</div>
    )
}
