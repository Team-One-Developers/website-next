import ButtonNew from "@/components/atoms/ButtonNew"
import cn from "@/utils/cn"
import Image from "next/image"

interface StickyContactBarProps {
    text: string
    buttonLabel: string
    buttonHref: string
    imageUrl: string
    className?: string
}

export default function StickyContactBar({
    text,
    buttonLabel,
    buttonHref,
    imageUrl,
    className
}: StickyContactBarProps) {
    return (
        <div
            className={cn(
                "gap-xs px-grid-safezone mx-auto flex w-full max-w-(--max-content-width) items-center",
                className
            )}
        >
            {/* Avatar Image */}
            <Image
                src={imageUrl}
                alt=""
                width={140}
                height={93}
                className="h-23.25 w-35 shrink-0 rounded-md object-cover"
            />

            {/* Content Bar */}
            <div className="flex flex-1 items-center rounded-md bg-[#014527] px-6.25 py-5 backdrop-blur-[17px]">
                <div className="flex flex-1 items-center gap-5">
                    <p className="text-small flex-1 text-white">{text}</p>
                    <ButtonNew label={buttonLabel} href={buttonHref} variant="primary" />
                </div>
            </div>
        </div>
    )
}
