"use client"

import Section from "@/components/layout/Section"
import { Field, Label, Switch } from "@headlessui/react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Contact() {
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
                <p className="text-t1-white mt-2 text-lg/8">
                    Egal ob Fragen, Auskünfte oder Anregungen - wir sind für Sie da!
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="name" className="text-t1-white block text-sm/6 font-semibold">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="given-name"
                                className="focus:outline-primary bg-t1-white block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                            />
                        </div>
                    </div>
                    {/* <div className="sm:col-span-2">
                        <label htmlFor="company" className="text-t1-white block text-sm/6 font-semibold">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="focus:outline-primary bg-t1-white block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                            />
                        </div>
                    </div> */}
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="text-t1-white block text-sm/6 font-semibold">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="focus:outline-primary bg-t1-white block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                            />
                        </div>
                    </div>
                    {/* <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="text-t1-white block text-sm/6 font-semibold">
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <div className="has-[input:focus-within]:outline-primary bg-t1-white flex rounded-md outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2">
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="focus:outline-primary col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                                    >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div> */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="text-t1-white block text-sm/6 font-semibold">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="focus:outline-primary bg-t1-white block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2"
                                defaultValue={""}
                            />
                        </div>
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
                            By selecting this, you agree to our{" "}
                            <Link href="/privacy" className="text-primary font-semibold hover:underline">
                                privacy&nbsp;policy
                            </Link>
                            .
                        </Label>
                    </Field>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="focus-visible:outline-primary bg-primary text-t1-black hover:bg-primary/90 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-xs hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Let&apos;s talk
                    </button>
                </div>
            </form>
        </Section>
    )
}
