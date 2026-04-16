import Button from "@/components/atoms/Button"
import cn from "@/utils/cn"
import Image from "next/image"

interface EventCardHorizontalProps {
    title: string
    description: string
    dateLocation: string
    speakerName?: string
    speakerRole?: string
    speakerImage: string
    speakerBadge?: string
    buttonLabel?: string
    href?: string
    className?: string
}

export default function EventCardHorizontal({
    title,
    description,
    dateLocation,
    speakerName,
    speakerRole,
    speakerImage,
    speakerBadge = "Speaker",
    buttonLabel = "Mehr Erfahren",
    href,
    className
}: EventCardHorizontalProps) {
    return (
        <div className={cn("gap-grid-gutter flex flex-col items-center md:flex-row", className)}>
            {/* Square image with gradient overlay + speaker bar */}
            <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl md:w-1/2">
                <Image src={speakerImage} alt={speakerName ?? title} fill sizes="(max-width: 759px) 100vw, 50vw" className="object-cover" />
                {/* Green gradient overlay */}
                <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{
                        backgroundImage: "linear-gradient(160deg, rgba(255, 255, 255, 0) 6%, rgb(70, 255, 173) 69%)"
                    }}
                />
                {/* Speaker info bar */}
                {speakerName && (
                    <div className="inset-x-padding-lg bottom-padding-lg absolute">
                        <div className="flex items-center justify-between rounded-xl bg-[rgba(0,255,172,0.17)] px-7.5 py-5 backdrop-blur-[27px]">
                            <div className="flex flex-col">
                                <span className="text-small text-white">{speakerName}</span>
                                {speakerRole && <span className="text-xsmall text-white/70">{speakerRole}</span>}
                            </div>
                            <span className="bg-primary-soft rounded-[60px] px-4 text-[14px] leading-7.25 whitespace-nowrap text-white">
                                {speakerBadge}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Content side */}
            <div className="gap-lg flex flex-1 flex-col">
                <span className="text-xsmall text-black">{dateLocation}</span>
                <div className="gap-sm flex flex-col">
                    <h3 className="font-gteradisplay text-h3 text-black">{title}</h3>
                    <p className="text-xsmall text-black-soft">{description}</p>
                </div>
                <Button label={buttonLabel} variant="outline" href={href} />
            </div>
        </div>
    )
}
