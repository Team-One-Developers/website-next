import cn from "@/utils/cn"

interface EyebrowProps {
    label: string
    size?: "small" | "xsmall" | "medium"
    showDot?: boolean
    className?: string
}

const sizeClasses: Record<NonNullable<EyebrowProps["size"]>, string> = {
    xsmall: "text-xsmall",
    small: "text-small",
    medium: "text-medium"
}

export default function Eyebrow({ label, size = "xsmall", showDot = true, className }: EyebrowProps) {
    return (
        <div className={cn("gap-xs flex items-center py-0.5", className)}>
            {showDot && <div className="bg-primary size-3.5 shrink-0 rounded-full" />}
            <span className={cn("font-gteratext text-black", sizeClasses[size])}>{label}</span>
        </div>
    )
}
