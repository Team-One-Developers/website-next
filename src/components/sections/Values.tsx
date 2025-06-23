import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"

const values = [
    {
        name: "Wir arbeiten mit und für Menschen",
        description:
            "„Mit und für Menschen arbeiten“ ist für uns keine Selbstverständlichkeit sondern Ausdruck unseres Bewusstseins für die Wichtigkeit jedes Einzelnen -  Kollegen, Kunden, Partner oder Nutzer. Wir wollen der beste Arbeitgeber für unsere Mitarbeiter und der beste Umsetzungspartner für unsere Kunden sein. Das gelingt uns nur dann, wenn wir den Einzelbedürfnissen aller Akteure überdurchschnittliche Aufmerksamkeit schenken, achtsam miteinander umgehen und unser Arbeitsumfeld als Nährboden für persönliches Wachstum gestalten."
    },
    {
        name: "Wir sind kundenzentrisch",
        description:
            "In Anlehnung an die agilen Prinzipien folgen wir dem Gedanken von kundenzentrisch ausgerichteten Organisation, da wir die kontinuierliche Anpassung an Markt- und somit auch an Kundenbedürfnisse als die übergeordnete Maxime für Geschäftserfolg in einer digitalen Welt betrachten."
    },
    {
        name: "Wir folgen den agilen Prinzipien",
        description:
            "Wir folgen den Prinzipien des agilen Manifests. Wir halten Agilität für eine notwendige und richtige Antwort auf die Frage, wie sich unsere Kunden bestmöglich innerhalb der sich ständig verändernden Unternehmensumwelt positionieren sollten. Unser Verständnis von technischer Exzellenz, von Kollaboration und Motivation sind ebenfalls zentraler Bestandteil des agilen Manifest sowie von unseren Unternehmenswerten."
    },
    {
        name: "Wir stehen für Qualität und Nachhaltigkeit",
        description:
            "In allem was wir tun halten wir ein überdurchschnittlich hohes Qualitätsverständnis aufrecht, da wir Qualität als die Grundlage für Nachhaltigkeit und Exzellenz betrachten. Getreu dem Motto “Man ist nie zu klein, um den Unterschied zu machen”, versuchen wir mit gutem Beispiel voran zu gehen und unsere kleine Welt jeden Tag ein bisschen besser zu machen."
    },
    {
        name: "Wir glauben an Technologie und Innovation",
        description:
            "Wir sind ein Technologie-Unternehmen und glauben an Fortschritt durch Technologie und Innovation. Software ist integraler Bestandteil einer technologisierten Welt und diesen Teil wollen wir unter Berücksichtigung gesellschaftlicher Werte und Normen positiv beeinflussen und aktiv gestalten."
    }
]

export default function Values() {
    return (
        // extra div for making the blobs scroll and be visible behind this
        <div className="bg-t1-white">
            <Section className="bg-transparent pt-12 pb-32">
                {/* Values section */}

                <div className="mx-auto max-w-2xl lg:mx-0">
                    <Typography variant="h2" className="text-t1-black">
                        Unsere Werte
                    </Typography>
                    <Typography className="text-t1-darkgray mt-6">
                        Unsere High Five - Die Werte die wir uns auf die Fahne schreiben.
                    </Typography>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
                    {values.map((value) => (
                        <div key={value.name}>
                            <Typography variant="h5" className="font-semibold text-gray-900">
                                {value.name}
                            </Typography>
                            <Typography className="mt-1 text-gray-600">{value.description}</Typography>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
