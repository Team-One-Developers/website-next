import cn from "@/utils/cn"

export default function HorizontalDivider({ className }: { className?: string }) {
    return <div className={cn("border-t1-black/30 w-full border-b", className)} />
}
