import { PageLayout } from "@/components/layout/PageLayout"
import { Link } from "../components/atoms/Link"
import Typography from "../components/atoms/Typography"
import { Section } from "../components/layout/Section"

const NotFound = () => {
    return (
        <PageLayout>
            <Section>
                <Typography variant="h1" as="h1">
                    404
                </Typography>
                <Typography variant="paragraph" className="mt-4 text-white">
                    Die Seite wurde nicht gefunden
                </Typography>
                <br />
                <Typography variant="paragraph" className="w-full text-white md:w-1/3">
                    Sorry, die Seite die du angefragt hast, scheint nicht zu existieren.
                </Typography>
                <br />
                <Link href="/" label="Zur Startseite" />
            </Section>
        </PageLayout>
    )
}

export default NotFound
