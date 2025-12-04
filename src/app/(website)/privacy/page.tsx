import { Section } from "@/components/layout/Section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Erahre mehr darüber, wie wir mit deinen Daten umgehen."
}

const Privacy = () => {
    return (
        <>
            <Section className="pb-56">
                <h1 className="mt-8 text-3xl font-bold">Datenschutzerklärung</h1>
                <h2 className="mt-8">Wer bei uns für die Datenverarbeitung verantwortlich ist:</h2> <br />
                <div>
                    <address className="not-italic">
                        Team One Developers GmbH <br />
                        Stafflenbergstraße 44 <br />
                        70184 Stuttgart
                        <br />
                        <p>
                            +49 711 25298690 <br />
                        </p>
                        <p>
                            info@team-one.de <br />
                        </p>
                        <br />
                        Geschäftsführer: Timo Brückel, Julian Richter
                    </address>
                    <h2 className="mt-8 font-bold">Datenschutzbeauftragter</h2>
                    <address className="not-italic">
                        IITR Datenschutz GmbH <br />
                        Dr. Sebastian Kraska <br />
                        Marienplatz 2, 80331 München
                    </address>
                </div>
                <DataPrivacy />
            </Section>
        </>
    )
}

export default Privacy

const DataPrivacy = () => {
    return (
        <>
            <h2 className="mt-4 text-2xl font-bold">Allgemeines zur Datenverarbeitung</h2>

            <div>
                <div className="text-1xl mt-4 font-bold">Umfang der Verarbeitung personenbezogener Daten</div>
                <div>
                    Wir verarbeiten personenbezogene Daten unserer Nutzer nur, soweit dies erforderlich ist, um unsere
                    Website, Inhalte und Dienstleistungen bereitzustellen. Die Verarbeitung erfolgt in der Regel nur,
                    wenn Sie zuvor eingewilligt haben. In Ausnahmefällen verarbeiten wir Daten auch ohne vorherige
                    Einwilligung, wenn dies aus tatsächlichen Gründen nicht möglich ist und eine gesetzliche Grundlage
                    dies erlaubt.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">
                    Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                </div>
                <div>
                    Soweit wir für die Verarbeitung personenbezogener Daten eine Einwilligung der betroffenen Person
                    einholen, ist Art. 6 Abs. 1 lit. a DSGVO die Rechtsgrundlage. Erfolgt die Verarbeitung zur Erfüllung
                    eines Vertrags, dessen Vertragspartei die betroffene Person ist, stützen wir uns auf Art. 6 Abs. 1
                    lit. b DSGVO. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher
                    Maßnahmen erforderlich sind. Wenn die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung
                    erforderlich ist, der unser Unternehmen unterliegt, bildet Art. 6 Abs. 1 lit. c DSGVO die
                    Rechtsgrundlage. Ist die Verarbeitung erforderlich, um lebenswichtige Interessen der betroffenen
                    Person oder einer anderen natürlichen Person zu schützen, beruht sie auf Art. 6 Abs. 1 lit. d DSGVO.
                    Erfolgt die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines
                    Dritten und überwiegen die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person
                    nicht, ist Art. 6 Abs. 1 lit. f DSGVO die Rechtsgrundlage
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Datenlöschung und Speicherdauer</div>
                <div>
                    Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck
                    der Speicherung entfällt. Darüber hinaus kann eine Speicherung erfolgen, wenn dies durch europäische
                    oder nationale Gesetze, Verordnungen oder sonstige Vorschriften vorgesehen ist, denen der
                    Verantwortliche unterliegt. Eine Sperrung oder Löschung erfolgt auch dann, wenn eine gesetzlich
                    vorgeschriebene Speicherfrist abläuft, es sei denn, die Daten werden weiterhin für einen
                    Vertragsabschluss oder zur Vertragserfüllung benötigt.
                </div>
            </div>

            <h3 className="mt-4 text-2xl font-bold">Bereitstellung der Website und Erstellung von Logfiles</h3>
            <div>
                <div className="text-1xl mt-4 font-bold">Beschreibung und Umfang der Datenverarbeitung</div>
                <div>
                    Bei jedem Aufruf unserer Website erfasst unser System automatisch Daten und Informationen vom
                    Computersystem des aufrufenden Rechners.
                    <br />
                    <br />
                    Dabei werden folgende Daten erhoben:
                    <br />
                    <br />
                    1. Browsertyp und verwendete Version
                    <br />
                    2. Betriebssystem des Nutzers
                    <br />
                    3. Internet-Service-Provider des Nutzers
                    <br />
                    4. IP-Adresse des Nutzers
                    <br />
                    5. Datum und Uhrzeit des Zugriffs
                    <br />
                    6. Websites, von denen das System des Nutzers auf unsere Website gelangt
                    <br />
                    7. Websites, die vom System des Nutzers über unsere Website aufgerufen werden
                    <br />
                    <br />
                    Diese Daten werden auch in den Logfiles unseres Systems gespeichert. Eine Speicherung zusammen mit
                    anderen personenbezogenen Daten des Nutzers erfolgt nicht.
                    <br />
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Rechtsgrundlage für die Datenverarbeitung</div>
                <div>
                    Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit.
                    f DSGVO.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Zweck der Datenverarbeitung</div>
                <div>
                    Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um die Website an den
                    Rechner des Nutzers auszuliefern. Dafür muss die IP-Adresse des Nutzers für die Dauer der Sitzung
                    gespeichert bleiben.
                    <br />
                    <br />
                    Die Speicherung in Logfiles dient dazu, die Funktionsfähigkeit der Website sicherzustellen. Außerdem
                    nutzen wir die Daten zur technischen Optimierung der Website und zur Gewährleistung der Sicherheit
                    unserer informationstechnischen Systeme. Eine Auswertung zu Marketingzwecken erfolgt nicht.
                    <br />
                    <br />
                    Darin liegt auch unser berechtigtes Interesse an der Datenverarbeitung gemäß Art. 6 Abs. 1 lit. f
                    DSGVO.
                    <br />
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Dauer der Speicherung</div>
                <div>
                    Die Daten werden gelöscht, sobald sie für den Zweck, zu dem sie erhoben wurden, nicht mehr benötigt
                    werden. Bei der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die
                    jeweilige Sitzung beendet ist.
                    <br />
                    <br />
                    Bei der Speicherung in Logfiles erfolgt die Löschung spätestens nach sieben Tagen. Eine längere
                    Speicherung ist möglich; in diesem Fall werden die IP-Adressen der Nutzer gelöscht oder
                    anonymisiert, sodass keine Zuordnung mehr möglich ist.
                    <br />
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Widerspruchs- und Beseitigungsmöglichkeit</div>
                <div>
                    Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung in Logfiles sind für den
                    Betrieb der Website zwingend erforderlich. Daher besteht für den Nutzer keine
                    Widerspruchsmöglichkeit.
                </div>
            </div>

            <h3 className="mt-4 text-2xl font-bold">Verwendung von Cookies</h3>

            <div>
                <div className="text-1xl mt-4 font-bold">Beschreibung und Umfang der Datenverarbeitung</div>
                <div>
                    Unsere Website verwendet Cookies. Cookies sind Textdateien, die im oder durch den Internetbrowser
                    auf dem Computersystem des Nutzers gespeichert werden. Wenn ein Nutzer unsere Website aufruft, kann
                    ein Cookie auf seinem System gespeichert werden. Dieses Cookie enthält eine charakteristische
                    Zeichenfolge, die den Browser beim erneuten Aufruf eindeutig identifiziert.
                    <br />
                    <br />
                    Wir setzen Cookies ein, um die Funktionsfähigkeit unserer Website sicherzustellen. Einige Elemente
                    unserer Seite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel wiedererkannt
                    wird.
                    <br />
                    <br />
                    Zusätzlich verwenden wir Cookies, die eine Analyse des Surfverhaltens der Nutzer ermöglichen.
                    <br />
                    <br />
                    So können beispielsweise folgende Daten übermittelt werden:
                    <br />
                    <br />
                    1. Eingegebene Suchbegriffe
                    <br />
                    2. Häufigkeit von Seitenaufrufen
                    <br />
                    3. Nutzung von Website-Funktionen
                    <br />
                    <br />
                    Beim Aufruf unserer Website informieren wir die Nutzer über den Einsatz von Cookies zu
                    Analysezwecken und holen ihre Einwilligung zur Verarbeitung der dabei erhobenen personenbezogenen
                    Daten ein.
                    <br />
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Rechtsgrundlage für die Datenverarbeitung</div>
                <div>
                    Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten beim Einsatz technisch notwendiger
                    Cookies im Sinne von § 25 Abs. 2 TTDSG ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse
                    liegt in der sicheren und funktionsfähigen Bereitstellung unserer Website.
                    <br />
                    <br />
                    Soweit wir Cookies zu Analysezwecken einsetzen und hierfür eine Einwilligung des Nutzers vorliegt,
                    erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
                    <br />
                    <br />
                    Ohne Einwilligung werden Analyse-Cookies nicht gesetzt. Der Einsatz technisch nicht erforderlicher
                    Cookies erfolgt ausschließlich nach vorheriger Einwilligung des Nutzers.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Zweck der Datenverarbeitung</div>
                <div>
                    Der Zweck der Verwendung technisch notwendiger Cookies ist es, die Nutzung unserer Website zu
                    ermöglichen und deren Funktionen sicherzustellen. Einige Funktionen unserer Website können ohne
                    Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem
                    Seitenwechsel wiedererkannt wird.
                    <br />
                    <br />
                    Für folgende Zwecke setzen wir technisch notwendige Cookies ein:
                    <br />
                    <br />
                    1. Sicherheit
                    <br />
                    2. Identitätsprüfung
                    <br />
                    3. Netzwerkmanagement
                    <br />
                    <br />
                    Die durch technisch notwendige Cookies erhobenen Daten werden nicht zur Erstellung von
                    Nutzerprofilen verwendet.
                    <br />
                    <br />
                    Analyse-Cookies verwenden wir, um die Qualität unserer Website und ihrer Inhalte zu verbessern. Sie
                    helfen uns zu verstehen, wie unsere Website genutzt wird, damit wir unser Angebot stetig optimieren
                    können.
                    <br />
                    <br />
                    Weitere Zwecke können die Messung der Effektivität von Werbung, die Erfassung von Interessen der
                    Besucher und die Anpassung von Werbung an persönliche Bedürfnisse sein.
                    <br />
                    <br />
                    In diesen Zwecken liegt unser berechtigtes Interesse an der Datenverarbeitung, soweit sie nach Art.
                    6 Abs. 1 lit. f DSGVO erfolgt.
                    <br />
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">
                    Dauer der Speicherung, Widerspruchs- und Beseitigungsmöglichkeit
                </div>
                <div>
                    Cookies werden auf dem Rechner des Nutzers gespeichert und von dort an unsere Website übermittelt.
                    Sie haben als Nutzer die volle Kontrolle über die Verwendung von Cookies. Durch eine entsprechende
                    Einstellung in Ihrem Internetbrowser können Sie die Speicherung von Cookies deaktivieren oder
                    einschränken. Bereits gespeicherte Cookies können Sie jederzeit löschen. Dies kann auch
                    automatisiert erfolgen. Bitte beachten Sie, dass bei Deaktivierung von Cookies möglicherweise nicht
                    mehr alle Funktionen unserer Website vollumfänglich nutzbar sind.
                </div>
            </div>

            <h3 className="mt-4 text-2xl font-bold">Kontaktformular</h3>

            <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular
                inklusive der von Ihnen angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für mögliche
                Anschlussfragen bei uns gespeichert. Eine Weitergabe dieser Daten erfolgt nicht ohne Ihre Einwilligung.
            </p>
            <p>
                Die Verarbeitung der im Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen. Dazu
                genügt eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung widerrufen oder der Zweck für die Speicherung entfällt (z. B. nach
                abgeschlossener Bearbeitung Ihrer Anfrage). Gesetzliche Aufbewahrungspflichten bleiben unberührt.
            </p>
            <h3 className="mt-4 text-2xl font-bold">Google Analytics</h3>
            <div>
                <p>
                    Soweit Sie Ihre Einwilligung erteilt haben, wird auf dieser Website Google Analytics 4 eingesetzt,
                    ein Webanalysedienst der Google LLC. Verantwortlich für Nutzer in der EU, dem EWR und der Schweiz
                    ist Google Ireland Limited, Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
                    („Google“).
                </p>
            </div>

            <div>
                <div className="text-1xl mt-4 font-bold">Umfang der Verarbeitung</div>
                <div>
                    Google Analytics verwendet Cookies, die eine Analyse Ihrer Nutzung unserer Website ermöglichen. Die
                    durch die Cookies erhobenen Informationen über Ihre Nutzung dieser Website werden in der Regel an
                    einen Server von Google in den USA übertragen und dort gespeichert.
                    <br />
                    <br />
                    Wir nutzen die Funktion User-ID. Damit können wir einer oder mehreren Sitzungen (und den Aktivitäten
                    innerhalb dieser Sitzungen) eine eindeutige, dauerhafte ID zuweisen und das Nutzerverhalten
                    geräteübergreifend analysieren.
                    <br />
                    <br />
                    Wir setzen Google Signale ein. Dadurch erfasst Google Analytics zusätzliche Informationen zu
                    Nutzern, die personalisierte Anzeigen aktiviert haben (z. B. Interessen und demografische Daten).
                    Anzeigen können in geräteübergreifenden Remarketing-Kampagnen an diese Nutzer ausgeliefert werden.
                    <br />
                    <br />
                    Bei Google Analytics 4 ist die IP-Anonymisierung standardmäßig aktiviert. Ihre IP-Adresse wird von
                    Google innerhalb der Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des
                    Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle
                    IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von
                    Google Analytics von Ihrem Browser übermittelte IP-Adresse wird laut Google nicht mit anderen Daten
                    von Google zusammengeführt.
                    <br />
                    <br />
                    Während Ihres Website-Besuchs wird Ihr Nutzerverhalten in Form von „Ereignissen“ erfasst. Dazu
                    zählen beispielsweise:
                    <br />
                    <br />- Seitenaufrufe
                    <br />- Erstmaliger Besuch der Website
                    <br />- Start der Sitzung
                    <br />- Ihr Klickpfad und Interaktionen mit der Website
                    <br />- Scrolls (z. B. bis zum Seitenende)
                    <br />- Klicks auf externe Links
                    <br />- Interne Suchanfragen
                    <br />- Interaktionen mit Videos
                    <br />- Dateidownloads
                    <br />- Gesehene oder angeklickte Anzeigen
                    <br />- Spracheinstellung
                    <br />
                    <br />
                    Zudem werden erfasst:
                    <br />
                    <br />- Ihr ungefährer Standort (Region)
                    <br />- Ihre IP-Adresse (in gekürzter Form)
                    <br />- Technische Informationen zu Ihrem Browser und Endgerät (z. B. Spracheinstellung,
                    Bildschirmauflösung)
                    <br />- Ihr Internetanbieter
                    <br />- Die Referrer-URL (die Website oder das Werbemittel, über das Sie auf unsere Website gelangt
                    sind)
                    <br />
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Zwecke der Verarbeitung</div>
                <div>
                    Im Auftrag des Betreibers dieser Website verwendet Google die Informationen, um Ihre Nutzung der
                    Website auszuwerten, Reports über die Website-Aktivitäten zusammenzustellen und weitere mit der
                    Nutzung der Website und der Internetnutzung verbundene Dienstleistungen zu erbringen. Die durch
                    Google Analytics bereitgestellten Reports dienen der Analyse und Optimierung der Leistung unserer
                    Website.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Empfänger</div>
                <div>
                    Empfänger der Daten sind bzw. können sein:
                    <br />
                    <br />- Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (als
                    Auftragsverarbeiter nach Art. 28 DSGVO)
                    <br />- Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
                    <br />- Alphabet Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
                    <br />
                    <br />
                    Es kann nicht ausgeschlossen werden, dass US-amerikanische Behörden auf die bei Google gespeicherten
                    Daten zugreifen.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Drittlandtransfer</div>
                <div>
                    Soweit Daten außerhalb der EU bzw. des EWR verarbeitet werden und kein dem europäischen Standard
                    entsprechendes Datenschutzniveau besteht, haben wir zur Herstellung eines angemessenen
                    Datenschutzniveaus mit dem Dienstleister EU-Standardvertragsklauseln abgeschlossen. Die
                    Muttergesellschaft von Google Ireland, Google LLC, hat ihren Sitz in Kalifornien, USA. Eine
                    Übermittlung von Daten in die USA sowie ein Zugriff US-amerikanischer Behörden auf die bei Google
                    gespeicherten Daten kann nicht ausgeschlossen werden. Die USA gelten derzeit aus
                    datenschutzrechtlicher Sicht als Drittland. Sie haben dort nicht die gleichen Rechte wie innerhalb
                    der EU bzw. des EWR. Unter Umständen stehen Ihnen keine wirksamen Rechtsbehelfe gegen Zugriffe von
                    Behörden zu.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Speicherdauer</div>
                <div>
                    Die von uns gesendeten und mit Cookies verknüpften Daten werden nach 2 Monaten automatisch gelöscht.
                    Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Rechtsgrundlage</div>
                <div>
                    Rechtsgrundlage für diese Datenverarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 S. 1 lit. a
                    DSGVO in Verbindung mit Art. 49 Abs. 1 lit. a DSGVO.
                </div>
            </div>

            <div>
                <div className="text-1xl mt-4 font-bold">Widerruf</div>
                <div>
                    Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie die
                    Cookie-Einstellungen aufrufen und dort Ihre Auswahl ändern. Die Rechtmäßigkeit der bis zum Widerruf
                    erfolgten Verarbeitung bleibt unberührt.
                    <br />
                    <br />
                    Sie können die Speicherung von Cookies auch von vornherein durch eine entsprechende Einstellung
                    Ihrer Browser-Software verhindern. Bitte beachten Sie, dass bei vollständiger Ablehnung von Cookies
                    die Funktionalität dieser und anderer Websites eingeschränkt sein kann.
                    <br />
                    <br />
                    Sie können außerdem die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website
                    bezogenen Daten (einschließlich Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
                    durch Google verhindern, indem Sie:
                    <br />
                    <br />- Ihre Einwilligung in das Setzen des Cookies nicht erteilen oder
                    <br />- das Browser-Add-on zur Deaktivierung von Google Analytics{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">
                        hier herunterladen und installieren
                    </a>
                    .
                    <br />
                    <br />
                    Nähere Informationen zu den Nutzungsbedingungen von Google Analytics und zum Datenschutz bei Google
                    finden Sie unter{" "}
                    <a
                        href="https://marketingplatform.google.com/about/analytics/terms/de/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://marketingplatform.google.com/about/analytics/terms/de/
                    </a>{" "}
                    und{" "}
                    <a href="https://policies.google.com/?hl=de" target="_blank" rel="noopener noreferrer">
                        https://policies.google.com/?hl=de
                    </a>
                    .
                </div>
            </div>

            <h3 className="mt-4 text-2xl font-bold">HubSpot</h3>
            <div>
                <p>
                    Die Daten, die Sie uns über das Kontaktformular übermitteln, werden an HubSpot weitergeleitet.
                    HubSpot ist ein Software-Unternehmen aus den USA mit einer Niederlassung in Europa: HubSpot Ireland
                    Limited, 2nd Floor, 30 North Wall Quay, Dublin 1, Irland.
                </p>
                <p>
                    Wir nutzen diese integrierte Software-Lösung als CRM-Tool für unser Marketing, die Lead-Generierung
                    und Kundendienstzwecke.
                </p>
            </div>

            <h3 className="mt-4 text-2xl font-bold">Whitepaper</h3>
            <div>
                <p>
                    Wenn Sie über unsere Website ein Whitepaper anfordern, werden die von Ihnen im Formular angegebenen
                    Daten, einschließlich Ihrer Kontaktdaten, zum Zweck der Bearbeitung Ihrer Anfrage bei uns
                    gespeichert.
                </p>
                <p>
                    Das Bereitstellen Ihrer Daten erfolgt als Gegenleistung für den Erhalt des Whitepapers. Nach
                    Bestätigung Ihrer Daten sind Sie für unsere Mailings zu dem jeweiligen Themenfeld des Whitepapers
                    angemeldet und erhalten von uns entsprechende Informationen. Sie können sich jederzeit kostenfrei
                    und mit Wirkung für die Zukunft von der Mailingliste abmelden, entweder per E-Mail an{" "}
                    <a href="mailto:info@team-one.de">info@team-one.de</a> oder durch Anklicken des Abmelde-Links am
                    Ende des Mailings.
                </p>
            </div>
            <h3 className="mt-4 text-2xl font-bold">Usercentrics</h3>
            <div>
                <p>
                    Diese Website nutzt das Cookie-Einwilligungsmanagement von Usercentrics, um Ihre Einwilligung gemäß
                    § 25 TTDSG und Art. 6 Abs. 1 lit. a DSGVO zur Speicherung bestimmter Cookies sowie zum Zugriff auf
                    Ihr Endgerät einzuholen und datenschutzkonform zu dokumentieren. Anbieter dieser Technologie ist die
                    Usercentrics GmbH, Rosental 4, 80331 München, Website:
                    <a target="_blank" rel="noopener noreferrer" href="https://usercentrics.com/de/">
                        https://usercentrics.com/de/
                    </a>
                    (im Folgenden „Usercentrics“).
                </p>
                <p>Wenn Sie unsere Website aufrufen, werden folgende Daten an Usercentrics übertragen:</p>
                <ul>
                    <li>Ihre Einwilligung(en) bzw. der Widerruf oder die Ablehnung Ihrer Einwilligung(en)</li>
                    <li>Ihre IP-Adresse</li>
                    <li>Informationen über Ihren Browser</li>
                    <li>Informationen über Ihr Endgerät</li>
                    <li>Zeitpunkt Ihres Besuchs auf der Website</li>
                </ul>
                <p>
                    Usercentrics speichert außerdem ein Cookie in Ihrem Browser, um die erteilten Einwilligungen bzw.
                    deren Widerruf konkreten Nutzern zuordnen zu können und Ihre Auswahl beim nächsten Besuch
                    wiederzuerkennen. Die so erfassten Daten werden gespeichert, bis Sie uns zur Löschung auffordern,
                    das Usercentrics-Cookie selbst löschen oder der Zweck der Speicherung entfällt. Gesetzliche
                    Aufbewahrungspflichten bleiben unberührt.
                </p>
                <p>
                    Der Einsatz von Usercentrics erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den
                    Einsatz bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f DSGVO.
                    Unser berechtigtes Interesse liegt in der rechtssicheren Dokumentation und Nachweisbarkeit von
                    Einwilligungen.
                </p>
            </div>

            <h3 className="mt-4 text-2xl font-bold">Google Tag Manager</h3>
            <div>
                <p>
                    Soweit Sie Ihre Einwilligung erteilt haben, nutzen wir den Google Tag Manager. Anbieter ist Google
                    Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Der Google Tag Manager erleichtert
                    uns die Einbindung und Verwaltung von Tags. Tags sind kleine Codeelemente, die unter anderem dazu
                    dienen, den Traffic und das Besucherverhalten zu analysieren, die Wirkung von Online-Werbung und
                    sozialen Kanälen zu erfassen sowie Marketingmaßnahmen und die Ausrichtung auf Zielgruppen zu
                    steuern. Weitere Informationen zum Google Tag Manager finden Sie unter
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/intl/de/tagmanager/use-policy.html"
                    >
                        https://www.google.com/intl/de/tagmanager/use-policy.html
                    </a>
                    .
                </p>
                <p>
                    Der Einsatz des Google Tag Managers erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1
                    lit. a DSGVO i.V.m. § 25 TTDSG.
                </p>

                <p>
                    <strong>Google Ads und Google Conversion-Tracking</strong>
                </p>
                <p>
                    Diese Website verwendet Google Ads, ein Online-Werbeprogramm von Google LLC, 1600 Amphitheatre
                    Parkway, Mountain View, CA 94043, USA („Google“). Im Rahmen von Google Ads nutzen wir das
                    Conversion-Tracking. Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für
                    das Conversion-Tracking gesetzt. Diese Cookies sind kleine Textdateien, die Ihr Browser auf Ihrem
                    Endgerät speichert. Sie verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen
                    Identifizierung.
                </p>
                <p>
                    Wenn Sie bestimmte Seiten dieser Website besuchen und das Cookie noch gültig ist, können Google und
                    wir erkennen, dass Sie auf die Anzeige geklickt haben und zu unserer Seite weitergeleitet wurden.
                    Jeder Google-Ads-Kunde erhält ein eigenes Cookie. Cookies können nicht über die Websites anderer
                    Ads-Kunden nachverfolgt werden. Die mit dem Conversion-Cookie eingeholten Informationen dienen dazu,
                    Conversion-Statistiken zu erstellen. Wir erfahren die Gesamtzahl der Nutzer, die auf unsere Anzeige
                    geklickt haben und zu einer Conversion-Tracking-Seite weitergeleitet wurden, erhalten jedoch keine
                    Informationen, mit denen sich Nutzer persönlich identifizieren lassen.
                </p>
                <p>
                    Wenn Sie nicht am Tracking teilnehmen möchten, können Sie dem widersprechen, indem Sie das
                    Conversion-Tracking-Cookie über die Einstellungen Ihres Browsers deaktivieren. Sie werden dann nicht
                    in die Conversion-Statistiken aufgenommen.
                </p>
                <p>
                    Die Speicherung von Conversion-Cookies erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1
                    lit. a DSGVO i.V.m. § 25 TTDSG. Unser berechtigtes Interesse an der Analyse des Nutzerverhaltens und
                    der Optimierung unseres Webangebots und unserer Werbung kann zudem auf Art. 6 Abs. 1 lit. f DSGVO
                    gestützt sein.
                </p>
                <p>
                    Weitere Informationen zu Google Ads und Google Conversion-Tracking finden Sie in den
                    Datenschutzhinweisen von Google:
                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.de/policies/privacy/">
                        https://www.google.de/policies/privacy/
                    </a>
                    .
                </p>
                <p>
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden,
                    Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                    ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei
                    der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
            </div>

            <h3 className="mt-4 text-2xl font-bold">Rechte der betroffenen Person</h3>
            <p>
                Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener im Sinne der DSGVO und es
                stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
            </p>

            <div className="text-1xl mt-4 font-bold">Auskunftsrecht</div>
            <div>
                Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die
                Sie betreffen, von uns verarbeitet werden.
                <br />
                <br />
                Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen Auskunft über folgende
                Informationen verlangen:
                <br />
                <br />
                1. die Zwecke der Verarbeitung Ihrer personenbezogenen Daten;
                <br />
                2. die Kategorien der verarbeiteten personenbezogenen Daten;
                <br />
                3. die Empfänger oder Kategorien von Empfängern, gegenüber denen Ihre personenbezogenen Daten
                offengelegt wurden oder werden;
                <br />
                4. die geplante Dauer der Speicherung oder, falls konkrete Angaben hierzu nicht möglich sind, die
                Kriterien für die Festlegung der Speicherdauer;
                <br />
                5. das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch
                gegen diese Verarbeitung;
                <br />
                6. das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;
                <br />
                7. alle verfügbaren Informationen über die Herkunft der Daten, wenn diese nicht bei Ihnen erhoben
                wurden;
                <br />
                8. das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1
                und 4 DSGVO sowie aussagekräftige Informationen über die involvierte Logik und die Tragweite und
                angestrebten Auswirkungen einer derartigen Verarbeitung.
                <br />
                <br />
                Sie haben zudem das Recht, Auskunft darüber zu verlangen, ob Ihre personenbezogenen Daten in ein
                Drittland oder an eine internationale Organisation übermittelt werden. In diesem Zusammenhang können Sie
                verlangen, über die geeigneten Garantien gemäß Art. 46 DSGVO im Zusammenhang mit der Übermittlung
                unterrichtet zu werden.
            </div>
            <div className="text-1xl mt-4 font-bold">Recht auf Berichtigung</div>
            <div>
                Sie haben das Recht, vom Verantwortlichen die Berichtigung und/oder Vervollständigung Ihrer
                personenbezogenen Daten zu verlangen, sofern die Sie betreffenden Daten unrichtig oder unvollständig
                sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.
            </div>

            <div className="text-1xl mt-4 font-bold">Recht auf Einschränkung der Verarbeitung</div>
            <div>
                Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten verlangen:
                <br />
                <br />
                1. wenn Sie die Richtigkeit Ihrer personenbezogenen Daten für eine Dauer bestreiten, die es dem
                Verantwortlichen ermöglicht, die Richtigkeit der Daten zu überprüfen;
                <br />
                2. wenn die Verarbeitung unrechtmäßig ist und Sie die Löschung der Daten ablehnen und stattdessen die
                Einschränkung der Nutzung verlangen;
                <br />
                3. wenn der Verantwortliche die Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese
                jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen;
                <br />
                4. wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht
                feststeht, ob die berechtigten Gründe des Verantwortlichen Ihre Gründe überwiegen.
                <br />
                <br />
                Wurde die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt, dürfen diese Daten – von ihrer
                Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
                von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder
                aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet
                werden.
                <br />
                <br />
                Wurde die Einschränkung der Verarbeitung nach den oben genannten Voraussetzungen vorgenommen, werden Sie
                vom Verantwortlichen unterrichtet, bevor die Einschränkung aufgehoben wird.
            </div>

            <div>
                <div className="text-1xl mt-4 font-bold">Recht auf Löschung</div>
                <div>
                    <strong>Löschungspflicht</strong>
                    <br />
                    <br />
                    Sie können vom Verantwortlichen verlangen, dass Ihre personenbezogenen Daten unverzüglich gelöscht
                    werden. Der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der
                    folgenden Gründe zutrifft:
                    <br />
                    <br />
                    1. Die personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise
                    verarbeitet wurden, nicht mehr erforderlich.
                    <br />
                    2. Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gemäß Art. 6 Abs. 1 lit. a oder
                    Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage.
                    <br />
                    3. Sie legen gemäß Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine
                    vorrangigen berechtigten Gründe vor, oder Sie legen gemäß Art. 21 Abs. 2 DSGVO Widerspruch gegen die
                    Verarbeitung ein.
                    <br />
                    4. Die personenbezogenen Daten wurden unrechtmäßig verarbeitet.
                    <br />
                    5. Die Löschung der personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach
                    dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
                    <br />
                    6. Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft
                    gemäß Art. 8 Abs. 1 DSGVO erhoben.
                    <br />
                    <br />
                    <strong>Information an Dritte</strong>
                    <br />
                    <br />
                    Hat der Verantwortliche die personenbezogenen Daten öffentlich gemacht und ist zur Löschung
                    verpflichtet, so trifft er unter Berücksichtigung der verfügbaren Technologie und der
                    Implementierungskosten angemessene Maßnahmen, auch technischer Art, um andere Verantwortliche, die
                    die Daten verarbeiten, darüber zu informieren, dass Sie als betroffene Person die Löschung aller
                    Links zu diesen Daten oder von Kopien oder Replikationen dieser Daten verlangt haben.
                    <br />
                    <br />
                    <strong>Ausnahmen</strong>
                    <br />
                    <br />
                    Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist:
                    <br />
                    <br />
                    1. zur Ausübung des Rechts auf freie Meinungsäußerung und Information;
                    <br />
                    2. zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder
                    der Mitgliedstaaten erfordert, dem der Verantwortliche unterliegt, oder zur Wahrnehmung einer
                    Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem
                    Verantwortlichen übertragen wurde;
                    <br />
                    3. aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs.
                    2 lit. h und i sowie Art. 9 Abs. 3 DSGVO;
                    <br />
                    4. für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische
                    Forschungszwecke oder für statistische Zwecke gemäß Art. 89 Abs. 1 DSGVO, soweit das Recht auf
                    Löschung voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder
                    ernsthaft beeinträchtigt;
                    <br />
                    5. zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
                    <br />
                </div>
            </div>

            <div>
                <div className="text-1xl mt-4 font-bold">Recht auf Unterrichtung</div>
                <div>
                    Haben Sie gegenüber dem Verantwortlichen das Recht auf Berichtigung, Löschung oder Einschränkung der
                    Verarbeitung geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen Ihre
                    personenbezogenen Daten offengelegt wurden, diese Berichtigung, Löschung oder Einschränkung der
                    Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem
                    unverhältnismäßigen Aufwand verbunden.
                    <br />
                    <br />
                    Ihnen steht das Recht zu, vom Verantwortlichen über diese Empfänger unterrichtet zu werden.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Recht auf Datenübertragbarkeit</div>
                <div>
                    Sie haben das Recht, die personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben,
                    in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Zudem haben Sie das
                    Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem
                    die Daten bereitgestellt wurden, zu übermitteln, sofern:
                    <br />
                    <br />
                    1. die Verarbeitung auf einer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit.
                    a DSGVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 lit. b DSGVO beruht und
                    <br />
                    2. die Verarbeitung mithilfe automatisierter Verfahren erfolgt.
                    <br />
                    <br />
                    In Ausübung dieses Rechts haben Sie ferner das Recht, zu erwirken, dass die personenbezogenen Daten
                    direkt von einem Verantwortlichen einem anderen Verantwortlichen übermittelt werden, soweit dies
                    technisch machbar ist. Freiheiten und Rechte anderer Personen dürfen hierdurch nicht beeinträchtigt
                    werden.
                    <br />
                    <br />
                    Das Recht auf Datenübertragbarkeit gilt nicht für eine Verarbeitung personenbezogener Daten, die für
                    die Wahrnehmung einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung
                    öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde.
                </div>
            </div>
            <div>
                <div className="text-1xl mt-4 font-bold">Widerspruchsrecht</div>
                <div>
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit
                    Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, die aufgrund von Art. 6
                    Abs. 1 lit. e oder f DSGVO erfolgt; dies gilt auch für ein auf diese Bestimmungen gestütztes
                    Profiling.
                    <br />
                    <br />
                    Der Verantwortliche verarbeitet Ihre personenbezogenen Daten nach einem Widerspruch nicht mehr, es
                    sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
                    Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung,
                    Ausübung oder Verteidigung von Rechtsansprüchen.
                    <br />
                    <br />
                    Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht,
                    jederzeit Widerspruch gegen die Verarbeitung zum Zwecke derartiger Werbung einzulegen; dies gilt
                    auch für Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                    <br />
                    <br />
                    Widersprechen Sie der Verarbeitung für Zwecke der Direktwerbung, so werden Ihre personenbezogenen
                    Daten nicht mehr für diese Zwecke verarbeitet.
                    <br />
                    <br />
                    Sie haben die Möglichkeit, Ihr Widerspruchsrecht im Zusammenhang mit der Nutzung von Diensten der
                    Informationsgesellschaft – ungeachtet der Richtlinie 2002/58/EG – mittels automatisierter Verfahren
                    auszuüben, bei denen technische Spezifikationen verwendet werden.
                </div>
            </div>

            <div>
                <div className="text-1xl mt-4 font-bold">
                    Recht auf Widerruf der datenschutzrechtlichen Einwilligungserklärung
                </div>
                <div>
                    Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen.
                    Durch den Widerruf wird die Rechtmäßigkeit der bis zum Widerruf aufgrund der Einwilligung erfolgten
                    Verarbeitung nicht berührt.
                </div>
            </div>

            <div>
                <div className="text-1xl mt-4 font-bold">
                    Automatisierte Entscheidung im Einzelfall einschließlich Profiling
                </div>
                <div>
                    Sie haben das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung –
                    einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber
                    rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt. Dies gilt nicht,
                    wenn die Entscheidung:
                    <br />
                    <br />
                    1. für den Abschluss oder die Erfüllung eines Vertrags zwischen Ihnen und dem Verantwortlichen
                    erforderlich ist;
                    <br />
                    2. aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der Verantwortliche
                    unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung Ihrer Rechte
                    und Freiheiten sowie Ihrer berechtigten Interessen enthalten; oder
                    <br />
                    3. mit Ihrer ausdrücklichen Einwilligung erfolgt.
                    <br />
                    <br />
                    Solche Entscheidungen dürfen jedoch nicht auf besonderen Kategorien personenbezogener Daten nach
                    Art. 9 Abs. 1 DSGVO beruhen, sofern nicht Art. 9 Abs. 2 lit. a oder g DSGVO gilt und angemessene
                    Maßnahmen zum Schutz Ihrer Rechte und Freiheiten sowie Ihrer berechtigten Interessen getroffen
                    wurden.
                    <br />
                    <br />
                    Hinsichtlich der unter 1. und 3. genannten Fälle trifft der Verantwortliche angemessene Maßnahmen,
                    um Ihre Rechte und Freiheiten sowie Ihre berechtigten Interessen zu wahren, wozu mindestens das
                    Recht auf Erwirkung des Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des
                    eigenen Standpunkts und auf Anfechtung der Entscheidung gehört.
                </div>
            </div>

            <div>
                <div className="text-1xl mt-4 font-bold">Recht auf Beschwerde bei einer Aufsichtsbehörde</div>
                <div>
                    Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen
                    das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres
                    Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der
                    Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt.
                    <br />
                    <br />
                    Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet Sie über den Stand und
                    die Ergebnisse der Beschwerde einschließlich der Möglichkeit eines gerichtlichen Rechtsbehelfs nach
                    Art. 78 DSGVO.
                </div>
            </div>
        </>
    )
}
