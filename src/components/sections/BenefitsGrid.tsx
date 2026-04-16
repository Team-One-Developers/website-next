import Button from "@/components/atoms/Button"
import ScrollReveal from "@/components/atoms/ScrollReveal"
import cn from "@/utils/cn"
import Image from "next/image"

interface Benefit {
    title: string
    description: string
    iconUrl: string
}

interface BenefitsGridProps {
    benefits: Benefit[]
    cta?: {
        title: string
        description: string
        buttonLabel: string
        buttonHref: string
    }
    className?: string
}

export default function BenefitsGrid({ benefits, cta, className }: BenefitsGridProps) {
    return (
        <section className={cn("flex flex-col gap-20", className)}>
            {/* First row: 3 benefits */}
            <ScrollReveal
                stagger
                variant="shift"
                staggerStep={0.15}
                staggerColumns={3}
                className="gap-grid-gutter grid grid-cols-1 md:grid-cols-3"
            >
                {benefits.slice(0, 3).map((benefit) => (
                    <div key={benefit.title} className="gap-lg flex flex-col">
                        <Image src={benefit.iconUrl} alt={benefit.title} width={100} height={100} className="size-25" />
                        <div className="gap-xs flex flex-col">
                            <h3 className="font-gteradisplay text-h2 text-black">{benefit.title}</h3>
                            <p className="text-small text-black-soft max-w-[460px]">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </ScrollReveal>

            {/* Second row: 3 benefits */}
            <ScrollReveal
                stagger
                variant="shift"
                staggerStep={0.15}
                staggerColumns={3}
                className="gap-grid-gutter grid grid-cols-1 md:grid-cols-3"
            >
                {benefits.slice(3, 6).map((benefit) => (
                    <div key={benefit.title} className="gap-lg flex flex-col">
                        <Image src={benefit.iconUrl} alt={benefit.title} width={100} height={100} className="size-25" />
                        <div className="gap-xs flex flex-col">
                            <h3 className="font-gteradisplay text-h2 text-black">{benefit.title}</h3>
                            <p className="text-small text-black-soft max-w-[460px]">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </ScrollReveal>

            {/* Third row: remaining benefit + CTA card */}
            <ScrollReveal
                stagger
                variant="shift"
                staggerStep={0.15}
                staggerColumns={3}
                className="gap-grid-gutter grid grid-cols-1 md:grid-cols-3"
            >
                {benefits.slice(6).map((benefit) => (
                    <div key={benefit.title} className="gap-lg flex flex-col">
                        <Image src={benefit.iconUrl} alt={benefit.title} width={100} height={100} className="size-25" />
                        <div className="gap-xs flex flex-col">
                            <h3 className="font-gteradisplay text-h2 text-black">{benefit.title}</h3>
                            <p className="text-small text-black-soft max-w-[460px]">{benefit.description}</p>
                        </div>
                    </div>
                ))}

                {cta && (
                    <div className="bg-primary-soft flex flex-col items-start justify-end rounded-lg p-10">
                        <div className="gap-lg flex flex-col">
                            <div className="flex flex-col gap-6">
                                <h3 className="font-gteradisplay text-h3 text-black">{cta.title}</h3>
                                <p className="text-small text-black">{cta.description}</p>
                            </div>
                            <Button label={cta.buttonLabel} href={cta.buttonHref} variant="outline" />
                        </div>
                    </div>
                )}
            </ScrollReveal>
        </section>
    )
}
