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
    location?: string
    description?: string
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

export function getUpcomingEvents(
    events: EventData[],
    today: string = new Date().toISOString().slice(0, 10)
): EventData[] {
    return events.filter((e) => (e.endDate ?? e.startDate) >= today)
}

export function getPastEvents(events: EventData[], today: string = new Date().toISOString().slice(0, 10)): EventData[] {
    return events.filter((e) => (e.endDate ?? e.startDate) < today).reverse()
}

export const events: EventData[] = [
    {
        title: "DDX 2026",
        client: "DDX",
        location: "München",
        startDate: "2026-05-09",
        type: "Keynote",
        scope: "external",
        category: "Konferenz",
        image: "/images/DDX.jpg",
        description:
            "Das führende Event für UX Design. Paul Krauss spricht darüber, wie KI-Anwendungen heute getestet werden — mit einem Fokus auf KI als das neue UI und wie man einen strukturierten Experimentationsansatz dafür entwickelt. Hands-on-Präsentation mit Live-Demo."
    },
    {
        title: "Shopware Community Day 2026",
        client: "Shopware",
        location: "Köln",
        startDate: "2026-06-10",
        type: "Keynote",
        scope: "external",
        category: "Konferenz",
        image: "/images/SCD.jpg",
        description:
            "Alles rund um den Shopware-Kosmos. Team One nimmt am AI-Panel teil und diskutiert KI-gestützte Commerce-Lösungen mit führenden Branchenexperten."
    },
    {
        title: "K5 Future Retail Conference 2026",
        client: "K5",
        location: "Berlin",
        startDate: "2026-06-23",
        endDate: "2026-06-24",
        type: "Keynote",
        scope: "external",
        category: "Konferenz",
        image: "/images/K5.jpg",
        description:
            "Das führende Event für E-Commerce. Team One ist Stagehost eines Auditoriums mit zwei Tagen voller KI-Themen — von Strategie bis zur praktischen Umsetzung im digitalen Handel."
    },
    {
        title: "New Com Summit 2026",
        client: "New Com Summit",
        location: "München",
        startDate: "2026-10-21",
        endDate: "2026-10-22",
        type: "Keynote",
        scope: "external",
        category: "Konferenz",
        image: "/images/Newcom.jpg",
        description:
            "Für D2C und Social Retail. Paul Krauss präsentiert interaktiv mit Schwerpunkt auf KI — Details folgen in Kürze."
    },
    {
        title: "Retail Reshaped 2026",
        client: "Retail Reshaped",
        location: "Hamburg",
        startDate: "2026-11-17",
        type: "Keynote",
        scope: "external",
        category: "Konferenz",
        image: "/images/Retail Reshaped.jpg",
        description:
            "Shaping the Future with Commerce Media, Data and AI. Paul Krauss beleuchtet den Einfluss von Hyperpersonalisierung und generativer KI auf dynamische Retail Media Formate. Hands-on-Präsentation mit Live-Demo."
    }
]
