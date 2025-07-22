import { slugify } from "@/utils/slugify"
import { DocumentActionComponent, DocumentActionProps, useDocumentOperation } from "sanity"

export function createAsyncPublishAction(originalAction: DocumentActionComponent) {
    const AsyncPublishAction = (props: DocumentActionProps) => {
        const originalResult = originalAction(props)
        const { patch } = useDocumentOperation(props.id, props.type)

        if (!originalResult || !originalResult.onHandle) {
            return originalAction
        }

        return {
            ...originalResult,
            onHandle: async () => {
                // @ts-expect-error no time to fix this right now
                const cleanSlug = props.draft!.slug?.current.replace(/^draft-/, "")
                const title = props.draft!.title as string
                const draftPrefix = props.draft!.visibility === "Draft" ? "draft-" : ""

                // custom slug? ==> if so we want to keep it
                if (cleanSlug && cleanSlug !== slugify(title)) {
                    const combinedSlug = draftPrefix + cleanSlug
                    const path = `${props.type === "blog" ? "/blog" : props.type === "career" ? "/career/job" : ""}/${combinedSlug}`
                    const link = `https://www.team-one.de${path}`

                    await patch.execute([{ set: { slug: { current: combinedSlug }, path, link } }])
                    originalResult.onHandle!()
                }
                // no custom slug, so we calculate it from the title and prefix it with draft- if needed
                else {
                    const slug = draftPrefix + slugify(title)
                    const path = `${props.type === "blog" ? "/blog" : props.type === "career" ? "/career/job" : ""}/${slug}`
                    const link = `https://www.team-one.de${path}`

                    await patch.execute([{ set: { slug: { current: slug }, path, link } }])
                    originalResult.onHandle!()
                }
            }
        }
    }
    return AsyncPublishAction
}
