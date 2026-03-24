export interface EventData {
    title: string
    client: string
    startDate: string // YYYY-MM-DD
    endDate?: string // YYYY-MM-DD for multi-day events
    type: "Workshop" | "Keynote"
    format?: "remote"
    scope?: "internal" | "external"
    category?: string
    image?: string
}

const MONTHS_DE = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
]

export function formatEventDate(startDate: string, endDate?: string): string {
    const start = new Date(startDate)
    const startDay = start.getDate()
    const startMonth = MONTHS_DE[start.getMonth()]
    const startYear = start.getFullYear()

    if (!endDate) {
        return `${startDay}. ${startMonth} ${startYear}`
    }

    const end = new Date(endDate)
    const endDay = end.getDate()
    const endMonth = MONTHS_DE[end.getMonth()]

    if (start.getMonth() === end.getMonth()) {
        return `${startDay}.–${endDay}. ${startMonth} ${startYear}`
    }

    return `${startDay}. ${startMonth} – ${endDay}. ${endMonth} ${startYear}`
}

export function getUpcomingEvents(events: EventData[], today: string = new Date().toISOString().slice(0, 10)): EventData[] {
    return events.filter((e) => (e.endDate ?? e.startDate) >= today)
}

export function getPastEvents(events: EventData[], today: string = new Date().toISOString().slice(0, 10)): EventData[] {
    return events.filter((e) => (e.endDate ?? e.startDate) < today).reverse()
}

export const events: EventData[] = [
    {
        title: "G-BEE",
        client: "Marketers und Nerds",
        startDate: "2026-01-21",
        type: "Workshop",
        scope: "internal",
        category: "Impuls"
    },
    {
        title: "Mustang x Team One Kickoff",
        client: "Mustang Jeans",
        startDate: "2026-01-28",
        type: "Workshop",
        scope: "internal",
        category: "Impuls"
    },
    {
        title: "Consultant Workshop Ideation",
        client: "DM",
        startDate: "2026-02-05",
        type: "Workshop",
        scope: "internal",
        category: "Impuls"
    },
    {
        title: "EBE 2026 Keynote",
        client: "eCommerce Berlin",
        startDate: "2026-02-17",
        endDate: "2026-02-18",
        type: "Keynote",
        scope: "external",
        category: "Keynote"
    },
    {
        title: "BEVH Webinar: Strategie & Organisation",
        client: "BEVH",
        startDate: "2026-02-25",
        type: "Workshop",
        format: "remote",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "BEVH Webinar: Das KI-Kundenerlebnis",
        client: "BEVH",
        startDate: "2026-02-27",
        type: "Workshop",
        format: "remote",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "BEVH Webinar: Kundenbindung – CRM & Customer Care",
        client: "BEVH",
        startDate: "2026-03-04",
        type: "Workshop",
        format: "remote",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "AI Experience Days",
        client: "PAYBACK",
        startDate: "2026-03-05",
        type: "Keynote",
        scope: "internal",
        category: "Keynote"
    },
    {
        title: "Basic Schulung",
        client: "Basic Schulung",
        startDate: "2026-03-06",
        type: "Workshop",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "BEVH Webinar: Einkauf & Produktentwicklung",
        client: "BEVH",
        startDate: "2026-03-06",
        type: "Workshop",
        format: "remote",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "Impuls",
        client: "Mustang Jeans",
        startDate: "2026-03-10",
        type: "Keynote",
        scope: "internal",
        category: "Keynote"
    },
    {
        title: "Shop Usability Award Gala",
        client: "Shop Usability Award",
        startDate: "2026-03-10",
        endDate: "2026-03-11",
        type: "Workshop",
        scope: "external",
        category: "Konferenz"
    },
    {
        title: "BEVH Webinar: Logistik & Supply Chain",
        client: "BEVH",
        startDate: "2026-03-10",
        type: "Workshop",
        format: "remote",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "Panel Retail AI",
        client: "K5",
        startDate: "2026-03-12",
        type: "Keynote",
        scope: "external",
        category: "Keynote"
    },
    {
        title: "BEVH Webinar: Future-Proof Stack",
        client: "BEVH",
        startDate: "2026-03-12",
        type: "Workshop",
        format: "remote",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "Vortrag Expert Circle",
        client: "GS1",
        startDate: "2026-03-13",
        type: "Keynote",
        scope: "internal",
        category: "Keynote"
    },
    {
        title: "OMR Reviews Tool Talk: E-Commerce Personalization",
        client: "OMR",
        startDate: "2026-03-19",
        type: "Keynote",
        scope: "external",
        category: "Webinar"
    },
    {
        title: "Marcus Coop",
        client: "TBD",
        startDate: "2026-03-21",
        type: "Workshop"
    },
    {
        title: "Podcast",
        client: "Digital Success",
        startDate: "2026-03-30",
        type: "Workshop",
        scope: "external",
        category: "Impuls"
    },
    {
        title: "Workshop – eCommerce Horizon",
        client: "eCommerce Horizon",
        startDate: "2026-04-15",
        type: "Workshop"
    },
    {
        title: "VTEX DAYS",
        client: "VTEX",
        startDate: "2026-04-15",
        endDate: "2026-04-19",
        type: "Workshop",
        scope: "external",
        category: "Konferenz"
    },
    {
        title: "Commerce Impact Day",
        client: "Shopware",
        startDate: "2026-04-16",
        type: "Workshop"
    },
    {
        title: "Minubo Dinner",
        client: "Sammelevents",
        startDate: "2026-04-21",
        type: "Workshop"
    },
    {
        title: "Inhouse Keynote",
        client: "Camel Active",
        startDate: "2026-04-28",
        type: "Keynote",
        scope: "internal",
        category: "Impuls"
    },
    {
        title: "eCom Horizon Update",
        client: "eCommerce Horizon",
        startDate: "2026-04-29",
        type: "Keynote",
        scope: "external",
        category: "Keynote"
    },
    {
        title: "Vortrag DDX",
        client: "DDX",
        startDate: "2026-05-08",
        endDate: "2026-05-09",
        type: "Workshop",
        scope: "external",
        category: "Keynote"
    },
    {
        title: "SCD Panel",
        client: "Shopware",
        startDate: "2026-06-10",
        type: "Keynote"
    },
    {
        title: "K5 2026",
        client: "K5",
        startDate: "2026-06-23",
        endDate: "2026-06-25",
        type: "Workshop",
        scope: "external"
    },
    {
        title: "Panel Discussion Frankfurt",
        client: "Union Investment",
        startDate: "2026-06-26",
        type: "Keynote",
        scope: "internal",
        category: "Konferenz"
    },
    {
        title: "Workation",
        client: "Interne Termine",
        startDate: "2026-07-19",
        endDate: "2026-07-20",
        type: "Workshop",
        scope: "internal"
    },
    {
        title: "KI BIG BANG Event",
        client: "KI BIG BANG Event",
        startDate: "2026-09-16",
        endDate: "2026-09-17",
        type: "Keynote"
    },
    {
        title: "Speaker",
        client: "Retail Reshaped",
        startDate: "2026-11-17",
        type: "Keynote"
    }
]
