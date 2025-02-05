import { ADDRESS_LINK, EMAIL_LINK, PHONE_LINK } from "@/constants/links"
import Link from "next/link"

export interface ContactLinkProps {
    children: React.ReactNode
    type: "email" | "phone" | "address"
    className?: string
}

export const ContactLink = ({ children, type, className }: ContactLinkProps) => {
    const hrefForType = () => {
        switch (type) {
            case "email":
                return EMAIL_LINK
            case "phone":
                return PHONE_LINK
            case "address":
                return ADDRESS_LINK
        }
    }

    return (
        <Link href={hrefForType()} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </Link>
    )
}
