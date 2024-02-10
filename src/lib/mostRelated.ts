import { Blog, Career } from "contentlayer/generated"
import { intersection } from "lodash"

export const mostRelated = ({
    allItems,
    currentItem,
    amount = 3
}: {
    allItems: (Career | Blog)[]
    currentItem: Career | Blog
    amount?: number
}) => {
    const mostRelatedItems: any = []

    allItems
        // first filter out the item we are currently on
        .filter((c) => c.slugAsParams !== currentItem.slugAsParams && c.status === "PUBLISHED")
        // now find the similarities between every other item and the current item
        .forEach((c) => {
            mostRelatedItems.push({
                ...c,
                // number of similar tags
                score: intersection(c.tags, currentItem.tags).length
            })
        })

    // sort it based on the score and only keep the best 3 results
    mostRelatedItems.sort((a: any, b: any) => b.score - a.score).splice(amount)

    return mostRelatedItems
}
