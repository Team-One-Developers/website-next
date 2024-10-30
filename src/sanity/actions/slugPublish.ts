import { slugify } from "@/lib/slugify"
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
                const title = props.draft!.title

                const slug = slugify(title)
                const path = `${props.type === "blog" ? "/blog" : "/career/job"}/${slug}`

                await patch.execute([{ set: { slug: { current: slug }, path } }])
                originalResult.onHandle!()
            }
        }
    }
    return AsyncPublishAction
}
