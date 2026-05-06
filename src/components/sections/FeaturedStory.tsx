import Button from "@/components/atoms/Button"
import ScrollReveal from "@/components/atoms/ScrollReveal"
import { BLUR_DATA_URL } from "@/constants/blur"
import cn from "@/utils/cn"
import Image from "next/image"

interface FeaturedStoryProps {
    /** Left card */
    logoUrl: string
    logoAlt: string
    logoWidth: number
    logoHeight: number
    title: string
    description: string
    buttonLabel?: string
    buttonHref?: string
    /** Right card */
    backgroundImage: string
    rightLogoUrl?: string
    rightLogoAlt?: string
    rightTitle?: string
    rightDescription?: string
    rightButtonLabel?: string
    rightButtonHref?: string
    className?: string
    animate?: boolean
}

export default function FeaturedStory({
    logoUrl,
    logoAlt,
    logoWidth,
    logoHeight,
    title,
    description,
    buttonLabel = "Case study",
    buttonHref,
    backgroundImage,
    rightLogoUrl,
    rightLogoAlt,
    rightTitle,
    rightDescription,
    rightButtonLabel = "Case study",
    rightButtonHref,
    className,
    animate
}: FeaturedStoryProps) {
    const hasRightOverlay = rightTitle && rightDescription

    return (
        <ScrollReveal
            stagger
            staggerColumns={0}
            staggerStep={0.2}
            animate={animate}
            as="section"
            className={cn("flex flex-col gap-3 lg:h-225 lg:flex-row", className)}
        >
            {/* Left: green info card */}
            <div className="bg-primary-soft flex flex-1 flex-col gap-16.5 rounded-xl p-8 lg:p-20">
                <div className="flex flex-col gap-11">
                    <Image
                        src={logoUrl}
                        alt={logoAlt}
                        width={logoWidth}
                        height={logoHeight}
                        className="h-auto brightness-0"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                    />
                    <h2 className="font-gteradisplay text-h2 max-w-146 text-black">{title}</h2>
                    <p className="text-medium max-w-119 whitespace-pre-line text-black">{description}</p>
                    <Button label={buttonLabel} variant="dark" href={buttonHref} />
                </div>
            </div>

            {/* Right: image card */}
            <div className="relative flex min-h-80 flex-1 flex-col items-start justify-between overflow-hidden rounded-xl px-8 py-10 lg:min-h-0 lg:px-15 lg:py-20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl">
                    <Image
                        src={backgroundImage}
                        alt=""
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="rounded-xl object-cover"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                    />
                    {hasRightOverlay && (
                        <div
                            className="absolute inset-0 rounded-xl mix-blend-multiply"
                            style={{
                                backgroundImage:
                                    "linear-gradient(180deg, rgba(70, 255, 173, 0) 12%, rgb(13, 49, 33) 72%)"
                            }}
                        />
                    )}
                </div>

                {/* Logo */}
                {rightLogoUrl && hasRightOverlay && (
                    <div className="relative z-10">
                        <Image
                            src={rightLogoUrl}
                            alt={rightLogoAlt || ""}
                            width={87}
                            height={15}
                            className="h-auto"
                            placeholder="blur"
                            blurDataURL={BLUR_DATA_URL}
                        />
                    </div>
                )}

                {/* Content */}
                {hasRightOverlay && (
                    <div className="gap-padding-md relative z-10 flex w-full flex-col">
                        <h3 className="font-gteradisplay text-h3 text-white">{rightTitle}</h3>
                        <p className="text-small text-white-soft">{rightDescription}</p>
                        <Button label={rightButtonLabel} variant="light" href={rightButtonHref} />
                    </div>
                )}
            </div>
        </ScrollReveal>
    )
}
