export const CONTACT_FORM_RECIPIENT = "info@team-one.de"

export type CareerBusiness = "Team One" | "Inframotive"

export const CAREER_BUSINESS_CONFIG: Record<
    CareerBusiness,
    { sender: string, recipient: string; brandName: string; signature: string; logoUrl?: string }
> = {
    "Team One": {
        sender: "Team One Karriere <contact-form@transactional.team-one.de>",
        recipient: "jobs@team-one.de",
        brandName: "Team One",
        signature: "Dein Team One",
        logoUrl: "https://www.team-one.de/logos/team-one-logo.png"
    },
    Inframotive: {
        sender: "Inframotive Karriere <contact-form@transactional.team-one.de>",
        recipient: "job-application@inframotive.de",
        brandName: "Inframotive",
        signature: "Dein Inframotive-Team"
    }
}
