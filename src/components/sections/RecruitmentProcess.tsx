import Eyebrow from "@/components/atoms/Eyebrow"
import cn from "@/utils/cn"
import Image from "next/image"

interface ProcessStep {
    title: string
    description: string
    image: string
}

interface RecruitmentProcessProps {
    title: string
    eyebrowLabel: string
    steps: ProcessStep[]
    className?: string
}

export default function RecruitmentProcess({ title, eyebrowLabel, steps, className }: RecruitmentProcessProps) {
    return (
        <section
            className={cn(
                "gap-grid-gutter px-grid-safezone relative flex flex-col rounded-lg py-20 lg:flex-row",
                className
            )}
        >
            {/* Green background */}
            <div className="bg-primary-soft absolute inset-x-0 inset-y-0 -mx-[calc((100vw-100%)/2)] rounded-4xl" />

            {/* Left: sticky sidebar */}
            <div className="relative top-0 flex w-full shrink-0 flex-col gap-10 pt-20 lg:sticky lg:w-[570px]">
                <h2 className="font-gteradisplay text-h2 max-w-[457px] text-black">{title}</h2>
                <div className="flex flex-col gap-5">
                    <Eyebrow label={eyebrowLabel} size="small" />
                    {steps.map((step, i) => (
                        <span key={`step-nav-${i}`} className="text-small text-black">
                            {step.title}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right: stacked image blocks */}
            <div className="relative flex w-full flex-col gap-35 lg:w-[570px]">
                {steps.map((step, i) => (
                    <div key={`step-${i}`} className="gap-lg flex flex-col items-center">
                        <div className="relative aspect-[340.25/255.19] w-full overflow-hidden rounded-lg">
                            <Image src={step.image} alt={step.title} fill className="object-cover" />
                        </div>
                        <div className="gap-sm flex flex-col px-8">
                            <h4 className="font-gteradisplay text-h4 text-black">{step.title}</h4>
                            <p className="text-xsmall text-black/60">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
