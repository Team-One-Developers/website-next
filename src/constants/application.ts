export const LANGUAGE_LEVELS = [
    "Muttersprache",
    "Verhandlungssicher (C1/C2)",
    "Gute Kenntnisse (B1/B2)",
    "Grundkenntnisse (A1/A2)"
] as const

export const MAX_CV_BYTES = 5 * 1024 * 1024 // 5 MB

export const REFERRAL_SOURCES = [
    "Suchmaschine (Google etc.)",
    "LinkedIn",
    "Xing",
    "Jobbörse / Stellenanzeige",
    "Empfehlung",
    "Social Media",
    "Karrieremesse / Event",
    "Sonstiges"
] as const

export const APPLICATION_NEXT_STEPS: {title: string, description: string }[] = [
    {
        title: "Sichtung Deiner Unterlagen",
        description: "Wir schauen uns Deine Bewerbung in Ruhe an, in der Regel innerhalb weniger Werktage."
    },
    {
        title: "Erstes Kennenlernen mit den Gründern",
        description: "Im nächsten Schritt lernen wir uns in einem ersten Gespräch mit unseren Gründern kennen. Per Video-Call oder persönlich bei uns vor Ort."
    },
    {
        title: "Deep Dive",
        description: "Wir haben beide das Gefühl, dass es gut passen könnte? Perfekt. Dann laden wir Dich zu einem weiteren Gespräch ein. Bei Engineering-Positionen erwartet Dich eine gemeinsame Pair-Programming-Session, bei anderen Positionen eine praxisnahe Case Study."
    },
    {
        title: "Vertragsangebot",
        description: "Spätestens in der darauffolgenden Woche geben wir Dir eine Rückmeldung, wie es weitergeht. Wenn es für beide Seiten passt, erhältst Du Dein Vertragsangebot digital von uns und wir freuen uns darauf, Dich bald im Team willkommen zu heißen."
    }
]
