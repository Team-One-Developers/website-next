'use client'

import {
  AnimatedTeaser,
  ChangingWords,
  ContentWrapper,
  Copy,
  CtaSection,
  DancingFigures,
  Footer,
  FullWidthSectionContainer,
  Header,
  Heading,
  Hero,
  Ticker,
} from '@/components'
import { FONT_CONFIGS, PAGE_THEME } from '@/constants'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export const Home = () => {
  // Triggers Animation for Animated Teaser
  const [animatedTeaserContainerRef, animatedTeaserInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  })

  return (
    <div className="bg-theme-bgColor text-theme-textColor" data-theme="light">
      <Header theme={PAGE_THEME.light} />
      <main className="">
        <ContentWrapper className="mt-20">
          <FullWidthSectionContainer marginTopClassName="mt-0">
            <Heading
              tag="h1"
              className="max-w-[790px] text-[3rem] uppercase leading-110 tracking-aBitTighter lg:text-[3rem] lg:leading-110"
            >
              WIR <br /> ENTWICKELN <br /> DIE ZUKUNFT <br /> DES WEB.
            </Heading>
          </FullWidthSectionContainer>
        </ContentWrapper>

        <ChangingWords
          className="mb-4 hidden p-4 text-t1-darkGray sm:mt-48 sm:flex"
          smallVariant
          words={['Scroll', 'Move Smoothly']}
        />

        <Hero
          imageNode={
            <Image
              src="/images/hero.jpg"
              alt="Picture of a keyboard"
              fill
              style={{ objectFit: 'cover' }}
            />
          }
          overlayNode={
            <ChangingWords
              words={['software', 'agile', 'human', 'team']}
              className="text-t1-white"
            ></ChangingWords>
          }
          overlayPosition="offsetTop"
        />

        <ContentWrapper>
          <FullWidthSectionContainer marginTopClassName="mt-20">
            <figure className="mb-6 flex h-[129px] w-full justify-center text-t1-green md:hidden">
              <DancingFigures />
            </figure>
            <Copy
              className="text-t1-black"
              textSize="xl"
              fontDefaults={FONT_CONFIGS.desktop_h2_regular}
            >
              Wir sind Technologie-Experten und verstehen uns als integrativer
              Entwicklungs- & Beratungspartner in komplexen Softwareprojekten.{' '}
              <DancingFigures className="hidden h-16 px-4 py-0 align-middle text-t1-green md:inline" />
              Mit jahrelanger Expertise in den Bereichen Softwareentwicklung,
              Strategie sowie UX/UI Design.
            </Copy>
          </FullWidthSectionContainer>
          <CtaSection
            className="mt-16 lg:max-w-[25%]"
            contentText="Wir helfen Organisationen dabei, sich nachhaltig zu modernen digitalen Unternehmen zu wandeln. Immer mit dem Ziel, qualitativ hochwertige, skalierbare und durchdachte Software zu entwickeln, welche messbaren Mehrwert für unsere Kunden schafft."
            ctaButtonLink={'/services'}
            ctaButtonLabel="Unsere Leistungen"
            fontDefaultsContent={FONT_CONFIGS.desktop_copy_small}
          />
        </ContentWrapper>

        <AnimatedTeaser
          className="mt-16"
          backgroundColor={
            animatedTeaserInView ? 'var(--t1-green)' : 'var(--t1-lightGray)'
          }
          animationColor={
            animatedTeaserInView ? 'var(--t1-white)' : 'var(--t1-green)'
          }
          ref={animatedTeaserContainerRef}
        />

        <div>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text p-8 text-4xl ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
      <Ticker theme={PAGE_THEME.light} />
      <ContentWrapper>
        <Footer />
      </ContentWrapper>
    </div>
  )
}

export default Home
