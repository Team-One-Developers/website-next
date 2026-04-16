import Eyebrow from "@/components/atoms/Eyebrow"
import ScrollReveal from "@/components/atoms/ScrollReveal"
import cn from "@/utils/cn"

interface StatementSectionProps {
    eyebrowLabel: string
    text: string
    className?: string
}

export default function StatementSection({ eyebrowLabel, text, className }: StatementSectionProps) {
    return (
        <ScrollReveal
            stagger
            staggerColumns={0}
            staggerStep={0.15}
            as="section"
            className={cn("gap-xl flex flex-col items-center justify-center", className)}
        >
            <Eyebrow label={eyebrowLabel} />
            <p className="font-gteradisplay text-d2 max-w-261.5 text-center text-black">{text}</p>
        </ScrollReveal>
    )
}
