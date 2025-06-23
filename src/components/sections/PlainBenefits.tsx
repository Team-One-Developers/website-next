import Typography from "@/components/atoms/Typography"
import Section from "@/components/layout/Section"

const benefits = [
    {
        name: "Boni",
        description: "Neben Weihnachts- und Urlaubsgeld erhältst Du bei uns erfolgsabhängige Prämien."
    },
    {
        name: "Home Office",
        description:
            "Auch wenn wir tolle Büroräumlichkeiten in Stuttgarts Halbhöhenlage haben, unterstützen wir flexible Arbeitszeiten ebenso wie Home Office."
    },
    {
        name: "Weiterbildung",
        description:
            "Von internationalen Konferenz-Besuchen bis hin zu regelmäßigen Work-Retreats und Persönlichkeitscoachings, den Möglichkeiten zur individuellen fachlichen wie persönlichen Weiterentwicklung sind bei uns keine Grenzen gesetzt."
    },
    {
        name: "Hardware",
        description:
            "Du erhältst bei uns natürlich alles was Du zum Arbeiten brauchst. Du wählst dabei deine Arbeitsmittel selbst aus damit Du vom Start weg bestmöglich arbeitsfähig bist."
    },
    {
        name: "Workation",
        description:
            "Wir haben Gefallen daran gefunden dort zu arbeiten wo andere Urlaub machen. Ein bis zweimal jährlich wechseln wir unser Arbeitsumfeld und reisen gemeinsam an spannenden Locations im In- und Ausland."
    },
    {
        name: "Jobrad",
        description:
            "Bei uns erhältst Du attraktive Konditionen für dein Jobrad durch unser hauseigenes und selbst-finanziertes Firmenradprogramm."
    },
    {
        name: "Wellpass",
        description:
            "Alternativ hast Du die Möglichkeit über unseren Fitness-Partner Wellpass in 10.000 hochwertigen Sport- und Gesundheitseinrichtungen in ganz Deutschland zu trainieren."
    }
]

export default function Benefits() {
    return (
        <div className="bg-t1-dark text-primary">
            <Section className="bg-transparent">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <Typography variant="h2" className="text-t1-primary">
                        Unsere Benefits
                    </Typography>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
                    {benefits.map((value) => (
                        <div key={value.name}>
                            <Typography variant="h5" as="div" className="text-t1-white font-semibold">
                                {value.name}
                            </Typography>
                            <Typography className="text-t1-white mt-4">{value.description}</Typography>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
