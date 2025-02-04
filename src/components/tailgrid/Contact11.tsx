"use client"
import { submitContactForm } from "@/app/actions/contact"
import Typography from "@/components/atoms/Typography"
import Icon from "@/components/molecules/Icon"
import cn from "@/lib/cn"
import Image from "next/image"
import { useActionState } from "react"

export default function Contact11() {
    const initialState = { success: false, message: "", errors: undefined, formData: undefined }
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)

    return (
        <section className="relative z-10 overflow-hidden bg-background py-16 font-abcdiatype md:py-20 lg:py-28">
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
                <Image
                    src="https://cdn.tailgrids.com/2.2/assets/application/images/contact/contact-11/grid-shape.svg"
                    alt="grid-shape"
                    width={392}
                    height={195}
                />
            </div>
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <Typography as="h1" variant="h1" className="mb-3">
                        Die Eins ist man <br /> niemals alleine.
                    </Typography>
                    <Typography as="p" variant="subtitle">
                        Get in touch
                    </Typography>
                </div>

                <form action={formAction} className="mx-auto w-full max-w-[540px]" inert={state.success || isPending}>
                    <div className={cn("-mx-4 flex flex-wrap", (state.success || isPending) && "opacity-50")}>
                        <div className="w-full px-4">
                            <div className="mb-6">
                                <label htmlFor="name" className="mb-2.5 block text-base font-medium text-foreground">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    // if theres data for this field (after a non-successfull "Send") use it. Otherwise use a placeholder
                                    placeholder="Name"
                                    defaultValue={state.formData?.get("name") as string}
                                    className="border-stroke w-full rounded-lg border bg-transparent px-5 py-3 text-foreground placeholder-foreground/50 outline-none duration-200 focus:border-primary"
                                />
                                {state.errors?.name && (
                                    <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-6">
                                <label htmlFor="email" className="mb-2.5 block text-base font-medium text-foreground">
                                    E-Mail
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@email.com"
                                    defaultValue={state.formData?.get("email") as string}
                                    className="border-stroke h-[46px] w-full rounded-lg border bg-transparent px-5 py-3 text-foreground placeholder-foreground/50 outline-none duration-200 focus:border-primary"
                                />
                                {state.errors?.email && (
                                    <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <div className="mb-6">
                                <label htmlFor="message" className="mb-2.5 block text-base font-medium text-foreground">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Deine Nachricht an uns"
                                    defaultValue={state.formData?.get("message") as string}
                                    className="border-stroke w-full rounded-lg border bg-transparent p-5 text-foreground placeholder-foreground/50 outline-none duration-200 focus:border-primary"
                                ></textarea>
                                {state.errors?.message && (
                                    <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
                                )}
                            </div>
                        </div>

                        <div className="w-full px-4">
                            <button
                                disabled={isPending}
                                type="submit"
                                className="flex h-12 w-full items-center justify-center rounded-lg bg-foreground px-5 py-3 text-base font-medium text-background duration-200 hover:bg-foreground-hover disabled:opacity-50"
                            >
                                {isPending ? (
                                    <Icon name="spinner" className="animate-spin text-background" />
                                ) : (
                                    "Senden"
                                )}
                            </button>
                        </div>
                    </div>
                    {state.success && <div className="mt-4 text-center text-green-500">{state.message}</div>}
                    {!state.success && state.message && (
                        <div className="mt-4 text-center text-red-500">{state.message}</div>
                    )}
                </form>
            </div>
        </section>
    )
}
