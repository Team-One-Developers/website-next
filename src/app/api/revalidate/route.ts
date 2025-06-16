import { parseBody } from "next-sanity/webhook"
import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

/*
    nice starting point: https://victoreke.com/blog/sanity-webhooks-and-on-demand-revalidation-in-nextjs
*/
export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<{
            _type: string
            slug?: string | undefined
        }>(req, process.env.SANITY_HOOK_SECRET)

        if (!isValidSignature) {
            console.log("/revalidate triggered with invalid signature")
            return new Response("Error", { status: 404 })
        }

        if (
            !body?.slug ||
            !body._type ||
            (body._type !== "blog" && body._type !== "career" && body._type !== "leadcapture")
        ) {
            return new Response("Bad Request", { status: 400 })
        }

        if (body._type === "leadcapture") {
            const isDraftSlug = body.slug.startsWith("draft-")

            // revalidate the draft and non draft version in case the visibility changed
            const specificPath = `/${isDraftSlug ? body.slug.slice(6) : body.slug}`
            const specificPathDraft = `/${isDraftSlug ? body.slug : "draft-" + body.slug}`

            await revalidatePath(specificPath)
            await revalidatePath(specificPathDraft)
        }

        if (body._type === "blog" || body._type === "career") {
            const isDraftSlug = body.slug.startsWith("draft-")

            const overviewPagePath = `/${body._type === "blog" ? "blog" : "career"}`

            // revalidate the draft and non draft version in case the visibility changed
            const specificPath = `/${body._type === "blog" ? "blog" : "career/job"}/${isDraftSlug ? body.slug.slice(6) : body.slug}`
            const specificPathDraft = `/${body._type === "blog" ? "blog" : "career/job"}/${isDraftSlug ? body.slug : "draft-" + body.slug}`

            await revalidatePath(specificPath)
            await revalidatePath(overviewPagePath)
            await revalidatePath(specificPathDraft)
        }

        // Vercel logging
        console.log(`/revalidate triggered succesfully. Revalidated for slug ${body.slug}`)

        return NextResponse.json({
            status: 200
        })
    } catch (error: unknown) {
        console.error(error)
        if (error && typeof error === "object" && "message" in error) {
            return new Response((error as { message: string }).message, { status: 500 })
        }
        return new Response("Unknown error", { status: 500 })
    }
}
