"use client"

import { submitApplication } from "@/app/actions/submitApplication"
import Button from "@/components/atoms/Button"
import { LANGUAGE_LEVELS, MAX_CV_BYTES, REFERRAL_SOURCES, APPLICATION_NEXT_STEPS } from "@/constants/application"
import cn from "@/utils/cn"
import Link from "next/link"
import { useActionState, useEffect, useRef, useState } from "react"

interface ApplicationFormProps {
    jobSlug: string
    className?: string
}

const fieldClasses =
    "border-t1-darkgreen bg-grey-soft text-small focus:ring-primary h-13.5 w-full rounded-[10px] border px-4 text-black outline-none focus:ring-2 focus:ring-inset"

interface TextFieldProps {
    name: string
    label: string
    formData: FormData
    error?: string[]
    type?: "text" | "email" | "tel" | "url" | "date"
    autoComplete?: string
    placeholder?: string
    spellCheck?: boolean
}

function TextField({ name, label, formData, error, type = "text", autoComplete, placeholder, spellCheck }: TextFieldProps) {
    const id = `application-${name}`
    const errorId = `${id}-error`
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor={id} className="text-xsmall text-black">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                required
                autoComplete={autoComplete}
                placeholder={placeholder}
                spellCheck={spellCheck}
                defaultValue={formData.get(name) as string}
                aria-describedby={error ? errorId : undefined}
                className={fieldClasses}
            />
            {error && (
                <p id={errorId} className="text-xxsmall text-red-500">
                    {error[0]}
                </p>
            )}
        </div>
    )
}

interface SelectFieldProps {
    name: string
    label: string
    options: readonly string[]
    formData: FormData
    error?: string[]
}

function SelectField({ name, label, options, formData, error }: SelectFieldProps) {
    const id = `application-${name}`
    const errorId = `${id}-error`
    return (
        <div className="flex flex-col gap-3">
            <label htmlFor={id} className="text-xsmall text-black">
                {label}
            </label>
            <div className="relative">
                <select
                    id={id}
                    name={name}
                    required
                    defaultValue={(formData.get(name) as string) || ""}
                    aria-describedby={error ? errorId : undefined}
                    className={cn(fieldClasses, "appearance-none pr-10")}
                >
                    <option value="" disabled>
                        Bitte wählen
                    </option>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <svg
                    className="text-black-soft pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            {error && (
                <p id={errorId} className="text-xxsmall text-red-500">
                    {error[0]}
                </p>
            )}
        </div>
    )
}

