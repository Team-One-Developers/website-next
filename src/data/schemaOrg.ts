import { Organization as OrganizationSchema } from "schema-dts"

export const organization: OrganizationSchema = {
    "@type": "Organization",
    image: ["https://www.team-one.de/images/logos/t1-only-dark.svg"],
    name: "Team One",
    legalName: "Team One Developers GmbH",
    slogan: "Tech-driven business transformation",
    url: "https://www.team-one.de",
    sameAs: [
        "https://www.kununu.com/de/team-one-developers1",
        "https://de.linkedin.com/company/team-one-developers",
        "https://www.instagram.com/teamonedevelopers",
        "https://www.xing.com/pages/team-one-developers-gmbh"
    ],
    logo: "https://www.team-one.de/images/logos/t1-only-dark.svg",
    description:
        "Team One ist Technologie-Beratungspartner für digitale Produkte, skalierbare Architekturen und KI-gestützte Geschäftsmodelle",
    email: "info@team-one.de",
    telephone: "+4971125298690",
    address: {
        "@type": "PostalAddress",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
        addressLocality: "Stuttgart",
        postalCode: "70184",
        streetAddress: "Stafflenbergstraße 44"
    }
}
