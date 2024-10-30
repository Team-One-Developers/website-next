import {
    Blog,
    Career,
    QUERY_ALL_BLOGSResult,
    QUERY_ALL_CAREERSResult,
    QUERY_SPECIFIC_BLOGResult,
    QUERY_SPECIFIC_CAREERResult
} from "@/sanity/types"
import { intersection } from "lodash"
import { Car } from "schema-dts"

export const mostRelatedBlogs = ({
    allItems,
    currentItem,
    amount = 3
}: {
    allItems: QUERY_ALL_BLOGSResult
    currentItem: QUERY_SPECIFIC_BLOGResult
    amount?: number
}) => {
    if (!currentItem || !allItems || !currentItem.slug?.current) return undefined

    const mostRelatedItems: any = []

    allItems
        // first filter out the item we are currently on
        .filter((c) => c.slug?.current !== currentItem.slug?.current)
        // now find the similarities between every other item and the current item
        .forEach((c) => {
            mostRelatedItems.push({
                ...c,
                // number of similar tags
                score: intersection(c.category, currentItem.category).length
            })
        })

    // sort it based on the score and only keep the best `amount` results
    mostRelatedItems.sort((a: any, b: any) => b.score - a.score).splice(amount)

    return mostRelatedItems
}

export const mostRelatedCareers = ({
    allItems,
    currentItem,
    amount = 3
}: {
    allItems: QUERY_ALL_CAREERSResult
    currentItem: QUERY_SPECIFIC_CAREERResult
    amount?: number
}) => {
    if (!currentItem || !allItems || !currentItem.slug?.current) return undefined

    const mostRelatedItems: any = []

    allItems
        // first filter out the item we are currently on
        .filter((c) => c.slug?.current !== currentItem.slug?.current)
        // now find the similarities between every other item and the current item
        .forEach((c) => {
            mostRelatedItems.push({
                ...c,
                // number of similar tags
                score: intersection(c.division, currentItem.division).length
            })
        })

    // sort it based on the score and only keep the best `amount` results
    mostRelatedItems.sort((a: any, b: any) => b.score - a.score).splice(amount)

    return mostRelatedItems
}
