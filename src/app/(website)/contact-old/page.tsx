import Contact from "@/components/sections/Contact"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Wir freuen uns auf Ihre Nachricht."
}

export default function ContactPage() {
    return <Contact />
}
