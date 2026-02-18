import ButtonNew from "@/components/atoms/ButtonNew"
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
    rightTitle: string
    rightDescription: string
    rightButtonLabel?: string
    rightButtonHref?: string
    className?: string
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
    className
}: FeaturedStoryProps) {
    return (
        <section className={cn("flex gap-3 lg:h-225", className)}>
            {/* Left: green info card */}
            <div className="bg-primary-soft flex flex-1 flex-col gap-16.5 rounded-xl p-20">
                <div className="flex flex-col gap-11">
                    <Image
                        src={logoUrl}
                        alt={logoAlt}
                        width={logoWidth}
                        height={logoHeight}
                        className="h-auto brightness-0"
                    />
                    <h2 className="font-gteradisplay text-h2 max-w-146 text-black">{title}</h2>
                    <p className="text-medium max-w-119 text-black">{description}</p>
                    <ButtonNew label={buttonLabel} variant="light" href={buttonHref} />
                </div>
            </div>

            {/* Right: image card with gradient overlay */}
            <div className="relative flex flex-1 flex-col items-start justify-between rounded-xl px-15 py-20">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-xl">
                    <Image src={backgroundImage} alt="" fill className="rounded-xl object-cover" />
                    <div
                        className="absolute inset-0 rounded-xl mix-blend-multiply"
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(70, 255, 173, 0) 12%, rgb(13, 49, 33) 72%)"
                        }}
                    />
                </div>

                {/* Logo */}
                {rightLogoUrl && (
                    <div className="relative z-10">
                        <Image src={rightLogoUrl} alt={rightLogoAlt || ""} width={87} height={15} className="h-auto" />
                    </div>
                )}

                {/* Content */}
                <div className="gap-padding-md relative z-10 flex w-full flex-col">
                    <h3 className="font-gteradisplay text-h3 text-white">{rightTitle}</h3>
                    <p className="text-small text-white-soft">{rightDescription}</p>
                    <ButtonNew label={rightButtonLabel} variant="light" href={rightButtonHref} />
                </div>
            </div>
        </section>
    )
}
