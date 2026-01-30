import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.redirect(
        "https://my-tool-quest.lovable.app/shared/kurse/ca7114c8-b1a6-4220-b762-01a94199b95f",
        302
    )
}
