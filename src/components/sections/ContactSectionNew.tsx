"use client"

import { submitContactForm } from "@/app/actions/submitContactForm"
import ButtonNew from "@/components/atoms/ButtonNew"
import cn from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import { useActionState, useState } from "react"

interface ContactPerson {
    name: string
    role: string
    imageUrl: string
    phone: string
    email: string
}

interface ContactSectionNewProps {
    title: string
    contact: ContactPerson
    className?: string
}

export default function ContactSectionNew({ title, contact, className }: ContactSectionNewProps) {
    const initialState = { success: false, message: "", errors: undefined, formData: new FormData() }
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState)
    const [agreed, setAgreed] = useState(false)

    return (
        <section className={cn("gap-grid-gutter flex flex-col rounded-[40px] py-12.75 lg:flex-row", className)}>
            {/* Left: contact info */}
            <div className="gap-xl flex flex-1 flex-col">
                <h2 className="font-gteradisplay text-h2 text-black">{title}</h2>

                <div className="gap-lg flex flex-col">
                    {/* Contact person */}
                    <div className="gap-lg flex items-center">
                        <Image
                            src={contact.imageUrl}
                            alt={contact.name}
                            width={95}
                            height={94}
                            className="h-23.5 w-23.75 rounded-full object-cover"
                        />
                        <div className="flex flex-col">
                            <span className="text-small text-black">{contact.name}</span>
                            <span className="text-xsmall text-black-soft">{contact.role}</span>
                        </div>
                    </div>

                    {/* Phone & Email */}
                    <div className="gap-xs flex flex-col">
                        <a
                            href={`tel:${contact.phone}`}
                            className="text-small flex items-center gap-2 text-black hover:underline"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
                                <path
                                    d="M20.01 21.41L21.82 19.6C22.1 19.32 22.48 19.18 22.86 19.18C23.12 19.18 23.38 19.25 23.62 19.4L27.21 21.61C27.71 21.92 28.01 22.47 28.01 23.06V26C28.01 27.1 27.11 28 26.01 28H25.01C12.33 28 4.01 19.67 4.01 7V6C4.01 4.9 4.91 4 6.01 4H9.01C9.6 4 10.14 4.3 10.45 4.79L12.66 8.38C12.96 8.86 12.94 9.46 12.6 9.92L10.6 12.01"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {contact.phone}
                        </a>
                        <a
                            href={`mailto:${contact.email}`}
                            className="text-small flex items-center gap-2 text-black hover:underline"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
                                <rect
                                    x="4"
                                    y="6"
                                    width="24"
                                    height="20"
                                    rx="2"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M4 10L16 18L28 10"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            {contact.email}
                        </a>
                    </div>
                </div>
            </div>

            {/* Right: form */}
            <form action={formAction} className="gap-md flex flex-1 flex-col" inert={state.success || isPending}>
                <div className={cn("gap-md flex flex-col", (state.success || isPending) && "opacity-50")}>
                    {/* Name field */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="contact-name" className="text-xsmall text-black">
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            defaultValue={state.formData.get("name") as string}
                            className="border-t1-darkgreen bg-grey-soft text-small focus:border-primary h-13.5 w-full rounded-[10px] border px-4 text-black outline-none"
                        />
                        {state.errors?.name && <p className="text-xxsmall text-red-500">{state.errors.name[0]}</p>}
                    </div>

                    {/* Email field */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="contact-email" className="text-xsmall text-black">
                            E-Mail
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            defaultValue={state.formData.get("email") as string}
                            className="border-t1-darkgreen bg-grey-soft text-small focus:border-primary h-13.5 w-full rounded-[10px] border px-4 text-black outline-none"
                        />
                        {state.errors?.email && <p className="text-xxsmall text-red-500">{state.errors.email[0]}</p>}
                    </div>

                    {/* Message field */}
                    <div className="flex flex-col gap-3">
                        <label htmlFor="contact-message" className="text-xsmall text-black">
                            Nachricht
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            required
                            rows={6}
                            defaultValue={state.formData.get("message") as string}
                            className="border-t1-darkgreen bg-grey-soft text-small focus:border-primary h-48.25 w-full resize-none rounded-[10px] border px-4 py-3 text-black outline-none"
                        />
                        {state.errors?.message && (
                            <p className="text-xxsmall text-red-500">{state.errors.message[0]}</p>
                        )}
                    </div>

                    {/* Privacy notice */}
                    <p className="text-xxsmall text-black-soft">
                        Mit dem Absenden des Formulars bestätige ich, die{" "}
                        <Link href="/privacy" className="underline hover:text-black">
                            Datenschutzerklärung
                        </Link>{" "}
                        gelesen zu haben und willige in die Verarbeitung meiner Daten zur Bearbeitung meines Anliegens
                        ein.
                    </p>

                    {/* Privacy checkbox */}
                    <label className="flex cursor-pointer items-start gap-3">
                        <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => setAgreed(e.target.checked)}
                            className="accent-primary mt-1 size-4 rounded"
                        />
                        <span className="text-xxsmall text-black-soft">Ich stimme der Datenschutzerklärung zu</span>
                    </label>
                </div>

                <ButtonNew
                    label={isPending ? "Sende..." : "Absenden"}
                    variant="primary"
                    type="submit"
                    className={cn(!agreed && "cursor-not-allowed opacity-50")}
                />

                {state.success && <p className="text-small text-primary">{state.message}</p>}
                {!state.success && state.message && <p className="text-small text-red-500">{state.message}</p>}
            </form>
        </section>
    )
}
