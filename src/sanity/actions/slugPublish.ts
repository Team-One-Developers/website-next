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
                const title = props.draft!.title
                const draft = props.draft!.visibility === "Draft" ? "draft-" : ""

                const slug = draft + slugify(title)
                const path = `${props.type === "blog" ? "/blog" : "/career/job"}/${slug}`
                const link = `https://www.teamonedevelopers.de${path}`

                await patch.execute([{ set: { slug: { current: slug }, path, link } }])
                originalResult.onHandle!()
            }
        }
    }
    return AsyncPublishAction
}
