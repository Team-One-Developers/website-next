import { Section } from "@/components/layout/Section"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contest Terms and Conditions",
    description: "Terms and conditions for the Team One Developers GmbH contest."
}

const GewinnspielTeilnahme = () => {
    return (
        <Section className="pb-56">
            <h1 className="mt-8 text-3xl font-bold text-white">
                Terms and Conditions of Participation for the Contest
            </h1>
            <div className="mt-8 space-y-8 text-white">
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">1. Organizer</h2>
                    <p className="mt-2 whitespace-pre-line">
                        The organizer of this contest is <br />
                        <span className="font-bold">Team One Developers GmbH</span> <br />
                        Stafflenbergstraße 44 <br />
                        70184 Stuttgart <br />
                        (hereinafter referred to as the &quot;Organizer&quot;)
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">2. Eligibility</h2>
                    <p className="mt-2 whitespace-pre-line">
                        All natural persons who have reached the age of 18 are eligible to participate.
                        <br />
                        Employees of the Organizer and their relatives are excluded from participation.
                        <br />
                        The Organizer reserves the right to exclude individuals from the contest in the event of a
                        violation of these terms and conditions or attempted technical manipulation.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">3. Participation in the Contest</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Participation in the contest is free of charge and not dependent on the purchase of goods or
                        services.
                        <br />
                        Participation takes place exclusively by fully completing and submitting the entry form.
                        <br />
                        The participation period begins on July 10, 2025, and ends on July 11, 2025.
                        <br />
                        Each person may participate only once.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">4. Prizes</h2>
                    <p className="mt-2 whitespace-pre-line">
                        Among all valid entries, we will raffle participation in the workshop
                        <br />
                        <span className="font-bold">
                            &quot;Trunk based development Fast-Track Workshop: Assess, Align, Accelerate&quot;.
                        </span>
                        <br />
                        A total of 10 spots will be awarded.
                        <br />
                        Participation in the training is non-transferable, non-exchangeable, and not redeemable for
                        cash.
                        <br />
                        Two date options will be offered, which will be announced after the winners have been drawn.
                        <br />
                        If the training cannot take place for reasons beyond the Organizer&apos;s control, there is no
                        entitlement to compensation.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">5. Winner Selection & Notification</h2>
                    <p className="mt-2 whitespace-pre-line">
                        The winners will be determined by a random draw after the end of the participation period.
                        <br />
                        Winners will be notified by email no later than July 18, 2025.
                        <br />
                        If a winner does not respond within 7 days of notification, the prize will be forfeited without
                        replacement, and a substitute winner will be drawn.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">6. Data Protection</h2>
                    <p className="mt-2 whitespace-pre-line">
                        For participation in the contest, personal data (first name, last name, email address) will be
                        collected.
                        <br />
                        This data will be used solely for the purpose of conducting and processing the contest (Art. 6
                        (1)(b) GDPR).
                        <br />
                        We use the HubSpot platform to collect and manage registration data, a service provided by
                        HubSpot Inc., 25 First Street, Cambridge, MA 02141 USA.
                        <br />
                        Data processing takes place on servers within the EU. However, data may be transferred to third
                        countries (in particular the USA).
                        <br />
                        A data processing agreement in accordance with Art. 28 GDPR and a data transfer mechanism
                        pursuant to Art. 46 GDPR (EU Standard Contractual Clauses) exist with HubSpot.
                        <br />
                        The data will not be published or passed on to unrelated third parties. After the contest is
                        completed, all personal data will be deleted unless there is a legal retention obligation.
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
                        <a href="https://www.team-one.de/privacy" className="underline">
                            https://www.team-one.de/privacy
                        </a>
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">7. Early Termination, Modification, or Exclusion</h2>
                    <p className="mt-2 whitespace-pre-line">
                        The Organizer reserves the right to cancel or modify the contest at any time without prior
                        notice and without giving reasons, particularly if the proper execution of the contest cannot be
                        guaranteed (e.g., for technical reasons or manipulation).
                        <br />
                        There is no legal entitlement to participation or winning.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">8. Governing Law & Severability Clause</h2>
                    <p className="mt-2 whitespace-pre-line">
                        The laws of the Federal Republic of Germany apply. Legal recourse is excluded.
                        <br />
                        Should any provision of these terms and conditions be or become invalid in whole or in part, the
                        validity of the remaining provisions shall remain unaffected.
                    </p>
                </div>
                <div>
                    <h2 className="mt-8 text-2xl font-semibold">9. Contact</h2>
                    <p className="mt-2 whitespace-pre-line">
                        If you have any questions about the contest or the processing of your data, please contact:
                        <br />
                        <a href="mailto:info@team-one.de" className="underline">
                            info@team-one.de
                        </a>
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default GewinnspielTeilnahme
