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

        if (!body?.slug || !body._type || (body._type !== "blog" && body._type !== "career")) {
            return new Response("Bad Request", { status: 400 })
        }

        const overviewPagePath = `/${body._type === "blog" ? "blog" : "career"}`
        const specificPath = `/${body._type === "blog" ? "blog" : "career/job"}/${body.slug}`

        await revalidatePath(specificPath)
        await revalidatePath(overviewPagePath)

        // Vercel logging
        console.log(`/revalidate triggered succesfully. Revalidated for slug ${body.slug}`)

        return NextResponse.json({
            status: 200
        })
    } catch (error: any) {
        console.error(error)
        return new Response(error.message, { status: 500 })
    }
}
