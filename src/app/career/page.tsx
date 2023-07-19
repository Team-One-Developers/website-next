import { Heading } from '@/components/atoms/Heading'
import { Image } from '@/components/atoms/Image'
import { ImageMask } from '@/components/atoms/ImageMask'
import { Link } from '@/components/atoms/Link'
import Typography from '@/components/atoms/Typography'

import { Benefits } from '@/components/organisms/Benefits'

import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

const Career = () => {
  return (
    <PageLayout>
      <ContentWrapper>
        <FullWidthSectionContainer className="mt-12">
          <Typography as="h1" variant="h2" className="py-8">
            Unser Team <br />- Dein Playground
          </Typography>
        </FullWidthSectionContainer>
      </ContentWrapper>
      <ContentWrapper className="mt-8 lg:flex lg:gap-8">
        <ImageMask className="mt-8 lg:basis-[50%]">
          <Image
            src="/images/optimized/t1d_kai_knoerzer_079_optimized.webp"
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
          <Typography variant="text_lg" className="text-primary mb-8">
            Wir verstehen uns nicht einfach nur als Arbeitgeber, sondern viel
            mehr als aktiver Begleiter auf dem Weg zu deinen individuellen
            Zielen. Unser Anspruch ist es, den Menschen in den Mittelpunkt
            unseres unternehmerischen Handelns zu stellen – und dabei fangen wir
            bei uns im Team an.
          </Typography>
          <Typography variant="text_sm" className="text-white">
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
          </Typography>
        </section>
      </ContentWrapper>
      <ContentWrapper className="mt-24 lg:mt-36">
        <Benefits />
      </ContentWrapper>
      <ContentWrapper>
        <Typography
          className="mt-24 mb-6 lg:mt-32 text-white m-0"
          variant="text_lg"
        >
          Wir suchen dich:
        </Typography>
        <Typography
          className="mt-24 mb-6 lg:mt-32 text-white m-0"
          variant="text_lg"
        >
          JOBS - ACCORDEON
        </Typography>
      </ContentWrapper>
      <ContentWrapper className="mt-[6.5rem]">
        <div className="flex flex-col gap-4 items-baseline lg:max-w-[32%]">
          <Typography variant="text_lg" className="text-white">
            Oder du suchst uns?
          </Typography>
          <Typography variant="text_sm" className="text-white">
            Um als Developer nicht nur gut zu sein, sondern es auch zu bleiben,
            ist Initiative und Selbstständigkeit gefragt. Deshalb wissen wir das
            auch bei unseren Bewerbern zu schätzen. Wenn Ihr der Meinung sein,
            dass Ihr das perfekte neue Team-Mitglied für Team One Developers
            seid, dann meldet euch einfach initiativ – am besten schon mit
            aussagekräftigen Bewerbungsunterlagen.
          </Typography>
          <Link variant="secondary" href="/contact">
            Initiativ bewerben
          </Link>
        </div>
      </ContentWrapper>
      <ContentWrapper className="mt-36">
        <Image
          src="/images/optimized/t1d_nov22_185_optimized.webp"
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
