import cn from "@/utils/cn"
import Image from "next/image"

interface AuthorInfoProps {
    name: string
    role: string
    avatarUrl: string
    className?: string
    variant?: "light" | "dark"
}

export default function AuthorInfo({ name, role, avatarUrl, className, variant = "dark" }: AuthorInfoProps) {
    return (
        <div className={cn("gap-sm flex items-center", className)}>
            <Image
                src={avatarUrl}
                alt={name}
                width={52}
                height={64}
                className="h-16 w-13 shrink-0 rounded-full object-cover"
            />
            <div className="flex flex-col">
                <span className={cn("text-[18px] leading-normal", variant === "light" ? "text-white" : "text-black")}>
                    {name}
                </span>
                <span
                    className={cn(
                        "text-[12px] leading-normal opacity-60",
                        variant === "light" ? "text-white" : "text-black"
                    )}
                >
                    {role}
                </span>
            </div>
        </div>
    )
}
