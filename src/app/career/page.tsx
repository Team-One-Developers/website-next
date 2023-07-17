import Image from 'next/image'
import { FONT_CONFIGS } from '@/constants'

import Copy from '@/components/atoms/Copy'
import { Heading } from '@/components/atoms/Heading'
import { ImageMask } from '@/components/atoms/ImageMask'
import { Link } from '@/components/atoms/Link'

import { Benefits } from '@/components/organisms/Benefits'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

const Career = () => {
  return (
    <PageLayout>
      <ContentWrapper>
        <FullWidthSectionContainer className="mt-12">
          <Heading
            tag="h1"
            fontDefaults={FONT_CONFIGS.desktop_h3}
            className="py-8"
          >
            Unser Team <br />- Dein Playground
          </Heading>
        </FullWidthSectionContainer>
      </ContentWrapper>
      <ContentWrapper className="mt-8 lg:flex lg:gap-8">
        <ImageMask className="mt-8 lg:basis-[50%]">
          <Image
            src="/images/t1d_kai_knoerzer_079.jpg"
            alt="Lazy man sleeping on a printer"
            width={960}
            height={1440}
          />
        </ImageMask>
        <section className="mt-16 md:ml-12 lg:basis-[32.5%]">
          <Image
            src="/images/icons/person-1.svg"
            alt="Person icon"
            height={18}
            width={18}
            className="mb-4"
          />
          <Copy
            textSize="l"
            className="text-primary mb-8"
            fontDefaults={FONT_CONFIGS.desktop_copy_large}
          >
            Wir verstehen uns nicht einfach nur als Arbeitgeber, sondern viel
            mehr als aktiver Begleiter auf dem Weg zu deinen individuellen
            Zielen. Unser Anspruch ist es, den Menschen in den Mittelpunkt
            unseres unternehmerischen Handelns zu stellen – und dabei fangen wir
            bei uns im Team an.
          </Copy>
          <Copy
            textSize="sm"
            className="text-white"
            fontDefaults={FONT_CONFIGS.desktop_copy_small}
          >
            Oft sagen wir in Gesprächen „wir sind Playground für den modernen
            und ambitionierten Softwareentwickler“ – das beschreibt unser
            Arbeitsumfeld am besten. Wir arbeiten in anspruchsvollen
            Kundenprojekten mit spannenden Themen und modernen Tech-Stacks und
            agilem Selbstverständnis. Weiterentwicklung ist für uns ein fester
            Bestandteil unserer Unternehmensphilosophie: von Trainings und
            Konferenzbesuchen über eigene Open-Source-Projekte bis hin zum
            Spin-Off von eigenständiger Produktideen . Alles ein „Kann“ und kein
            „Muss“, in jedem Fall aber vielseitig und mit unendlich vielen
            Möglichkeiten.
          </Copy>
        </section>
      </ContentWrapper>
      <ContentWrapper className="mt-24 lg:mt-36">
        <Benefits />
      </ContentWrapper>
      <ContentWrapper>
        <Copy
          className="mt-24 mb-6 lg:mt-32 text-white m-0"
          textSize="l"
          fontDefaults={FONT_CONFIGS.desktop_copy_large}
        >
          Wir suchen dich:
        </Copy>
        <Copy
          className="mt-24 mb-6 lg:mt-32 text-white m-0"
          textSize="l"
          fontDefaults={FONT_CONFIGS.desktop_copy_large}
        >
          JOBS - ACCORDEON
        </Copy>
      </ContentWrapper>
      <ContentWrapper className="mt-[6.5rem]">
        <div className="flex flex-col gap-4 items-baseline lg:max-w-[32%]">
          <Copy
            textSize="l"
            className="text-white"
            fontDefaults={FONT_CONFIGS.desktop_copy_large}
          >
            Oder du suchst uns?
          </Copy>
          <Copy
            textSize="sm"
            className="text-white"
            fontDefaults={FONT_CONFIGS.desktop_copy_small}
          >
            Um als Developer nicht nur gut zu sein, sondern es auch zu bleiben,
            ist Initiative und Selbstständigkeit gefragt. Deshalb wissen wir das
            auch bei unseren Bewerbern zu schätzen. Wenn Ihr der Meinung sein,
            dass Ihr das perfekte neue Team-Mitglied für Team One Developers
            seid, dann meldet euch einfach initiativ – am besten schon mit
            aussagekräftigen Bewerbungsunterlagen.
          </Copy>
          <Link variant="secondary" href="/contact">
            Initiativ bewerben
          </Link>
        </div>
      </ContentWrapper>
      <ContentWrapper className="mt-36">
        <Image
          src="/images/t1d_nov22_185.jpg"
          alt="Picture of people in an Office"
          width={1920}
          height={800}
          className="rounded-[25px]"
        />
      </ContentWrapper>
    </PageLayout>
  )
}

export default Career
