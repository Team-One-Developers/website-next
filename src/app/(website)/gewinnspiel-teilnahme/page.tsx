import { Section } from "@/components/layout/Section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Gewinnspiel-Teilnahmebedingungen",
    description: "Teilnahmebedingungen für das Gewinnspiel der Team One Developers GmbH."
}

const GewinnspielTeilnahme = () => {
    return (
        <Section className="pb-56">
            <h1 className="mt-8 text-3xl font-bold text-white">Teilnahmebedingungen für das Gewinnspiel</h1>
            <div className="mt-8 space-y-8 text-white">
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">1. Veranstalter</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Veranstalter dieses Gewinnspiels ist die <br />
                        <span className="font-bold">Team One Developers GmbH</span> <br />
                        Stafflenbergstraße 44 <br />
                        70184 Stuttgart <br />
                        (im Folgenden „Veranstalter“ genannt)
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">2. Teilnahmeberechtigung</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Teilnehmen dürfen alle natürlichen Personen, die das 18. Lebensjahr vollendet haben und ihren
                        Wohnsitz in Deutschland, Österreich oder der Schweiz haben. Mitarbeiter:innen des Veranstalters
                        sowie deren Angehörige sind von der Teilnahme ausgeschlossen. Der Veranstalter behält sich das
                        Recht vor, Personen bei Verstoß gegen die Teilnahmebedingungen oder dem Versuch technischer
                        Manipulation vom Gewinnspiel auszuschließen.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">3. Teilnahme am Gewinnspiel</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Die Teilnahme am Gewinnspiel ist kostenlos und unabhängig vom Erwerb von Waren oder
                        Dienstleistungen. Die Teilnahme erfolgt ausschließlich durch das vollständige Ausfüllen und
                        Absenden des Teilnahmeformulars. Der Teilnahmezeitraum beginnt am 24.06.25 und endet am 26.06.25
                        Jede Person darf nur einmal teilnehmen.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">4. Gewinne</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Unter allen gültigen Teilnahmen verlosen wir die Teilnahme an der Schulung „AI-Basics Training
                        für E-Commerce-Teams“. Es werden insgesamt 10 Plätze vergeben. Die Teilnahme an der Schulung ist
                        nicht übertragbar, nicht austauschbar und nicht in bar ablösbar. Es werden zwei Termine zur
                        Auswahl stehen, die nach der Auslosung der Gewinner bekanntgegeben werden. Sollte die Schulung
                        aus Gründen, die der Veranstalter nicht zu vertreten hat, nicht stattfinden können, besteht kein
                        Anspruch auf Ersatz.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">5. Gewinnermittlung & Benachrichtigung</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Die Gewinner werden nach Ende des Teilnahmezeitraums per Losverfahren ermittelt. Die Gewinner
                        werden bis spätestens 01.07.25 per E-Mail benachrichtigt. Meldet sich der Gewinner nicht
                        innerhalb von 7 Tagen nach der Benachrichtigung zurück, verfällt der Gewinn ersatzlos und es
                        wird ein:e Ersatzgewinner:in gezogen.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">6. Datenschutz</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Für die Teilnahme am Gewinnspiel werden personenbezogene Daten (Vorname, Nachname,
                        E-Mail-Adresse) erhoben. Diese Daten werden ausschließlich zur Durchführung und Abwicklung des
                        Gewinnspiels verwendet (Art. 6 Abs. 1 lit. b DSGVO). Zur Erhebung und Verwaltung der
                        Anmeldedaten nutzen wir die Plattform HubSpot, ein Dienst der HubSpot Inc., 25 First Street,
                        Cambridge, MA 02141 USA. Die Datenverarbeitung erfolgt auf Servern innerhalb der EU. Es kann
                        nicht ausgeschlossen werden, dass Daten in Drittländer (insbesondere die USA) übermittelt
                        werden. Mit HubSpot besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO sowie ein
                        Datentransfermechanismus nach Art. 46 DSGVO (EU-Standardvertragsklauseln). Die Daten werden
                        nicht veröffentlicht und nicht an unbeteiligte Dritte weitergegeben. Nach Abschluss des
                        Gewinnspiels werden alle personenbezogenen Daten gelöscht, sofern keine gesetzliche
                        Aufbewahrungspflicht besteht. Teilnehmende haben jederzeit das Recht auf: Auskunft über ihre
                        gespeicherten Daten (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
                        Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie
                        Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Weitere Informationen zur Datenverarbeitung
                        findest du in unserer Datenschutzerklärung: https://www.team-one.de/privacy
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">7. Vorzeitige Beendigung, Änderung oder Ausschluss</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Der Veranstalter behält sich das Recht vor, das Gewinnspiel jederzeit ohne Vorankündigung und
                        ohne Angabe von Gründen abzubrechen oder zu ändern, wenn die ordnungsgemäße Durchführung nicht
                        gewährleistet werden kann (z. B. aus technischen Gründen oder Manipulationen). Ein
                        Rechtsanspruch auf Teilnahme oder Gewinn besteht nicht.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">8. Anwendbares Recht & Salvatorische Klausel</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Es gilt das Recht der Bundesrepublik Deutschland. Der Rechtsweg ist ausgeschlossen. Sollte eine
                        Bestimmung dieser Teilnahmebedingungen ganz oder teilweise unwirksam sein, bleibt die Gültigkeit
                        der übrigen Bestimmungen unberührt.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">9. Kontakt</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Bei Fragen zum Gewinnspiel oder zur Verarbeitung Ihrer Daten wenden Sie sich bitte an:
                        hannah.hahnke@team-one.de
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default GewinnspielTeilnahme
