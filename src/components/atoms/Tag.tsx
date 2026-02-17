import cn from "@/utils/cn"

interface TagProps {
    label: string
    className?: string
}

export default function Tag({ label, className }: TagProps) {
    return (
        <span
            className={cn(
                "bg-background-soft text-xxsmall inline-flex items-center rounded-[4px] px-2 py-0.5 text-white",
                className
            )}
        >
            {label}
        </span>
    )
}
