"use client"

import { submitContactForm } from "@/app/actions/submitContactForm"
import Section from "@/components/layout/Section"
import cn from "@/utils/cn"
import { Field, Label, Switch } from "@headlessui/react"
import Link from "next/link"
import { useActionState, useEffect, useRef, useState } from "react"

export default function Contact() {
    const initialState = { success: false, message: "", errors: undefined, formData: new FormData() }
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
    const [agreed, setAgreed] = useState(false)
    const topBlobRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY
            if (topBlobRef.current) {
                topBlobRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <Section className="py-24 sm:py-32 lg:pb-72">
            <div
                aria-hidden="true"
                className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                ref={topBlobRef}
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    }}
                    className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#21352b] to-[#46ffad] opacity-40 sm:left-[calc(50%-40rem)] sm:w-288.75"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-spacegrotesk text-t1-white text-4xl font-semibold tracking-tight text-balance uppercase sm:text-5xl">
                    Kontakt
                </h2>
                {/* <p className="text-t1-white mt-2 text-lg/8">
                    Egal ob Fragen, Auskünfte oder Anregungen - wir sind für Sie da!
                </p> */}
            </div>
            <form action={formAction} className="mx-auto mt-16 max-w-xl sm:mt-20" inert={state.success || isPending}>
                <div
                    className={cn(
                        "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2",
                        (state.success || isPending) && "opacity-50"
                    )}
                >
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="text-t1-white block text-sm/6 font-semibold">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Name"
                                autoComplete="given-name"
                                defaultValue={state.formData.get("name") as string}
                                className="focus:outline-primary bg-t1-white block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                            />
                        </div>
                        {state.errors?.name && <p className="mt-1 text-sm text-red-500">{state.errors.name[0]}</p>}
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="text-t1-white block text-sm/6 font-semibold">
                            E-Mail
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="example@email.com"
                                defaultValue={state.formData.get("email") as string}
                                className="focus:outline-primary bg-t1-white block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                            />
                        </div>
                        {state.errors?.email && <p className="mt-1 text-sm text-red-500">{state.errors.email[0]}</p>}
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="text-t1-white block text-sm/6 font-semibold">
                            Nachricht
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Deine Nachricht an uns"
                                defaultValue={state.formData.get("message") as string}
                                className="focus:outline-primary bg-t1-white block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                            />
                        </div>
                        {state.errors?.message && (
                            <p className="mt-1 text-sm text-red-500">{state.errors.message[0]}</p>
                        )}
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className="group focus-visible:outline-primary data-checked:bg-primary flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className="bg-t1-white size-4 transform rounded-full shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                                />
                            </Switch>
                        </div>
                        <Label className="text-t1-white text-sm/6">
                            Mit dem Absenden des Formulars bestätige ich, die{" "}
                            <Link href="/privacy" className="text-primary font-semibold hover:underline">
                                Datenschutzerklärung
                            </Link>{" "}
                            gelesen zu haben und willige in die Verarbeitung meiner Daten zur Bearbeitung meines
                            Anliegens ein.
                        </Label>
                    </Field>
                </div>
                <div className="mt-10">
                    <button
                        disabled={isPending || !agreed}
                        type="submit"
                        className={cn(
                            "focus-visible:outline-primary bg-primary text-t1-black hover:bg-primary/90 flex w-full items-center justify-center rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2",
                            (isPending || !agreed || state.success) && "cursor-not-allowed opacity-50"
                        )}
                    >
                        {isPending ? "Sende..." : "Absenden"}
                    </button>
                </div>
                {state.success && <div className="mt-4 text-center text-green-500">{state.message}</div>}
                {!state.success && state.message && (
                    <div className="mt-4 text-center text-red-500">{state.message}</div>
                )}
            </form>
        </Section>
    )
}
