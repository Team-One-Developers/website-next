'use client'

import Image from 'next/image'
import { FONT_CONFIGS, PAGE_THEME } from '@/constants'
import { useInView } from 'react-intersection-observer'

import Copy from '@/components/atoms/Copy'
import { DancingFigures } from '@/components/atoms/DancingFigures'
import { Heading } from '@/components/atoms/Heading'
import { ImageMask } from '@/components/atoms/ImageMask'

import { Companies } from '@/components/molecules/Companies'
import { Hero } from '@/components/molecules/Hero'

import { AnimatedTeaser } from '@/components/organisms/AnimatedTeaser'
import { ChangingWords } from '@/components/organisms/ChangingWords'
import { CtaSection } from '@/components/organisms/CtaSection'

import { CenteredSectionContainer } from '@/components/layout/CenteredSectionContainer'
import ContentWrapper from '@/components/layout/ContentWrapper'
import { FullWidthSectionContainer } from '@/components/layout/FullWidthSectionContainer'
import { PageLayout } from '@/components/layout/PageLayout'

import SamuelPic from '../../public/images/t1d_kai_knoerzer_011_edited.jpg'
import JannikPic from '../../public/images/t1d_kai_knoerzer_055.jpg'

import clsx from "clsx"

const Home = () => {
  // Triggers Animation for Animated Teaser
  const [animatedTeaserContainerRef, animatedTeaserInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  })

  // Triggers Zoom Animation for first image
  const [culturePictureRef, culturePictureInView] = useInView({
    threshold: 0.48425,
  })

  // Triggers Fade In Animation for the Culture Call To Action
  const [cultureContainerRef, cultureContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  // Triggers Zoom Animation for second Image
  const [careerPictureRef, careerPictureInView] = useInView({
    threshold: 0.45,
  })

  // Triggers Fade In Animation for the Career Call To Action
  const [careerContainerRef, careerContainerInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  })

  return (
    <PageLayout theme={PAGE_THEME.light}>
      <ContentWrapper className="mt-20">
        <FullWidthSectionContainer className="mt-0">
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
            className="text-white"
          />
        }
        overlayPosition="offsetTop"
      />

      <ContentWrapper>
        <FullWidthSectionContainer className="mt-20">
          <figure className="mb-6 flex h-[129px] w-full justify-center text-primary md:hidden">
            <DancingFigures />
          </figure>
          <Copy
            className="text-black"
            textSize="xl"
            fontDefaults={FONT_CONFIGS.desktop_h2_regular}
          >
            Wir sind Technologie-Experten und verstehen uns als integrativer
            Entwicklungs- & Beratungspartner in komplexen Softwareprojekten.{' '}
            <DancingFigures className="hidden h-16 px-4 py-0 align-middle text-primary md:inline" />
            Mit jahrelanger Expertise in den Bereichen Softwareentwicklung,
            Strategie sowie UX/UI Design.
          </Copy>
        </FullWidthSectionContainer>
        <CtaSection
          className="mt-16 lg:max-w-[25%]"
          contentText="Wir helfen Organisationen dabei, sich nachhaltig zu modernen digitalen Unternehmen zu wandeln. Immer mit dem Ziel, qualitativ hochwertige, skalierbare und durchdachte Software zu entwickeln, welche messbaren Mehrwert für unsere Kunden schafft."
          link={'/services'}
          linkLabel="Unsere Leistungen"
          linkVariant="secondary"
          fontDefaultsContent={FONT_CONFIGS.desktop_copy_small}
        />
      </ContentWrapper>

      <AnimatedTeaser
        className={clsx("mt-16", animatedTeaserInView ? "bg-primary" : "bg-background")}
        innerClassName={clsx(animatedTeaserInView ? "bg-white" : "bg-primary")}
        ref={animatedTeaserContainerRef}
      />

      <ContentWrapper
        useMaxWidth={false}
        className="w-full bg-primary pt-20 sm:pt-8 md:pt-0"
      >
        <Companies />
      </ContentWrapper>

      <ContentWrapper
        ref={cultureContainerRef}
        useMaxWidth={false}
        className="bg-primary pt-32 sm:pt-48 lg:flex lg:justify-between lg:gap-8 xl:pt-72"
        style={{ transition: '500ms' }}
      >
        <CtaSection
          className="basis-[37%] lg:grow-0"
          topLineText="CULTURE @ T1D"
          headlineText="Wir sind menschen&shy;zentriert."
          contentText='Wir glauben an Fortschritt durch Technologie, an Nachhaltigkeit durch Qualität sowie an die Prinzipien des agilen Manifests. Und vor allem glauben wir an die "Zielgruppe Mensch", die im Mittelpunkt unseres Handelns stehen muss.'
          linkLabel="Unsere Kultur"
          link="/culture"
          animate={!cultureContainerInView}
          headlineMarginBottomClass="mb-24"
          fontDefaultsHeadline={FONT_CONFIGS.desktop_h3}
          fontDefaultsContent={FONT_CONFIGS.desktop_copy_small}
        >
          <Image
            src="/images/icons/person-1.svg"
            alt="Person Icon"
            width={16}
            height={15}
            className="mr-2 brightness-0"
          />
        </CtaSection>
        <ImageMask ref={culturePictureRef} className="md:max-w-[50%]">
          <figure
            className=""
            style={{
              transition: '500ms',
              transform: culturePictureInView ? 'scale(1.1)' : '',
            }}
          >
            <Image src={SamuelPic} alt="Picture of a men posing" />
          </figure>
        </ImageMask>
      </ContentWrapper>

      <ContentWrapper
        ref={careerContainerRef}
        className={careerContainerInView ? 'bg-background' : 'bg-primary'}
        style={{ transition: '500ms' }}
        useMaxWidth={false}
      >
        <CenteredSectionContainer
          left={
            <ImageMask ref={careerPictureRef} className="justify-[right] flex">
              <figure
                style={{
                  transition: '500ms',
                  transform: careerPictureInView ? 'scale(1.1)' : '',
                }}
              >
                <Image src={JannikPic} alt="Picture of a men posing" />
              </figure>
            </ImageMask>
          }
          right={
            <CtaSection
              topLineText="CAREER @ T1D"
              headlineText="Nur wer Werte vertritt, kann Werte schaffen."
              contentText={
                'Team One Developers ist für uns nicht nur ein Name, sondern ein Versprechen: Das Versprechen den Unterschied zu machen, nicht nur Standard sondern die beste Wahl zu sein. Für unsere Partner und ganz besonders für unsere Kollegen'
              }
              linkLabel="Karriere"
              link="/career"
              linkVariant="secondary"
              fontDefaultsHeadline={FONT_CONFIGS.desktop_h3}
              fontDefaultsContent={FONT_CONFIGS.desktop_copy_small}
              headlineMarginBottomClass="mb-[2.875rem]"
            >
              <Image
                src="/images/icons/world-1.svg"
                alt="Person Icon"
                width={18}
                height={18}
                className="mr-2 brightness-0"
              />
            </CtaSection>
          }
          rightComponentClass="md:w-[65%]"
        />
      </ContentWrapper>
    </PageLayout>
  )
}

export default Home
