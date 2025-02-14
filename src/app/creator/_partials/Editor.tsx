"use client"

import Typography from "@/components/atoms/Typography"
import Icon from "@/components/molecules/Icon"
import Image from "next/image"
import { startTransition, useActionState } from "react"
import { z } from "zod"

const assetSchema = z.object({
    width: z.coerce
        .number()
        .min(600, "Eine Breite unter 600px ist nicht zu empfehlen.")
        .max(1920, "Eine Breite über 1920px ist nicht zu empfehlen."),
    height: z.coerce
        .number()
        .min(600, "Eine Höhe unter 600px ist nicht zu empfehlen.")
        .max(1920, "Eine Höhe über 1920px ist nicht zu empfehlen."),
    title: z.string().min(10, "Titel sollte mindestens 10 Zeichen lang sein").max(70, "Titel zu lang")
})

const createAsset = async (currentState: any, formData: FormData) => {
    const width = formData.get("width")
    const height = formData.get("height")
    const title = formData.get("title")

    const validatedFields = assetSchema.safeParse({
        width,
        height,
        title
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            formData
        }
    }

    return {
        success: true,
        message: `/api/og/career?width=${width}&height=${height}&title=${title}`,
        errors: undefined,
        formData
    }
}

export const Editor = () => {
    const initialState = { success: false, message: "", errors: undefined, formData: new FormData() }
    const [state, formAction, isPending] = useActionState(createAsset, initialState)

    const height = state.formData.get("height") ? Number(state.formData.get("height")) : 1200
    const width = state.formData.get("width") ? Number(state.formData.get("width")) : 1200
    const title = state.formData.get("title") ? state.formData.get("title") : "Team One"

    // useEffect(() => {
    //     console.log(state.formData.get("height"))
    // }, [state])

    return (
        <div className="relative flex size-full justify-between gap-4 pt-16">
            <div
                className="bg-white"
                style={{
                    height: `${height ?? "1200"}px`,
                    width: `${width ?? "1200"}px`
                }}
            >
                <Image
                    src={state.message || "/images/optimized/hero_optimized.webp"}
                    alt="Asset"
                    width={width}
                    height={height}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <form
                action={formAction}
                className="flex min-h-[1200px] w-fit flex-col gap-y-4"
                inert={isPending}
                onSubmit={(e) => {
                    e.preventDefault()
                    startTransition(() => formAction(new FormData(e.target as HTMLFormElement)))
                }}
            >
                <Typography as="h1" variant="h2" className="mb-4">
                    Asset-Creator
                </Typography>
                <div className="flex w-full justify-between gap-4">
                    <div className="w-1/2">
                        <label htmlFor="width" className="mb-2.5 block text-base font-medium text-foreground">
                            Width
                        </label>
                        <input
                            id="width"
                            name="width"
                            type="number"
                            placeholder="Width"
                            defaultValue={width}
                            className="border-stroke w-full rounded-lg border bg-transparent px-5 py-3 text-foreground placeholder-foreground/50 outline-none duration-200 focus:border-primary"
                        />
                        {state.errors?.width && <p className="mt-1 text-sm text-red-500">{state.errors.width[0]}</p>}
                    </div>
                    <div>
                        <Typography as="h2" variant="h5" className="mt-12">
                            X
                        </Typography>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="height" className="mb-2.5 block text-base font-medium text-foreground">
                            Height
                        </label>
                        <input
                            id="height"
                            name="height"
                            type="number"
                            placeholder="Height"
                            defaultValue={height}
                            className="border-stroke w-full rounded-lg border bg-transparent px-5 py-3 text-foreground placeholder-foreground/50 outline-none duration-200 focus:border-primary"
                        />
                        {state.errors?.height && <p className="mt-1 text-sm text-red-500">{state.errors.height[0]}</p>}
                    </div>
                </div>
                <div className="w-full">
                    <button
                        disabled={isPending}
                        type="submit"
                        className="flex h-12 w-full items-center justify-center rounded-lg bg-foreground py-3 text-base font-medium text-background duration-200 hover:bg-foreground-hover disabled:opacity-50"
                    >
                        {isPending ? <Icon name="spinner" className="animate-spin text-background" /> : "Apply"}
                    </button>
                </div>
                {state.success && <div className="mt-4 text-center text-green-500">{state.message}</div>}
                {!state.success && state.message && (
                    <div className="mt-4 text-center text-red-500">{state.message}</div>
                )}
            </form>
        </div>
    )
}
