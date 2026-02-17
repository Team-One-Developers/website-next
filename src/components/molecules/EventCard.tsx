import ButtonNew from "@/components/atoms/ButtonNew"
import cn from "@/utils/cn"
import Image from "next/image"

interface EventCardProps {
    title: string
    description: string
    date: string
    speakerName: string
    speakerRole: string
    speakerImage: string
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
    speakerBadge = "Speaker",
    buttonLabel = "Mehr erfahren",
    href,
    className
}: EventCardProps) {
    return (
        <div className={cn("gap-grid-gutter flex flex-col lg:flex-row lg:items-center", className)}>
            {/* Speaker Image Card */}
            <div className="relative aspect-square flex-1 overflow-hidden rounded-lg">
                <Image src={speakerImage} alt={speakerName} fill className="object-cover" />
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                        backgroundImage: "linear-gradient(160deg, rgba(255, 255, 255, 0) 6%, rgb(70, 255, 173) 69%)"
                    }}
                />
                {/* Speaker info bar */}
                <div className="inset-x-padding-lg bottom-padding-lg absolute">
                    <div className="flex items-center justify-between rounded-lg bg-[rgba(0,255,172,0.17)] px-7.5 py-5 backdrop-blur-[27px]">
                        <div className="flex flex-col">
                            <span className="text-small text-white">{speakerName}</span>
                            <span className="text-xsmall text-white/70">{speakerRole}</span>
                        </div>
                        <span className="bg-primary-soft rounded-[60px] px-4 text-[14px] leading-7.25 text-white">
                            {speakerBadge}
                        </span>
                    </div>
                </div>
            </div>

            {/* Event Details */}
            <div className="gap-lg flex flex-1 flex-col">
                <span className="text-xsmall text-black">{date}</span>
                <div className="gap-sm flex flex-col">
                    <h3 className="font-gteradisplay text-h3 text-black">{title}</h3>
                    <p className="text-xsmall text-black-soft">{description}</p>
                </div>
                <ButtonNew label={buttonLabel} variant="outline" href={href} />
            </div>
        </div>
    )
}
