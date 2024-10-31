import { slugify } from "@/lib/slugify"
import { useDocumentOperation } from "sanity"

export function createAsyncPublishAction(originalAction, context) {
    // const client = context.getClient()
    const AsyncPublishAction = (props) => {
        const originalResult = originalAction(props)
        const { patch } = useDocumentOperation(props.id, props.type)

        return {
            ...originalResult,
            onHandle: async () => {
                console.log("props")
                console.log(props)
                const title = props.draft.title

                const slug = slugify(title)
                const path = `${props.type === "blog" ? "/blog" : "/career/job"}/${slug}`

                await patch.execute([{ set: { slug: { current: slug }, path } }])
                originalResult.onHandle()
            }
        }
    }
    return AsyncPublishAction
}
