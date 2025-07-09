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
            previousSlug?: string | undefined
        }>(req, process.env.SANITY_HOOK_SECRET)

        if (!isValidSignature) {
            console.log("/revalidate triggered with invalid signature")
            return new Response("Error", { status: 404 })
        }

        if (
            !body?.slug ||
            !body.previousSlug ||
            !body._type ||
            (body._type !== "blog" && body._type !== "career" && body._type !== "leadcapture")
        ) {
            return new Response("Bad Request", { status: 400 })
        }

        const slugChanged = body.previousSlug !== body.slug

        if (body._type === "leadcapture") {
            await revalidatePath(`/${body.slug}`)
            if (slugChanged) await revalidatePath(`/${body.previousSlug}`)
        }

        if (body._type === "blog" || body._type === "career") {
            const pagePath = body._type === "blog" ? "/blog" : "/career/job"
            const overviewPagePath = body._type === "blog" ? "/blog" : "/career"

            await revalidatePath(pagePath + "/" + body.slug)
            if (slugChanged) await revalidatePath(pagePath + "/" + body.previousSlug)

            await revalidatePath(overviewPagePath)
        }

        // Vercel logging
        console.log(
            `/revalidate triggered succesfully. Revalidated for slug ${body.slug}${slugChanged && ` and previous slug ${body.previousSlug}`}`
        )

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
