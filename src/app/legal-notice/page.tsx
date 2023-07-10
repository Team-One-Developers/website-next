import {
  ContentWrapper,
  FullWidthSectionContainer,
  Heading,
  PageLayout,
} from '@/components'
import { FONT_CONFIGS } from '@/constants'
import Image from 'next/image'
import { twJoin } from 'tailwind-merge'
import './style.css'

export const Legal = () => {
  const legalParagraphCSS = FONT_CONFIGS.desktop_copy_small + ' text-t1-white'

  return (
    <PageLayout>
      <ContentWrapper>
        <FullWidthSectionContainer marginTopClassName="mt-20">
          <Heading
            className="mt-8"
            tag="h1"
            fontDefaults={FONT_CONFIGS.desktop_h3}
          >
            Impressum
          </Heading>
          <Heading
            className="mt-8"
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h4}
          >
            Verantwortlich für den Inhalt dieser Website
          </Heading>
          <address className={legalParagraphCSS}>
            Team One Developers GmbH <br />
            Hospitalstraße 35 <br />
            70174 Stuttgart
          </address>
          <Heading
            className="mt-8"
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h4}
          >
            Vertreten durch die Geschäftsführung
          </Heading>
          <ul className={twJoin('legalUL', legalParagraphCSS)}>
            <li className="legalULLI">Timo Brückel</li>
            <li className="legalULLI">Julian Richter</li>
            <li className="legalULLI">Michael Krause</li>
          </ul>
          <Heading
            className="mt-8"
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h4}
          >
            Registereintrag
          </Heading>
          <article className={legalParagraphCSS}>
            Eintragung im Handelsregister. <br />
            Registergericht: Amtsgericht <br />
            Stuttgart Registernummer: HRB 777716
          </article>
          <Heading
            className="mt-8"
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h4}
          >
            Datenschutz
          </Heading>
          <p className={legalParagraphCSS}>
            Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
            persönlicher oder geschäftlicher Daten (E-Mail Adressen, Namen,
            Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens
            des Nutzers auf ausdrücklich freiwilliger Basis. Ihre Daten werden
            bei uns für die Abwicklung der gewünschten Transaktion gespeichert.
            Alle Daten werden vertraulich behandelt und nicht weitergegeben. Die
            Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit
            technisch möglich und zumutbar – auch ohne Angabe solcher Daten bzw.
            unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
            Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben
            veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und
            Faxnummern sowie E-Mail Adressen durch Dritte zur Übersendung von
            nicht ausdrücklich angeforderten Informationen ist nicht gestattet.
            Rechtliche Schritte gegen die Versender von so genannten Spam-Mails
            bei Verstößen gegen dieses Verbot sind ausdrücklich vorbehalten. Für
            detaillierte Informationen siehe{' '}
            <a href="/privacy" className="text-t1-green">
              Datenschutz
            </a>
            .
          </p>
          <Heading
            className="mt-8"
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h4}
          >
            Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
          </Heading>
          <p className={legalParagraphCSS}>
            Die Team One Developers GmbH ist nicht bereit und verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <Heading
            className="mt-8"
            tag="h2"
            fontDefaults={FONT_CONFIGS.desktop_h4}
          >
            Verlinkungen
          </Heading>
          <p className={legalParagraphCSS}>
            Diese Webseite enthält Verlinkungen zu Webseiten Dritter. Für die
            Inhalte der Webseiten Dritter übernimmt die Team One Developers GmbH
            keine Haftung.
          </p>
          <strong className={legalParagraphCSS}>
            Keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität.
          </strong>
        </FullWidthSectionContainer>
      </ContentWrapper>
    </PageLayout>
  )
}

export default Legal
