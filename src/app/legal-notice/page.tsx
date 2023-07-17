import { twJoin } from 'tailwind-merge'

import './style.css'

import { Heading } from '@/components/atoms/Heading'
import Typography from '@/components/atoms/Typography'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

const Legal = () => {
  return (
    <PageLayout>
      <ContentWrapper>
        <FullWidthSectionContainer className="mt-20">
          <Typography className="mt-8" as="h1" variant="h3">
            Impressum
          </Typography>
          <Typography className="mt-8" as="h2" variant="h4">
            Verantwortlich für den Inhalt dieser Website
          </Typography>
          <Typography as="address" className="text-white" variant="text_sm">
            Team One Developers GmbH <br />
            Hospitalstraße 35 <br />
            70174 Stuttgart
          </Typography>
          <Typography className="mt-8" as="h2" variant="h4">
            Vertreten durch die Geschäftsführung
          </Typography>
          <Typography as="ul" className="legalUI text-white" variant="text_sm">
            <li className="marker legalULLI">Timo Brückel</li>
            <li className="legalULLI">Julian Richter</li>
            <li className="legalULLI">Michael Krause</li>
          </Typography>

          <Typography className="mt-8" as="h2" variant="h4">
            Registereintrag
          </Typography>
          <Typography as="article" className="text-white" variant="text_sm">
            Eintragung im Handelsregister. <br />
            Registergericht: Amtsgericht <br />
            Stuttgart Registernummer: HRB 777716
          </Typography>

          <Typography className="mt-8" as="h2" variant="h4">
            Datenschutz
          </Typography>
          <Typography as="p" className="text-white" variant="text_sm">
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
            <a href="/privacy" className="text-primary">
              Datenschutz
            </a>
            .
          </Typography>

          <Typography className="mt-8" as="h2" variant="h4">
            Verbraucherinformation gemäß Verbraucherstreitbeilegungsgesetz
          </Typography>
          <Typography as="p" className="text-white" variant="text_sm">
            Die Team One Developers GmbH ist nicht bereit und verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </Typography>
          <Typography className="mt-8" as="h2" variant="h4">
            Verlinkungen
          </Typography>
          <Typography as="p" className="text-white" variant="text_sm">
            Diese Webseite enthält Verlinkungen zu Webseiten Dritter. Für die
            Inhalte der Webseiten Dritter übernimmt die Team One Developers GmbH
            keine Haftung.
          </Typography>
          <Typography as="strong" className="text-white" variant="text_sm">
            Keine Gewähr für Richtigkeit, Vollständigkeit und Aktualität.
          </Typography>
        </FullWidthSectionContainer>
      </ContentWrapper>
    </PageLayout>
  )
}

export default Legal
