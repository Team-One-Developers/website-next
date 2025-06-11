import Section from "@/components/layout/Section"
import Image from "next/image"

export default function ImageDivider() {
    return (
        <div className="bg-t1-white">
            <Section className="bg-transparent py-32 sm:py-40">
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
