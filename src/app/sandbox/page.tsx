import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sandbox",
    robots: {
        index: false,
        follow: false
    }
}

const Sandbox = async () => {
    return (
        <Section className="min-h-screen py-16">
            <div className="flex w-full flex-col gap-4">
                <Typography as="h1" variant="h1">
                    H1 Überschrift
                </Typography>
                <Typography as="h2" variant="h2">
                    H2 Überschrift
                </Typography>
                <Typography as="h3" variant="h3">
                    H3 Überschrift
                </Typography>
                <Typography as="h4" variant="h4">
                    H4 Überschrift
                </Typography>
                <Typography as="h5" variant="h5">
                    H5 Überschrift
                </Typography>
                <Typography as="h6" variant="h6">
                    H6 Überschrift
                </Typography>

                <Typography variant="paragraph">Paragraph Text</Typography>

                <Typography variant="link">Link styling</Typography>
            </div>
        </Section>
    )
}

export default Sandbox
