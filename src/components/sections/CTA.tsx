import { LinkComponent } from "@/components/atoms/LinkComponent"
import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import cn from "@/utils/cn"
import Image from "next/image"

const PERSONS = ["paul"] as const
const THEMES = ["dark", "light"] as const

export const combinations = [
    ...PERSONS.flatMap((person) => THEMES.map((theme) => `${person}-${theme}`)),
    "none"
] as const

export const parseCombination = (combination: string): { person?: string; theme?: string } => {
    if (combination === "none") {
        return { person: undefined, theme: undefined }
    }
    const [person, theme] = combination.split("-").map((s) => s.trim())
    return { person, theme }
}

interface CTAProps {
    variant: (typeof combinations)[number]
}

export const CTA = ({ variant }: CTAProps) => {
    // person is also available but not used at this point
    const { theme } = parseCombination(variant)

    if (!theme) {
        return null
    }

    return (
        <div className={cn("w-full", theme === "dark" ? "bg-t1-black text-t1-white" : "bg-t1-white text-t1-black")}>
            <Section className={cn("bg-transparent py-24 md:py-32")}>
                <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
                    <Image
                        alt="Paul Headshot"
                        src="/images/culture/paul.png"
                        className="w-full rounded-sm sm:w-1/4"
                        width={400}
                        height={600}
                    />
                    <div className="flex w-full flex-col gap-8 sm:w-2/3">
                        <Typography variant="paragraph" className="text-2xl sm:text-3xl">
                            Die entscheidenden Fragen stellt man sich selten allein. Ein klarer Blick von außen hilft
                            oft mehr als der nächste Use Case.
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className={cn(theme === "dark" ? "text-primary" : "text-t1-black")}
                        >
                            Paul Krauss, Partner AI
                        </Typography>
                        <LinkComponent
                            href="https://meetings-eu1.hubspot.com/paul-krauss"
                            label="Let's talk"
                            className="text-t1-black w-fit md:w-fit"
                        />
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default CTA
