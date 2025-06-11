import { Section } from "@/components/layout/Section"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Erahre mehr darüber, wie wir mit deinen Daten umgehen."
}

const Privacy = () => {
    return (
        <Section className="pb-56">
            <hgroup className="grid gap-4">
                <h1 className="mt-8 text-3xl font-bold">Datenschutz&shy;erklärung</h1>
                <p className="text-white">
                    Mit dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der Verarbeitung von
                    personenbezogenen Daten (im Folgenden auch nur als &quot;Daten&quot; bezeichnet) aufklären.
                    Personenbezogene Daten sind alle Daten, die einen persönlichen Bezug zu Ihnen aufweisen, z. B. Name,
                    Adresse, E-Mail-Adresse oder Ihr Nutzerverhalten. Die Datenschutzerklärung gilt für alle von uns
                    vorgenommene Daten-Verarbeitungsvorgänge sowohl im Rahmen unserer Kerntätigkeit als auch für die von
                    uns vorgehaltenen Online-Medien.
                </p>
            </hgroup>
            <h2 className="mt-8 text-2xl font-semibold">Wer bei uns für die Datenverarbeitung verantwortlich ist</h2>
            <address className="text-white not-italic">
                Team One Developers GmbH <br />
                Stafflenbergstraße 44 <br />
                70184 Stuttgart
                <br />
                <a className="text-primary" href="tel:+4971125298690">
                    +49 711 25298690 <br />
                </a>
                <a className="text-primary" href="mailto:info@team-one.de">
                    info@team-one.de <br />
                </a>
                <br />
                Geschäftsführer: Timo Brückel, Julian Richter
            </address>
            <h2 className="mt-8 text-2xl font-semibold">Datenschutzbeauftragter</h2>
            <address className="text-white not-italic">
                IITR Datenschutz GmbH <br />
                Dr. Sebastian Kraska <br />
                Marienplatz 2, 80331 München
            </address>
            <h2 className="mt-8 text-2xl font-semibold">Ihre Rechte nach der DSGVO</h2>
            <p className="text-white">
                Nach der DSGVO stehen Ihnen die nachfolgend aufgeführten Rechte zu, die Sie jederzeit bei dem in Ziffer
                1. dieser Datenschutzerklärung genannten Verantwortlichen geltend machen können:
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">
                    <strong>Recht auf Auskunft:</strong> Sie haben das Recht, von uns Auskunft darüber zu verlangen, ob
                    und welche Daten wir von Ihnen verarbeiten.
                </li>
                <li className="legalULLIPadded">
                    <strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Berichtigung unrichtiger oder
                    Vervollständigung unvollständiger Daten zu verlangen.
                </li>
                <li className="legalULLIPadded">
                    <strong>Recht auf Löschung:</strong> Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.
                </li>
                <li className="legalULLIPadded">
                    <strong>Recht auf Einschränkung:</strong> Sie haben in bestimmten Fällen das Recht zu verlangen,
                    dass wir Ihre Daten nur noch eingeschränkt bearbeiten.
                </li>
                <li className="legalULLIPadded">
                    <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht zu verlangen, dass wir Ihnen
                    oder einem anderen Verantwortlichen Ihre Daten in einem strukturierten, gängigen und
                    maschinenlesebaren Format übermitteln.
                </li>
                <li className="legalULLIPadded">
                    <strong>Beschwerderecht</strong>: Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
                    beschweren. Zuständig ist die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes, Ihres Arbeitsplatzes
                    oder unseres Firmensitzes.
                </li>
            </ul>
            <h2 className="mt-8 text-2xl font-semibold">Widerrufsrecht</h2>
            <p className="text-white">
                Sie haben das Recht, die von Ihnen erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Widerspruchsrecht</h2>
            <p className="text-white">
                Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer Daten, die wir auf unser berechtigtes
                Interesse nach Art. 6 Abs. 1 lit. f DSGVO stützen, Widerspruch einzulegen. Sofern Sie von Ihrem
                Widerspruchsrecht Gebrauch machen, bitten wir Sie um die Darlegung der Gründe. Wir werden Ihre
                personenbezogenen Daten dann nicht mehr verarbeiten, es sei denn, wir können Ihnen gegenüber nachweisen,
                dass zwingende schutzwürdige Gründe an der Datenverarbeitung Ihre Interessen und Rechte überwiegen.
                <br />
                <strong>
                    Unabhängig vom vorstehend Gesagten, haben Sie das jederzeitige Recht, der Verarbeitung Ihrer
                    personenbezogenen Daten für Zwecke der Werbung und Datenanalyse zu widersprechen.
                </strong>
                <br />
                Ihren Widerspruch richten Sie bitte an die oben angegebene Kontaktadresse des Verantwortlichen.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Wann löschen wir Ihre Daten?</h2>
            <p className="text-white">
                Wir löschen Ihre Daten dann, wenn wir diese nicht mehr brauchen oder Sie uns dies vorgeben. Dass
                bedeutet, dass - sofern sich aus den einzelnen Datenschutzhinweisen dieser Datenschutzerklärung nichts
                anderes ergibt - wir Ihre Daten löschen,
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">
                    wenn der Zweck der Datenverarbeitung weggefallen ist und damit die jeweilige in den einzelnen
                    Datenschutzhinweisen genannte Rechtsgrundlage nicht mehr besteht, also bspw.
                    <ul className="legalUL text-white">
                        <li className="legalULLIPadded">
                            nach Beendigung der zwischen uns bestehenden vertraglichen oder mitgliedschaftlichen
                            Beziehungen (Art. 6 Abs. 1 lit. a DSGVO) oder
                        </li>
                        <li className="legalULLIPadded">
                            nach Wegfall unseres berechtigten Interesses an der weiteren Verarbeitung oder Speicherung
                            Ihrer Daten (Art. 6 Abs. 1 lit. f DSGVO),
                        </li>
                    </ul>
                </li>
                <li className="legalULLIPadded">
                    wenn Sie von Ihrem Widerrufsrecht Gebrauch machen und keine anderweitige gesetzliche Rechtsgrundlage
                    für die Verarbeitung im Sinne von Art. 6 Abs. 1 lit. b-f DSGVO eingreift,
                </li>
                <li className="legalULLIPadded">
                    wenn Sie vom Ihrem Widerspruchsrecht Gebrauch machen und der Löschung keine zwingenden
                    schutzwürdigen Gründe entgegenstehen.
                </li>
            </ul>
            <p className="mt-4 text-white">
                Sofern wir (bestimmte Teile) Ihre(r) Daten jedoch noch für andere Zwecke vorhalten müssen, weil dies
                etwa steuerliche Aufbewahrungsfristen (in der Regel 6 Jahre für Geschäftskorrespondenz bzw. 10 Jahre für
                Buchungsbelege) oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen aus
                vertraglichen Beziehungen (bis zu vier Jahren) erforderlich machen oder die Daten zum Schutz der Rechte
                einer anderen natürlichen oder juristischen Person gebraucht werden, löschen wir (den Teil) Ihre(r)
                Daten erst nach Ablauf dieser Fristen. Bis zum Ablauf dieser Fristen beschränken wir die Verarbeitung
                dieser Daten jedoch auf diese Zwecke (Erfüllung der Aufbewahrungspflichten).
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Cookies</h2>
            <p className="text-white">
                Unsere Internetseite nutzt Cookies. Bei Cookies handelt es sich um kleine Textdateien, bestehend aus
                einer Reihe von Zahlen und Buchstaben, die auf dem von Ihnen genutzten Endgerät abgelegt und gespeichert
                werden. Cookies dienen vorrangig dazu, Informationen zwischen dem von Ihnen genutzten Endgerät und
                unserer Webseite auszutauschen. Hierzu gehören u. a. die Spracheinstellungen auf einer Webseite, der
                Login-Status oder die Stelle, an der ein Video geschaut wurde.
            </p>
            <p className="mt-4 text-white">Beim Besuch unserer Webseiten werden zwei Typen von Cookies eingesetzt:</p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">
                    <strong>Temporäre Cookies (Session Cookies):</strong> Diese speichern eine sogenannte Session-ID,
                    mit welcher sich verschiedene Anfragen Ihres Browsers der gemeinsamen Sitzung zuordnen lassen. Die
                    Session-Cookies werden gelöscht, wenn Sie sich ausloggen oder Ihren Browser schließen.
                </li>
                <li className="legalULLIPadded">
                    <strong>Permanente Cookies:</strong> Permanente Cookies bleiben auch nach dem Schließen des Browsers
                    gespeichert. Dadurch erkennt unsere Webseite Ihren Rechner wieder, wenn Sie auf unsere Webseite
                    zurückkehren. In diesen Cookies werden beispielsweise Informationen zu Spracheinstellungen oder
                    Log-In-Informationen gespeichert. Außerdem kann mit diesen Cookies Ihr Surfverhalten dokumentiert
                    und gespeichert werden. Diese Daten können zu Statistik-, Marketing- und Personalisierungs-Zwecken
                    verwendet werden.
                </li>
            </ul>
            <p className="mt-4 text-white">
                Neben der vorstehenden Einteilung können Cookies auch im Hinblick auf ihren Einsatzzweck unterschieden
                werden:
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">
                    <strong>Notwendige Cookies:</strong> Dies sind Cookies, die für den Betrieb unserer Webseite
                    unbedingt erforderlich sind, um Logins oder Warenkörbe für die Dauer Ihrer Sitzung zu speichern oder
                    Cookies, die aus Sicherheitsgründen gesetzt werden.
                </li>
                <li className="legalULLIPadded">
                    <strong>Statistik-, Marketing- und Personalisierungs-Cookies:</strong> Dies sind Cookies, die für
                    Analysezwecke oder die Reichweitenmessung eingesetzt werden. Über solche
                    &quot;Tracking&quot;-Cookies können insbesondere Informationen zu eingegebenen Suchbegriffen oder
                    die Häufigkeit von Seitenaufrufen gespeichert sein. Daneben kann aber auch das Surfverhalten eines
                    einzelnen Nutzers (z. B. Betrachten bestimmter Inhalte, Nutzen von Funktionen etc.) in einem
                    Nutzerprofil gespeichert werden. Solche Profile werden genutzt, um Nutzern Inhalte anzuzeigen, die
                    deren potentiellen Interessen entsprechen. Soweit wir Dienste nutzen, über die Cookies zu
                    Statistik-, Marketing- und Personalisierungs-Zwecken auf Ihrem Endgerät gespeichert werden,
                    informieren wir Sie hierzu gesondert in den nachfolgenden Abschnitten unserer Datenschutzerklärung
                    oder im Rahmen der Einholung Ihrer Einwilligung.
                </li>
            </ul>
            <p className="mt-4 text-white">
                <strong>Betroffene Daten:</strong>
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
                <li className="legalULLIPadded">
                    Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse).
                </li>
            </ul>
            <p className="mt-4 text-white">
                <strong>Betroffene Personen:</strong> Nutzer unserer Onlineangebote
            </p>
            <p className="mt-4 text-white">
                <strong>Verarbeitungszweck:</strong> Ausspielen unserer Internetseiten, Gewährleistung des Betriebs
                unserer Internetseiten, Verbesserung unseres Internetangebotes, Kommunikation und Marketing
            </p>
            <ul className="legalUL mt-4 text-white">
                <strong>Rechtsgrundlage: Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO</strong>
                <br />
                Sofern wir von Ihnen keine Einwilligung in das Setzen der Cookies einholen, stützen wir die Verarbeitung
                Ihrer Daten auf unser berechtigtes Interesse, die Qualität und Benutzerfreundlichkeit unseres
                Internetauftritts, insbesondere der Inhalte und Funktionen zu verbessern. Sie haben über die
                Sicherheitseinstellungen Ihres Browsers, dem Einsatz der von uns im Rahmen unseres berechtigten
                Interesses gesetzten Cookies zu widersprechen. Dort haben Sie die Möglichkeit festzulegen, ob Sie etwa
                von vornherein keine oder nur auf Nachfrage Cookies akzeptieren oder aber festlegen, dass Cookies nach
                jedem Schließen Ihres Browsers gelöscht werden. Werden Cookies für unsere Webseite deaktiviert, können
                möglicherweise nicht mehr alle Funktionen der Webseite vollumfänglich genutzt werden.{" "}
            </ul>
            <ul className="legalUL mt-4 text-white">
                <strong>Einwilligung, Art. 6 Abs. 1 lit. a DSGVO</strong>
                <br />
                Sofern wir Sie vor Ihrem Besuch unserer Internetpräsenz darum bitten, bestimmte Cookies auf Ihr Endgerät
                setzen zu dürfen, und Sie hierein einwilligen, ist in der von Ihnen erteilten Einwilligung die
                Rechtsgrundlage zu sehen. Wir informieren Sie im Rahmen der Einwilligung darüber, welche Cookies wir im
                Einzelnen setzen. Sofern Sie diese Einwilligung nicht erteilen, setzen sich lediglich die sogenannten
                technisch notwendigen Cookies, die für den ordnungsgemäßen Betrieb unserer Internetseiten sowie deren
                Darstellung in Ihrem Browser erforderlich sind. Sofern Sie in das Setzen von Cookies eingewilligt haben,
                haben die jederzeitige Möglichkeit, uns gegenüber der erteilten Einwilligung zu widerrufen.
            </ul>
            <h2 className="mt-8 text-2xl font-semibold">Webhosting</h2>
            <p className="text-white">
                Wir bedienen uns zum Vorhalten unserer Internetseiten eines Anbieters, auf dessen Server unsere
                Internetseiten gespeichert und für den Abruf im Internet verfügbar gemacht werden (Hosting). Hierbei
                können von dem Anbieter all diejenigen über den von Ihnen genutzten Browser übertragenen Daten
                verarbeitet werden, die bei der Nutzung unserer Internetseiten anfallen. Hierzu gehören insbesondere
                Ihre IP-Adresse, die der Anbieter benötigt, um unser Online-Angebot an den von Ihnen genutzten Browser
                ausliefern zu können sowie sämtliche von Ihnen über unsere Internetseite getätigten Eingaben. Daneben
                kann der von uns genutzte Anbieter
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">das Datum und die Uhrzeit des Zugriffs auf unsere Internetseite</li>
                <li className="legalULLIPadded">Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
                <li className="legalULLIPadded">Zugriffsstatus (HTTP-Status)</li>
                <li className="legalULLIPadded">die übertragene Datenmenge</li>
                <li className="legalULLIPadded">der Internet-Service-Provider des zugreifenden Systems</li>
                <li className="legalULLIPadded">der von Ihnen verwendete Browsertyp und dessen Version</li>
                <li className="legalULLIPadded">das von Ihnen verwendete Betriebssystem</li>
                <li className="legalULLIPadded">
                    die Internetseite, von welcher Sie gegebenenfalls auf unsere Internetseite gelangt sind
                </li>
                <li className="legalULLIPadded">
                    die Seiten bzw. Unterseiten, welche Sie auf unserer Internetseite besuchen.
                </li>
            </ul>
            <p className="mt-4 text-white">
                erheben. Die vorgenannten Daten werden als Logfiles auf den Servern unseres Anbieters gespeichert. Dies
                ist erforderlich, um die Stabilität und Sicherheit des Betriebs unserer Internetseite zu gewährleisten.
            </p>
            <p className="mt-4 text-white">
                <strong>Betroffene Daten</strong>
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">Inhaltsdaten (bspw. Posts, Fotos, Videos)</li>
                <li className="legalULLIPadded">Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
                <li className="legalULLIPadded">
                    Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse)
                </li>
            </ul>
            <p className="mt-4 text-white">
                <strong>Betroffene Personen:</strong> Nutzer unserer Internetpräsenz
            </p>
            <p className="mt-4 text-white">
                <strong>Verarbeitungszweck:</strong> Ausspielen unserer Internetseiten, Gewährleistung des Betriebs
                unserer Internetseiten
            </p>
            <p className="mt-4 text-white">
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO
            </p>
            <h3 className="mt-8 text-xl font-semibold">Von uns beauftragter Webhoster: Vercel</h3>
            <h2 className="mt-8 text-2xl font-semibold">Kontaktaufnahme</h2>
            <p className="text-white">
                Soweit Sie uns über E-Mail, Soziale Medien, Telefon, Fax, Post, unser Kontaktformular oder sonstwie
                ansprechen und uns hierbei personenbezogene Daten wie Ihren Namen, Ihre Telefonnummer oder Ihre
                E-Mail-Adresse zur Verfügung stellen oder weitere Angaben zur Ihrer Person oder Ihrem Anliegen machen,
                verarbeiten wir diese Daten zur Beantwortung Ihrer Anfrage im Rahmen des zwischen uns bestehenden
                vorvertraglichen oder vertraglichen Beziehungen.
            </p>
            <p className="mt-4 text-white">
                <strong>Betroffene Daten:</strong>
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">Bestandsdaten (bspw. Namen, Adressen)</li>
                <li className="legalULLIPadded">Kontakdaten (bspw. E-Mail-Adresse, Telefonnummer, Postanschrift)</li>
                <li className="legalULLIPadded">Inhaltsdaten (Texte, Fotos, Videos)</li>
                <li className="legalULLIPadded">Vertragsdaten (bspw. Vertragsgegenstand, Vertragsdauer)</li>
            </ul>
            <p className="mt-4 text-white">
                <strong>Betroffene Personen:</strong> Interessenten, Kunden, Geschäfts- und Vertragspartner
            </p>
            <p className="mt-4 text-white">
                <strong>Verarbeitungszweck:</strong> Kommunikation sowie Beantwortung von Kontaktanfragen, Büro und
                Organisationsverfahren
            </p>
            <p className="mt-4 text-white">
                <strong>Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche Anfragen, Art. 6 Abs. 1 lit. b
                DSGVO, berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Der Umgang mit ihren Daten im Bewerbungsverfahren</h2>
            <p className="text-white">
                Sofern Sie sich bei uns bewerben, verarbeiten wir die von Ihnen im Bewerbungsverfahren an uns
                übermittelten personenbezogenen Daten wie bspw. Ihren Name, Adresse, Wohnort, Alter, Bewerbungsfoto,
                E-Mail und Telefonnummer, Beruflicher Werdegang inklusive Schulen, Ausbildung, Studium. Sofern Sie die
                Daten per E-Mail oder über ein Kontaktformular unseres Online-Auftritts senden, erfolgt die Verarbeitung
                auf elektronischem Wege. Bei einer Übersendung Ihrer Bewerbung über das Kontaktformular ist die
                Übertragung Ihrer Daten nach dem Stand der Technik verschlüsselt. Sofern Sie Ihre Daten per E-Mail
                übersenden, weisen wir daraufhin, dass die Übertragung in der Regel unverschlüsselt erfolgt. Kommt es im
                Anschluss des Bewerbungsverfahrens zum Abschluss eines Arbeitsvertrages, speichern wir Ihre Daten zum
                Zwecke der Abwicklung des Beschäftigungsverhältnisses unter Beachtung der gesetzlichen Vorschriften.
            </p>
            <p className="mt-4 text-white">
                <strong>Betroffene Daten:</strong>
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">Bestandsdaten (bspw. Namen, Adressen)</li>
                <li className="legalULLIPadded">Kontakdaten (bspw. E-Mail-Adresse, Telefonnummer, Postanschrift)</li>
                <li className="legalULLIPadded">Zahlungsdaten (bspw. Bankverbindungsdaten, Rechnungen)</li>
                <li className="legalULLIPadded">Vertragsdaten (bspw. Vertragsgegenstand, Vertragsdauer)</li>
            </ul>
            <p className="mt-4 text-white">
                <strong>Betroffene Personen:</strong> Bewerber und Bewerberinnen
            </p>
            <p className="mt-4 text-white">
                <strong>Verarbeitungszweck:</strong> Abwicklung des Bewerbungsverfahrens
            </p>
            <p className="mt-4 text-white">
                <strong>Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche Anfragen, Art. 6 Abs. 1 lit. b
                DSGVO, rechtliche Verpflichtung, Art. 6 Abs. 1 lit. c DSGVO
            </p>
            <p className="mt-4 text-white">
                <strong>Löschung:</strong> Kommt es nicht zu dem Abschluss eines Arbeitsvertrages, werden Ihre Daten
                nach Abschluss des Bewerbungsverfahrens bzw. spätestens 2 Monate nach dessen Abschluss gelöscht. Dies
                gilt nicht, sofern gesetzliche Bestimmungen der Löschung entgegenstehen oder die weitere Speicherung
                Ihrer Daten zum Zwecke der Beweisführung erforderlich ist, etwa in einem Verfahren nach dem Allgemeinen
                Gleichbehandlungsgesetz (AGG). Das Bewerbungsverfahren gilt mit der Absendung der Absage an Sie als
                abgeschlossen.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Webanalyse und Statistik</h2>
            <article className="text-white">
                Um die Besucherströme auf unserer Internetpräsenz zu erfassen und statistisch auszuwerten, setzen wir
                Webanalyse-Dienste ein. Solche Dienste erfassen unter anderem Daten darüber, von welcher Internetseite
                Sie auf unsere Internetpräsenz gelangt sind (sogenannte Referrer), auf welche Seiten unserer
                Internetpräsenz Sie zugegriffen haben, wie lange Sie unsere Seiten besucht und welche Interaktionen Sie
                dort vorgenommen haben. Daneben werden Daten zu dem von Ihnen verwendeten Browser, Computersystem sowie
                der Geräteart erhoben. Außerdem können über einen solchen Dienst auch demographische Informationen, wie
                bspw. das Alter oder das Geschlecht als pseudonyme Werte erfasst werden. Sofern Sie in die Erhebung
                Ihrer Standortdaten eingewilligt haben, können, je nach Anbieter, auch diese verarbeitet werden.
                <br />
                Um diese Daten zu erfassen und zu speichern, setzt der von uns verwendete Webanalyse-Dienst einen Cookie
                auf das von Ihnen genutzte Endgerät, mit dem auch die Ihnen zugeordnete IP-Adresse erhoben wird.
                Allerdings wird diese über ein sogenanntes IP-Masking-Verfahren gekürzt, so dass die IP-Adresse nicht
                mehr Ihrem Besuch auf unserer Internetseite zugeordnet werden kann. Auch im Übrigen werden keine
                Klardaten wie Namen oder E-Mail-Adressen gespeichert. Weder wir noch der von uns eingesetzte Dienst
                kennt die Identität der Besucher unserer Internetseiten.
                <br />
                Wir möchten Sie darauf hinweisen, dass je nach Sitzland des unten genannten Diensteanbieters die über
                den Dienst erfassten Daten außerhalb des Raumes der Europäischen Union übertragen und verarbeitet werden
                können. Es besteht in diesem Fall das Risiko, dass das von der DSGVO vorgeschriebene Datenschutzniveau
                nicht eingehalten und die Durchsetzung Ihrer Rechte nicht oder nur erschwert erfolgen kann.
            </article>
            <p className="mt-4 text-white">
                <strong>Betroffene Daten:</strong>
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
                <li className="legalULLIPadded">
                    Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse).
                </li>
            </ul>
            <p className="mt-4 text-white">
                <strong>Betroffene Personen:</strong> Nutzer unserer Onlineangebote
            </p>
            <p className="mt-4 text-white">
                <strong>Verarbeitungszweck:</strong> Reichweitenmessung, Erfolgskontrolle von Kampagnen, Remarketing
                sowie interessen- und verhaltensbedingtes Marketing
            </p>
            <p className="mt-4 text-white">
                <strong>Rechtsgrundlage:</strong> Sofern wir Sie vor dem Einsatz des jeweiligen Dienstes um Ihre
                Einwilligung gebeten haben, liegt hierin die Rechtsgrundlage, Art. 6 Abs. 1 lit. a DSGVO. Im Übrigen
                setzen wir den jeweiligen Dienst auf Grund unseres berechtigten Interesse ein, die Besucherströme
                unserer Internetseiten analysieren, um hierüber die Funktionen, Angebote sowie das Nutzungserlebnis
                fortlaufend verbessern zu können, Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Content-Dienste</h2>
            <article className="text-white">
                Wir nutzen bestimmte Dienste, um über unsere Internetpräsenz bestimmte Inhalte oder Grafiken (Videos,
                Bilder, Musik, Schriftarten, Kartenmaterial) ausspielen zu können. Dabei verarbeiten die von uns
                eingesetzten Dienste die Ihnen zum Zeitpunkt Ihres Besuchs auf unseren Internetseiten zugeordnete
                IP-Adresse, da nur so der jeweilige Inhalt in dem von Ihnen verwendeten Browser dargestellt werden kann.
                Darüber hinaus können die Anbieter dieser Dienste weitere Cookies auf Ihr Endgerät setzen, über die
                Informationen über Ihr Nutzungsverhalten, Ihre Interessen, das von Ihnen verwendete Gerät und den
                verwendeten Browser sowie Zeitpunkt und Dauer Ihrer Sitzung erhoben werden. Diese Daten verwenden die
                Anbieter regelmäßig für Analyse-, Statistik- und Marketingzwecke. Zudem können diese Informationen
                können auch mit Informationen aus anderen Quellen verbunden werden. Dies gilt insbesondere dann, wenn
                Sie selbst einen Account bei dem Dienstanbieter unterhalten und zum Zeitpunkt der Sitzung dort
                eingeloggt sind. <br />
                Wir weisen darauf hin, dass je nach Sitzland des nachstehend genannten Diensteanbieters die nachfolgend
                näher benannten Daten auf Server außerhalb des Raumes der Europäischen Union übertragen und verarbeitet
                werden können. Es besteht in diesem Fall das Risiko, dass das von der DSGVO vorgeschriebene
                Datenschutzniveau nicht eingehalten und die Durchsetzung Ihrer Rechte nicht oder nur erschwert erfolgen
                kann.
            </article>
            <p className="mt-4 text-white">
                <strong>Betroffene Daten:</strong>
            </p>
            <ul className="legalUL mt-4 text-white">
                <li className="legalULLIPadded">Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)</li>
                <li className="legalULLIPadded">
                    Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse).
                </li>
            </ul>
            <p className="mt-4 text-white">
                <strong>Betroffene Personen:</strong> Nutzer unserer Internetpräsenz
            </p>
            <p className="mt-4 text-white">
                <strong>Verarbeitungszweck:</strong> Ausspielen unserer Internetseiten, Anbieten von Inhalten,
                Gewährleistung des Betriebs unserer Internetseiten
            </p>
            <p className="mt-4 text-white">
                <strong>Rechtsgrundlage:</strong> Einwilligung über Cookie-Consent-Banner, Art. 6 Abs. 1 lit. a DSGVO,
                berechtigte Interessen, Art. 6 Abs. 1 lit. f DSGVO
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Sicherheitsmaßnahmen</h2>
            <article className="text-white">
                Wir treffen im Übrigen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand der Technik,
                um die Vorschriften der Datenschutzgesetze einzuhalten und Ihre Daten gegen zufällige oder vorsätzliche
                Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff
                Dritter zu schützen.
            </article>
        </Section>
    )
}

export default Privacy
