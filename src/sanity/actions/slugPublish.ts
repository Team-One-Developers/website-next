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
                // user adjusted the slug manually, so we trust them
                if (props.published!.slug?.current !== props.draft!.slug?.current) {
                    // @ts-expect-error no time to fix this right now
                    const slug = props.draft!.slug?.current as string
                    const path = `${props.type === "blog" ? "/blog" : props.type === "career" ? "/career/job" : ""}/${slug}`
                    const link = `https://www.team-one.de${path}`

                    await patch.execute([{ set: { slug: { current: slug }, path, link } }])
                    originalResult.onHandle!()
                } else {
                    const title = props.draft!.title as string
                    const draftPrefix = props.draft!.visibility === "Draft" ? "draft-" : ""

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
