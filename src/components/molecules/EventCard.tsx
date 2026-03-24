import Button from "@/components/atoms/Button"
import Tag from "@/components/atoms/Tag"
import cn from "@/utils/cn"
import Image from "next/image"

interface EventCardProps {
    title: string
    description: string
    date: string
    speakerName?: string
    speakerRole?: string
    speakerImage: string
    speakerAvatar?: string
    speakerBadge?: string
    buttonLabel?: string
    href?: string
    className?: string
}

export default function EventCard({
    title,
    description,
    date,
    speakerName,
    speakerRole,
    speakerImage,
    speakerAvatar,
    speakerBadge = "Speaker",
    buttonLabel = "Mehr Erfahren",
    href,
    className
}: EventCardProps) {
    const showSpeakerBar = speakerName || speakerRole || speakerAvatar

    return (
        <div className={cn("gap-sm row-span-5 grid grid-rows-subgrid", className)}>
            {/* Square image with gradient overlay + speaker badge */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image src={speakerImage} alt={speakerName ?? title} fill className="object-cover" />
                {/* Green gradient overlay */}
                <div
                    className="absolute inset-0 rounded-lg mix-blend-multiply"
                    style={{
                        backgroundImage: "linear-gradient(165deg, rgba(255, 255, 255, 0) 6%, rgb(70, 255, 173) 69%)"
                    }}
                />
                {/* Speaker badge bar */}
                {showSpeakerBar && (
                    <div className="gap-xs absolute inset-x-2 bottom-2 flex items-center">
                        {/* Speaker avatar */}
                        {speakerAvatar && (
                            <div className="relative h-17.75 w-29.5 shrink-0 overflow-hidden rounded-lg">
                                <Image src={speakerAvatar} alt={speakerName ?? ""} fill className="object-cover" />
                            </div>
                        )}
                        {/* Name / role / badge */}
                        <div className="flex min-w-0 flex-1 items-center justify-between rounded-lg bg-[#014527] px-6 py-3 backdrop-blur-[17px]">
                            <div className="flex flex-col">
                                {speakerName && (
                                    <span className="text-small leading-7.25 text-white">{speakerName}</span>
                                )}
                                {speakerRole && <span className="text-xxsmall text-white/60">{speakerRole}</span>}
                            </div>
                            <span className="bg-primary-soft rounded-[60px] px-3 text-[13px] leading-5.25 whitespace-nowrap text-white">
                                {speakerBadge}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Title */}
            <h3 className="font-gteradisplay text-h3 px-padding-lg pt-lg max-w-130 self-end text-black">{title}</h3>

            {/* Date tag */}
            <div className="px-padding-lg">
                <Tag label={date} />
            </div>

            {/* Description */}
            <p className="text-xsmall px-padding-lg max-w-130 text-black opacity-60">{description}</p>

            {/* Button */}
            <div className="px-padding-lg">
                <Button label={buttonLabel} variant="primary" href={href} />
            </div>
        </div>
    )
}
