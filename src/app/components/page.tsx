import { PageLayout } from "@/components/layout/PageLayout"
import { PAGE_THEME } from "@/constants"
import { client } from "@/sanity/lib/client"
import { QUERY_ALL_CAREERS } from "@/sanity/queries"
import { QUERY_ALL_CAREERSResult } from "@/sanity/types"
import fs from "fs"
import { Metadata } from "next"
import path from "path"

export const metadata: Metadata = {
    title: "Components",
    description: "All Tailgrid Components showcased.",
    // dont index this page
    robots: {
        index: false,
        follow: false
    }
}

const Components = async () => {
    const careers: QUERY_ALL_CAREERSResult = await client.fetch(
        QUERY_ALL_CAREERS,
        {},
        { cache: process.env.NODE_ENV === "development" ? "no-store" : "force-cache" }
    )

    const publicCareers = careers.filter((career) => career.visibility === "Public")

    const sortedCareers = publicCareers.reduce(
        (acc, career) => {
            const { division } = career
            if (division) {
                acc[division] ??= []
                acc[division].push(career)
            }
            return acc
        },
        {} as Record<string, QUERY_ALL_CAREERSResult>
    )

    const loadComponents = async () => {
        const componentsDir = path.join(process.cwd(), "src/components/tailgrid")
        const filesnamesToBeExcluded = [
            "HeaderCombined.tsx",
            "Blog.tsx",
            "BlogDetails2.tsx",
            "Breadcrumb5.tsx",
            "Footer7.tsx",
            "Navbar8.tsx"
        ]
        const filenames = fs.readdirSync(componentsDir).filter((file) => !filesnamesToBeExcluded.includes(file))

        const components = await Promise.all(
            filenames.map(async (file) => {
                const component = await import(`@/components/tailgrid/${file}`)
                return {
                    name: file.replace(/\.tsx?$/, ""),
                    Component: component.default
                }
            })
        )

        return components
    }

    const components = await loadComponents()

    return (
        <PageLayout theme={PAGE_THEME.light}>
            {components.map(({ name, Component }) => (
                <div key={name} className="">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <Component
                        {...(name === "Portfolio"
                            ? { careers: publicCareers, usedDivisions: Object.keys(sortedCareers) }
                            : {})}
                    />
                </div>
            ))}
        </PageLayout>
    )
}

export default Components
