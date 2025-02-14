import { Editor } from "@/app/creator/_partials/Editor"
import { PageLayout } from "@/components/layout/PageLayout"
import { Section } from "@/components/layout/Section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Creator",
    description: "Creation tool for social media assets",
    robots: "noindex, nofollow"
}

const Creator = () => {
    return (
        <PageLayout ticker={false}>
            <Section>
                <Editor />
            </Section>
        </PageLayout>
    )
}

export default Creator
