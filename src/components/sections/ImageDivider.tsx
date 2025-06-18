import Section from "@/components/layout/Section"
import Image from "next/image"

interface ImageDividerProps {
    fullWidth?: boolean
}

export default function ImageDivider({ fullWidth = false }: ImageDividerProps) {
    return (
        <div className="bg-t1-white">
            <Section className="bg-transparent py-4 md:py-24 lg:py-32 xl:py-40" fullWidth={fullWidth}>
                <Image
                    alt="Image Banner"
                    src="/images/culture/officelife.webp"
                    className="aspect-5/2 w-full object-cover xl:rounded-sm"
                    width={1200}
                    height={480}
                />
            </Section>
        </div>
    )
}