export default function ApplicationForm({ jobSlug, className }: ApplicationFormProps) {
    const initialState = { success: false, message: "", errors: undefined, formData: new FormData() }
    const [state, formAction, isPending] = useActionState(submitApplication, initialState)
    const [cvName, setCvName] = useState<string>("")
    const [cvError, setCvError] = useState<string>("")
    const successRef = useRef<HTMLDivElement>(null)

    // On successful submission the form is replaced by the confirmation view.
    // The viewport is left where the submit button was, so bring the
    // confirmation into view instead of leaving the user staring at blank space.
    useEffect(() => {
        if (state.success) {
            successRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }, [state.success])

    function handleCvChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]
        setCvError("")
        setCvName("")

        if (!file) return

        if (file.type !== "application/pdf") {
            setCvError("Nur PDF-Dateien sind erlaubt")
            event.target.value = ""
            return
        }
        if (file.size > MAX_CV_BYTES) {
            setCvError("Die Datei darf maximal 5 MB groß sein")
            event.target.value = ""
            return
        }

        setCvName(file.name)
    }

    if (state.success) {
        return (
            <div
                ref={successRef}
                role="status"
                aria-live="polite"
                className={cn(
                    "border-t1-darkgreen bg-grey-soft gap-md flex flex-col items-start rounded-[10px] border p-8 scroll-mt-24",
                    className
                )}
            >
                <div className="bg-primary flex size-12 shrink-0 items-center justify-center rounded-full text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                            d="M5 13L9 17L19 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <h3 className="font-gteradisplay text-h4 text-black">Bewerbung erhalten</h3>
                <p className="text-small text-black-soft">{state.message}</p>

                <div className="gap-md mt-2 flex w-full flex-col">
                    <span className="text-xsmall text-black">So geht es weiter</span>
                    <ol className="gap-md flex flex-col">
                        {APPLICATION_NEXT_STEPS.map((step, index) => (
                            <li key={step.title} className="gap-md flex items-start">
                                <span className="bg-primary font-gteratext text-xxsmall flex size-6 shrink-0 items-center justify-center rounded-full text-black">
                                    {index + 1}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-small text-black">{step.title}</span>
                                    <span className="text-xsmall text-black-soft">{step.description}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <Button label="Zurück zur Karriereseite" href="/karriere" variant="outline" />
            </div>
        )
    }

    return (
        <form action={formAction} className={cn("gap-md flex flex-col", className)} inert={isPending}>
            <input type="hidden" name="jobSlug" value={jobSlug} />

            <div className={cn("gap-md flex flex-col", isPending && "opacity-50")}>
                <TextField name="name" label="Name" autoComplete="name" formData={state.formData} error={state.errors?.name} />
                <TextField
                    name="email"
                    label="E-Mail"
                    type="email"
                    autoComplete="email"
                    spellCheck={false}
                    formData={state.formData}
                    error={state.errors?.email}
                />
                <TextField name="phone" label="Telefon" type="tel" autoComplete="tel" formData={state.formData} error={state.errors?.phone} />
                <SelectField
                    name="germanLevel"
                    label="Deutschkenntnisse"
                    options={LANGUAGE_LEVELS}
                    formData={state.formData}
                    error={state.errors?.germanLevel}
                />
                <SelectField
                    name="englishLevel"
                    label="Englischkenntnisse"
                    options={LANGUAGE_LEVELS}
                    formData={state.formData}
                    error={state.errors?.englishLevel}
                />

                {/* CV upload */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="application-cv" className="text-xsmall text-black">
                        Lebenslauf (PDF, max. 5 MB)
                    </label>
                    <input
                        id="application-cv"
                        name="cv"
                        type="file"
                        accept="application/pdf"
                        required
                        onChange={handleCvChange}
                        aria-describedby={
                            cvError || state.errors?.cv ? "application-cv-error" : undefined
                        }
                        className="border-t1-darkgreen bg-grey-soft text-small file:bg-primary file:text-xsmall hover:file:bg-primary/90 w-full rounded-[10px] border px-4 py-3 text-black file:mr-4 file:cursor-pointer file:rounded-[8px] file:border-0 file:px-4 file:py-2 file:text-black"
                    />
                    {cvName && !cvError && <p className="text-xxsmall text-black-soft">Ausgewählt: {cvName}</p>}
                    {(cvError || state.errors?.cv) && (
                        <p id="application-cv-error" className="text-xxsmall text-red-500">
                            {cvError || state.errors?.cv?.[0]}
                        </p>
                    )}
                </div>

                {/* Motivation */}
                <div className="flex flex-col gap-3">
                    <label htmlFor="application-motivation" className="text-xsmall text-black">
                        Anschreiben
                    </label>
                    <textarea
                        id="application-motivation"
                        name="motivation"
                        rows={6}
                        required
                        defaultValue={state.formData.get("motivation") as string}
                        aria-describedby={state.errors?.motivation ? "application-motivation-error" : undefined}
                        className="border-t1-darkgreen bg-grey-soft text-small focus:ring-primary h-48.25 w-full resize-none rounded-[10px] border px-4 py-3 text-black outline-none focus:ring-2 focus:ring-inset"
                    />
                    {state.errors?.motivation && (
                        <p id="application-motivation-error" className="text-xxsmall text-red-500">
                            {state.errors.motivation[0]}
                        </p>
                    )}
                </div>

                <TextField
                    name="portfolioUrl"
                    label="Portfolio / LinkedIn"
                    type="url"
                    autoComplete="url"
                    placeholder="https://example.com/…"
                    formData={state.formData}
                    error={state.errors?.portfolioUrl}
                />
                <TextField
                    name="startDate"
                    label="Frühester Eintritt"
                    type="date"
                    formData={state.formData}
                    error={state.errors?.startDate}
                />
                <TextField
                    name="salaryExpectation"
                    label="Gehaltsvorstellung"
                    placeholder="Zahl oder Range"
                    formData={state.formData}
                    error={state.errors?.salaryExpectation}
                />
                <SelectField
                    name="referralSource"
                    label="Wie hast Du uns gefunden?"
                    options={REFERRAL_SOURCES}
                    formData={state.formData}
                    error={state.errors?.referralSource}
                />

                {/* Privacy notice */}
                <p className="text-xxsmall text-black-soft">
                    Mit dem Absenden des Formulars bestätige ich, die{" "}
                    <Link href="/datenschutz" className="underline hover:text-black">
                        Datenschutzerklärung
                    </Link>{" "}
                    gelesen zu haben und willige in die Verarbeitung meiner Daten zur Bearbeitung meiner Bewerbung ein.
                </p>

                {/* Privacy checkbox */}
                <div className="flex flex-col gap-3">
                    <label className="flex cursor-pointer items-start gap-3">
                        <input
                            id="application-consent"
                            name="consent"
                            type="checkbox"
                            value="yes"
                            required
                            defaultChecked={state.formData.get("consent") === "yes"}
                            aria-describedby={state.errors?.consent ? "application-consent-error" : undefined}
                            className="accent-primary focus-visible:ring-primary mt-1 size-4 rounded focus-visible:ring-2"
                        />
                        <span className="text-xxsmall text-black-soft">Ich stimme der Datenschutzerklärung zu</span>
                    </label>
                    {state.errors?.consent && (
                        <p id="application-consent-error" className="text-xxsmall text-red-500">
                            {state.errors.consent[0]}
                        </p>
                    )}
                </div>
            </div>

            <div aria-live="polite">
                {state.message && <p className="text-small text-red-500">{state.message}</p>}
            </div>

            <Button label={isPending ? "Sende..." : "Bewerbung absenden"} variant="primary" type="submit" />
        </form>
    )
}
