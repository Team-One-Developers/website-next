import ContentBlock from "@/components/layout/ContentBlock"
import Hero from "@/components/sections/Hero"
import HeroGradientBackdrop from "@/components/sections/HeroGradientBackdrop"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Teilnahmebedingungen Gewinnspiel",
    description:
        "Teilnahmebedingungen für das Gewinnspiel der Team One Developers GmbH – alle Informationen zu Teilnahme, Datenschutz und Gewinnerermittlung.",
    robots: {
        index: false,
        follow: false
    },
    alternates: {
        canonical: "https://www.team-one.de/gewinnspiel-teilnahme"
    }
}

const GewinnspielTeilnahme = () => {
    return (
        <div className="relative">
            <HeroGradientBackdrop />

            <div className="gap-vertical-inner relative z-10 flex flex-col">
                <ContentBlock>
                    <Hero title="Terms and Conditions of Participation for the Contest" />
                </ContentBlock>

                <ContentBlock>
                    <div className="font-gteratext text-small max-w-200 space-y-8 text-black/60">
                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">1. Organizer</h2>
                            <p>
                                The organizer of this contest is <br />
                                <span className="font-bold">Team One Developers GmbH</span> <br />
                                Stafflenbergstraße 44 <br />
                                70184 Stuttgart <br />
                                (hereinafter referred to as the &quot;Organizer&quot;)
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">2. Eligibility</h2>
                            <p>
                                All natural persons who have reached the age of 18 are eligible to participate.
                                <br />
                                Employees of the Organizer and their relatives are excluded from participation.
                                <br />
                                The Organizer reserves the right to exclude individuals from the contest in the event of
                                a violation of these terms and conditions or attempted technical manipulation.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">
                                3. Participation in the Contest
                            </h2>
                            <p>
                                Participation in the contest is free of charge and not dependent on the purchase of
                                goods or services.
                                <br />
                                Participation takes place exclusively by fully completing and submitting the entry form.
                                <br />
                                The participation period begins on July 10, 2025, and ends on July 11, 2025.
                                <br />
                                Each person may participate only once.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">4. Prizes</h2>
                            <p>
                                Among all valid entries, we will raffle participation in the workshop
                                <br />
                                <span className="font-bold">
                                    &quot;Trunk based development Fast-Track Workshop: Assess, Align, Accelerate&quot;.
                                </span>
                                <br />
                                A total of 10 spots will be awarded.
                                <br />
                                Participation in the training is non-transferable, non-exchangeable, and not redeemable
                                for cash.
                                <br />
                                Two date options will be offered, which will be announced after the winners have been
                                drawn.
                                <br />
                                If the training cannot take place for reasons beyond the Organizer&apos;s control, there
                                is no entitlement to compensation.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">
                                5. Winner Selection & Notification
                            </h2>
                            <p>
                                The winners will be determined by a random draw after the end of the participation
                                period.
                                <br />
                                Winners will be notified by email no later than July 18, 2025.
                                <br />
                                If a winner does not respond within 7 days of notification, the prize will be forfeited
                                without replacement, and a substitute winner will be drawn.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">6. Data Protection</h2>
                            <p>
                                For participation in the contest, personal data (first name, last name, email address)
                                will be collected.
                                <br />
                                This data will be used solely for the purpose of conducting and processing the contest
                                (Art. 6 (1)(b) GDPR).
                                <br />
                                We use the HubSpot platform to collect and manage registration data, a service provided
                                by HubSpot Inc., 25 First Street, Cambridge, MA 02141 USA.
                                <br />
                                Data processing takes place on servers within the EU. However, data may be transferred
                                to third countries (in particular the USA).
                                <br />
                                A data processing agreement in accordance with Art. 28 GDPR and a data transfer
                                mechanism pursuant to Art. 46 GDPR (EU Standard Contractual Clauses) exist with HubSpot.
                                <br />
                                The data will not be published or passed on to unrelated third parties. After the
                                contest is completed, all personal data will be deleted unless there is a legal
                                retention obligation.
                                <br />
                                Participants have the right at any time to:
                                <br />• Request information about their stored data (Art. 15 GDPR),
                                <br />• Request rectification (Art. 16 GDPR),
                                <br />• Request deletion (Art. 17 GDPR),
                                <br />• Request restriction of processing (Art. 18 GDPR),
                                <br />• Request data portability (Art. 20 GDPR), and
                                <br />• Object to processing (Art. 21 GDPR).
                                <br />
                                For more information about data processing, see our privacy policy:
                                <br />
                                <a href="https://www.team-one.de/datenschutz" className="text-primary underline">
                                    https://www.team-one.de/datenschutz
                                </a>
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">
                                7. Early Termination, Modification, or Exclusion
                            </h2>
                            <p>
                                The Organizer reserves the right to cancel or modify the contest at any time without
                                prior notice and without giving reasons, particularly if the proper execution of the
                                contest cannot be guaranteed (e.g., for technical reasons or manipulation).
                                <br />
                                There is no legal entitlement to participation or winning.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">
                                8. Governing Law & Severability Clause
                            </h2>
                            <p>
                                The laws of the Federal Republic of Germany apply. Legal recourse is excluded.
                                <br />
                                Should any provision of these terms and conditions be or become invalid in whole or in
                                part, the validity of the remaining provisions shall remain unaffected.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-gteradisplay text-h3 mb-4 text-black">9. Contact</h2>
                            <p>
                                If you have any questions about the contest or the processing of your data, please
                                contact:
                                <br />
                                <a href="mailto:info@team-one.de" className="text-primary underline">
                                    info@team-one.de
                                </a>
                            </p>
                        </section>
                    </div>
                </ContentBlock>
            </div>
        </div>
    )
}

export default GewinnspielTeilnahme
